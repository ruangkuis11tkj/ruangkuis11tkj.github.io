    let questionsData = [];
    let currentQuestionIndex = 0;
    let studentData = {};
    let quizTimerInterval;
    let splitScreenCheckTimeout;
    let splitScreenCheckInterval;
    let quizActive = false;
    let proctorIncidents = [];
    const ANDROID_SPLIT_SCREEN_THRESHOLD = 0.85;
    const INITIAL_SCREEN_WIDTH = Math.max(window.screen.width, window.screen.availWidth);
    const INITIAL_SCREEN_HEIGHT = Math.max(window.screen.height, window.screen.availHeight);
    const CATEGORY_CONFIGURATION = 'Pemasangan dan Konfigurasi Perangkat Jaringan Komputer';
    const CATEGORY_QUESTION_COUNTS = {
        [CATEGORY_CONFIGURATION]: 30
    };

    function shuffledQuestions(questionBank) {
        const shuffled = questionBank.slice();
        for (let index = shuffled.length - 1; index > 0; index--) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
        }
        return shuffled;
    }

    document.getElementById('quizCategory').addEventListener('change', function() {
        const hint = document.getElementById('categoryHint');
        const questionCount = CATEGORY_QUESTION_COUNTS[this.value];
        const categoryTokenGroup = document.getElementById('categoryTokenGroup');
        const categoryTokenInput = document.getElementById('categoryToken');
        const requiresToken = Boolean(this.value);
        hint.innerText = questionCount
            ? `Soal tersedia: ${questionCount} pilihan ganda.`
            : 'Soal untuk kategori ini belum tersedia.';
        document.getElementById('questionCountText').innerText =
            questionCount ? `${questionCount} Soal Pilihan Ganda` : '30 Soal Pilihan Ganda';
        categoryTokenGroup.hidden = !requiresToken;
        categoryTokenInput.required = requiresToken;
        categoryTokenInput.value = '';
    });

    document.getElementById('toggleCategoryToken').addEventListener('click', function() {
        const tokenInput = document.getElementById('categoryToken');
        const isVisible = tokenInput.type === 'text';
        tokenInput.type = isVisible ? 'password' : 'text';
        this.innerText = isVisible ? 'Lihat' : 'Sembunyikan';
        this.setAttribute('aria-label', isVisible ? 'Lihat token' : 'Sembunyikan token');
        this.setAttribute('aria-pressed', String(!isVisible));
    });

    document.getElementById('identityForm').addEventListener('reset', function() {
        const tokenInput = document.getElementById('categoryToken');
        const toggleButton = document.getElementById('toggleCategoryToken');
        tokenInput.type = 'password';
        toggleButton.innerText = 'Lihat';
        toggleButton.setAttribute('aria-label', 'Lihat token');
        toggleButton.setAttribute('aria-pressed', 'false');
    });

    const container = document.getElementById('questionsContainer');
    function renderQuestions() {
        container.replaceChildren();
        questionsData.forEach((q, idx) => {
            const card = document.createElement('div');
            card.className = `question-card ${idx === 0 ? 'active' : ''}`;
            card.id = `qCard_${idx}`;

            let optionsHtml = '';
            const randomizedOptions = shuffledQuestions(q.opts.map((opt, optIdx) => {
                const originalLetter = opt.match(/^([A-E])[.)]\s*/i);
                return {
                    letter: originalLetter ? originalLetter[1].toUpperCase() : String.fromCharCode(65 + optIdx),
                    text: opt.replace(/^[A-E][.)]\s*/i, '')
                };
            }));
            randomizedOptions.forEach(opt => {
                optionsHtml += `
                    <label class="option-label">
                        <input type="radio" name="q${q.num}" value="${opt.letter}">
                        ${escapeHtml(opt.text)}
                    </label>
                `;
            });

            card.innerHTML = `
                <div class="question-title">${escapeHtml(q.q.replace(/^\s*\d+[\.)]\s*/, ''))}</div>
                ${optionsHtml}
            `;
            container.appendChild(card);
        });
    }

    function escapeHtml(value) {
        return value.replace(/[&<>"']/g, character => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[character]);
    }

    function normalizeCurrentQuestionIndex() {
        if (!questionsData.length) {
            currentQuestionIndex = 0;
            return;
        }
        currentQuestionIndex = Math.min(Math.max(currentQuestionIndex, 0), questionsData.length - 1);
    }

    // Update Navigasi UI
    function updateQuizUI() {
        normalizeCurrentQuestionIndex();
        const total = questionsData.length;

        document.querySelectorAll('.question-card').forEach((card, idx) => {
            card.classList.toggle('active', idx === currentQuestionIndex);
        });

        if (total === 0) {
            document.getElementById('progressIndicator').innerText = 'Soal 0 dari 0';
            document.getElementById('progressBar').style.width = '0%';
            document.getElementById('btnPrev').disabled = true;
            document.getElementById('btnNext').style.display = 'flex';
            document.getElementById('btnSubmit').style.display = 'none';
            return;
        }

        document.getElementById('progressIndicator').innerText = `Soal ${currentQuestionIndex + 1} dari ${total}`;
        const pct = ((currentQuestionIndex + 1) / total) * 100;
        document.getElementById('progressBar').style.width = `${pct}%`;

        document.getElementById('btnPrev').disabled = (currentQuestionIndex === 0);

        if (currentQuestionIndex === total - 1) {
            document.getElementById('btnNext').style.display = 'none';
            document.getElementById('btnSubmit').style.display = 'flex';
        } else {
            document.getElementById('btnNext').style.display = 'flex';
            document.getElementById('btnSubmit').style.display = 'none';
        }
    }

    function changeQuestion(step) {
        if (!questionsData.length) {
            return;
        }

        currentQuestionIndex = Math.min(Math.max(currentQuestionIndex + step, 0), questionsData.length - 1);
        updateQuizUI();
    }

    function startQuizTimer(deadlineAt) {
        const timerElement = document.getElementById('quizTimer');

        function updateTimer() {
            const remainingSeconds = Math.max(0, Math.ceil((deadlineAt - Date.now()) / 1000));
            const minutes = Math.floor(remainingSeconds / 60);
            const seconds = remainingSeconds % 60;
            timerElement.innerText = `Waktu tersisa: ${minutes}:${String(seconds).padStart(2, '0')}`;
            timerElement.classList.toggle('timer-warning', remainingSeconds <= 5 * 60);

            if (remainingSeconds === 0) {
                clearInterval(quizTimerInterval);
                document.getElementById('quizForm').requestSubmit();
            }
        }

        updateTimer();
        quizTimerInterval = setInterval(updateTimer, 1000);
    }

    function recordProctorIncident(type) {
        proctorIncidents.push({
            type: type,
            timestamp: new Date().toISOString()
        });
        document.getElementById('proctorStatus').innerText =
            `Pemantauan browser aktif · Pelanggaran: ${proctorIncidents.length}`;
    }

    function resetQuizForFocusLoss(message, incidentType) {
        if (!quizActive) {
            return;
        }

        recordProctorIncident(incidentType);
        quizActive = false;
        clearInterval(quizTimerInterval);
        clearInterval(splitScreenCheckInterval);
        clearTimeout(splitScreenCheckTimeout);
        exitQuizFullscreen();
        document.getElementById('quizForm').reset();
        document.getElementById('identityForm').reset();
        document.getElementById('quizSection').style.display = 'none';
        document.getElementById('resultView').style.display = 'none';
        document.getElementById('identityForm').style.display = 'block';
        document.getElementById('quizResetNotice').innerText =
            `${message} Pelanggaran tercatat: ${proctorIncidents.length}.`;
        document.getElementById('quizResetNotice').hidden = false;

        currentQuestionIndex = 0;
        questionsData = [];
        studentData = {};
        const timerElement = document.getElementById('quizTimer');
        timerElement.innerText = 'Waktu tersisa: 60:00';
        timerElement.classList.remove('timer-warning');
        document.getElementById('progressBar').style.width = '0%';
        updateQuizUI();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async function enterQuizFullscreen() {
        if (document.fullscreenElement) {
            return;
        }
        if (typeof document.documentElement.requestFullscreen !== 'function') {
            throw new Error('Browser ini tidak mendukung mode layar penuh. Gunakan browser yang mendukung fullscreen untuk mengerjakan kuis.');
        }

        try {
            await document.documentElement.requestFullscreen();
        } catch {
            throw new Error('Mode layar penuh wajib diaktifkan untuk memulai kuis. Izinkan fullscreen lalu coba kembali.');
        }
    }

    function exitQuizFullscreen() {
        if (document.fullscreenElement && typeof document.exitFullscreen === 'function') {
            document.exitFullscreen().catch(error => {
                console.error('Gagal keluar dari mode layar penuh.', error);
            });
        }
    }

    document.addEventListener('fullscreenchange', function() {
        if (quizActive && !document.fullscreenElement) {
            resetQuizForFocusLoss(
                'Kuis direset karena Anda keluar dari mode layar penuh. Silakan mulai kembali.',
                'fullscreen-exit'
            );
        }
    });

    function isAndroidSplitScreen() {
        const userAgentPlatform = navigator.userAgentData && navigator.userAgentData.platform;
        if (userAgentPlatform !== 'Android' && !/Android/i.test(navigator.userAgent)) {
            return false;
        }

        const isSameOrientation =
            (window.innerWidth >= window.innerHeight) ===
            (INITIAL_SCREEN_WIDTH >= INITIAL_SCREEN_HEIGHT);
        const baselineWidth = isSameOrientation ? INITIAL_SCREEN_WIDTH : INITIAL_SCREEN_HEIGHT;
        const baselineHeight = isSameOrientation ? INITIAL_SCREEN_HEIGHT : INITIAL_SCREEN_WIDTH;
        const screenWidth = Math.max(window.screen.width, window.screen.availWidth, baselineWidth);
        const screenHeight = Math.max(window.screen.height, window.screen.availHeight, baselineHeight);
        const viewportWidth = window.visualViewport
            ? Math.min(window.innerWidth, window.visualViewport.width)
            : window.innerWidth;
        const viewportHeight = window.visualViewport
            ? Math.min(window.innerHeight, window.visualViewport.height)
            : window.innerHeight;
        const widthRatio = viewportWidth / screenWidth;
        const heightRatio = viewportHeight / screenHeight;

        return (
            screenWidth > 0 &&
            screenHeight > 0 &&
            (widthRatio < ANDROID_SPLIT_SCREEN_THRESHOLD ||
                heightRatio < ANDROID_SPLIT_SCREEN_THRESHOLD)
        );
    }

    function resetQuizIfAndroidSplitScreen() {
        if (quizActive && isAndroidSplitScreen()) {
            resetQuizForFocusLoss(
                'Kuis direset karena mode layar belah terdeteksi. Tutup layar belah lalu mulai kembali.',
                'split-screen'
            );
        }
    }

    function scheduleAndroidSplitScreenCheck() {
        if (!quizActive) {
            return;
        }

        clearTimeout(splitScreenCheckTimeout);
        splitScreenCheckTimeout = setTimeout(resetQuizIfAndroidSplitScreen, 100);
    }

    function startAndroidSplitScreenMonitoring() {
        clearInterval(splitScreenCheckInterval);
        splitScreenCheckInterval = setInterval(resetQuizIfAndroidSplitScreen, 500);
    }

    window.addEventListener('resize', scheduleAndroidSplitScreenCheck);
    window.addEventListener('orientationchange', scheduleAndroidSplitScreenCheck);
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', scheduleAndroidSplitScreenCheck);
    }

    document.addEventListener('visibilitychange', function() {
        if (quizActive && document.hidden) {
            resetQuizForFocusLoss(
                'Kuis direset karena Anda berpindah tab atau aplikasi. Silakan isi identitas untuk memulai kembali.',
                'tab-hidden'
            );
        }
    });

    document.addEventListener('freeze', function() {
        if (quizActive) {
            resetQuizForFocusLoss(
                'Kuis direset karena browser menangguhkan halaman saat aplikasi lain dibuka. Silakan isi identitas untuk memulai kembali.',
                'tab-hidden'
            );
        }
    });

    window.addEventListener('pagehide', function() {
        if (quizActive) {
            resetQuizForFocusLoss(
                'Kuis direset karena halaman browser ditinggalkan. Silakan isi identitas untuk memulai kembali.',
                'tab-hidden'
            );
        }
    });

    window.addEventListener('blur', function() {
        if (quizActive) {
            resetQuizForFocusLoss(
                'Kuis direset karena browser melaporkan jendela kuis kehilangan fokus. Overlay yang tidak mengubah fokus mungkin tidak terdeteksi. Silakan isi identitas untuk memulai kembali.',
                'window-blur'
            );
        }
    });

    function blockQuizContentAction(event, incidentType) {
        if (!quizActive) {
            return;
        }

        event.preventDefault();
        recordProctorIncident(incidentType);
    }

    const quizSection = document.getElementById('quizSection');
    ['copy', 'cut', 'contextmenu', 'dragstart', 'selectstart'].forEach(eventType => {
        quizSection.addEventListener(eventType, event => {
            blockQuizContentAction(event, 'copy-attempt');
        }, true);
    });

    document.addEventListener('keydown', function(event) {
        if (!quizActive) {
            return;
        }

        const key = event.key.toLowerCase();
        const usesCommandKey = event.ctrlKey || event.metaKey;
        const blockedShortcut = (
            (usesCommandKey && ['a', 'c', 'x', 'p', 'r', 's', 'u'].includes(key)) ||
            (usesCommandKey && event.shiftKey && ['c', 'i', 'j'].includes(key)) ||
            ['F5', 'F12'].includes(event.key)
        );

        if (blockedShortcut) {
            blockQuizContentAction(event, 'restricted-shortcut');
        }
    });

    // Form Identitas Submit
    document.getElementById('identityForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        document.getElementById('quizResetNotice').hidden = true;

        const selectedCategory = document.getElementById('quizCategory').value;
        if (!CATEGORY_QUESTION_COUNTS[selectedCategory]) {
            document.getElementById('quizResetNotice').innerText = 'Soal untuk kategori ini belum tersedia. Silakan pilih kategori lain.';
            document.getElementById('quizResetNotice').hidden = false;
            return;
        }

        const submitButton = document.querySelector('#identityForm button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerText = 'Memuat soal...';

        try {
            await enterQuizFullscreen();
            const categoryToken = document.getElementById('categoryToken').value.trim();
            const response = await startQuizAttempt(selectedCategory, categoryToken);
            if (!Array.isArray(response.questions) || response.questions.length !== CATEGORY_QUESTION_COUNTS[selectedCategory]) {
                throw new Error('Data soal dari server tidak lengkap.');
            }
            if (typeof response.attemptId !== 'string' || !Number.isFinite(response.deadlineAt)) {
                throw new Error('Data percobaan ujian dari server tidak lengkap.');
            }

            questionsData = response.questions;
            currentQuestionIndex = 0;
            renderQuestions();

            studentData = {
                nama: document.getElementById('studentName').value,
                kelas: document.getElementById('studentClass').value,
                kategori: selectedCategory,
                attemptId: response.attemptId,
                deadlineAt: response.deadlineAt
            };
            document.getElementById('subjectLabel').innerText = `Kategori: ${selectedCategory}`;
            document.getElementById('proctorStatus').innerText =
                `Pemantauan browser aktif · Pelanggaran: ${proctorIncidents.length}`;

            quizActive = true;
            document.getElementById('identityForm').style.display = 'none';
            document.getElementById('quizSection').style.display = 'block';
            startAndroidSplitScreenMonitoring();
            if (isAndroidSplitScreen()) {
                resetQuizIfAndroidSplitScreen();
                return;
            }
            updateQuizUI();
            startQuizTimer(studentData.deadlineAt);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            exitQuizFullscreen();
            document.getElementById('quizResetNotice').innerText = error.message || 'Gagal mengambil soal dari server.';
            document.getElementById('quizResetNotice').hidden = false;
            document.getElementById('categoryToken').focus();
        } finally {
            submitButton.disabled = false;
            submitButton.innerText = 'Mulai Mengerjakan ➔';
        }
    });

    // Submit Kuis & Tampilkan Hasil Ringkas
    document.getElementById('quizForm').addEventListener('submit', function(e) {
        e.preventDefault();
        quizActive = false;
        clearInterval(quizTimerInterval);
        clearInterval(splitScreenCheckInterval);
        clearTimeout(splitScreenCheckTimeout);
        exitQuizFullscreen();

        const answers = {};

        questionsData.forEach(q => {
            const selected = document.querySelector(`input[name="q${q.num}"]:checked`);
            const userAnsLetter = selected ? selected.value : '-';
            answers[String(q.num)] = userAnsLetter;
        });

        document.getElementById('finalScoreVal').innerText = '...';
        document.getElementById('correctRatioVal').innerText = `... / ${questionsData.length}`;
        document.getElementById('quizSection').style.display = 'none';
        document.getElementById('resultView').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const payload = {
            nama: studentData.nama,
            kelas: studentData.kelas,
            kategori: studentData.kategori,
            attemptId: studentData.attemptId,
            requestId: createQuizRequestId(),
            answers: answers,
            proctorIncidents: proctorIncidents,
        };

        document.getElementById('statusMessage').innerText = 'Mengirim jawaban dan menunggu penilaian server...';
        sendQuizResultToGoogleSheets(payload)
        .then(result => {
            document.getElementById('finalScoreVal').innerText = result.nilai;
            document.getElementById('correctRatioVal').innerText = `${result.benar} / ${result.totalSoal}`;
            document.getElementById('statusMessage').innerText = 'Nilai dihitung di server dan hasil berhasil disimpan ke Google Spreadsheet.';
        })
        .catch(err => {
            document.getElementById('finalScoreVal').innerText = '—';
            document.getElementById('correctRatioVal').innerText = `— / ${questionsData.length}`;
            document.getElementById('statusMessage').innerText = `Gagal mengirim atau menilai kuis: ${err.message || err}`;
            document.getElementById('statusMessage').style.color = "#b91c1c";
        });
    });

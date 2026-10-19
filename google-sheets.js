const GOOGLE_SHEETS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyh1Kt0IpGz98Otnp8LWCcAokWWbD1RCjIjMVUuQ8kFaf_aVFpFnupPgUNR3cm6z60-/exec";

function requestQuizApi(parameters, timeoutMs = 10000) {
    return new Promise((resolve, reject) => {
        const callbackName = `quizApiCallback_${Date.now()}_${Math.floor(Math.random() * 1000000)}`;
        const script = document.createElement('script');
        const query = new URLSearchParams({ ...parameters, callback: callbackName });
        const timeout = window.setTimeout(() => {
            cleanup();
            reject(new Error('Server tidak merespons. Periksa URL deployment Apps Script.'));
        }, timeoutMs);

        function cleanup() {
            window.clearTimeout(timeout);
            delete window[callbackName];
            script.remove();
        }

        window[callbackName] = response => {
            cleanup();
            resolve(response);
        };
        script.onerror = () => {
            cleanup();
            reject(new Error('Tidak dapat menghubungi server Apps Script.'));
        };
        script.src = `${GOOGLE_SHEETS_SCRIPT_URL}?${query.toString()}`;
        document.head.appendChild(script);
    });
}

async function startQuizAttempt(kategori, token) {
    const response = await requestQuizApi({
        action: 'start',
        kategori,
        token
    });
    if (!response || !response.ok) {
        const message = response && response.message;
        if (message === 'Aksi API tidak dikenal.') {
            throw new Error('API Apps Script masih memakai versi lama. Deploy ulang Code.gs sebagai versi baru Web App, lalu muat ulang halaman.');
        }
        throw new Error(message || 'Gagal memulai percobaan ujian.');
    }
    return response;
}

function createQuizRequestId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
        return window.crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, character => {
        const random = Math.floor(Math.random() * 16);
        return (character === 'x' ? random : (random & 0x3) | 0x8).toString(16);
    });
}

function sendQuizResultToGoogleSheets(payload) {
    return fetch(GOOGLE_SHEETS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(payload)
    }).then(() => waitForQuizResult(payload.requestId));
}

function waitForQuizResult(requestId) {
    const deadline = Date.now() + 30000;

    function poll() {
        return requestQuizApi({
            action: 'result',
            requestId
        }, 5000).then(response => {
            if (response && response.ok) {
                return response;
            }
            if (!response || !response.pending) {
                throw new Error(response && response.message ? response.message : 'Server gagal memproses hasil kuis.');
            }
            if (Date.now() >= deadline) {
                throw new Error('Waktu tunggu penilaian habis. Hubungi guru untuk memastikan hasil tersimpan.');
            }
            return new Promise(resolve => window.setTimeout(resolve, 800)).then(poll);
        });
    }

    return poll();
}

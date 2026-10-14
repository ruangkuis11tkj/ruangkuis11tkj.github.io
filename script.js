    const configurationQuestionsData = [
        { "num": 1, "q": "Protokol TCP/IP pertama kali banyak digunakan pada sistem operasi...", "opts": ["A. Windows 95/98", "B. Unix atau turunannya", "C. Mac OS X", "D. Android", "E. Linux Ubuntu"], "ans": "B" },
        { "num": 2, "q": "Sistem operasi modern di bawah ini yang tidak menyertakan protokol TCP/IP sebagai bagian integralnya adalah...", "opts": ["A. Windows 2000/XP", "B. OS/2", "C. OS/400", "D. Unix varian 4.2BSD", "E. Semua jawaban di atas salah (semuanya menyertakan TCP/IP)"], "ans": "E" },
        { "num": 3, "q": "Peralatan perangkat keras yang digunakan komputer untuk melakukan komunikasi data melalui saluran fisik disebut...", "opts": ["A. Harddisk Internal", "B. Network Interface Card (NIC) atau LAN card", "C. Power Supply", "D. Processor", "E. Motherboard"], "ans": "B" },
        { "num": 4, "q": "Sekumpulan aturan yang diciptakan untuk menyelesaikan masalah komunikasi data antar komputer disebut sebagai...", "opts": ["A. Topologi jaringan", "B. Protokol komunikasi data", "C. Sistem operasi jaringan", "D. Arsitektur hardware", "E. Manajemen memori"], "ans": "B" },
        { "num": 5, "q": "Mengapa desain protokol TCP/IP disebut bersifat modular?", "opts": ["A. Karena terdiri dari sekumpulan protokol yang masing-masing bertanggung jawab pada bagian tertentu", "B. Karena hanya bisa digunakan pada satu jenis komputer saja", "C. Karena ukurannya sangat besar dan monolitik", "D. Karena menggabungkan seluruh fungsi jaringan ke dalam satu lapisan tunggal", "E. Karena tidak memerlukan software pengatur"], "ans": "A" },
        { "num": 6, "q": "Keuntungan utama dari prinsip modular pada TCP/IP adalah...", "opts": ["A. Protokol menjadi kaku dan sulit diubah", "B. Tugas masing-masing protokol menjadi jelas dan sederhana", "C. Komputer harus mengetahui seluruh detail kerja protokol lain", "D. Memperlambat proses pengiriman data", "E. Membatasi jenis media transmisi yang digunakan"], "ans": "B" },
        { "num": 7, "q": "Arsitektur jaringan standar menggunakan protokol TCP/IP pada dasarnya terdiri dari berapa lapis (layer) utama yang diimplementasikan dalam bentuk software?", "opts": ["A. 2 lapis", "B. 3 lapis", "C. 4 lapis", "D. 5 lapis", "E. 7 lapis"], "ans": "C" },
        { "num": 8, "q": "Lapisan fisik (physical layer) dalam arsitektur TCP/IP sering dianggap sebagai lapisan ke...", "opts": ["A. Satu", "B. Dua", "C. Tiga", "D. Empat", "E. Lima"], "ans": "A" },
        { "num": 9, "q": "Perangkat atau media berikut yang termasuk ke dalam lapisan fisik (physical layer) adalah...", "opts": ["A. Protokol HTTP", "B. Kabel LAN, modem, dan radio", "C. Alamat IP dan ARP", "D. Port TCP dan UDP", "E. Aplikasi Web browser"], "ans": "B" },
        { "num": 10, "q": "Tugas utama dari protokol pada lapisan fisik (physical layer) adalah...", "opts": ["A. Mengatur nomor urut paket data", "B. Menerjemahkan sinyal listrik menjadi data digital yang dimengerti komputer", "C. Menentukan port aplikasi tujuan", "D. Mengatur rute antar subnetwork", "E. Memotong data menjadi fragmen kecil"], "ans": "B" },
        { "num": 11, "q": "Proses pembungkusan data dengan tambahan header oleh setiap lapisan saat data akan dikirim disebut...", "opts": ["A. Enkapsulasi data", "B. Dekripsi data", "C. Kompresi data", "D. Fragmentasi data", "E. Modulasi data"], "ans": "A" },
        { "num": 12, "q": "Apa yang dilakukan oleh setiap lapisan penerima ketika menerima data yang dikirimkan?", "opts": ["A. Menambahkan lebih banyak header baru", "B. Membuang header data sesuai lapisannya jika data dianggap valid", "C. Mengabaikan data mentah", "D. Mengubah data digital menjadi sinyal analog", "E. Menghapus seluruh isi pesan"], "ans": "B" },
        { "num": 13, "q": "Lapisan manakah dalam TCP/IP yang mengatur agar alamat mesin sumber dan tujuan benar serta mengidentifikasi datagram agar mencapai komputer yang tepat?", "opts": ["A. Application Layer", "B. Transport Layer", "C. Network Layer", "D. Link Layer", "E. Physical Layer"], "ans": "C" },
        { "num": 14, "q": "Manakah pernyataan yang benar mengenai lapisan network (network layer)?", "opts": ["A. Menjamin 100% datagram pasti sampai di tujuan dengan selamat", "B. Mengontrol port sumber dan port tujuan secara spesifik", "C. Sama sekali tidak menjamin bahwa datagram yang dikirim akan diterima sampai di tujuan dengan selamat", "D. Mengatur enkapsulasi frame Ethernet secara langsung di LAN card", "E. Bertanggung jawab penuh atas tampilan antarmuka aplikasi"], "ans": "C" },
        { "num": 15, "q": "Lapisan transport memiliki fungsi utama untuk...", "opts": ["A. Mengontrol port sumber, port tujuan, dan nomor urut paket", "B. Menerjemahkan sinyal listrik dari kabel LAN", "C. Mengatur pengiriman gelombang radio antenna", "D. Mengonversi protokol aplikasi antar jaringan", "E. Menyediakan media fisik jaringan kabel"], "ans": "A" },
        { "num": 16, "q": "Bagaimana cara lapisan transport menangani file yang berukuran besar?", "opts": ["A. Mengirimkannya sekaligus tanpa dipecah", "B. Mengirim file dalam potongan paket kecil yang kemudian digabungkan kembali di penerima", "C. Mengompres file menjadi bentuk zip di dalam kabel", "D. Menghapus bagian file yang dianggap tidak penting", "E. Mengubah file menjadi sinyal analog"], "ans": "B" },
        { "num": 17, "q": "Jika terjadi kerusakan atau kesalahan paket di tengah jalan, lapisan manakah yang bertugas berusaha memperbaikinya?", "opts": ["A. Link Layer", "B. Network Layer", "C. Physical Layer", "D. Transport Layer", "E. Application Layer"], "ans": "D" },
        { "num": 18, "q": "Di mana lapisan link (link layer) biasanya diimplementasikan?", "opts": ["A. Di dalam sistem operasi pusat", "B. Di dalam firmware di LAN card", "C. Di dalam aplikasi web browser", "D. Di dalam program utilitas ping", "E. Di dalam server database pusat"], "ans": "B" },
        { "num": 19, "q": "Lapisan link bertanggung jawab untuk menentukan bagaimana frame data dikirim, termasuk penanganan pemotongan paket berdasarkan...", "opts": ["A. Maximum Transmission Unit (MTU)", "B. Internet Protocol (IP) address", "C. Port number", "D. Routing table", "E. Bandwidth internet"], "ans": "A" },
        { "num": 20, "q": "Alamat apa yang digunakan oleh lapisan link untuk memastikan frame dikirim ke komputer sumber dan komputer selanjutnya (next hop)?", "opts": ["A. Alamat IP (IP Address)", "B. Alamat Ethernet atau MAC Address", "C. Nomor Port (Port Number)", "D. URL Domain", "E. Hostname komputer"], "ans": "B" },
        { "num": 21, "q": "Aplikasi ping yang biasa digunakan untuk mengecek sambungan antar komputer berjalan di atas protokol transport...", "opts": ["A. TCP", "B. UDP", "C. ICMP", "D. HTTP", "E. FTP"], "ans": "C" },
        { "num": 22, "q": "Protokol TCP ditumpangkan di atas protokol IP untuk aplikasi web seperti HTTP karena membutuhkan sambungan yang...", "opts": ["A. Cepat tanpa jaminan (connectionless)", "B. Reliable (andal)", "C. Berbasis gelombang radio", "D. Hanya untuk jaringan lokal kecil", "E. Mengabaikan kesalahan paket"], "ans": "B" },
        { "num": 23, "q": "Untuk aplikasi pengiriman video atau suara (real-time) yang lebih mengutamakan kecepatan daripada keandalan ketat, protokol transport yang digunakan adalah...", "opts": ["A. TCP", "B. UDP", "C. HTTP", "D. FTP", "E. SSH"], "ans": "B" },
        { "num": 24, "q": "Alat yang bertugas menyambungkan dua subnetwork (jaringan lokal) di mana dalam jaringan LAN biasanya disebut sebagai router, dalam terminologi OSI dikenal sebagai...", "opts": ["A. Intermediate system", "B. Application gateway", "C. Repeater aktif", "D. Hub sentral", "E. Switch unmanaged"], "ans": "A" },
        { "num": 25, "q": "Apa fungsi utama dari sebuah gateway dalam terminologi OSI?", "opts": ["A. Menerjemahkan sinyal kabel LAN", "B. Melakukan konversi protokol antara dua jaringan atau aplikasi", "C. Memperkuat sinyal listrik jarak jauh", "D. Menggantikan fungsi RAM komputer", "E. Menyimpan data cache web"], "ans": "B" }
    ];
    const securityQuestionsData = [
        {
            "num": 1,
            "q": "Di dalam segitiga fondasi keamanan informasi (CIA Triad), aspek yang menjamin bahwa data atau informasi hanya dapat diakses oleh pihak yang memiliki hak akses sah dan terotorisasi dinamakan...",
            "opts": ["A. Confidentiality (Kerahasiaan)", "B. Integrity (Integritas)", "C. Availability (Ketersediaan)", "D. Non-Repudiation (Nir-penyangkalan)", "E. Authentication (Autentikasi)"],
            "ans": "A"
        },
        {
            "num": 2,
            "q": "Seorang penyerang membanjiri server target dengan ribuan paket TCP SYN tanpa pernah menyelesaikan jabat tangan tiga arah (3-Way Handshake). Akibatnya, memori server habis dan layanan menolak pengguna sah. Jenis serangan keamanan jaringan ini dinamakan...",
            "opts": ["A. Man-in-the-Middle (MitM) Attack", "B. SYN Flood Denial of Service (DoS)", "C. Cross-Site Scripting (XSS)", "D. ARP Poisoning Attack", "E. SQL Injection Attack"],
            "ans": "B"
        },
        {
            "num": 3,
            "q": "Dalam sebuah jaringan LAN, penyerang mengirimkan balasan ARP palsu (Gratuitous ARP) ke switch dan router untuk menghubungkan alamat MAC miliknya dengan IP Default Gateway. Teknik peretasan ini bertujuan untuk melakukan penyadapan data yang dikenal dengan...",
            "opts": ["A. DNS Cache Poisoning", "B. ARP Spoofing / Man-in-the-Middle", "C. Port Scanning Attack", "D. IP Fragmentation Attack", "E. Brute Force Password Cracking"],
            "ans": "B"
        },
        {
            "num": 4,
            "q": "Sebuah perusahaan mendapati seluruh file dokumen di server mereka terenkripsi secara otomatis dan berubah ekstensi menjadi `.locked`. Penyerang meninggalkan pesan meminta tebusan uang dalam bentuk aset kripto agar kunci dekripsi diberikan. Jenis malware berbahaya tersebut dinamakan...",
            "opts": ["A. Keylogger", "B. Trojan Horse", "C. Ransomware", "D. Adware", "E. Rootkit"],
            "ans": "C"
        },
        {
            "num": 5,
            "q": "Di RouterOS MikroTik, administrator ingin membuat rule Firewall Filter untuk menyaring paket data yang melintas melewati router dari jaringan LAN (`ether2`) menuju ke internet (`ether1`). Chain firewall yang tepat digunakan pada kondisi tersebut adalah...",
            "opts": ["A. `chain=input`", "B. `chain=forward`", "C. `chain=output`", "D. `chain=srcnat`", "E. `chain=dstnat`"],
            "ans": "B"
        },
        {
            "num": 6,
            "q": "Protokol komunikasi web aman yang mengombinasikan HTTP dengan lapisan enkripsi TLS/SSL untuk mengamankan data transaksi sensitif seperti password dan nomor kartu kredit menggunakan port bawaan nomor...",
            "opts": ["A. Port 21 (FTP)", "B. Port 22 (SSH)", "C. Port 80 (HTTP)", "D. Port 443 (HTTPS)", "E. Port 8080 (Proxy)"],
            "ans": "D"
        },
        {
            "num": 7,
            "q": "Teknik pengamanan jaringan di mana port administratif router (seperti Winbox/SSH) secara default ditutup total, dan hanya akan terbuka sementara jika pengguna melakukan ketukan lalu lintas paket ke urutan port tertentu secara berurutan dinamakan...",
            "opts": ["A. Port Forwarding", "B. Port Knocking", "C. Port Mirroring", "D. Port Security", "E. Port Redirection"],
            "ans": "B"
        },
        {
            "num": 8,
            "q": "Perbedaan mendasar antara sistem Intrusion Detection System (IDS) dan Intrusion Prevention System (IPS) dalam menjaga keamanan jaringan adalah...",
            "opts": ["A. IDS berfungsi memblokir serangan secara otomatis, sedangkan IPS hanya memberikan peringatan log", "B. IDS hanya memantau dan memberikan peringatan (alert), sedangkan IPS dapat memantau sekaligus mengambil tindakan memblokir serangan secara real-time", "C. IDS bekerja pada Layer 7 OSI, sedangkan IPS hanya bekerja pada Layer 2 OSI", "D. IDS membutuhkan perangkat keras dedicated, sedangkan IPS merupakan software gratis", "E. IDS digunakan untuk wireless, sedangkan IPS hanya untuk kabel UTP"],
            "ans": "B"
        },
        {
            "num": 9,
            "q": "Untuk mengamankan lalu lintas data antar kantor cabang melalui jaringan publik internet, dibangun jalur privat virtual (VPN) yang menggabungkan L2TP dengan protokol enkripsi Layer 3 standar industri yaitu...",
            "opts": ["A. PPTP dengan MPPE", "B. IPsec dengan Encapsulating Security Payload (ESP)", "C. SSL/TLS dengan OpenVPN", "D. GRE Tunnel tanpa sandi", "E. SSTP dengan Sertifikat HTTP"],
            "ans": "B"
        },
        {
            "num": 10,
            "q": "Zona jaringan terisolasi yang dibuat khusus untuk menempatkan server publik (seperti Web Server, Mail Server, dan DNS Server) di antara jaringan internal LAN dan internet guna mencegah peretasan langsung ke LAN dinamakan...",
            "opts": ["A. Intranet Zone", "B. Demilitarized Zone (DMZ)", "C. Virtual Private Network (VPN)", "D. Extranet Zone", "E. Local Loopback Zone"],
            "ans": "B"
        },
        {
            "num": 11,
            "q": "Seorang Network Auditor menggunakan alat `Nmap` dengan perintah `nmap -sS -p 1-1000 192.168.1.1`. Opsi `-sS` pada perintah tersebut menandakan teknik pemindaian port tipe...",
            "opts": ["A. UDP Scan", "B. TCP Connect Scan Full", "C. TCP SYN Stealth Scan (Half-Open Scan)", "D. FIN Scan", "E. Ping Sweep Scan"],
            "ans": "C"
        },
        {
            "num": 12,
            "q": "Ketika melakukan analisis lalu lintas jaringan menggunakan Wireshark, administrator dapat membaca username dan password akun pengguna secara jelas (plain text). Hal ini terjadi karena aplikasi remote management tersebut menggunakan protokol tidak terenkripsi yaitu...",
            "opts": ["A. SSH (Secure Shell) - Port 22", "B. Telnet - Port 23", "C. HTTPS - Port 443", "D. SFTP - Port 115", "E. SNMPv3 - Port 161"],
            "ans": "B"
        },
        {
            "num": 13,
            "q": "Seorang karyawan menerima email yang seolah-olah berasal dari pihak bank resmi, meminta karyawan tersebut mengeklik tautan dan memasukkan ulang kata sandi rekening perusahaan pada halaman web tiruan. Bentuk serangan rekayasa sosial ini dinamakan...",
            "opts": ["A. Phishing / Spear Phishing", "B. SQL Injection", "C. Cross-Site Request Forgery (CSRF)", "D. Buffer Overflow", "E. Man-in-the-Browser"],
            "ans": "A"
        },
        {
            "num": 14,
            "q": "Proses matematis satu arah (one-way function) yang mengodekan data digital menjadi string berpanjang tetap (seperti SHA-256) untuk memverifikasi bahwa berkas/data tidak mengalami perubahan atau manipulasi dinamakan...",
            "opts": ["A. Asymmetric Encryption", "B. Symmetric Encryption", "C. Hashing / Message Digest", "D. Steganography", "E. Digital Watermarking"],
            "ans": "C"
        },
        {
            "num": 15,
            "q": "Arsitektur keamanan jaringan yang menerapkan server autentikasi terpusat untuk memverifikasi hak akses pengguna sebelum terhubung ke router atau switch dinamakan sistem AAA. Kepanjangan dari AAA tersebut adalah...",
            "opts": ["A. Access, Authority, Auditing", "B. Authentication, Authorization, Accounting", "C. Algoritma, Asimetris, Autentikasi", "D. Association, Allocation, Administration", "E. Application, Adaption, Assessment"],
            "ans": "B"
        },
        {
            "num": 16,
            "q": "Di Switch Cisco Catalyst, administrator mengaktifkan fitur Port Security dengan perintah `switchport port-security mac-address sticky`. Makna dari opsi `sticky` tersebut adalah...",
            "opts": ["A. MAC Address perangkat harus dimasukkan secara manual satu per satu ke dalam file konfigurasi", "B. Switch akan mempelajari MAC Address perangkat yang terhubung secara otomatis dan menyimpannya ke dalam running-configuration", "C. Port switch akan secara otomatis menolak seluruh jenis MAC Address", "D. MAC Address akan diacak setiap kali switch di-reboot", "E. Port switch hanya dapat digunakan oleh MAC Address komputer server"],
            "ans": "B"
        },
        {
            "num": 17,
            "q": "Untuk menghentikan serangan percobaan login paksa (Brute Force Attack) pada layanan SSH MikroTik, langkah mitigasi pada Firewall Filter yang paling efektif adalah...",
            "opts": ["A. Membuka port SSH ke semua IP Address di internet", "B. Menerapkan fitur Connection Rate Limiting dan menambahkan IP penyerang berulang ke Address List secara otomatis untuk di-DROP", "C. Mengubah kata sandi router menjadi angka 123456", "D. Mematikan fitur NAT Masquerade pada interface WAN", "E. Menghapus seluruh log aktivitas router"],
            "ans": "B"
        },
        {
            "num": 18,
            "q": "Standar keamanan jaringan nirkabel (Wi-Fi) terbaru yang diperkenalkan Wi-Fi Alliance untuk menggantikan WPA2 dengan menggunakan protokol berjabat tangan Simultaneous Authentication of Equals (SAE) guna mencegah serangan offline dictionary attack dinamakan...",
            "opts": ["A. WEP (Wired Equivalent Privacy)", "B. WPA1-TKIP", "C. WPA3", "D. MAC Address Filtering", "E. WPS Personal"],
            "ans": "C"
        },
        {
            "num": 19,
            "q": "Pada tahapan pelaksanaan Penetration Testing (Pen-Test) sesuai standar etika peretasan, langkah awal yang bertujuan untuk mengumpulkan informasi sebanyak-banyaknya mengenai target (seperti IP Range, Domain, DNS, dan karyawan) tanpa melakukan serangan fisik dinamakan...",
            "opts": ["A. Exploitation Phase", "B. Footprinting / Reconnaissance", "C. Maintaining Access", "D. Clearing Tracks", "E. Covering Evidence"],
            "ans": "B"
        },
        {
            "num": 20,
            "q": "Serangan pada aplikasi web di mana penyerang memasukkan perintah sintaks basis data ke dalam form input (seperti kolom login) untuk memanipulasi baris query SQL basis data backend dinamakan...",
            "opts": ["A. SQL Injection (SQLi)", "B. Denial of Service (DoS)", "C. Ping of Death", "D. Session Hijacking", "E. Malvertising"],
            "ans": "A"
        },
        {
            "num": 21,
            "q": "Di RouterOS MikroTik Firewall Filter, parameter Connection State yang menandakan paket data merupakan bagian dari koneksi balasan yang sah yang telah dikenali oleh router dari transaksi sebelumnya adalah...",
            "opts": ["A. `connection-state=new`", "B. `connection-state=established`", "C. `connection-state=invalid`", "D. `connection-state=untracked`", "E. `connection-state=syn-sent`"],
            "ans": "B"
        },
        {
            "num": 22,
            "q": "Dalam Infrastruktur Kunci Publik (Public Key Infrastructure / PKI), entitas terpercaya yang bertugas menerbitkan, menandatangani, dan memverifikasi keabsahan Sertifikat Digital SSL/TLS suatu domain dinamakan...",
            "opts": ["A. Internet Service Provider (ISP)", "B. Certificate Authority (CA)", "C. Domain Name Registrar", "D. Network Operations Center (NOC)", "E. Security Operations Center (SOC)"],
            "ans": "B"
        },
        {
            "num": 23,
            "q": "Serangan cyber di mana penyerang memanipulasi entri cache pada DNS Server lokal sehingga nama domain resmi (misalnya `bankmurni.com`) diarahkan ke IP Address server penipu milik penyerang dinamakan...",
            "opts": ["A. DNS Poisoning / DNS Spoofing", "B. IP Multicasting", "C. MAC Address Flooding", "D. DHCP Starvation", "E. Smurf Attack"],
            "ans": "A"
        },
        {
            "num": 24,
            "q": "Celah kerentanan keamanan perangkat lunak atau sistem operasi yang baru ditemukan dan belum memiliki perbaikan (patch/update) resmi dari pihak pengembang vendor dinamakan...",
            "opts": ["A. Legacy Vulnerability", "B. Zero-Day Vulnerability", "C. Known Exploit", "D. Backdoor Vulnerability", "E. Patchable Bug"],
            "ans": "B"
        },
        {
            "num": 25,
            "q": "Sebagai tindakan pencegahan terhadap kehilangan data total akibat serangan Ransomware pada sistem penyimpanan server, administrator menerapkan Aturan Cadangan 3-2-1 (3-2-1 Backup Rule). Makna dari aturan tersebut adalah...",
            "opts": ["A. Menyimpan 3 salinan data, pada 2 jenis media penyimpanan berbeda, dan 1 salinan disimpan di lokasi terpisah (off-site/cloud)", "B. Menyimpan 3 giga data, di 2 harddisk eksternal, dan diuji 1 kali sehari", "C. Membuat 3 akun admin, dengan 2 password, dan 1 enkripsi", "D. Melakukan backup 3 kali seminggu, menggunakan 2 flashdisk, dan 1 CD-ROM", "E. Menggunakan 3 router, 2 switch, dan 1 server backup"],
            "ans": "A"
        }
    ];

    const wirelessQuestionsData = [
        {
            "num": 1,
            "q": "Di area pabrik yang dipenuhi mesin-mesin berdaya listrik tinggi, instalasi kabel jaringan sering mengalami gangguan akibat interferensi elektromagnetik (EMI). Jenis kabel tembaga yang paling tepat digunakan untuk meredam gangguan EMI tersebut adalah...",
            "opts": ["A. UTP (Unshielded Twisted Pair) Cat 5e", "B. STP (Shielded Twisted Pair) / FTP (Foiled Twisted Pair)", "C. Coaxial Thinnet RG-58", "D. Kabel Flat Telephone", "E. Unshielded Ribbed Cable"],
            "ans": "B"
        },
        {
            "num": 2,
            "q": "Seorang teknisi hendak merancang jaringan LAN Gigabit Ethernet (1000 Mbps / 1 Gbps) dengan panjang bentangan kabel 80 meter. Kategori kabel UTP minimal yang direkomendasikan untuk memenuhi standar kecepatan tersebut adalah...",
            "opts": ["A. UTP Category 3 (Cat 3)", "B. UTP Category 5 (Cat 5)", "C. UTP Category 5e (Cat 5e) atau Category 6 (Cat 6)", "D. UTP Category 1 (Cat 1)", "E. UTP Category 2 (Cat 2)"],
            "ans": "C"
        },
        {
            "num": 3,
            "q": "Pada struktur fisik kabel Fiber Optik, lapisan Kaca/Silika yang membungkus inti (core) dan berfungsi memantulkan kembali gelombang cahaya agar tetap merambat di dalam inti dinamakan...",
            "opts": ["A. Core (Inti Utama)", "B. Cladding", "C. Primary Coating", "D. Strength Member", "E. Outer Jacket"],
            "ans": "B"
        },
        {
            "num": 4,
            "q": "Kabel Fiber Optik jenis Single Mode (SMF) memiliki karakteristik khusus yang membedakannya dengan Multi Mode (MMF). Salah satu ciri utama dari kabel Single Mode adalah...",
            "opts": ["A. Ukuran core sangat kecil (±9 µm) dan menggunakan pemancar cahaya berbasis Laser untuk jarak jauh", "B. Ukuran core sangat besar (50-62.5 µm) dan menggunakan pemancar cahaya berbasis LED", "C. Menggunakan beberapa mode rambatan cahaya secara bersamaan", "D. Hanya efektif digunakan untuk jarak pendek di dalam satu ruangan (<100 meter)", "E. Memiliki redaman sinyal yang sangat tinggi dibandingkan MMF"],
            "ans": "A"
        },
        {
            "num": 5,
            "q": "Alat ukur Fiber Optik yang digunakan untuk memetakan kualitas saluran serat optik, mengukur total redaman (loss), serta menentukan lokasi titik patahan kabel secara presisi dalam satuan jarak (meter/kilometer) dinamakan...",
            "opts": ["A. Optical Power Meter (OPM)", "B. Visual Fault Locator (VFL)", "C. Optical Time Domain Reflectometer (OTDR)", "D. Fusion Splicer", "E. LAN Tester RJ-45"],
            "ans": "C"
        },
        {
            "num": 6,
            "q": "Pada arsitektur jaringan FTTH (Fiber to the Home), komponen pasif yang berfungsi membagi sinyal optik dari satu core utama (feeder) menjadi beberapa saluran pelanggan tanpa memerlukan daya listrik adalah...",
            "opts": ["A. Optical Line Terminal (OLT)", "B. Optical Network Terminal (ONT)", "C. Passive Optical Splitter", "D. Optical Distribution Frame (ODF)", "E. Media Converter SFP"],
            "ans": "C"
        },
        {
            "num": 7,
            "q": "Frekuensi gelombang radio 2.4 GHz dan 5 GHz merupakan dua band utama yang digunakan pada Wi-Fi. Pernyataan yang PALING TEPAT mengenai perbandingan kedua frekuensi tersebut adalah...",
            "opts": ["A. Frekuensi 2.4 GHz memiliki kecepatan lebih tinggi tetapi jangkauan sinyal lebih pendek dibanding 5 GHz", "B. Frekuensi 5 GHz memiliki daya tembus dinding yang jauh lebih baik dibanding 2.4 GHz", "C. Frekuensi 2.4 GHz memiliki jangkauan sinyal lebih luas namun rentan interferensi, sedangkan 5 GHz menawarkan bandwidth lebih tinggi dengan jangkauan lebih pendek", "D. Frekuensi 5 GHz menyediakan jumlah saluran (channel) yang lebih sedikit dibanding 2.4 GHz", "E. Frekuensi 2.4 GHz hanya dapat digunakan untuk koneksi outdoor Point-to-Point"],
            "ans": "C"
        },
        {
            "num": 8,
            "q": "Standar jaringan nirkabel IEEE 802.11ax yang dikenal dengan nama Wi-Fi 6 memperkenalkan teknologi mutakhir untuk melayani banyak perangkat bersamaan secara efisien. Teknologi pembagian sub-pembawa frekuensi tersebut dinamakan...",
            "opts": ["A. DSSS (Direct-Sequence Spread Spectrum)", "B. FHSS (Frequency-Hopping Spread Spectrum)", "C. OFDMA (Orthogonal Frequency-Division Multiple Access)", "D. MIMO 2x2 Legacy", "E. CSMA/CD"],
            "ans": "C"
        },
        {
            "num": 9,
            "q": "Di area perkantoran yang padat, beberapa Access Point frekuensi 2.4 GHz dipasang berdekatan. Agar tidak terjadi Co-Channel Interference (saling bertumpuk), tiga saluran (non-overlapping channels) yang dapat digunakan secara bersamaan adalah...",
            "opts": ["A. Channel 1, 2, dan 3", "B. Channel 1, 6, dan 11", "C. Channel 2, 7, dan 12", "D. Channel 3, 6, dan 9", "E. Channel 5, 8, dan 13"],
            "ans": "B"
        },
        {
            "num": 10,
            "q": "Jenis antena nirkabel yang memiliki pola pemancaran sinyal radio 360 derajat secara horizontal ke segala arah dinamakan...",
            "opts": ["A. Antena Directional Grid", "B. Antena Bi-Quad", "C. Antena Omnidirectional", "D. Antena Yagi-Uda", "E. Antena Parabola Dish"],
            "ans": "C"
        },
        {
            "num": 11,
            "q": "Untuk membangun koneksi nirkabel jarak jauh antar gedung (Point-to-Point Link) sejauh 5 km, jenis antena yang paling tepat digunakan karena memiliki pola pemancaran fokus dan gain tinggi adalah...",
            "opts": ["A. Antena Rubber Duck Omnidirectional", "B. Antena Ceiling Mount Indoor", "C. Antena Directional Grid / Parabolic Dish", "D. Antena Dipole 2 dBi", "E. Antena Internal Laptop"],
            "ans": "C"
        },
        {
            "num": 12,
            "q": "Pada perancangan koneksi nirkabel Point-to-Point outdoor, area berbentuk elips di sekitar lintasan visual langsung antara dua antena yang harus bebas dari rintangan (seperti pohon atau gedung) minimal 60% dinamakan...",
            "opts": ["A. Coverage Area", "B. Fresnel Zone", "C. Dead Zone", "D. Line of Sight (LOS) Zero", "E. Multipath Zone"],
            "ans": "B"
        },
        {
            "num": 13,
            "q": "Indikator kekuatan sinyal radio nirkabel yang diterima oleh perangkat client dari Access Point diukur dalam satuan dBm. Nilai kekuatan sinyal (RSSI) yang dikategorikan Sangat Bagus adalah...",
            "opts": ["A. -30 dBm hingga -60 dBm", "B. -85 dBm hingga -95 dBm", "C. -100 dBm hingga -120 dBm", "D. 0 dBm hingga +50 dBm", "E. -15 dBm hingga -5 dBm"],
            "ans": "A"
        },
        {
            "num": 14,
            "q": "Selisih antara kekuatan sinyal yang diterima (RSSI) dengan tingkat derau latar belakang (Noise Floor) pada jaringan nirkabel dinamakan...",
            "opts": ["A. Attenuation Level", "B. Signal-to-Noise Ratio (SNR)", "C. Bandwidth Capacity", "D. Throughput Rate", "E. Bit Error Rate (BER)"],
            "ans": "B"
        },
        {
            "num": 15,
            "q": "Seorang teknisi ingin mengonfigurasi perangkat nirkabel outdoor agar bertindak sebagai penerima sinyal Wi-Fi dari Access Point utama dan meneruskannya via kabel UTP ke router internal. Mode operasional nirkabel yang dipilih adalah...",
            "opts": ["A. Access Point (AP) Mode", "B. Wireless Client / Station Mode", "C. Ad-Hoc Mode", "D. Mesh Master Mode", "E. Monitor / Promiscuous Mode"],
            "ans": "B"
        },
        {
            "num": 16,
            "q": "Perangkat nirkabel yang berfungsi menangkap sinyal Wi-Fi yang melemah lalu memancarkannya kembali dengan SSID yang sama untuk memperluas jangkauan tanpa kabel tambahan dinamakan...",
            "opts": ["A. Network Interface Card (NIC)", "B. Wireless Repeater / Range Extender", "C. Dial-Up Modem", "D. Passive Splitter", "E. Bluetooth Adapter"],
            "ans": "B"
        },
        {
            "num": 17,
            "q": "Melemahnya daya atau kekuatan sinyal gelombang radio saat merambat melewati media udara atau menembus dinding beton dinamakan...",
            "opts": ["A. Refraksi", "B. Difraksi", "C. Attenuasi (Path Loss)", "D. Dispersi", "E. Modulasi"],
            "ans": "C"
        },
        {
            "num": 18,
            "q": "Ketika dua unit Access Point yang dipasang dalam satu area menggunakan channel frekuensi 2.4 GHz yang sama (misalnya keduanya menggunakan Channel 6), gangguan transmisi sinyal yang timbul dinamakan...",
            "opts": ["A. Adjacent Channel Interference", "B. Co-Channel Interference", "C. Multipath Fading", "D. Electromagnetic Cross-Talk", "E. Thermal Noise"],
            "ans": "B"
        },
        {
            "num": 19,
            "q": "Prosedur pengujian dan pemetaan lapangan sebelum melakukan instalasi Access Point untuk menganalisis cakupan sinyal, tingkat interferensi, dan posisi peletakan terbaik dinamakan...",
            "opts": ["A. Network Troubleshooting", "B. Wireless Site Survey", "C. Bandwidth Benchmarking", "D. Physical Cable Testing", "E. Penetration Testing"],
            "ans": "B"
        },
        {
            "num": 20,
            "q": "Teknologi pada Access Point yang memungkinkan beberapa AP saling terhubung secara nirkabel (wireless backhaul) untuk membentuk satu jaringan terintegrasi tanpa kabel antar-AP dinamakan...",
            "opts": ["A. Wireless Distribution System (WDS) / Mesh Network", "B. Virtual Local Area Network (VLAN)", "C. Power over Ethernet (PoE)", "D. Point-to-Point Protocol over Ethernet (PPPoE)", "E. Domain Name System (DNS)"],
            "ans": "A"
        },
        {
            "num": 21,
            "q": "Protokol keamanan jaringan nirkabel modern WPA3 menggantikan WPA2 dengan memperkenalkan mekanisme jabat tangan baru yang lebih aman dari serangan offline dictionary attack. Protokol tersebut adalah...",
            "opts": ["A. TKIP (Temporal Key Integrity Protocol)", "B. WEP 128-bit Shared Key", "C. SAE (Simultaneous Authentication of Equals)", "D. WPS PIN Authentication", "E. RADIUS PAP"],
            "ans": "C"
        },
        {
            "num": 22,
            "q": "Pada Wi-Fi Publik di hotel atau cafe, pengguna secara otomatis diarahkan ke halaman web login untuk memasukkan username/password atau melakukan pembayaran sebelum bisa mengakses internet. Fitur ini dinamakan...",
            "opts": ["A. Port Forwarding", "B. Captive Portal / Hotspot Gate", "C. Demilitarized Zone (DMZ)", "D. Proxy Chaining", "E. Network Address Translation (NAT)"],
            "ans": "B"
        },
        {
            "num": 23,
            "q": "Saat melakukan penarikan kabel Fiber Optik di dalam conduit, kabel tidak boleh ditekuk melebihi batas kelengkungan minimumnya. Jika ditekuk terlalu patah, hal yang akan terjadi adalah...",
            "opts": ["A. Kabel akan mengalami korsleting listrik", "B. Terjadi Macrobending Loss atau core kaca di dalam kabel patah sehingga sinyal cahaya terputus", "C. Warna kulit kabel akan pudar", "D. Hambatan listrik kabel meningkat menjadi 100 Ohm", "E. Kecepatan transmisi cahaya berubah dari laser menjadi gelombang radio"],
            "ans": "B"
        },
        {
            "num": 24,
            "q": "Konektor Fiber Optik berbentuk persegi yang memanfaatkan mekanisme penguncian push-pull dan sangat umum dipasang pada modul SFP, Media Converter, serta ODP/ONT FTTH dinamakan...",
            "opts": ["A. Connector ST (Straight Tip)", "B. Connector SC (Subscriber Connector)", "C. Connector FC (Ferrule Connector)", "D. Connector RJ-11", "E. Connector BNC"],
            "ans": "B"
        },
        {
            "num": 25,
            "q": "Untuk memberikan catu daya listrik ke Access Point outdoor yang berada di atas tiang tanpa perlu menarik kabel listrik 220V ke atas, digunakan perangkat...",
            "opts": ["A. Inverter DC to AC 12V", "B. Power over Ethernet (PoE) Injector / PoE Switch", "C. Step-Down Transformer", "D. Automatic Voltage Regulator (AVR)", "E. Uninterruptible Power Supply (UPS) Server"],
            "ans": "B"
        }
    ];

    let questionsData = [];
    let currentQuestionIndex = 0;
    let studentData = {};
    let quizTimerInterval;
    let quizActive = false;
    let quizStarting = false;
    let proctorIncidents = [];
    const QUIZ_DURATION_SECONDS = 60 * 60;
    const CATEGORY_CONFIGURATION = 'Pemasangan dan Konfigurasi Perangkat Jaringan Komputer';
    const CATEGORY_SECURITY = 'Keamanan Jaringan';
    const CATEGORY_WIRELESS = 'Teknologi Jaringan dan Nirkabel';
    const QUESTION_BANKS = {
        [CATEGORY_CONFIGURATION]: configurationQuestionsData,
        [CATEGORY_SECURITY]: securityQuestionsData,
        [CATEGORY_WIRELESS]: wirelessQuestionsData
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
        const categoryQuestions = QUESTION_BANKS[this.value];
        hint.innerText = categoryQuestions
            ? `Soal tersedia: ${categoryQuestions.length} pilihan ganda.`
            : 'Soal untuk kategori ini belum tersedia.';
    });

    const container = document.getElementById('questionsContainer');
    function renderQuestions() {
        container.replaceChildren();
        questionsData.forEach((q, idx) => {
            const card = document.createElement('div');
            card.className = `question-card ${idx === 0 ? 'active' : ''}`;
            card.id = `qCard_${idx}`;

            let optionsHtml = '';
            q.opts.forEach((opt, optIdx) => {
                const optLetter = String.fromCharCode(65 + optIdx);
                optionsHtml += `
                    <label class="option-label">
                        <input type="radio" name="q${q.num}" value="${optLetter}">
                        ${escapeHtml(opt.replace(/^[A-E]\.\s*/, ''))}
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

    // Update Navigasi UI
    function updateQuizUI() {
        document.querySelectorAll('.question-card').forEach((card, idx) => {
            card.classList.toggle('active', idx === currentQuestionIndex);
        });

        const total = questionsData.length;
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
        currentQuestionIndex += step;
        updateQuizUI();
    }

    function startQuizTimer() {
        const timerElement = document.getElementById('quizTimer');
        const deadline = Date.now() + QUIZ_DURATION_SECONDS * 1000;

        function updateTimer() {
            const remainingSeconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
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
            `Pemantauan aktif · Pelanggaran: ${proctorIncidents.length}`;
    }

    function resetQuizForFocusLoss(message, incidentType) {
        if (!quizActive) {
            return;
        }

        recordProctorIncident(incidentType);
        quizActive = false;
        clearInterval(quizTimerInterval);
        document.getElementById('quizForm').reset();
        document.getElementById('identityForm').reset();
        document.getElementById('quizSection').style.display = 'none';
        document.getElementById('resultView').style.display = 'none';
        document.getElementById('identityForm').style.display = 'block';
        document.getElementById('quizResetNotice').innerText =
            `${message} Pelanggaran tercatat: ${proctorIncidents.length}.`;
        document.getElementById('quizResetNotice').hidden = false;

        currentQuestionIndex = 0;
        studentData = {};
        const timerElement = document.getElementById('quizTimer');
        timerElement.innerText = 'Waktu tersisa: 60:00';
        timerElement.classList.remove('timer-warning');
        updateQuizUI();

        if (document.fullscreenElement) {
            document.exitFullscreen().catch(function(error) {
                console.error('Mode layar penuh tidak dapat ditutup:', error);
            });
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.addEventListener('visibilitychange', function() {
        if (quizActive && document.hidden) {
            resetQuizForFocusLoss(
                'Kuis direset karena Anda berpindah tab atau aplikasi. Silakan isi identitas untuk memulai kembali.',
                'tab-hidden'
            );
        }
    });

    document.addEventListener('fullscreenchange', function() {
        if (quizActive && !document.fullscreenElement) {
            resetQuizForFocusLoss(
                'Kuis direset karena mode layar penuh ditutup. Silakan isi identitas untuk memulai kembali.',
                'fullscreen-exit'
            );
        }
    });

    window.addEventListener('blur', function() {
        if (quizActive) {
            resetQuizForFocusLoss(
                'Kuis direset karena jendela kuis kehilangan fokus. Silakan isi identitas untuk memulai kembali.',
                'window-blur'
            );
        }
    });

    // Form Identitas Submit
    document.getElementById('identityForm').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('quizResetNotice').hidden = true;

        const selectedCategory = document.getElementById('quizCategory').value;
        const selectedQuestionBank = QUESTION_BANKS[selectedCategory];
        if (!selectedQuestionBank) {
            document.getElementById('quizResetNotice').innerText = 'Soal untuk kategori ini belum tersedia. Silakan pilih kategori lain.';
            document.getElementById('quizResetNotice').hidden = false;
            return;
        }

        if (!document.documentElement.requestFullscreen) {
            document.getElementById('quizResetNotice').innerText =
                'Browser ini tidak mendukung mode layar penuh, sehingga kuis tidak dapat dimulai.';
            document.getElementById('quizResetNotice').hidden = false;
            return;
        }

        if (quizStarting) {
            return;
        }

        quizStarting = true;
        document.documentElement.requestFullscreen()
            .then(function() {
                quizStarting = false;
                questionsData = shuffledQuestions(selectedQuestionBank);
                currentQuestionIndex = 0;
                renderQuestions();

                studentData = {
                    nama: document.getElementById('studentName').value,
                    kelas: document.getElementById('studentClass').value,
                    kategori: selectedCategory
                };
                document.getElementById('subjectLabel').innerText = `Kategori: ${selectedCategory}`;
                document.getElementById('proctorStatus').innerText =
                    `Pemantauan aktif · Pelanggaran: ${proctorIncidents.length}`;

                quizActive = true;
                document.getElementById('identityForm').style.display = 'none';
                document.getElementById('quizSection').style.display = 'block';
                updateQuizUI();
                startQuizTimer();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            })
            .catch(function(error) {
                quizStarting = false;
                console.error('Fullscreen tidak dapat diaktifkan:', error);
                document.getElementById('quizResetNotice').innerText =
                    'Mode layar penuh tidak dapat diaktifkan. Izinkan layar penuh di browser untuk memulai kuis.';
                document.getElementById('quizResetNotice').hidden = false;
            });
    });

    // Submit Kuis & Tampilkan Hasil Ringkas
    document.getElementById('quizForm').addEventListener('submit', function(e) {
        e.preventDefault();
        quizActive = false;
        clearInterval(quizTimerInterval);
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(function(error) {
                console.error('Mode layar penuh tidak dapat ditutup:', error);
            });
        }

        let score = 0;
        let correctCount = 0;
        const answers = {};

        questionsData.forEach(q => {
            const selected = document.querySelector(`input[name="q${q.num}"]:checked`);
            const userAnsLetter = selected ? selected.value : '-';
            answers[`Soal_${q.num}`] = userAnsLetter;

            const isCorrect = (userAnsLetter === q.ans);
            if (isCorrect) {
                score += 100 / questionsData.length;
                correctCount++;
            }
        });

        // Set Nilai & Rasio Benar/Total
        document.getElementById('finalScoreVal').innerText = score;
        document.getElementById('correctRatioVal').innerText = `${correctCount} / ${questionsData.length}`;

        // Tampilkan Tampilan Hasil Akhir
        document.getElementById('quizSection').style.display = 'none';
        document.getElementById('resultView').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Kirim Ke Google Sheets
        const payload = {
            nama: studentData.nama,
            kelas: studentData.kelas,
            kategori: studentData.kategori,
            nilai: score,
            benar: correctCount,
            totalSoal: questionsData.length,
            proctorIncidents: proctorIncidents,
            ...answers
        };

        document.getElementById('statusMessage').innerText = 'Mengirim hasil kuis ke Google Spreadsheet...';
        sendQuizResultToGoogleSheets(payload)
        .then(() => {
            document.getElementById('statusMessage').innerText = 'Permintaan pengiriman selesai. Periksa Google Spreadsheet untuk memastikan hasil tersimpan.';
        })
        .catch(err => {
            document.getElementById('statusMessage').innerText = "Gagal terhubung ke Google Sheets: " + err;
            document.getElementById('statusMessage').style.color = "#b91c1c";
        });
    });

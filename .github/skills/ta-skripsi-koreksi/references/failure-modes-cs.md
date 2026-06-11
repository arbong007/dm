# Katalog Pola Kegagalan Khas Skripsi / TA Ilmu Komputer (v4 Komprehensif Akademik)
## Analisis Forensik Mendalam: Dari Abstrak hingga Lampiran

File ini berisi panduan deteksi kegagalan akademis tingkat lanjut untuk skripsi/tesis, diuraikan secara mendalam **paragraf demi paragraf**, dari bagian paling awal (Abstrak) hingga paling akhir (Lampiran).

Reviewer wajib menggunakan dokumen ini untuk membedah setiap inkoherensi atau kecacatan yang sering disembunyikan oleh penulis dalam naskahnya.

---

## 1. KEGAGALAN PADA ABSTRAK (KATEGORI AB)
Abstrak adalah etalase naskah. Kegagalan di sini langsung menjatuhkan kesan pertama penguji sebelum sidang dimulai.

### AB1 — Abstrak Menggantung (Paragraf Awal / Latar Belakang)
**Deskripsi**: Abstrak dimulai dengan definisi dunia yang terlalu luas (contoh: "Teknologi informasi sangat berkembang pesat di era globalisasi...") dan tidak langsung menembak ke studi kasus atau masalah inti.
**Keburukan Akademis**: Pembaca (penguji) kehilangan waktu membaca 3-4 baris pertama tanpa mengetahui konteks spesifik sistem/riset yang dibangun. Abstrak kehilangan sifat "ringkas-padat" dan mendilusi urgensi penelitian.

### AB2 — Kegagalan Metodologi Tersembunyi (Paragraf Tengah)
**Deskripsi**: Abstrak menyebutkan tujuan, namun tidak menyebutkan algoritma, jumlah data, atau kerangka pengujian (misal SUS/Black Box) yang digunakan secara spesifik.
**Keburukan Akademis**: Tanpa menyebutkan *tools* dan metode validasi (misal: "diuji menggunakan Black Box dan SUS dengan 100 responden"), abstrak gagal mendeskripsikan *bagaimana* masalah diselesaikan, mencederai kaidah penulisan IMRAD (Introduction, Method, Result, Discussion).

### AB3 — Hasil Tanpa Angka / Klaim Subyektif (Paragraf Akhir)
**Deskripsi**: Abstrak diakhiri dengan klaim kualitatif seperti "sistem berhasil dibangun dan berjalan dengan baik" tanpa menyertakan satupun metrik hasil (misal: skor SUS, akurasi, waktu proses).
**Keburukan Akademis**: Abstrak kehilangan bobot saintifiknya. Klaim "berhasil" tanpa bukti metrik di abstrak dianggap sebagai opini promosi, bukan temuan empiris yang sah.

---

## 2. KEGAGALAN PADA BAB 1: PENDAHULUAN (KATEGORI B1)

### B1.1 — Latar Belakang Tanpa Baseline Kuantitatif (Paragraf Awal-Tengah)
**Deskripsi**: Penulis mengeluhkan sebuah masalah (misal: "antrean panjang", "pelayanan lambat", "sering terjadi kesalahan") namun tidak ada angka dukung riil (berapa jam lama antrean? berapa lembar data yang hilang?).
**Keburukan Akademis**: Urgensi penelitian runtuh. Penguji dapat berargumen bahwa masalah tersebut mungkin hanya asumsi atau opini pribadi mahasiswa yang tidak berdasar, sehingga investasi pembuatan sistem menjadi tidak terjustifikasi.

### B1.2 — Solusi Tidak Terhubung dengan Masalah (Paragraf Akhir Latar Belakang)
**Deskripsi**: Masalah yang diangkat adalah A (lamanya pencarian dokumen), tapi solusi yang diajukan adalah B (membuat animasi 3D profil institusi).
**Keburukan Akademis**: Menandakan cacat penalaran logika (*logical fallacy*). Mahasiswa dianggap memaksakan bahasa pemrograman atau teknologi yang ia sukai untuk masalah yang tidak membutuhkannya.

### B1.3 — Rumusan Masalah yang Retoris (Subbab Rumusan Masalah)
**Deskripsi**: Menggunakan RM yang jawabannya sudah pasti "Bisa" dan bersifat vokasional (contoh: "Apakah bisa membangun sistem aplikasi X menggunakan bahasa PHP?").
**Keburukan Akademis**: Menurunkan nilai akademis karena penelitian tidak menantang aspek analitis rekayasa (seperti *usability*, *performance*, *security*), melainkan sekadar pembuktian kemampuan *coding* dasar.

---

## 3. KEGAGALAN PADA BAB 2: TINJAUAN PUSTAKA (KATEGORI B2)

### B2.1 — Teori Ensiklopedis Tanpa Konteks (Paragraf Dasar Teori)
**Deskripsi**: Menjelaskan sejarah panjang dan definisi alat (misal: "React JS diciptakan oleh Jordan Walke pada tahun 2013...") tanpa menjelaskan *bagaimana* atau *mengapa* alat itu relevan digunakan dalam penelitian ini.
**Keburukan Akademis**: Bab 2 menjadi "tempat sampah kutipan" (teori *orphan*) yang tidak memandu eksekusi eksperimen. Ini mengindikasikan kecenderungan *copy-paste* hanya untuk menebalkan halaman skripsi tanpa esensi intelektual.

### B2.2 — Studi Literatur Tanpa Matriks Gap (Paragraf Penelitian Terdahulu)
**Deskripsi**: Hanya merangkum 5-10 *paper* secara sekuensial (paragraf per paragraf) tanpa ada sintesis akhir, kritik kelemahan, atau tabel matriks perbandingan fitur/metode.
**Keburukan Akademis**: Penguji tidak dapat melihat kebaruan (*novelty*) atau *value proposition* dari sistem yang dibangun mahasiswa karena titik kelemahan sistem lama (gap) tidak pernah diekspos secara tajam.

---

## 4. KEGAGALAN PADA BAB 3: METODOLOGI (KATEGORI B3)

### B3.1 — Metodologi Fiktif / Tidak Diikuti (Paragraf Awal)
**Deskripsi**: Mengklaim menggunakan Agile/PXP/RAD, tetapi penjabaran langkah-langkah di dalamnya hanyalah teori murni dari buku teks, tanpa disesuaikan secara spesifik dengan konteks studi kasus penelitian mahasiswa.
**Keburukan Akademis**: Menunjukkan ketidakjujuran atau ketidakpahaman metodologis. Mahasiswa merancang sistem tanpa kerangka kerja rekayasa perangkat lunak yang disahkan, merusak validitas proses (*process validity*).

### B3.2 — Subjek dan Objek Pengujian Tidak Presisi (Paragraf Evaluasi/Testing)
**Deskripsi**: Menyebutkan akan menggunakan kuesioner (seperti UAT atau SUS) tapi tidak menetapkan demografi target responden (siapa, berapa banyak minimalnya, dan apa rumusnya).
**Keburukan Akademis**: Jika pengujian kelak dilakukan tanpa batas minimal populasi yang sah secara statistik (misal tidak menggunakan margin error Lemeshow/Slovin), maka simpulan UX/Usability di akhir akan berstatus cacat hukum probabilitas.

### B3.3 — Ketiadaan Ambang Batas Keberhasilan (Threshold)
**Deskripsi**: Tidak ada deklarasi kapan sistem ini bisa diklaim "Berhasil" (misal: "Sistem valid jika Blackbox 100% dan SUS > 68").
**Keburukan Akademis**: Penguji akan menganggap penulis melakukan manipulasi (*cherry-picking*) di Bab 4 dengan mencoba membenarkan skor apa pun yang keluar sebagai sebuah "keberhasilan".

---

## 5. KEGAGALAN PADA BAB 4: HASIL DAN PEMBAHASAN (KATEGORI B4)

### B4.1 — Tampilan UI Tanpa Analisis Arsitektur (Paragraf Implementasi)
**Deskripsi**: Bab 4 hanya berisi puluhan *screenshot* halaman sistem secara berurutan dan narasi "Ini adalah tombol login", tanpa ada deskripsi *backend*, integrasi API, atau tantangan implementasi.
**Keburukan Akademis**: Bab 4 kehilangan kedalaman *Computer Science*-nya dan terdegradasi menjadi sekadar "Buku Panduan Pengguna" (*User Manual*).

### B4.2 — Kegagalan Fitur yang Dibiarkan (Paragraf Pengujian Black Box)
**Deskripsi**: Tabel pengujian menunjukkan status "Gagal / Tidak Valid" pada beberapa fitur inti, namun penulis tidak melakukan perbaikan ulang (*refactoring*), melainkan langsung lanjut ke uji pengguna (SUS).
**Keburukan Akademis**: Ini adalah cacat **FATAL** dalam Laporan Pembuatan Sistem. Membiarkan sistem *buggy* dan menyerahkannya kepada responden menggugurkan asas metodologi iteratif (PXP/Agile), serta membuat data kuesioner pengguna menjadi tidak valid karena sistem yang dites masih rusak.

### B4.3 — Analisis Evaluasi yang Dangkal (Paragraf Akhir Pembahasan)
**Deskripsi**: Skor kuesioner SUS atau UAT dihitung hingga mendapat angka total (misal 83.1), namun tidak ada bedah kasus mengapa angka itu dicapai (pertanyaan mana yang nilainya anjlok? Mengapa pengguna lansia kesulitan?).
**Keburukan Akademis**: Penelitian kehilangan wawasan (*insight*) analitis. Evaluasi direduksi menjadi ritual kalkulator belaka tanpa memproduksi rekomendasi perbaikan *User Experience* untuk masa depan.

---

## 6. KEGAGALAN PADA BAB 5: KESIMPULAN & SARAN (KATEGORI B5)

### B5.1 — Goal Amnesia (Paragraf Kesimpulan)
**Deskripsi**: Poin kesimpulan justru merangkum "Apa yang dilakukan di Bab 3", bukan secara spesifik "Menjawab poin di Rumusan Masalah Bab 1 dengan dukungan angka dari Bab 4".
**Keburukan Akademis**: Menandakan putusnya benang merah logika (inkoherensi). Skripsi secara hukum formal dianggap gagal memenuhi janji kontrak akademiknya.

### B5.2 — Ketiadaan Pengakuan Keterbatasan (Paragraf Tengah)
**Deskripsi**: Penulis langsung melompat dari Kesimpulan ke Saran, menutupi fakta bahwa saat *coding* atau *testing*, ia mengalami banyak kompromi, fitur yang dipotong, atau *error* bawaan.
**Keburukan Akademis**: Menunjukkan kesombongan intelektual (*intellectual arrogance*). Ketidakmampuan merumuskan limitasi sistem adalah kelemahan yang sangat provokatif bagi dosen penguji.

### B5.3 — Saran yang Basa-basi (Paragraf Akhir)
**Deskripsi**: Saran berisi kalimat klise: "Sistem perlu dikembangkan lebih baik lagi dan tampilannya dipercantik."
**Keburukan Akademis**: Saran menjadi paragraf pemborosan tinta yang tidak memberikan arah pijakan saintifik yang jelas bagi peneliti angkatan tahun depan.

---

## 7. KEGAGALAN PADA DAFTAR PUSTAKA (KATEGORI REF)

### REF1 — Sitasi Hantu (Ghost Citation) & Referensi Usang
**Deskripsi**: Nama pengarang dikutip di naskah Bab 2, tapi absen dari Daftar Pustaka (atau sebaliknya). Penggunaan referensi teknologi pemrograman web/AI menggunakan buku terbitan sebelum tahun 2018.
**Keburukan Akademis**: Pelanggaran integritas verifikasi akademik. Menggunakan rujukan usang di ranah ilmu komputer yang dinamis langsung membatalkan klaim *state-of-the-art* dari arsitektur yang dikerjakan mahasiswa.

---

## 8. KEGAGALAN PADA LAMPIRAN (KATEGORI APP)

### APP1 — Lampiran Kosong atau Tidak Relevan (Halaman Akhir)
**Deskripsi**: Naskah menyebut "Detail sebaran kuesioner terlampir" di Bab 4, namun halaman lampiran tidak menyediakannya. Atau, melampirkan ribuan baris kode mentah (*auto-generated CSS/JS*) tanpa filter.
**Keburukan Akademis**: 
1. **Lampiran kosong/hilang**: Membuat penguji tidak bisa memvalidasi keabsahan data empiris, memancing kecurigaan fabrikasi data.
2. **Lampiran kode mentah berlebihan**: Dianggap sebagai manuver culas mahasiswa untuk sekadar menambah tebal jumlah halaman skripsi tanpa memberikan substansi logis yang bisa dievaluasi manusia.
## 9. KEGAGALAN KLAIM TEKNOLOGI & METODOLOGI (KATEGORI H - ULTRA EKSTREM)

Bagian ini membidik penipuan metodologi dan *Tech-Washing* (penggunaan jargon teknologi tinggi tanpa bukti ilmiah).

### H1 — "Tech-Washing" Klaim Teknologi Tanpa Audit Standar (Bab 4)
**Deskripsi**: Judul atau naskah mengklaim menggunakan arsitektur/teknologi canggih (misal: *Microservices, Blockchain, AI, Cloud, IoT*), namun di Bab 4 tidak ada bukti audit empiris menggunakan *tools* standar industri yang terukur (misal: *SonarQube, Postman*, atau *profiler* relevan).
**Keburukan Akademis**: Ini adalah "Penipuan Akademik Tersembunyi" (*Tech-Washing*). Mengklaim sebuah arsitektur canggih tanpa bukti audit berarti sistem tersebut bisa saja hanya arsitektur konvensional biasa yang diberi topeng nama keren.

### H2 — Pemalsuan Metodologi Agile / Iteratif (Bab 3 & 4)
**Deskripsi**: Mengklaim menggunakan metode *Agile* atau metode berbasis iterasi (seperti Scrum, RAD, atau kerangka *Agile* lainnya), tetapi di Bab 4 siklus pelaporannya berjalan lurus sekuensial. Tidak ada tabel log umpan balik (*feedback*) dari klien/pengguna *di antara* iterasi.
**Keburukan Akademis**: Metodologi ini palsu. Tanpa adanya *feedback* antar-iterasi, metode yang digunakan sejatinya hanyalah *Waterfall* klasik. Mahasiswa menyelewengkan nama metode demi mengejar tren.

### H3 — Unit Testing Dangkal / Vanity Metrics (Bab 4)
**Deskripsi**: Terdapat pengujian kode (*Unit Testing/TDD*), namun *test cases* hanya berisi skenario positif sederhana (contoh: *login berhasil*). Tidak ada uji anomali, batasan, atau celah keamanan (*negative testing / edge cases*).
**Keburukan Akademis**: *Unit testing* dilakukan sekadar untuk menggugurkan kewajiban (*vanity metrics*) dan memanipulasi penguji dengan *screenshot passed*, padahal sistem tetap rapuh di dunia nyata.

### H4 — Celah Keamanan Dasar pada Pembuatan Sistem
**Deskripsi**: Pada sistem berbasis *web/mobile*, pengembang menggunakan mekanisme otentikasi (misal Token/Sesi) tetapi menyimpannya secara telanjang di *Local Storage* klien alih-alih menggunakan *HttpOnly Cookies*, atau tidak melakukan sanitasi input (rentan SQL Injection / XSS).
**Keburukan Akademis**: Laporan "Pembuatan Sistem" tidak sah jika membiarkan celah keamanan sekelas pemula. Mengabaikan aspek keamanan menunjukkan ketidakmatangan *Software Engineering*.

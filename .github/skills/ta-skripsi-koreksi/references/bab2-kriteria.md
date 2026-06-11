# Kriteria Review Bab 2 — Tinjauan Pustaka (v4 Komprehensif Akademik)

> **Prinsip**: Bab 2 adalah fondasi intelektual penelitian. Setiap sub-elemen yang lemah menggoyahkan
> legitimasi metodologi dan klaim kebaruan. Reviewer WAJIB memberikan Keburukan untuk setiap item.

---

## 2.1 Kajian Teori / Landasan Teori

### Standar Akademik Global
Landasan teori berfungsi ganda: (1) membuktikan penguasaan domain, dan (2) membenarkan pilihan metodologi di Bab 3. Standar internasional mensyaratkan teori yang digunakan harus dijelaskan mekanismenya, bukan sekadar definisi.

### 2.1-A — Teori Dasar Domain
**Standar**: Konsep inti yang digunakan dalam penelitian harus dijelaskan dengan kedalaman yang proporsional — bukan ensiklopedia, tapi fondasi yang relevan.
**Checklist**: [ ] Ada penjelasan teori dasar domain (ML, NLP, CV, SI, dsb) yang digunakan
**Keburukan**: Tanpa penjelasan teori dasar yang memadai, penguji dapat mempertanyakan apakah peneliti benar-benar memahami alat yang digunakannya — absennya teori dasar menjadikan metodologi tampak sebagai black box yang dipilih tanpa pemahaman, melemahkan klaim kompetensi teknis peneliti secara keseluruhan.
**Rekomendasi**: Untuk setiap konsep kunci yang digunakan di Bab 3, pastikan ada sub-bab yang menjelaskan definisi operasional, cara kerja (bukan hanya nama), dan relevansinya dengan penelitian.

---

### 2.1-B — Penjelasan Metode/Algoritma yang Digunakan
**Standar**: Setiap algoritma/model yang digunakan di Bab 3 wajib dijelaskan mekanismenya di Bab 2 — termasuk cara kerja, asumsi, dan keterbatasan inherentnya.
**Checklist**: [ ] Setiap metode di Bab 3 memiliki penjelasan teknis di Bab 2
**Keburukan**: Metode yang digunakan tanpa penjelasan di Bab 2 menciptakan celah teori-implementasi yang kritis — penguji yang bertanya "bagaimana cara kerja [metode X]?" akan menemukan bahwa mahasiswa tidak dapat menjawab dari naskahnya sendiri, menunjukkan penggunaan metode tanpa pemahaman yang dapat meragukan validitas seluruh eksperimen.
**Rekomendasi**: Untuk setiap metode di Bab 3, pastikan ada sub-bab di Bab 2 yang menjelaskan: (1) definisi dan cara kerja, (2) formula/pseudocode jika relevan, (3) kelebihan dan keterbatasan, (4) kondisi optimal penggunaan.

---

### 2.1-C — Kedalaman Sesuai Jenjang
**Standar**: S1: konseptual + operasional; S2: tambah derivasi matematis jika relevan; S3: analisis kritis terhadap teori.
**Checklist**: [ ] Kedalaman penjelasan proporsional dengan jenjang penelitian
**Keburukan**: Penjelasan yang terlalu dangkal untuk jenjangnya menunjukkan pemahaman superfisial yang akan terekspos saat penguji bertanya pertanyaan lanjutan — sebaliknya, penjelasan yang terlalu dalam dan tidak relevan membuang ruang dan waktu pembaca tanpa menambah nilai justifikasi.
**Rekomendasi**: Benchmark: S1 harus dapat menjelaskan metode dalam 3-5 paragraf yang mencakup cara kerja tanpa derivasi lengkap; S2 perlu menambahkan analisis komparatif.

---

### 2.1-D — Relevansi Teori ke Penelitian
**Standar**: Setiap sub-bab teori harus diakhiri dengan kalimat eksplisit yang menghubungkannya ke penelitian yang dilakukan.
**Checklist**: [ ] Ada kalimat penghubung eksplisit antara teori dan penelitian
**Keburukan**: Teori tanpa kalimat penghubung ke penelitian menjadikan Bab 2 seperti ensiklopedia generik — pembaca tidak dapat memahami mengapa teori tersebut dipilih, dan penguji akan mempertanyakan relevansinya, menciptakan kesan bahwa teori ini dimasukkan hanya untuk menambah volume naskah.
**Rekomendasi**: Tambahkan di akhir setiap sub-bab: "Dalam penelitian ini, [teori/metode X] digunakan karena [alasan spesifik yang terhubung ke metodologi Bab 3]."

---

### 2.1-E — Tidak Ada Teori Orphan (Teori yang Tidak Digunakan)
**Standar**: Setiap teori yang dijelaskan di Bab 2 harus digunakan di Bab 3, 4, atau 5.
**Checklist**: [ ] Tidak ada sub-bab teori yang tidak muncul lagi di bagian lain laporan
**Keburukan**: Teori orphan yang tidak digunakan adalah tanda kuat bahwa bagian tersebut merupakan copy-paste dari proposal atau penelitian lain — penguji yang mendeteksi pola ini akan mempertanyakan orisinalitas naskah dan dapat menyelidiki plagiarisme, yang merupakan risiko integritas akademis yang serius.
**Rekomendasi**: Audit setiap sub-bab teori: apakah ada referensi ke teori ini di Bab 3 atau 4? Jika tidak, hapus atau justifikasikan keberadaannya.

---

### 2.1-F — Notasi Matematis yang Konsisten
**Standar**: Jika menggunakan formula matematis, notasi harus konsisten dengan referensi standar bidang tersebut.
**Checklist**: [ ] Formula dan notasi konsisten dan sesuai standar bidang
**Keburukan**: Notasi matematis yang tidak konsisten atau berbeda dari standar bidang menunjukkan bahwa formula disalin tanpa pemahaman — penguji yang ahli di bidang tersebut akan langsung mendeteksi ketidakkonsistenan ini, merusak kredibilitas seluruh penjelasan teknis.
**Rekomendasi**: Verifikasi setiap formula dengan membandingkannya terhadap paper asli atau buku teks standar bidang (mis. Bishop 2006 untuk ML, Goodfellow 2016 untuk Deep Learning).

---

## 2.2 Penelitian Terdahulu (Related Works)

### Standar Akademik Global
Penelitian terdahulu bukan daftar abstrak — ia adalah peta kompetitif yang menunjukkan posisi penelitian ini dalam lanskap keilmuan. Standar konferensi/jurnal top mensyaratkan analisis kritis, bukan ringkasan.

### 2.2-A — Jumlah dan Representativitas Paper
**Standar**: S1: minimal 10-15 paper relevan; S2: minimal 20-30 paper; dominasi dari Tier 1-2.
**Checklist**: [ ] Jumlah paper memenuhi standar jenjang; mayoritas dari sumber terindeks
**Keburukan**: Paper terdahulu yang terlalu sedikit menunjukkan kajian literatur yang tidak komprehensif — penguji dapat menunjukkan paper-paper relevan yang tidak dikutip, yang mengindikasikan bahwa peneliti tidak sepenuhnya aware terhadap state-of-the-art dan berpotensi melakukan penelitian yang sudah pernah dilakukan orang lain.
**Rekomendasi**: Gunakan Google Scholar, Scopus, atau Semantic Scholar dengan kata kunci yang sistematis. Dokumentasikan protokol pencarian (keyword, database, periode, jumlah hasil, filter kriteria inklusi).

---

### 2.2-B — Kemutakhiran Paper
**Standar**: Untuk domain AI/ML/NLP/CV: >=60% paper dari 5 tahun terakhir. Paper seminal (foundational) boleh lebih lama dengan justifikasi.
**Checklist**: [ ] >=60% referensi dalam 5 tahun terakhir untuk domain dinamis
**Keburukan**: Dominasi paper lama untuk domain yang berkembang pesat menunjukkan bahwa peneliti tidak mengikuti perkembangan terkini — penguji yang aktif di bidang tersebut akan menyadari bahwa metode/dataset yang dikutip sudah ketinggalan zaman, melemahkan klaim bahwa penelitian ini relevan dengan state-of-the-art saat ini.
**Rekomendasi**: Cari paper dari 2 tahun terakhir di ArXiv, Semantic Scholar, atau Google Scholar; untuk topik yang bergerak cepat, paper 2021-2026 harus mendominasi.

---

### 2.2-C — Analisis Kritis (Bukan Ringkasan Abstrak)
**Standar**: Setiap paper yang dikutip harus dianalisis: metode yang digunakan, dataset, hasil utama, DAN keterbatasan yang relevan dengan penelitian ini.
**Checklist**: [ ] Setiap paper dianalisis secara kritis, bukan hanya diringkas judulnya
**Keburukan**: Penelitian terdahulu yang hanya menyebutkan "Penelitian X mengusulkan metode Y dengan hasil Z" tanpa analisis keterbatasan adalah listing abstrak yang tidak memberikan nilai akademis — penguji akan mempertanyakan kemampuan berpikir kritis peneliti, dan tanpa analisis keterbatasan, gap penelitian tidak dapat diderivasi secara sah dari literatur.
**Rekomendasi**: Gunakan format analisis: (1) apa yang dilakukan, (2) pada data apa, (3) hasil apa yang dicapai, (4) apa keterbatasan yang relevan untuk penelitian ini.

---

### 2.2-D — Tabel Perbandingan Penelitian Terdahulu
**Standar**: Ringkasan komparatif dalam bentuk tabel adalah standar penulisan review paper dan thesis di komunitas CS internasional.
**Checklist**: [ ] Ada tabel perbandingan yang mencakup: penulis/tahun, metode, dataset, metrik, hasil, keterbatasan
**Keburukan**: Tanpa tabel perbandingan, posisi penelitian dalam lanskap keilmuan tidak dapat divisualisasikan secara efisien — penguji kesulitan melihat dengan cepat di mana penelitian ini berada relatif terhadap yang lain, dan gap penelitian menjadi lebih sulit diverifikasi dari narasi semata.
**Rekomendasi**: Buat tabel dengan kolom: No | Penulis (Tahun) | Metode | Dataset | Metrik | Hasil Terbaik | Keterbatasan | Relevansi ke Penelitian Ini.

---

### 2.2-E — Identifikasi Gap yang Kuat
**Standar**: Gap penelitian harus diderivasi secara logis dari tabel perbandingan — bukan klaim, tapi kesimpulan dari bukti.
**Checklist**: [ ] Gap diidentifikasi secara eksplisit, spesifik, dan dapat dilacak ke tabel perbandingan
**Keburukan**: Gap yang terlalu generik ("belum ada yang menggunakan dataset ini") atau yang tidak dapat dilacak ke tabel perbandingan tidak memiliki kekuatan argumentatif yang cukup — ini bukan novelty justification yang valid secara akademis, karena tidak membuktikan bahwa penelitian ini mengisi celah yang nyata dalam pengetahuan.
**Rekomendasi**: Gap yang kuat harus menyebut: aspek apa yang belum diatasi, oleh siapa, mengapa ini penting, dan bagaimana penelitian ini mengatasinya.

---

### 2.2-F — Posisi Penelitian ini dalam Lanskap
**Standar**: Akhir sub-bab penelitian terdahulu harus secara eksplisit menyatakan bagaimana penelitian ini berbeda/lebih baik dari yang ada.
**Checklist**: [ ] Ada pernyataan eksplisit tentang differensiasi penelitian
**Keburukan**: Tanpa pernyataan posisi yang eksplisit, pembaca dan penguji harus menebak sendiri apa kontribusi penelitian ini — ambiguitas ini melemahkan klaim kebaruan dan mempersulit evaluasi kontribusi ilmiah secara objektif.
**Rekomendasi**: Tambahkan paragraf penutup Bab 2 yang secara eksplisit menyatakan: "Berdasarkan kajian di atas, penelitian ini memposisikan diri sebagai [kontribusi spesifik] yang berbeda dari penelitian sebelumnya dalam hal [diferensiasi]."

---

## 2.3 Kerangka Teori / Kerangka Konseptual

### Standar Akademik Global
Kerangka konseptual adalah model visual/naratif yang menunjukkan hubungan antar konsep dalam penelitian. Ini bukan dekorasi — ia adalah blueprint relasi antar variabel/komponen yang harus konsisten dengan Bab 3 dan 4.

### 2.3-A — Keberadaan Kerangka
**Standar**: Setiap penelitian empiris memerlukan kerangka yang menggambarkan hubungan antar variabel/komponen.
**Checklist**: [ ] Ada kerangka konseptual dalam bentuk gambar/diagram atau narasi terstruktur
**Keburukan**: Tanpa kerangka konseptual, hubungan antar variabel dan komponen penelitian tidak terdefinisi secara eksplisit — penguji tidak dapat melihat model mental peneliti tentang sistem yang diteliti, menjadikan metodologi sulit dievaluasi koherensinya dengan teori.
**Rekomendasi**: Buat diagram yang menunjukkan: input -> proses -> output, dengan label komponen yang konsisten dengan Bab 1, 3, dan 4.

### 2.3-B — Konsistensi dengan Bab 3 dan 4
**Standar**: Komponen dalam kerangka konseptual harus muncul dengan nama yang sama di metodologi dan hasil.
**Checklist**: [ ] Label/variabel dalam kerangka konsisten dengan Bab 3 dan 4
**Keburukan**: Kerangka yang tidak konsisten dengan implementasi menunjukkan bahwa desain konseptual dan implementasi dikerjakan secara terpisah tanpa sinkronisasi — ini adalah bukti inkoherensi proses penelitian yang akan menimbulkan pertanyaan tentang seberapa terencana penelitian ini sebenarnya.
**Rekomendasi**: Audit: setiap komponen dalam kerangka konseptual harus dapat ditemukan di Bab 3 (metodologi) dan Bab 4 (hasil).

---

## 2.4 Hipotesis (untuk Penelitian Kuantitatif dengan Variabel yang Jelas)

### Standar Akademik Global
Hipotesis adalah prediksi yang diturunkan dari teori dan dapat diuji secara empiris. Untuk penelitian komparatif/eksperimen, hipotesis adalah komponen yang diharapkan oleh penguji.

### 2.4-A — Derivasi dari Teori
**Standar**: Setiap hipotesis harus dapat dilacak ke teori di Bab 2 yang memotivasinya.
**Checklist**: [ ] Hipotesis diturunkan dari teori, bukan dari intuisi atau asumsi tanpa dasar
**Keburukan**: Hipotesis tanpa dasar teori adalah spekulasi yang tidak memiliki kekuatan prediktif ilmiah — jika hipotesis terkonfirmasi, tidak ada pengetahuan baru yang dihasilkan; jika tidak terkonfirmasi, tidak ada teori yang dapat direvisi, menjadikan seluruh pengujian hipotesis tidak bermakna secara kumulatif.
**Rekomendasi**: Untuk setiap hipotesis, tambahkan kalimat: "Hipotesis ini diturunkan dari [teori X] yang memprediksi bahwa [mekanisme Y] akan menghasilkan [outcome Z]."

### 2.4-B — Dapat Diuji Secara Empiris
**Standar**: Hipotesis harus menyatakan hubungan antara variabel yang dapat diukur.
**Checklist**: [ ] Hipotesis mengandung variabel yang dapat dioperasionalisasikan
**Keburukan**: Hipotesis yang tidak dapat diuji secara empiris menjadikan penelitian tidak falsifiable — ini melanggar prinsip dasar sains (falsifiability Popper), sehingga temuan penelitian tidak dapat diterima sebagai kontribusi ilmiah yang sahih.
**Rekomendasi**: Uji setiap hipotesis: "Data apa yang bisa membuktikan ini salah?" — jika tidak ada jawaban, hipotesis terlalu abstrak.

---

## Pola Kegagalan Khas Bab 2

| Pola | Deskripsi | Keburukan Akademis | Level |
|---|---|---|---|
| Theory Dump | Semua teori yang pernah dibaca tanpa filter | Bab 2 kehilangan fokus; penguji tidak dapat mengidentifikasi teori mana yang benar-benar digunakan, melemahkan koherensi seluruh naskah | MINOR |
| Algorithm Black Box | Metode hanya disebutkan namanya, tidak dijelaskan | Peneliti tampak menggunakan alat tanpa memahaminya; ini merupakan kegagalan kompetensi teknis fundamental yang akan terekspos di sidang | FATAL |
| Related Works Without Relation | 15 paper dikutip tapi tidak ada gap yang diderivasi | Penelitian tidak dapat menjustifikasi keberadaannya dalam lanskap keilmuan — tanpa gap yang jelas, kontribusi penelitian menjadi tidak terukur | MAYOR |
| Single Source Theory | Konsep penting hanya bersumber dari 1 referensi | Pemahaman teori yang hanya bersumber satu tempat rentan dipertanyakan penguji dengan referensi lain yang mungkin berbeda sudut pandang | MINOR |
| Stale Literature | Semua referensi >5 tahun untuk domain dinamis | Peneliti tampak tidak mengikuti perkembangan bidang; klaim state-of-the-art menjadi tidak kredibel | MAYOR |
| Orphan Theories | Sub-bab teori tidak muncul di Bab 3/4 | Indikasi kuat bahwa bagian tersebut copy-paste; menimbulkan pertanyaan tentang integritas akademis naskah | MAYOR |

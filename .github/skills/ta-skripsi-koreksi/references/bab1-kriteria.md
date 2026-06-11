# Kriteria Review Bab 1 — Pendahuluan (v4 Komprehensif Akademik)

> **Prinsip**: Bab 1 adalah kontrak ilmiah antara peneliti dan komunitas akademis.
> Setiap elemen yang tidak dipenuhi menciptakan celah dalam justifikasi penelitian.
> Untuk setiap item, reviewer WAJIB menyertakan: Standar Akademik, Keburukan, dan Rekomendasi.

---

## 1.1 Latar Belakang

### Standar Akademik Global
Latar belakang yang baik membangun argumentasi deduktif dari konteks makro → masalah spesifik → kebutuhan solusi. Setiap klaim harus didukung data empiris yang dapat ditelusuri sumbernya.

### 1.1-A — Konteks Umum Domain
**Standar**: Ada pengantar domain/bidang yang membingkai urgensi penelitian secara luas.
**Checklist**: [ ] Paragraf pembuka memperkenalkan domain dengan jelas
**Keburukan**: Latar belakang tanpa konteks domain membuat penelitian terasa tiba-tiba dan tidak terpeta dalam lanskap keilmuan — penguji tidak memahami mengapa domain ini layak diteliti, sehingga motivasi penelitian menjadi lemah sejak kalimat pertama.
**Rekomendasi**: Awali dengan 1 paragraf yang menggambarkan perkembangan/signifikansi domain menggunakan data/statistik dari sumber kredibel (mis. laporan industri, paper survei).

---

### 1.1-B — Fakta/Data Pendukung Kuantitatif
**Standar**: Urgensi penelitian harus dibuktikan dengan angka, bukan hanya narasi. Standar internasional (IEEE, ACM, Springer) mensyaratkan klaim faktual dilengkapi sitasi.
**Checklist**: [ ] Minimal 2–3 fakta/statistik kuantitatif dari sumber terverifikasi
**Keburukan**: Narasi tanpa data kuantitatif adalah opini, bukan argumen ilmiah — penguji dapat menolak seluruh premis urgensi dengan pertanyaan "dari mana angka ini?" dan peneliti tidak memiliki basis faktual untuk mempertahankan klaim bahwa masalah ini penting.
**Rekomendasi**: Untuk setiap klaim urgensi, tambahkan format: "Berdasarkan [Sumber Tier 1, Tahun], [fakta kuantitatif spesifik] yang menunjukkan [relevansi ke masalah penelitian]."

---

### 1.1-C — Identifikasi Masalah Spesifik
**Standar**: Dari konteks umum, latar belakang harus menyempitkan ke masalah yang belum terpecahkan secara konkret — bukan pernyataan generik tetapi gap yang terukur.
**Checklist**: [ ] Ada transisi jelas dari konteks umum ke masalah spesifik yang teridentifikasi
**Keburukan**: Tanpa identifikasi masalah yang spesifik, latar belakang hanya berfungsi sebagai ensiklopedia domain — penelitian tidak memiliki problem statement yang dapat diuji, menjadikan seluruh upaya riset tidak terdefinisi arahnya.
**Rekomendasi**: Gunakan teknik "funnel argument": mulai dari skala global → nasional → lokal/spesifik, dan tunjukkan mengapa solusi yang ada belum memadai.

---

### 1.1-D — Kritik terhadap Solusi yang Ada
**Standar**: Penelitian yang mengklaim kontribusi wajib menjelaskan mengapa solusi yang sudah ada tidak cukup — ini adalah justifikasi kebaruan (novelty justification).
**Checklist**: [ ] Ada penjelasan keterbatasan/kekurangan pendekatan yang sudah ada
**Keburukan**: Tanpa kritik terhadap solusi existing, penelitian tidak dapat mengklaim kebaruan secara sah — penguji dapat menunjukkan bahwa masalah ini sudah diselesaikan oleh [penelitian lain], dan tanpa counter-argument, peneliti tidak dapat mempertahankan relevansi karyanya.
**Rekomendasi**: Tambahkan 1 paragraf yang secara eksplisit menyebutkan 2–3 pendekatan yang sudah ada, diikuti kalimat: "Pendekatan-pendekatan tersebut terbatas karena [alasan spesifik], yang menjadi motivasi penelitian ini."

---

### 1.1-E — Justifikasi Pendekatan yang Diusulkan
**Standar**: Pendekatan baru harus dijustifikasi secara teoritis/empiris di latar belakang mengapa ia lebih menjanjikan dari yang lain.
**Checklist**: [ ] Ada justifikasi mengapa pendekatan yang dipilih relevan dengan masalah
**Keburukan**: Memperkenalkan metode tanpa justifikasi di latar belakang menjadikan pemilihan metode terasa arbitrary — penguji akan mempertanyakan mengapa [metode X] dipilih, dan tanpa fondasi argumentatif di Bab 1, justifikasi di Bab 3 akan terasa post-hoc.
**Rekomendasi**: Sertakan 1–2 kalimat di latar belakang yang merangkum mengapa pendekatan yang diusulkan relevan, dengan referensi ke paper pendukung.

---

### 1.1-F — Referensi Mendukung Setiap Klaim Faktual
**Standar**: Setiap klaim faktual dalam latar belakang wajib memiliki sitasi yang dapat diverifikasi.
**Checklist**: [ ] Tidak ada klaim tanpa sitasi; semua sitasi dari sumber Tier 1–2
**Keburukan**: Klaim faktual tanpa sitasi tidak dapat dibedakan dari opini penulis — secara akademis, ini adalah assertion tanpa evidence, yang melemahkan kredibilitas seluruh argumen latar belakang dan mengindikasikan kurangnya rigor ilmiah.
**Rekomendasi**: Audit setiap kalimat yang mengandung angka atau klaim umum; tambahkan sitasi dari Google Scholar/Scopus.

---

### Pola Kegagalan Khas Bab 1
| Pola | Deskripsi | Keburukan Akademis | Level |
|---|---|---|---|
| AI Washing | Klaim "AI terkini" tanpa spesifikasi metode | Klaim tanpa substansi teknis tidak dapat diverifikasi penguji; menunjukkan pemahaman superfisial tentang bidang | 🟠 MAYOR |
| Gap Palsu | "Belum ada penelitian tentang X" tanpa kajian literatur | Menyesatkan komunitas ilmiah tentang state-of-the-art; jika penguji menemukan paper yang bertentangan, kredibilitas seluruh penelitian runtuh | 🟠 MAYOR |
| Copy-paste Template | Latar belakang generik tanpa substansi spesifik | Menunjukkan bahwa penulis tidak memiliki pemahaman mendalam tentang domain; penguji akan meragukan orisinalitas pemikiran | 🟡 MINOR |
| Dataset Imajiner | Dataset yang tidak jelas keberadaannya | Seluruh penelitian terancam tidak dapat direproduksi; merupakan pelanggaran prinsip reproducibility dalam sains | 🔴 FATAL |

---

## 1.2 Rumusan Masalah

### Standar Akademik Global
Rumusan masalah adalah "kontrak penelitian" — setiap pertanyaan yang dirumuskan HARUS dijawab oleh tujuan, metode, dan hasil penelitian. Standar penulisan ilmiah mensyaratkan rumusan masalah yang operasional, spesifik, dan dapat diuji secara empiris.

### 1.2-A — Bentuk Pertanyaan Penelitian
**Standar**: Rumusan masalah harus berbentuk pertanyaan penelitian (research question), bukan pernyataan umum.
**Keburukan**: Rumusan masalah berbentuk pernyataan (bukan pertanyaan) menjadikannya tidak dapat dijawab secara formal — tidak ada ukuran keberhasilan yang dapat ditetapkan, sehingga penelitian tidak dapat diklaim "selesai" secara ilmiah.
**Rekomendasi**: Gunakan kata tanya operasional: "Bagaimana...", "Seberapa efektif...", "Apa pengaruh... terhadap..."

### 1.2-B — Operasional dan Terukur
**Standar**: Pertanyaan harus memiliki parameter yang jelas sehingga jawaban "ya" atau "tidak/seberapa" dapat diberikan dengan bukti.
**Keburukan**: Rumusan masalah yang tidak operasional membuat jawaban apapun dapat diklaim memenuhinya — ini merugikan penelitian sendiri karena kontribusi tidak dapat dikuantifikasi.
**Rekomendasi**: Uji setiap RM dengan pertanyaan: "Apa yang harus diukur untuk menjawab ini?" — jika tidak bisa dijawab, RM terlalu abstrak.

### 1.2-C — Konsistensi dengan Latar Belakang
**Standar**: Setiap rumusan masalah harus mengalir secara logis dari masalah yang diidentifikasi di latar belakang.
**Keburukan**: RM yang tidak konsisten dengan latar belakang menunjukkan bahwa Bab 1 ditulis secara parsial — penguji akan menunjukkan bahwa latar belakang membahas masalah A tapi RM menanyakan tentang masalah B, yang merusak koherensi struktural penelitian.
**Rekomendasi**: Buat tabel crosscheck: [masalah di latar belakang] → [RM yang menjawabnya]. Tidak boleh ada RM yang tidak terpeta ke masalah di latar belakang.

### 1.2-D — Jumlah yang Proporsional
**Standar**: S1: 1–4 RM; S2: 2–5 RM. RM yang terlalu banyak menandakan scope yang tidak terkontrol.
**Keburukan**: Terlalu banyak RM untuk jenjang S1 menciptakan scope penelitian yang tidak feasible dalam waktu yang tersedia, mengakibatkan semua RM dijawab secara dangkal alih-alih beberapa dijawab secara mendalam.
**Rekomendasi**: Prioritaskan RM inti dan buat RM tambahan sebagai sub-pertanyaan jika diperlukan.

---

## 1.3 Tujuan Penelitian

### Standar Akademik Global
Tujuan harus SMART: Specific, Measurable, Achievable, Relevant, Time-bound. Setiap tujuan adalah komitmen formal peneliti terhadap komunitas akademis.

### 1.3-A — Korespondensi One-to-One dengan RM
**Standar**: Setiap RM memiliki tepat satu tujuan yang menjawabnya; setiap tujuan dapat dilacak ke satu RM.
**Keburukan**: Ketidaksesuaian antara jumlah/substansi RM dan tujuan merupakan inkoherensi struktural yang fundamental — artinya ada pertanyaan yang tidak dijawab atau ada tujuan tanpa pertanyaan yang memotivasinya, keduanya menunjukkan ketidaktuntasan penelitian.
**Rekomendasi**: Buat tabel dua kolom: RM 1 ↔ Tujuan 1; RM 2 ↔ Tujuan 2. Pastikan korespondensi 1:1.

### 1.3-B — Kata Kerja Operasional
**Standar**: Tujuan menggunakan kata kerja yang menghasilkan output terukur: membangun, mengimplementasikan, mengevaluasi, membandingkan, menganalisis (bukan "mengetahui" atau "memahami").
**Keburukan**: Kata kerja non-operasional seperti "mengetahui" atau "memahami" tidak menghasilkan produk yang dapat diverifikasi — penelitian dengan tujuan demikian tidak memiliki indikator keberhasilan yang objektif, menjadikan verdict "berhasil" tidak dapat diklaim secara ilmiah.
**Rekomendasi**: Ganti "mengetahui X" dengan "menganalisis X dan mengidentifikasi Y" atau "membandingkan X dengan Y menggunakan metrik Z."

### 1.3-C — Terukur (SMART)
**Standar**: Setiap tujuan memiliki indikator keberhasilan yang dapat diverifikasi secara kuantitatif atau kualitatif dengan instrumen yang jelas.
**Keburukan**: Tujuan tanpa indikator keberhasilan menjadikan verdict penelitian subjektif — tidak ada basis ilmiah untuk menyatakan tujuan "tercapai", sehingga kesimpulan di Bab 5 menjadi tidak dapat diverifikasi secara independen.
**Rekomendasi**: Tambahkan target ukuran untuk setiap tujuan: "mengevaluasi performa model dengan metrik akurasi, F1-Score, dan AUC-ROC pada dataset X."

### 1.3-D — Realistis untuk Jenjang
**Standar**: Tujuan harus achievable dalam scope, waktu, dan sumber daya yang tersedia untuk jenjang S1/S2/S3.
**Keburukan**: Tujuan yang melampaui kapasitas jenjang dan waktu yang tersedia akan menghasilkan penelitian yang tidak tuntas secara sistematis — ini merugikan mahasiswa karena creates expectation yang tidak dapat dipenuhi dan melemahkan seluruh narasi penelitian.
**Rekomendasi**: Konsultasikan setiap tujuan dengan pertanyaan: "Bisakah ini dicapai dalam [X] bulan dengan sumber daya yang tersedia?"

---

## 1.4 Manfaat Penelitian

### 1.4-A — Manfaat Teoritis
**Standar**: Harus ada kontribusi eksplisit ke bangunan pengetahuan ilmiah — bukan hanya manfaat praktis.
**Keburukan**: Penelitian tanpa manfaat teoritis yang dinyatakan secara eksplisit kehilangan status akademisnya — ia menjadi proyek teknis semata yang sulit dipertahankan sebagai karya ilmiah dalam sidang akademis.
**Rekomendasi**: Nyatakan: "Secara teoritis, penelitian ini berkontribusi pada [bidang ilmu] dengan [kontribusi spesifik, mis: membuktikan/membantah/memperluas teori X dalam konteks Y]."

### 1.4-B — Manfaat Praktis
**Standar**: Harus ada identifikasi stakeholder yang akan memanfaatkan hasil penelitian.
**Keburukan**: Manfaat tanpa identifikasi penerima yang jelas adalah abstraksi kosong — pernyataan "bermanfaat bagi masyarakat umum" tidak menunjukkan bahwa peneliti memahami siapa penggunanya dan bagaimana penelitian ini akan diimplementasikan dalam konteks nyata.
**Rekomendasi**: Gunakan format: "Bagi [stakeholder spesifik], penelitian ini memberikan [manfaat konkret] melalui [mekanisme spesifik]."

### 1.4-C — Proporsionalitas
**Standar**: Manfaat yang diklaim tidak boleh melebihi apa yang dapat dibuktikan oleh hasil penelitian.
**Keburukan**: Overclaiming manfaat menciptakan ekspektasi yang tidak dapat dipenuhi — penguji yang teliti akan mempertanyakan bagaimana penelitian berskala [X] dapat menghasilkan manfaat berskala [Y yang jauh lebih besar], merusak kredibilitas penilaian diri peneliti.
**Rekomendasi**: Setiap klaim manfaat harus dapat dilacak ke output spesifik yang dihasilkan penelitian.

---

## 1.5 Batasan Penelitian

### Standar Akademik Global
Batasan penelitian adalah perlindungan akademis peneliti sekaligus pernyataan kejujuran ilmiah. Tanpa batasan yang jelas, penelitian rentan terhadap pertanyaan di luar scope.

### 1.5-A — Batasan Teknis
**Standar**: Platform, bahasa pemrograman, library, dan versi yang digunakan harus dinyatakan eksplisit.
**Keburukan**: Absennya batasan teknis membuat penelitian rentan terhadap pertanyaan "mengapa tidak menggunakan [platform lain]?" — tanpa batasan teknis yang dinyatakan, peneliti tidak memiliki perlindungan akademis terhadap pertanyaan perbandingan yang tak terbatas jumlahnya.
**Rekomendasi**: Cantumkan: lingkungan pengembangan, versi framework, spesifikasi hardware yang digunakan.

### 1.5-B — Batasan Data
**Standar**: Jenis data, sumber, periode pengambilan, dan ukuran dataset harus dibatasi secara eksplisit.
**Keburukan**: Batasan data yang tidak dinyatakan membuat klaim generalisasi penelitian menjadi tidak terbatas — penguji dapat mempertanyakan validitas untuk setiap konteks data berbeda, dan peneliti tidak memiliki argumen untuk membatasi domain klaim tersebut.
**Rekomendasi**: Nyatakan: "Penelitian ini terbatas pada data [jenis] dari [sumber] periode [waktu] dengan [karakteristik spesifik]."

### 1.5-C — Batasan Domain/Konteks
**Standar**: Skenario penggunaan dan konteks aplikasi yang menjadi fokus penelitian harus didefinisikan.
**Keburukan**: Tanpa batasan domain, setiap pertanyaan "bagaimana jika diterapkan pada [konteks lain]?" tidak dapat ditolak dengan argumen scope yang sah — peneliti terpaksa mengakui keterbatasan yang tidak direncanakan di hadapan penguji.
**Rekomendasi**: Nyatakan secara eksplisit: kasus penggunaan yang dicakup DAN yang tidak dicakup oleh penelitian ini.

### 1.5-D — Konsistensi dengan Metodologi Bab 3
**Standar**: Batasan di Bab 1 harus konsisten dengan apa yang dilaksanakan di Bab 3.
**Keburukan**: Batasan yang tidak selaras dengan implementasi menunjukkan bahwa Bab 1 dan Bab 3 ditulis secara terpisah tanpa integrasi — ini adalah sinyal inkoherensi perencanaan yang melemahkan kepercayaan terhadap proses penelitian secara keseluruhan.
**Rekomendasi**: Lakukan crosscheck: setiap batasan di Bab 1 harus tercermin dalam desain metodologi di Bab 3.

---

## 1.6 Sistematika Penulisan

### 1.6-A — Akurasi Deskripsi
**Standar**: Deskripsi per-bab harus mencerminkan isi aktual laporan.
**Keburukan**: Sistematika yang tidak mencerminkan isi aktual menunjukkan kurangnya perhatian terhadap detail — meski bukan kesalahan fatal, ini memberi kesan bahwa laporan ditulis dengan copy-paste template tanpa review menyeluruh, yang melemahkan kesan profesionalisme akademis secara keseluruhan.
**Rekomendasi**: Tulis sistematika setelah laporan selesai, bukan di awal, agar deskripsi mencerminkan isi aktual.

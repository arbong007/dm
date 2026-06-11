# Paket Perbaikan Siap-Tempel v4 — Komprehensif Akademik

> **Prinsip Panduan**: Setiap paket di sini HARUS diisi dengan konten spesifik dari naskah yang direview.
> Jangan berikan template kosong kepada mahasiswa. Isi setiap [placeholder] dengan temuan aktual.
> Sertakan minimal 1 kalimat Keburukan untuk memotivasi perbaikan.

---

## PAKET 1 — Latar Belakang: Tambahkan Data Kuantitatif

### Kondisi yang Membutuhkan Paket Ini
Latar belakang berisi narasi tanpa data/fakta yang dapat diverifikasi, atau klaim urgensi tanpa angka pendukung.

### Keburukan yang Memotivasi
"Latar belakang tanpa data kuantitatif berfungsi sebagai opini, bukan argumen ilmiah — penguji dapat menolak seluruh premis urgensi dengan satu pertanyaan 'dari mana angka ini?', dan tanpa data, mahasiswa tidak memiliki basis faktual untuk mempertahankan bahwa penelitian ini penting untuk dilakukan."

### Template Penambahan Data ke Latar Belakang
```
Berdasarkan data [Lembaga/Sumber Resmi, Tahun], [fakta kuantitatif spesifik, mis: "terdapat X juta
[entitas] yang mengalami [masalah]"], dengan pertumbuhan [Y]% per tahun dalam [periode].
Kondisi ini menunjukkan bahwa [interpretasi relevansi ke masalah penelitian].

Penelitian [Author, Tahun] menemukan bahwa [temuan yang mendukung urgensitas masalah].
Namun, [keterbatasan pendekatan yang sudah ada] — yang menjustifikasi penelitian ini.
```
### Sumber Pencarian Data
- **BPS**: bps.go.id (data Indonesia)
- **WHO/Bank Dunia**: untuk topik kesehatan/ekonomi
- **Kominfo/BSSN**: untuk topik teknologi/keamanan
- **Google Scholar** (keyword: "survey [topik] Indonesia 2022-2025")

---

## PAKET 2 — Gap Penelitian yang Kuat (Bab 2)

### Keburukan yang Memotivasi
"Gap yang terlalu generik ('belum ada yang menggunakan dataset ini') tidak memiliki kekuatan argumentatif untuk membenarkan penelitian baru — penguji dapat menunjukkan bahwa banyak penelitian yang sudah ada menggunakan dataset serupa, dan tanpa gap yang spesifik dan terbukti dari tabel perbandingan, seluruh klaim novelty runtuh."

### Template Gap Penelitian yang Kuat
```
Berdasarkan kajian terhadap [N] penelitian terdahulu yang dirangkum dalam Tabel 2.[X],
ditemukan beberapa kesenjangan yang belum diatasi:

1. **Gap Metodologi**: Penelitian [Author1, Tahun] dan [Author2, Tahun] menggunakan [metode A]
namun terbatas pada [konteks/kondisi spesifik]. Akibatnya, [konsekuensi spesifik yang
relevan dengan problem ini].

2. **Gap Data**: Dari seluruh penelitian yang dikaji, tidak ada yang menggunakan [karakteristik
data spesifik] yang merepresentasikan [konteks target penelitian ini]. Penelitian dengan
data [karakteristik yang berbeda] tidak dapat langsung digeneralisasi karena [alasan teknis].

3. **Gap Evaluasi**: [Author3, Tahun] hanya mengevaluasi menggunakan [metrik A] tanpa
mempertimbangkan [metrik B yang relevan untuk kasus imbalanced/kondisi tertentu], sehingga
performa dalam kondisi [kondisi yang tidak dievaluasi] belum diketahui.

Penelitian ini mengisi ketiga gap tersebut dengan [kontribusi spesifik], yang berbeda dari
penelitian terdahulu dalam hal [diferensiasi yang dapat diverifikasi dari tabel].
```

---

## PAKET 3 — Transformasi Reporting menjadi Analisis (Bab 4)

### Keburukan yang Memotivasi
"Pembahasan yang hanya mendeskripsikan angka tanpa menjelaskan kausalitas tidak menghasilkan pengetahuan baru — pembaca sudah bisa membaca angka dari tabel; yang dibutuhkan adalah interpretasi mekanistik yang menjelaskan 'mengapa', dan tanpa ini, Bab 4 tidak memiliki kontribusi intelektual yang dapat diklaim sebagai penelitian ilmiah."

### Sebelum (Reporting — Tidak Memadai)
```
"Dari Tabel 4.1, model CNN mencapai akurasi 87.3% sedangkan model SVM mencapai 82.1%.
Hal ini menunjukkan bahwa CNN lebih baik dari SVM."
```

### Sesudah (Analisis — Memadai secara Akademis)
```
"Model CNN mencapai akurasi 87.3% — lebih tinggi 5.2 poin persentase dibandingkan SVM
(82.1%). Perbedaan performa ini dapat dijelaskan oleh kemampuan convolutional layer dalam
mengekstrak fitur hierarki secara otomatis dari data [jenis data], tanpa memerlukan feature
engineering manual seperti yang diperlukan SVM [rujuk Bab 2.X tentang arsitektur CNN].

Hasil ini konsisten dengan temuan [Author, Tahun] yang melaporkan keunggulan CNN sebesar
[X]% atas SVM pada dataset [nama] dengan karakteristik serupa [jenis data yang mirip].

Namun perlu dicatat bahwa keunggulan CNN lebih rendah pada kelas [nama kelas] (F1:
[X]% vs SVM: [Y]%, lihat Gambar 4.X confusion matrix) — kemungkinan akibat kurangnya
representasi kelas tersebut dalam data training ([Z] sampel dari total [N] sampel). Ini
menjadi salah satu keterbatasan yang dibahas di Bab 5."
```

### Formula Analisis (5 Komponen)
1. **Angka + Perbandingan**: "[Metode X] mencapai [nilai] — lebih [tinggi/rendah] [selisih] dari [baseline/pembanding]."
2. **Mekanisme Kausal**: "Perbedaan ini dapat dijelaskan oleh [mekanisme teknis spesifik]."
3. **Rujukan Teori**: "Hal ini konsisten dengan [teori/mekanisme di Bab 2.X] yang memprediksi bahwa..."
4. **Kontekstualisasi Literatur**: "Hasil ini [konsisten dengan/berbeda dari] [Author, Tahun] yang menemukan..."
5. **Batas & Keterbatasan**: "Namun, [kondisi batas] di mana [keunggulan ini tidak berlaku/berkurang]."

---

## PAKET 4 — Keterbatasan & Saran yang Akademis (Bab 5)

### Keburukan yang Memotivasi
"Absennya keterbatasan yang jujur menunjukkan kurangnya self-awareness ilmiah yang merupakan kompetensi akademis fundamental — penguji yang tidak menemukan keterbatasan di Bab 5 akan justru lebih agresif mencari celah, dan mahasiswa yang tidak dapat mengakui keterbatasan penelitiannya tidak menunjukkan kematangan intelektual yang diharapkan dari lulusan perguruan tinggi."

### Template Keterbatasan yang Akademis
```
Penelitian ini memiliki beberapa keterbatasan yang perlu diakui:

1. **Keterbatasan Data**: Dataset yang digunakan ([nama], [N] sampel dari [sumber])
terbatas pada [konteks spesifik: domain/periode/wilayah]. Generalisasi hasil ke
[konteks yang berbeda] memerlukan validasi tambahan, mengingat bahwa [alasan teknis
mengapa domain/kondisi berbeda mungkin menghasilkan hasil berbeda].

2. **Keterbatasan Metodologi**: [Metode yang digunakan] memiliki asumsi [X] yang mungkin
tidak selalu terpenuhi dalam kondisi [kondisi spesifik]. Khususnya, [karakteristik
spesifik data atau problem yang mungkin melanggar asumsi ini].

3. **Keterbatasan Evaluasi**: Evaluasi dilakukan terbatas pada [dimensi yang dievaluasi]
tanpa mempertimbangkan [aspek yang belum dievaluasi: mis. inference latency, model size,
robustness terhadap adversarial input, fairness across demographic groups].

4. **Keterbatasan Generalisasi**: Mengingat eksperimen dilakukan dalam kondisi [kondisi]
dengan data [karakteristik], hasil yang dicapai mungkin bersifat [domain/context-specific]
dan memerlukan fine-tuning untuk diterapkan di [konteks yang berbeda].
```

### Template Saran yang Spesifik
```
Berdasarkan keterbatasan di atas, beberapa arah penelitian lanjutan disarankan:

1. **Mengatasi Keterbatasan 1 (Data)**: Menggunakan dataset [nama spesifik, mis: SemEval 2024
Task X / COCO 2023 / dataset publik Y] dari [sumber URL] yang mencakup [karakteristik
yang lebih beragam]. Dengan minimal [N] sampel per kelas, model dapat berpotensi mencapai
generalisasi yang lebih baik [merujuk ke penelitian yang membuktikan ini].

2. **Mengatasi Keterbatasan 2 (Metode)**: Mengeksplorasi [metode alternatif spesifik, mis:
Graph Neural Network untuk data dengan struktur relasional] yang tidak memiliki asumsi
[X yang membatasi metode saat ini]. Referensi awal: [Author, Tahun].

3. **Memperluas Dimensi Evaluasi**: Menambahkan evaluasi [aspek spesifik, mis: inference
time untuk deployment mobile, evaluasi fairness menggunakan metrik demographic parity]
untuk membuat penelitian lebih aplikatif dalam konteks nyata.

4. **Validasi Lapangan** (jika penelitian berbasis sistem): Melakukan user study dengan
[N] pengguna nyata dari [kelompok target] menggunakan protokol [usability testing /
A/B testing] untuk memvalidasi kegunaan praktis di luar kondisi laboratorium.
```

---

## PAKET 5 — Latihan Q&A Sidang (Berdasarkan Temuan Review)

### Keburukan yang Memotivasi
"Mahasiswa yang tidak mempersiapkan jawaban terhadap kelemahan yang sudah teridentifikasi akan terpukau di sidang ketika penguji menyerang tepat di titik tersebut — ketidaksiapan menghadapi pertanyaan yang dapat diprediksi menunjukkan kurangnya refleksi terhadap penelitian sendiri, yang merupakan indikator kurangnya ownership intelektual terhadap karya sendiri."

### Format Q&A yang Disiapkan Reviewer (Wajib Diisi Spesifik)
```
LATIHAN PERTANYAAN SIDANG
==========================
Naskah: [JUDUL PENELITIAN]
Berdasarkan temuan review tanggal: [TANGGAL]

Q1: [Pertanyaan tentang kelemahan terbesar yang ditemukan review]
A1: [2-3 kalimat jawaban yang jujur dan defensible. Contoh:
     "Anda benar bahwa dataset yang digunakan terbatas pada [X] sampel.
      Kami mengakui keterbatasan ini dan mencoba mengatasinya dengan [strategi, mis: augmentasi].
      Untuk penelitian selanjutnya, dataset [nama] dari [sumber] adalah kandidat yang tepat."]

Q2: [Pertanyaan tentang justifikasi pemilihan metode]
A2: [Kutip paper yang membuktikan kecocokan metode dengan karakteristik problem]

Q3: [Pertanyaan tentang hasil yang paling mengejutkan atau anomali]
A3: [Penjelasan teknis yang dapat dipertahankan]

Q4: [Pertanyaan tentang perbedaan hasil dengan penelitian terdahulu]
A4: [Analisis perbedaan kondisi eksperimen yang dapat menjelaskan perbedaan hasil]

Q5: [Pertanyaan tentang generalisasi hasil]
A5: [Akui batas generalisasi; sebutkan kondisi yang perlu dipenuhi]

Q6: [Pertanyaan tentang keterbatasan metodologis]
A6: [Akui keterbatasan; tunjukkan bahwa anda menyadarinya; sebutkan penelitian lanjutan]

Q7: [Pertanyaan tentang kontribusi vs penelitian yang sudah ada]
A7: [Bedakan dengan jelas dari tabel perbandingan di Bab 2]

Q8: [Pertanyaan spesifik tentang detail teknis yang paling rentan]
A8: [Jawaban teknis yang terdokumentasi di naskah]

TIPS SIDANG:
• Angka konkret dari Bab 4 harus selalu tersedia di ujung lidah
• Jika tidak tahu: "Itu merupakan arah penelitian lanjutan yang menarik yang belum dapat
   kami jawab dalam scope penelitian ini."
• Akui keterbatasan dulu, baru jelaskan apa yang dilakukan untuk mengatasinya
• Jangan overclaim di sidang: selalu awali klaim dengan konteks scope
```

---

## PAKET 6 — Catatan untuk Pembimbing (Kasus Serius)

### Kondisi Penggunaan
Digunakan hanya jika ditemukan masalah yang memerlukan keputusan di luar kapasitas mahasiswa:
- Data leakage yang mengakibatkan hasil tidak valid
- Scope penelitian yang tidak realistis untuk jenjang dan waktu
- Dugaan integritas referensi
- Gap metodologis fundamental yang memerlukan re-desain

### Template Catatan Pembimbing
```
CATATAN UNTUK PEMBIMBING
=========================
Naskah: [JUDUL]
Tanggal Review: [TANGGAL]
Direview oleh: AI Thesis Reviewer v4.0 (Konfirmasi dengan review manual)

ISU KRITIS YANG MEMERLUKAN PERHATIAN PEMBIMBING:

[ISU 1] — Level: FATAL
Deskripsi Teknis: [penjelasan yang tepat dan terukur]
Konsekuensi jika Tidak Diatasi: [apa yang terjadi di sidang atau terhadap validitas]
Rekomendasi: [tindakan spesifik yang disarankan]
Estimasi Waktu Perbaikan: [X hari/minggu]

[ISU 2] — jika ada
...

Rekomendasi Keseluruhan:
[ ] Siap sidang (0 FATAL, ≤1 MAYOR)
[ ] Revisi minor sebelum sidang (0 FATAL, 2-3 MAYOR) — Estimasi: [X] hari
[ ] Revisi mayor sebelum sidang (0 FATAL, ≥4 MAYOR) — Estimasi: [X] minggu
[ ] Tunda sidang (ada FATAL yang belum terselesaikan) — Diperlukan revisi fundamental
```

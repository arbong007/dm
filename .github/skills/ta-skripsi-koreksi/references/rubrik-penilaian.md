# Rubrik Penilaian Akademik — v4 Komprehensif

> Rubrik ini digunakan di Step 6 pipeline review untuk menghasilkan estimasi skor naskah.
> Reviewer WAJIB menyertakan minimal 1 kalimat Keburukan untuk setiap grup yang dinilai.

---

## Struktur Penilaian: 4 Grup Utama (G1–G4)

### Gambaran Umum

| Grup | Nama | Bobot Total | Fokus |
|---|---|---|---|
| G1 | Pendahuluan & Kerangka Ilmiah | 20 | Bab 1, 2, kerangka konseptual |
| G2 | Metodologi & Perancangan | 25 | Bab 3, desain penelitian |
| G3 | Implementasi & Hasil | 25 | Bab 4, kode/sistem (Mode B) |
| G4 | Kesimpulan & Kontribusi | 10 | Bab 5, kontribusi keseluruhan |
| G5* | Presentasi & Komunikasi | (tidak dihitung dari naskah) | — |
| **Total** | | **80** | |

**Normalisasi ke 100**: Skor Akhir = (Total G1+G2+G3+G4) / 80 × 100

---

## G1 — Pendahuluan & Kerangka Ilmiah (Bobot: 20)

### Item Penilaian G1

| Kode | Item | Bobot | Skala |
|---|---|---|---|
| G1.1 | Kualitas Latar Belakang (argumentasi, data, urgensi) | 5 | 1–5 |
| G1.2 | Rumusan Masalah (spesifik, operasional, konsisten) | 3 | 1–5 |
| G1.3 | Tujuan Penelitian (SMART, kata kerja operasional) | 3 | 1–5 |
| G1.4 | Tinjauan Pustaka (kedalaman, kemutakhiran, analisis kritis) | 5 | 1–5 |
| G1.5 | Identifikasi Gap & Posisi Penelitian | 4 | 1–5 |

### Panduan Penilaian G1

**G1.1 — Kualitas Latar Belakang**
| Nilai | Deskripsi |
|---|---|
| 5 | Latar belakang membangun argumen deduktif yang kuat dengan minimal 3 data kuantitatif dari sumber Tier 1-2; transisi dari konteks umum ke masalah spesifik sangat mulus |
| 4 | Ada data kuantitatif (1-2 fakta) dan argumen yang cukup baik meski ada beberapa lemah |
| 3 | Ada argumen tapi tanpa data/fakta yang cukup; masalah teridentifikasi tapi tidak spesifik |
| 2 | Latar belakang generik; kurang argumen atau data spesifik; masalah tidak jelas |
| 1 | Tidak ada argumen ilmiah; hanya narasi umum tanpa substansi |
**Keburukan Nilai 1-2**: Latar belakang yang tidak didukung data dan argumen yang lemah gagal meyakinkan penguji bahwa penelitian ini perlu dilakukan — tanpa justifikasi urgensi yang kuat, seluruh bangunan argumen penelitian runtuh dari fondasi.

**G1.4 — Tinjauan Pustaka**
| Nilai | Deskripsi |
|---|---|
| 5 | ≥15 paper relevan (S1) / ≥25 (S2); ≥60% dari 5 tahun terakhir; analisis kritis dengan tabel perbandingan; gap diderivasi secara logis |
| 4 | Jumlah memadai; mayoritas terkini; ada tabel perbandingan; gap cukup jelas |
| 3 | Jumlah cukup tapi kualitas analisis dangkal; gap tidak diderivasi dari tabel |
| 2 | Sedikit paper; tidak terkini; tidak ada tabel; listing abstrak bukan analisis |
| 1 | Sangat sedikit atau tidak ada penelitian terdahulu yang relevan |
**Keburukan Nilai 1-2**: Tinjauan pustaka yang dangkal membuat seluruh justifikasi kebaruan penelitian tidak memiliki basis yang dapat diverifikasi — penguji dapat menunjukkan paper-paper yang tidak dikaji dan mempertanyakan apakah masalah yang diteliti sebenarnya sudah terpecahkan.

**G1.5 — Identifikasi Gap**
| Nilai | Deskripsi |
|---|---|
| 5 | Gap spesifik dan dapat dilacak ke tabel perbandingan; differensiasi penelitian ini dinyatakan eksplisit dengan bukti |
| 4 | Gap cukup spesifik; ada differensiasi meski tidak sepenuhnya didukung tabel |
| 3 | Gap ada tapi terlalu umum; differensiasi tidak jelas |
| 2 | Gap klaim tanpa bukti dari literatur ("belum ada yang...") |
| 1 | Tidak ada identifikasi gap sama sekali |
**Keburukan Nilai 1-2**: Tanpa gap yang dapat dibuktikan dari literatur, penelitian tidak memiliki justifikasi keberadaannya dalam lanskap keilmuan — ini adalah kegagalan argumentatif paling mendasar dalam konteks penelitian ilmiah.

---

## G2 — Metodologi & Perancangan (Bobot: 25)

| Kode | Item | Bobot | Skala |
|---|---|---|---|
| G2.1 | Kesesuaian Metode dengan Problem | 6 | 1–5 |
| G2.2 | Kelengkapan & Transparansi Prosedur | 5 | 1–5 |
| G2.3 | Strategi Evaluasi & Metrik | 6 | 1–5 |
| G2.4 | Kualitas Rencana Data & Preprocessing | 4 | 1–5 |
| G2.5 | Baseline & Komparasi | 4 | 1–5 |

**G2.1 — Kesesuaian Metode**
| Nilai | Deskripsi |
|---|---|
| 5 | Metode dipilih dengan justifikasi berbasis literatur yang kuat; asumsi metode sesuai karakteristik data dan problem |
| 4 | Metode sesuai dengan justifikasi yang cukup; ada 1-2 kelemahan kecil |
| 3 | Metode bisa diargumentasikan sesuai tapi justifikasi lemah |
| 2 | Metode tidak optimal untuk problem; pemilihan tidak terjustifikasi |
| 1 | Metode jelas tidak sesuai jenis problem (mis: regresi untuk output biner) |
**Keburukan Nilai 1-2**: Metode yang tidak sesuai problem menghasilkan eksperimen yang fundamentally flawed — apapun hasil numerik yang dilaporkan tidak memiliki validitas ekologi karena metode yang salah tidak dapat memberikan jawaban yang benar untuk pertanyaan yang diajukan.

**G2.3 — Strategi Evaluasi & Metrik**
| Nilai | Deskripsi |
|---|---|
| 5 | Metrik sesuai jenis problem; strategi validasi robust (k-fold/multi-run); rencana uji signifikansi ada |
| 4 | Metrik sesuai; strategi validasi cukup; belum ada rencana uji signifikansi |
| 3 | Metrik cukup tapi ada kelemahan (mis: hanya accuracy untuk data imbalanced ringan) |
| 2 | Metrik tidak sesuai (accuracy untuk data imbalanced berat) atau tidak ada cross-validation |
| 1 | Tidak ada rencana evaluasi yang jelas; tidak menyebut metrik sama sekali |
**Keburukan Nilai 1-2**: Strategi evaluasi yang tidak sesuai menghasilkan ukuran performa yang menyesatkan — melaporkan angka yang tampak bagus dari metrik yang salah lebih berbahaya daripada tidak melaporkan sama sekali, karena menciptakan kesan keberhasilan yang tidak berdasar.

**G2.5 — Baseline & Komparasi**
| Nilai | Deskripsi |
|---|---|
| 5 | Ada baseline naif + ≥2 metode pembanding yang relevan dengan justifikasi pemilihannya |
| 4 | Ada 1 baseline naif + 1 metode pembanding |
| 3 | Ada 1 metode pembanding tapi tidak ada baseline naif |
| 2 | Baseline direncanakan tapi hanya samar-samar |
| 1 | Tidak ada rencana baseline atau pembanding sama sekali |
**Keburukan Nilai 1-2**: Tanpa baseline, seluruh klaim kontribusi metodologis tidak dapat diverifikasi secara kuantitatif — penelitian mengklaim kontribusi tanpa memberikan titik referensi yang memungkinkan komunitas ilmiah menilai besarnya peningkatan yang dicapai.

---

## G3 — Implementasi & Hasil (Bobot: 25)

| Kode | Item | Bobot | Skala |
|---|---|---|---|
| G3.1 | Kelengkapan & Konsistensi Implementasi | 5 | 1–5 |
| G3.2 | Kualitas Pelaporan Hasil (kelengkapan, visualisasi) | 6 | 1–5 |
| G3.3 | Kedalaman Analisis & Pembahasan | 8 | 1–5 |
| G3.4 | Koherensi Hasil dengan Metodologi | 6 | 1–5 |

**G3.3 — Kedalaman Analisis (bobot tertinggi dalam G3)**
| Nilai | Deskripsi |
|---|---|
| 5 | Setiap hasil dianalisis kausalitas; terhubung ke teori Bab 2; dibandingkan dengan penelitian terdahulu; ada error analysis; anomali diinvestigasi |
| 4 | Sebagian besar hasil dianalisis dengan baik; ada beberapa yang hanya deskriptif |
| 3 | Campuran: beberapa dianalisis, banyak yang hanya deskriptif (angka dilaporkan tanpa "mengapa") |
| 2 | Dominasi deskriptif; hampir tidak ada interpretasi kausalitas |
| 1 | Bab 4 hanya listing angka dari tabel tanpa satu pun kalimat interpretasi |
**Keburukan Nilai 1-2**: Pembahasan yang hanya deskriptif menunjukkan bahwa peneliti tidak memahami penelitiannya sendiri secara mendalam — penguji yang menggali lebih dalam akan menemukan bahwa mahasiswa tidak dapat menjelaskan mengapa suatu hasil terjadi, yang merupakan kegagalan kompetensi intelektual yang sulit diperbaiki di saat sidang.

**G3.4 — Koherensi Hasil dengan Metodologi**
| Nilai | Deskripsi |
|---|---|
| 5 | Semua rencana Bab 3 dilaksanakan dan dilaporkan; tidak ada yang hilang atau berbeda tanpa penjelasan |
| 4 | Hampir semua dilaksanakan; ada 1-2 perbedaan kecil dengan penjelasan yang cukup |
| 3 | Ada perbedaan Bab 3 vs 4 yang diakui tapi tidak dijelaskan dengan baik |
| 2 | Ada perbedaan signifikan Bab 3 vs 4 tanpa penjelasan (langkah hilang, metode berbeda) |
| 1 | Bab 4 melaporkan sesuatu yang berbeda dari Bab 3 secara fundamental tanpa penjelasan |
**Keburukan Nilai 1-2**: Inkoherensi antara metodologi dan hasil menunjukkan bahwa salah satu dari keduanya ditulis setelah yang lain selesai, bukan sebagai bagian dari perencanaan yang terintegrasi — ini merupakan bukti bahwa penelitian tidak dilaksanakan sesuai rencana dan laporan tidak mencerminkan proses riset yang sebenarnya.

---

## G4 — Kesimpulan & Kontribusi (Bobot: 10)

| Kode | Item | Bobot | Skala |
|---|---|---|---|
| G4.1 | Korespondensi Tujuan-Kesimpulan | 4 | 1–5 |
| G4.2 | Pengakuan Keterbatasan & Kualitas Saran | 3 | 1–5 |
| G4.3 | Kejelasan Kontribusi Keseluruhan | 3 | 1–5 |

**G4.1 — Korespondensi Tujuan-Kesimpulan**
| Nilai | Deskripsi |
|---|---|
| 5 | Semua tujuan dijawab secara eksplisit dengan angka konkret dari Bab 4; tidak ada tujuan yang tertinggal |
| 4 | Semua tujuan dijawab tapi 1-2 tanpa angka pendukung yang spesifik |
| 3 | Mayoritas tujuan dijawab; ada 1 yang tidak terjawab atau implisit |
| 2 | Ada ≥2 tujuan tidak terjawab; atau kesimpulan hanya merangkum metodologi |
| 1 | Kesimpulan tidak menjawab satupun tujuan secara eksplisit |
**Keburukan Nilai 1-2**: Kesimpulan yang tidak menjawab tujuan adalah bukti formal bahwa penelitian tidak tuntas secara ilmiah — tidak ada argumen yang dapat membela penelitian yang tidak memenuhi kontrak ilmiahnya sendiri; ini adalah kegagalan yang paling langsung dapat diidentifikasi dalam 2 menit pertama sidang.

**G4.3 — Kejelasan Kontribusi**
| Nilai | Deskripsi |
|---|---|
| 5 | Kontribusi teoritis dan praktis dinyatakan dengan jelas dan proporsional dengan hasil yang dicapai |
| 4 | Kontribusi dinyatakan; ada minor overclaiming atau underclaiming |
| 3 | Kontribusi ada tapi tidak dinyatakan secara eksplisit; harus disimpulkan dari teks |
| 2 | Overclaiming yang signifikan atau kontribusi tidak dapat diklaim berdasarkan hasil yang ada |
| 1 | Tidak ada pernyataan kontribusi sama sekali |
**Keburukan Nilai 1-2**: Kontribusi yang tidak dapat diklaim secara proporsional dengan hasil yang dicapai menunjukkan ketidakmampuan peneliti dalam menempatkan karyanya dalam konteks keilmuan yang lebih luas — tanpa kejelasan kontribusi, penelitian tidak meninggalkan warisan ilmiah yang dapat diakumulasi oleh komunitas.

---

## Formula Skor Akhir

```
GroupScore_G1 = (G1.1×5 + G1.2×3 + G1.3×3 + G1.4×5 + G1.5×4) / 20
GroupScore_G2 = (G2.1×6 + G2.2×5 + G2.3×6 + G2.4×4 + G2.5×4) / 25
GroupScore_G3 = (G3.1×5 + G3.2×6 + G3.3×8 + G3.4×6) / 25
GroupScore_G4 = (G4.1×4 + G4.2×3 + G4.3×3) / 10

RawScore  = GroupScore_G1×20 + GroupScore_G2×25 + GroupScore_G3×25 + GroupScore_G4×10
FinalScore = (RawScore / 80) × 20   [dalam skala 0-20, setara bobot naskah di banyak institusi]
            atau
FinalScore = (RawScore / 80) × 100  [dalam skala 0-100]
```

## Tabel Konversi Nilai

| Rentang Skor (0-100) | Nilai Huruf | Interpretasi |
|---|---|---|
| 85–100 | A | Sangat Baik — naskah siap sidang, kontribusi jelas |
| 75–84 | AB | Baik — siap sidang dengan perbaikan minor |
| 65–74 | B | Cukup — perlu revisi mayor sebelum sidang |
| 55–64 | BC | Kurang — revisi signifikan diperlukan, pertimbangkan tunda sidang |
| <55 | C / Tidak Lulus | Perlu revisi mendasar; tidak disarankan maju sidang dalam kondisi ini |

> **Catatan**: Jika ada ≥1 item FATAL yang belum terselesaikan, nilai maksimal adalah BC
> terlepas dari skor kalkulasi. FATAL harus bersih sebelum skor dapat diinterpretasikan penuh.
```

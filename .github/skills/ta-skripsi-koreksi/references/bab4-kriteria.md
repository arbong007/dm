# Kriteria Review Bab 4 — Hasil dan Pembahasan (v4 Komprehensif Akademik)

> **Prinsip**: Bab 4 adalah inti kontribusi ilmiah. Kualitas pembahasan — bukan sekadar angka —
> yang menentukan apakah penelitian menghasilkan pengetahuan baru atau hanya laporan teknis.

---

## 4.1 Deskripsi Data Aktual

### Standar Akademik Global
Sebelum melaporkan hasil model, kondisi data aktual yang digunakan harus dilaporkan. Ini adalah syarat transparansi ilmiah dan memungkinkan pembaca menilai validitas konteks eksperimen.

### 4.1-A — Statistik Deskriptif Dataset yang Digunakan
**Standar**: Distribusi data aktual (setelah cleaning), statistik deskriptif fitur, dan ukuran split yang digunakan harus dilaporkan.
**Checklist**: [ ] Ada tabel/narasi statistik deskriptif data aktual; jumlah train/val/test dilaporkan
**Keburukan**: Melompat langsung ke hasil model tanpa melaporkan kondisi data aktual menjadikan semua hasil tidak dapat dikontekstualisasikan — pembaca dan penguji tidak tahu apakah data yang digunakan seimbang, cukup besar, atau telah diproses dengan benar, sehingga tidak ada basis untuk menilai apakah performa yang dilaporkan merupakan hasil dari model yang baik atau sekedar artefak karakteristik data.
**Rekomendasi**: Tambahkan sub-bab "Deskripsi Data" atau "Persiapan Eksperimen" di awal Bab 4 yang melaporkan: n per kelas (untuk klasifikasi), statistik deskriptif fitur numerik, jumlah sampel aktual train/val/test.

### 4.1-B — Lingkungan Eksperimen Aktual
**Standar**: Hardware dan software yang benar-benar digunakan dalam eksperimen harus dilaporkan.
**Checklist**: [ ] Hardware aktual (CPU/GPU, RAM) dan software (Python versi, library versi) dilaporkan
**Keburukan**: Tanpa spesifikasi lingkungan aktual, hasil tidak dapat direproduksi secara independen — perbedaan hardware (CPU vs GPU) dan versi library dapat menghasilkan perbedaan numerik yang signifikan, menjadikan klaim performa tidak dapat diverifikasi oleh peneliti lain.
**Rekomendasi**: Tambahkan tabel environment: Platform | OS | CPU/GPU | RAM | Python | Framework versi | Training time.

---

## 4.2 Penyajian Hasil Eksperimen

### 4.2-A — Kelengkapan Pelaporan Metrik
**Standar**: SEMUA metrik yang direncanakan di Bab 3 harus dilaporkan di Bab 4 tanpa pengecualian.
**Checklist**: [ ] Setiap metrik yang dijanjikan di metodologi ada di hasil; tidak ada yang hilang
**Keburukan**: Metrik yang dijanjikan di metodologi tapi tidak dilaporkan di hasil menciptakan kecurigaan yang sangat kuat bahwa metrik tersebut disembunyikan karena hasilnya mengecewakan — ini adalah salah satu red flag terbesar dalam reviewing akademis dan dapat menyebabkan penguji mempertanyakan integritas seluruh eksperimen.
**Rekomendasi**: Audit: buat daftar semua metrik di Bab 3, pastikan setiap metrik ada nilainya di tabel Bab 4. Jika ada yang tidak dilaporkan, berikan penjelasan eksplisit mengapa.

### 4.2-B — Penyajian dalam Format Tabel
**Standar**: Hasil eksperimen harus disajikan dalam tabel yang terstruktur, bukan hanya narasi.
**Checklist**: [ ] Ada tabel hasil dengan kolom: metode, metrik 1, metrik 2, dst.
**Keburukan**: Hasil yang hanya disampaikan dalam narasi tanpa tabel sulit diverifikasi dan dibandingkan — pembaca tidak dapat dengan cepat menilai perbedaan performa antar metode, dan kesalahan numerik dalam narasi tidak mudah terdeteksi, melemahkan transparansi pelaporan hasil.
**Rekomendasi**: Standar tabel hasil: No | Metode | Accuracy | Precision | Recall | F1-Score | [metrik lain].

### 4.2-C — Visualisasi yang Tepat dan Wajib
**Standar**: Visualisasi tertentu adalah mandatory untuk jenis penelitian tertentu.
**Checklist wajib per jenis:**
- Klasifikasi: [ ] Confusion matrix, [ ] Grafik perbandingan antar metode
- Deep Learning: [ ] Kurva training/validation loss per epoch, [ ] Kurva akurasi per epoch
- Binary Classification: [ ] ROC curve + AUC
- Imbalanced: [ ] PR curve + PR-AUC
- Regresi: [ ] Scatter plot aktual vs prediksi
- Time series: [ ] Plot aktual vs prediksi timeline
**Keburukan**: Absennya visualisasi mandatory menciptakan celah dalam bukti visual yang seharusnya mendukung klaim numerik — confusion matrix yang tidak disertakan untuk klasifikasi, misalnya, menyembunyikan distribusi error per kelas yang dapat mengungkap kelemahan model yang tidak terlihat dari angka agregat, sehingga evaluasi menjadi tidak lengkap secara metodologis.
**Rekomendasi**: Gunakan panduan di atas sebagai checklist visual; pastikan setiap visualisasi memiliki caption yang informatif.

### 4.2-D — Hasil Baseline / Pembanding
**Standar**: Hasil semua baseline yang direncanakan di Bab 3 harus dilaporkan dalam tabel yang sama dengan hasil metode usulan.
**Checklist**: [ ] Hasil baseline dan metode pembanding ada dalam tabel yang sama
**Keburukan**: Melaporkan hasil metode usulan tanpa baseline menjadikan klaim "lebih baik" tidak berdasar — pernyataan "model mencapai akurasi 87%" tidak memiliki makna komparatif tanpa konteks: lebih baik dari apa? 87% bisa buruk jika baseline naif sudah mencapai 90%.
**Rekomendasi**: Sertakan dalam tabel: majority class baseline, metode standar/klasik, dan metode yang diusulkan. Beri tanda (*) atau bold untuk metode terbaik.

### 4.2-E — Konsistensi Angka
**Standar**: Nilai yang sama harus konsisten di tabel, grafik, narasi, dan Bab 5.
**Checklist**: [ ] Tidak ada inkonsistensi numerik antar penyajian yang berbeda
**Keburukan**: Inkonsistensi numerik antara tabel, grafik, dan narasi menunjukkan ketidaktelitian yang serius dalam penyusunan laporan — selain merusak kepercayaan terhadap data yang dilaporkan, penguji yang menemukan inkonsistensi akan mempertanyakan apakah angka mana yang benar dan menyelidiki kemungkinan manipulasi data.
**Rekomendasi**: Gunakan sumber tunggal (satu script/notebook) untuk semua angka dan pastikan export nilai ke tabel/grafik/narasi dilakukan secara otomatis.

---

## 4.3 Analisis dan Interpretasi Hasil

### Standar Akademik Global
Analisis adalah yang membedakan skripsi berkualitas tinggi dari yang biasa. Melaporkan angka adalah deskripsi; menjelaskan mengapa adalah analisis; menghubungkan ke teori adalah kontribusi ilmiah.

### 4.3-A — Analisis Kausalitas (Bukan Hanya Deskripsi)
**Standar**: Setiap hasil harus dijelaskan mengapa, bukan hanya dilaporkan apa nilainya.
**Checklist**: [ ] Setiap hasil utama diikuti penjelasan kausalitas (mengapa A lebih baik dari B)
**Keburukan**: Pembahasan yang hanya mendeskripsikan angka tanpa menjelaskan kausalitas tidak menghasilkan pengetahuan baru — pembaca sudah bisa membaca angka dari tabel; yang dibutuhkan adalah interpretasi yang menjelaskan mekanisme di balik hasil, dan tanpa ini, Bab 4 tidak memiliki kontribusi intelektual yang dapat diklaim sebagai penelitian ilmiah.
**Rekomendasi**: Untuk setiap temuan utama, gunakan formula: "[Hasil X] terjadi karena [mekanisme teknis Y], yang konsisten dengan [teori/penelitian Z dari Bab 2]."

### 4.3-B — Kaitan dengan Teori di Bab 2
**Standar**: Pembahasan harus menghubungkan temuan dengan teori dan penelitian terdahulu yang dikutip di Bab 2.
**Checklist**: [ ] Ada referensi eksplisit ke teori/paper Bab 2 dalam pembahasan
**Keburukan**: Pembahasan yang terisolasi dari teori Bab 2 menunjukkan bahwa Bab 2 dan Bab 4 ditulis secara terpisah — ini adalah inkoherensi struktural yang menunjukkan bahwa peneliti tidak menggunakan teori sebagai kerangka interpretasi, menjadikan kontribusi penelitian tidak dapat ditempatkan dalam konteks pengetahuan yang lebih luas.
**Rekomendasi**: Di setiap paragraf pembahasan utama, tambahkan: "Hasil ini [konsisten dengan / berbeda dari] temuan [Author, Tahun] yang menemukan bahwa... Perbedaan ini dapat dijelaskan oleh..."

### 4.3-C — Perbandingan dengan State-of-the-Art
**Standar**: Hasil penelitian harus dikontekstualisasikan dengan hasil terbaik yang dilaporkan oleh penelitian terdahulu.
**Checklist**: [ ] Ada tabel atau narasi perbandingan dengan penelitian terdahulu
**Keburukan**: Hasil tanpa kontekstualisasi dengan state-of-the-art tidak memungkinkan penilaian kontribusi aktual penelitian — angka 87% akurasi tidak memiliki makna relatif tanpa mengetahui bahwa hasil terbaik di literatur adalah 92% atau 75%, dan tanpa perbandingan ini, klaim kontribusi menjadi tidak dapat diukur.
**Rekomendasi**: Buat tabel komparasi: Penelitian (Author, Tahun) | Dataset | Metode | Metrik | Hasil. Diskusikan mengapa penelitian ini lebih baik/lebih buruk/sebanding.

### 4.3-D — Analisis Anomali dan Hasil Tidak Terduga
**Standar**: Setiap hasil yang di luar ekspektasi (jauh lebih baik atau lebih buruk dari prediksi) harus dianalisis secara khusus.
**Checklist**: [ ] Ada analisis untuk setiap hasil yang anomali atau mengejutkan
**Keburukan**: Anomali yang tidak dianalisis adalah peluang yang terlewatkan sekaligus risiko integritas — hasil yang jauh lebih baik dari ekspektasi tanpa penjelasan teknis akan menimbulkan kecurigaan data leakage atau manipulasi; hasil yang jauh lebih buruk tanpa penjelasan menunjukkan bahwa peneliti tidak memahami kegagalan metodologinya.
**Rekomendasi**: Identifikasi minimal 1 anomali (jika ada) dan berikan penjelasan teknis yang dapat diverifikasi.

### 4.3-E — Analisis Overfitting/Underfitting
**Standar**: Untuk penelitian machine learning, gap antara training dan test performance harus dianalisis.
**Checklist**: [ ] Ada analisis gap training vs test performance; kurva learning disertakan (untuk deep learning)
**Keburukan**: Overfitting yang tidak diakui dan dianalisis adalah cacat metodologis yang serius — model yang overfit tidak memiliki kemampuan generalisasi yang diklaim, sehingga klaim kontribusi terhadap penyelesaian problem nyata menjadi tidak valid karena model hanya bekerja pada data training.
**Rekomendasi**: Tampilkan training vs test accuracy/loss; jika ada gap >10%, analisis penyebab (ukuran dataset, kompleksitas model, regularisasi) dan strategi mitigasi yang diterapkan.

---

## 4.4 Ablation Study / Analisis Komponen

### 4.4-A — Bukti Kontribusi Setiap Komponen
**Standar**: Untuk penelitian yang mengusulkan kombinasi komponen baru, ablation study membuktikan kontribusi masing-masing komponen.
**Checklist**: [ ] Ada ablation study jika penelitian mengklaim kontribusi kombinasi komponen
**Keburukan**: Klaim bahwa kombinasi A+B+C memberikan performa terbaik tanpa ablation study tidak dapat diverifikasi — tanpa menguji A saja, B saja, A+B, A+C, B+C, tidak ada cara untuk mengetahui komponen mana yang benar-benar berkontribusi, menjadikan klaim kontribusi teknis menjadi tidak bersubstansi.
**Rekomendasi**: Untuk setiap komponen yang diklaim berkontribusi, laporkan hasil dengan dan tanpa komponen tersebut dalam tabel ablation terpisah.

---

## 4.5 Analisis Error / Kasus Kegagalan

### 4.5-A — Identifikasi Kasus Kegagalan
**Standar**: Penelitian yang baik tidak hanya merayakan keberhasilan — ia memahami di mana dan mengapa model gagal.
**Checklist**: [ ] Ada minimal 3 contoh kasus di mana model gagal (false positive/negative/error besar)
**Keburukan**: Tanpa error analysis, peneliti menunjukkan pemahaman yang tidak lengkap tentang perilaku model — penguji yang meminta "tunjukkan contoh di mana model Anda salah" tidak dapat dijawab, dan tanpa pemahaman kegagalan, saran penelitian lanjutan di Bab 5 menjadi generik dan tidak berdasarkan temuan nyata.
**Rekomendasi**: Identifikasi pola kegagalan: tipe data apa yang paling sering salah diprediksi? Apa karakteristiknya? Mengapa model kesulitan dengan kasus tersebut?

---

## Pola Kegagalan Khas Bab 4

| Pola | Keburukan Akademis | Level |
|---|---|---|
| Number Dump | Tabel penuh angka tanpa interpretasi — Bab 4 menjadi lampiran angka yang tidak menghasilkan pengetahuan baru | 🔴 FATAL |
| Cherry Picking | Hanya konfigurasi terbaik dilaporkan — menyembunyikan eksperimen yang gagal menciptakan gambaran performa yang optimistis secara artifisial | 🟠 MAYOR |
| Metric Swap | Metrik di Bab 4 berbeda dari Bab 3 — menimbulkan kecurigaan bahwa metrik asli mengecewakan dan diganti | 🔴 FATAL |
| Overfit Blindness | Training 98% vs test 65% tanpa komentar — menunjukkan bahwa peneliti tidak menyadari atau menyembunyikan masalah fundamental model | 🟠 MAYOR |
| Missing Baseline | Tidak ada pembanding — klaim performa tidak memiliki konteks evaluatif, menjadikan kontribusi tidak terukur | 🟠 MAYOR |
| Disconnected Discussion | Hasil dan pembahasan tidak terhubung ke teori — Bab 4 kehilangan dimensi ilmiah dan menjadi sekadar laporan teknis | 🟠 MAYOR |
| Fabrication Signal | Akurasi 99.9% atau loss konvergen dalam 2 epoch — tanpa penjelasan teknis, ini adalah red flag yang akan diselidiki secara intensif | 🟠 MAYOR |

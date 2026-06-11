# Kriteria Review Bab 3 — Metodologi Penelitian (v4 Komprehensif Akademik)

> **Prinsip**: Bab 3 adalah blueprint eksperimen ilmiah. Setiap kelemahan metodologis bukan hanya
> masalah teknis — ia adalah ancaman terhadap validitas, reproducibility, dan klaim kontribusi.

---

## 3.1 Desain Penelitian

### Standar Akademik Global
Desain penelitian mendefinisikan pendekatan epistemologis (kuantitatif/kualitatif/campuran) dan strategi investigasi (eksperimen, komparatif, pengembangan sistem, dsb). Desain yang tidak dinyatakan secara eksplisit menciptakan ambiguitas metodologis.

### 3.1-A — Pernyataan Jenis Penelitian
**Standar**: Jenis penelitian (eksperimen, komparatif, pengembangan sistem, studi kasus, dsb) harus dinyatakan eksplisit beserta justifikasinya.
**Checklist**: [ ] Jenis penelitian dinyatakan dan dijustifikasi
**Keburukan**: Tanpa pernyataan jenis penelitian yang eksplisit, evaluator tidak dapat menentukan standar evaluasi yang sesuai — sebuah penelitian pengembangan sistem dinilai berbeda dari penelitian eksperimen, dan ketidakjelasan jenis penelitian membuat kriteria keberhasilan menjadi ambigu secara akademis.
**Rekomendasi**: Nyatakan: "Penelitian ini merupakan penelitian [jenis] karena [alasan yang terhubung ke tujuan penelitian]." Gunakan taksonomi yang diakui (mis. Creswell, 2014).

### 3.1-B — Diagram Alur Penelitian (Flowchart)
**Standar**: Diagram alur yang menggambarkan keseluruhan proses penelitian dari input hingga output adalah standar minimum untuk skripsi CS.
**Checklist**: [ ] Ada flowchart yang menunjukkan alur keseluruhan penelitian
**Keburukan**: Metodologi tanpa diagram alur hanya berupa narasi yang sulit diikuti secara sistematis — penguji tidak dapat dengan mudah memverifikasi bahwa semua langkah yang dijanjikan benar-benar dilaksanakan, dan reproducibility penelitian menjadi sangat rendah karena tidak ada blueprint visual yang jelas.
**Rekomendasi**: Buat flowchart yang mencakup: pengumpulan data → preprocessing → modelling → evaluasi → analisis, dengan decision point jika ada.

---

## 3.2 Studi Literatur / Kajian Pustaka (dalam Metodologi)
**Standar**: Jika studi literatur adalah bagian dari metodologi (bukan hanya Bab 2), prosedur pencarian harus didokumentasikan.
**Checklist**: [ ] Protokol pencarian literatur terdokumentasi (jika relevan)
**Keburukan**: Kajian literatur tanpa protokol yang terdokumentasi tidak dapat direproduksi oleh peneliti lain — ini melanggar standar systematic review dan membuat klaim "komprehensif" dalam kajian literatur tidak dapat diverifikasi.
**Rekomendasi**: Dokumentasikan: database yang digunakan, keyword, periode pencarian, kriteria inklusi/eksklusi, dan jumlah hasil per tahap.

---

## 3.3 Data dan Sumber Data

### 3.3-A — Identifikasi Sumber Data
**Standar**: Sumber data harus dapat diverifikasi secara independen — ada URL, DOI, atau mekanisme akses yang jelas.
**Checklist**: [ ] Sumber data disebutkan dengan referensi yang dapat diverifikasi
**Keburukan**: Sumber data yang tidak dapat diverifikasi menjadikan eksperimen tidak dapat direproduksi — jika peneliti lain tidak dapat mengakses data yang sama, klaim hasil tidak dapat dikonfirmasi, yang merupakan pelanggaran prinsip reproducibility yang menjadi dasar sains modern.
**Rekomendasi**: Sertakan URL permanen: Kaggle (doi.org/...), UCI ML Repository, HuggingFace Datasets, atau repositori institusional.

### 3.3-B — Karakteristik dan Statistik Data
**Standar**: Ukuran dataset, distribusi kelas, tipe fitur, dan kondisi kualitas data harus dinyatakan di metodologi.
**Checklist**: [ ] N total sampel, distribusi kelas/kategori, jumlah fitur dinyatakan
**Keburukan**: Metodologi tanpa karakteristik data membuat pembaca tidak dapat menilai kesesuaian antara data dan metode yang digunakan — penguji tidak dapat memverifikasi apakah dataset cukup besar, representatif, atau sesuai untuk kompleksitas metode yang diklaim.
**Rekomendasi**: Tambahkan tabel statistik deskriptif data: jumlah sampel per kelas, jumlah fitur, tipe fitur (numerik/kategorikal/teks/citra), missing value rate awal.

### 3.3-C — Prosedur Pengumpulan Data (jika Data Primer)
**Standar**: Jika data dikumpulkan sendiri (survey, scraping, eksperimen), protokol pengumpulan harus terdokumentasi lengkap.
**Checklist**: [ ] Prosedur pengumpulan data terdokumentasi (jika data primer)
**Keburukan**: Prosedur pengumpulan yang tidak terdokumentasi menjadikan data tidak dapat direplikasi dan validitasnya tidak dapat diaudit — tanpa transparansi pengumpulan, penguji tidak dapat membedakan antara data yang dikumpulkan secara sistematis dan data yang dipilih secara convenient, yang merupakan perbedaan kritis dalam validitas eksternal.
**Rekomendasi**: Dokumentasikan: instrumen (kuesioner/API/scraping tool), periode pengumpulan, unit sampling, dan prosedur quality control.

### 3.3-D — Penanganan Imbalance (jika Relevan)
**Standar**: Jika dataset memiliki rasio kelas >3:1, strategi penanganan harus direncanakan di metodologi.
**Checklist**: [ ] Ada strategi penanganan class imbalance (jika dataset imbalanced)
**Keburukan**: Membawa data imbalanced ke model tanpa penanganan menghasilkan model yang bias terhadap kelas mayoritas — akurasi yang tinggi tidak berarti model berguna jika ia hanya memprediksi kelas dominan, dan tanpa penanganan ini, semua klaim performa menjadi menyesatkan secara statistik.
**Rekomendasi**: Pilih dan justifikasi strategi: SMOTE (oversampling), Random Under-sampling, kombinasi, atau class weighting. Jelaskan mengapa strategi tersebut dipilih untuk karakteristik data ini.

---

## 3.4 Preprocessing dan Persiapan Data

### 3.4-A — Missing Value Handling
**Standar**: Strategi penanganan nilai yang hilang harus dinyatakan beserta justifikasinya (deletion, imputation mean/median/mode, model-based imputation).
**Checklist**: [ ] Strategi missing value handling dinyatakan
**Keburukan**: Data dengan missing value yang tidak ditangani dapat menghasilkan error saat training atau bias sistematis dalam model — tanpa penanganan yang terdokumentasi, reviewer tidak dapat memverifikasi bahwa data yang digunakan bebas dari artefak yang dapat merusak hasil.
**Rekomendasi**: Dokumentasikan: persentase missing value per fitur, strategi yang dipilih, dan justifikasi pemilihan strategi tersebut.

### 3.4-B — Normalisasi/Standarisasi
**Standar**: Metode normalisasi (min-max, z-score, robust scaler) harus dipilih berdasarkan distribusi data dan sensitifitas algoritma terhadap skala.
**Checklist**: [ ] Metode normalisasi dinyatakan dan dijustifikasi (jika relevan)
**Keburukan**: Tidak melakukan normalisasi pada algoritma yang sensitif terhadap skala (SVM, KNN, neural network) menghasilkan performa yang jauh di bawah optimal dan bias terhadap fitur berskala besar — ini adalah kesalahan preprocessing fundamental yang dapat membatalkan validitas seluruh hasil eksperimen.
**Rekomendasi**: Gunakan z-score (StandardScaler) secara default; gunakan min-max jika distribusi sudah diketahui bounded; pastikan normalisasi hanya di-fit pada training data.

### 3.4-C — Pembagian Data (Train/Validation/Test Split)
**Standar**: Strategi pembagian data (hold-out, k-fold CV, nested CV) harus dinyatakan beserta rasionya dan justifikasi pemilihan.
**Checklist**: [ ] Strategi pembagian data dinyatakan dengan rasio yang jelas
**Keburukan**: Tidak adanya rencana pembagian data yang eksplisit adalah red flag metodologis terbesar — tanpa pemisahan training dan test set yang jelas, tidak ada cara untuk mengevaluasi kemampuan generalisasi model, menjadikan semua angka performa yang dilaporkan tidak valid sebagai bukti kemampuan prediktif.
**Rekomendasi**: Untuk dataset besar: stratified 70/15/15 atau 80/10/10. Untuk dataset kecil (<500): stratified k-fold (k=5 atau 10) dengan test set tersendiri. Pastikan split dilakukan secara stratified.

### 3.4-D — Feature Engineering
**Standar**: Proses pembuatan/seleksi fitur harus terdokumentasi jika dilakukan.
**Checklist**: [ ] Feature engineering dan seleksi fitur terdokumentasi (jika ada)
**Keburukan**: Feature engineering yang tidak terdokumentasi menjadikan model tidak dapat direproduksi dan klaim performa tidak dapat diverifikasi — jika fitur kunci yang dibuat tidak dijelaskan, peneliti lain tidak dapat mengimplementasikan ulang metode yang sama.
**Rekomendasi**: Dokumentasikan setiap fitur yang dibuat secara manual: formula pembuatan, alasan relevansi, dan pengaruh yang diharapkan terhadap performa model.

---

## 3.5 Metode / Model yang Diusulkan

### 3.5-A — Spesifikasi Metode yang Eksplisit
**Standar**: Nama metode/algoritma harus spesifik (bukan "machine learning") dengan nama yang dapat dicari di literatur.
**Checklist**: [ ] Nama metode/algoritma spesifik dan dapat dilacak ke literatur
**Keburukan**: Metode yang disebutkan secara generik tidak dapat dievaluasi ketepatannya untuk problem yang ada — "menggunakan machine learning" tidak memberikan informasi yang cukup bagi penguji untuk menilai apakah pilihan metode sudah optimal, membuat seluruh justifikasi metodologis menjadi tidak bersubstansi.
**Rekomendasi**: Gunakan nama teknis yang tepat: bukan "CNN" tapi "CNN dengan arsitektur ResNet-50 yang di-fine-tune"; bukan "NLP" tapi "BERT-base-uncased dengan fine-tuning untuk klasifikasi sentimen."

### 3.5-B — Justifikasi Pemilihan Metode Berbasis Literatur
**Standar**: Alasan pemilihan metode harus didukung referensi yang menunjukkan kecocokan metode dengan jenis problem yang serupa.
**Checklist**: [ ] Ada justifikasi berbasis literatur untuk pemilihan setiap metode utama
**Keburukan**: Justifikasi pemilihan metode yang hanya berupa klaim tanpa bukti ("CNN terbaik untuk klasifikasi citra") tidak dapat diterima secara akademis — ini adalah circular reasoning; penguji yang mengetahui bahwa ada metode lain yang lebih baik untuk problem spesifik ini dapat menggugurkan seluruh premis metodologis dengan satu pertanyaan.
**Rekomendasi**: Untuk setiap metode, kutip minimal 1 paper yang menggunakan metode yang sama pada problem/domain yang serupa dengan performa yang baik.

### 3.5-C — Arsitektur/Konfigurasi untuk Deep Learning
**Standar**: Untuk model deep learning, arsitektur lengkap harus didokumentasikan: jumlah layer, tipe layer, ukuran, fungsi aktivasi, dropout, batch normalization.
**Checklist**: [ ] Arsitektur model tersedia dalam tabel atau diagram yang lengkap
**Keburukan**: Arsitektur yang tidak spesifik menjadikan penelitian tidak dapat direproduksi — ini melanggar standar reproducibility yang diwajibkan oleh mayoritas jurnal dan konferensi CS top; penguji yang mencoba mengimplementasikan ulang tidak akan dapat menghasilkan hasil yang sama.
**Rekomendasi**: Buat tabel arsitektur: Layer | Tipe | Output Shape | Parameter | Aktivasi, atau diagram blok yang setara.

### 3.5-D — Baseline untuk Perbandingan
**Standar**: Setiap penelitian yang mengklaim kontribusi metode wajib memiliki baseline yang dapat direproduksi.
**Checklist**: [ ] Ada minimal 1 baseline naif + 1 metode klasik sebagai pembanding
**Keburukan**: Penelitian tanpa baseline tidak dapat mengklaim bahwa metodenya lebih baik dari apapun — angka performa yang dilaporkan (mis. akurasi 87%) tidak memiliki konteks evaluatif, menjadikan klaim kontribusi metodologis tidak dapat diverifikasi secara ilmiah.
**Rekomendasi**: Minimal 2 baseline: (1) majority class classifier/mean predictor sebagai floor, (2) metode standar yang sudah mapan di domain sebagai competitive baseline.

### 3.5-E — Rencana Hyperparameter Tuning
**Standar**: Strategi tuning hyperparameter (grid search, random search, Bayesian optimization) harus direncanakan, bukan hanya nilai akhir yang dilaporkan.
**Checklist**: [ ] Ada rencana/strategi hyperparameter tuning yang terdokumentasi
**Keburukan**: Hyperparameter yang dipilih tanpa proses tuning yang transparan menciptakan keraguan tentang cherry-picking konfigurasi — penguji tidak dapat membedakan antara hyperparameter yang dipilih secara sistematis dan yang dipilih karena menghasilkan angka terbaik, yang merupakan bentuk p-hacking implisit.
**Rekomendasi**: Dokumentasikan ruang pencarian hyperparameter (search space), strategi pencarian, dan metrik yang digunakan untuk memilih konfigurasi terbaik.

---

## 3.6 Evaluasi dan Validasi

### 3.6-A — Pemilihan Metrik yang Sesuai Problem
**Standar**: Metrik evaluasi harus dipilih berdasarkan karakteristik problem, bukan kemudahan komputasi.

**Panduan pemilihan metrik:**
| Jenis Problem | Metrik Wajib | Metrik Tambahan |
|---|---|---|
| Klasifikasi (balanced) | Accuracy, Precision, Recall, F1 | Confusion Matrix |
| Klasifikasi (imbalanced) | F1-Macro, F1-Weighted, AUC-ROC | PR-AUC, Balanced Accuracy, CM per kelas |
| Regresi | MAE, RMSE | R², MAPE |
| Clustering | Silhouette Score, Davies-Bouldin | Calinski-Harabasz, Elbow |
| Object Detection | mAP, IoU | AP per kelas |
| NLP (Klasifikasi) | F1-Macro, Accuracy | AUC-ROC |
| NLP (Generasi) | BLEU, ROUGE-L | BERTScore |
| Sistem Rekomendasi | Precision@K, Recall@K | NDCG@K, MRR |

**Checklist**: [ ] Metrik dipilih sesuai jenis problem dan karakteristik data
**Keburukan**: Memilih metrik yang tidak sesuai (terutama hanya accuracy untuk data imbalanced) menghasilkan evaluasi yang menyesatkan secara statistik — model yang hanya memprediksi kelas mayoritas dapat tampak "berhasil" sementara sebenarnya tidak berguna, dan penelitian yang dibangun di atas evaluasi yang keliru menyebarkan kesimpulan yang tidak valid ke komunitas ilmiah.
**Rekomendasi**: Untuk setiap metrik yang dipilih, tambahkan 1 kalimat justifikasi mengapa metrik ini sesuai untuk karakteristik problem dan data ini.

### 3.6-B — Strategi Validasi yang Robust
**Standar**: Strategi validasi harus dapat memberikan estimasi performa yang tidak bias dan stabil.
**Checklist**: [ ] Strategi validasi sesuai ukuran dataset (k-fold untuk kecil, hold-out untuk besar)
**Keburukan**: Single hold-out split tanpa cross-validation untuk dataset kecil menghasilkan estimasi performa yang sangat bergantung pada random seed — perbedaan seed dapat menghasilkan perbedaan akurasi yang signifikan, menjadikan hasil yang dilaporkan tidak representatif dari kemampuan generalisasi model yang sebenarnya.
**Rekomendasi**: Gunakan stratified k-fold (k=5 atau 10) untuk dataset <10.000 sampel; untuk dataset besar, minimal 3 run dengan seed berbeda; selalu laporkan mean ± std.

### 3.6-C — Rencana Uji Signifikansi
**Standar**: Untuk penelitian komparatif yang mengklaim keunggulan metode, rencana uji statistik harus ada di metodologi.
**Checklist**: [ ] Ada rencana uji signifikansi untuk klaim perbandingan (jika penelitian komparatif)
**Keburukan**: Tanpa uji signifikansi, perbedaan performa antara metode tidak dapat dibedakan dari variasi acak — klaim "metode A lebih baik dari B" berdasarkan perbedaan 1-2% tanpa p-value adalah klaim yang tidak memiliki kekuatan inferensial statistik yang cukup untuk diterima sebagai temuan ilmiah.
**Rekomendasi**: Rencanakan: McNemar test (untuk klasifikasi), paired Wilcoxon test, atau paired t-test (jika asumsi normalitas terpenuhi), dengan threshold signifikansi α=0.05.

---

## 3.7 Alat dan Teknologi

### 3.7-A — Spesifikasi Lingkungan Eksperimen
**Standar**: Hardware (CPU/GPU/RAM), OS, bahasa pemrograman (versi), dan library utama (versi) harus dinyatakan.
**Checklist**: [ ] Spesifikasi lingkungan eksperimen lengkap
**Keburukan**: Tanpa spesifikasi lingkungan, eksperimen tidak dapat direproduksi — perbedaan versi library atau hardware dapat menghasilkan perbedaan hasil yang signifikan (terutama untuk operasi floating point GPU), sehingga klaim performa tidak dapat diverifikasi secara independen.
**Rekomendasi**: Tambahkan tabel environment: OS | Python versi | Framework (TF/PyTorch) versi | Hardware (CPU/GPU model, RAM) | Platform (lokal/Colab/cloud).

### 3.7-B — Justifikasi Pemilihan Tools
**Standar**: Pemilihan framework/library utama harus dijustifikasi.
**Checklist**: [ ] Ada alasan pemilihan tools utama (jika ada alternatif yang lazim digunakan)
**Keburukan**: Penggunaan tools tanpa justifikasi menimbulkan pertanyaan tentang keputusan teknis yang tidak transparan — meskipun ini bukan isu kritis, ketiadaan justifikasi menunjukkan bahwa keputusan teknis tidak direncanakan secara deliberatif, yang melemahkan argumen tentang rigorousness proses penelitian.
**Rekomendasi**: 1-2 kalimat justifikasi cukup: "TensorFlow dipilih karena [alasan spesifik seperti: ekosistem deployment yang lebih matang, dukungan TPU, dsb]."

---

## 3.8 Jadwal Penelitian

### 3.8-A — Realistisitas Timeline
**Standar**: Timeline harus feasible berdasarkan kompleksitas penelitian dan waktu yang tersedia.
**Checklist**: [ ] Durasi total dan distribusi waktu per fase realistis
**Keburukan**: Timeline yang tidak realistis (seluruh implementasi dan evaluasi dalam 2 minggu untuk penelitian kompleks) menunjukkan kurangnya pemahaman tentang kompleksitas teknis yang akan dihadapi — ini akan terbukti di Bab 4 jika timeline aktual jauh berbeda dari yang direncanakan, mengurangi kepercayaan terhadap kemampuan perencanaan penelitian.
**Rekomendasi**: Alokasikan waktu yang proporsional: pengumpulan data (15%), preprocessing (20%), modeling (30%), evaluasi (20%), penulisan (15%). Total S1: 4-6 bulan.

---

## Pola Kegagalan Khas Bab 3

| Pola | Keburukan Akademis | Level |
|---|---|---|
| Methodology Without Data | Metodologi sangat detail tentang model tapi samar soal data — tanpa data yang jelas, rencana model tidak memiliki substansi yang dapat dieksekusi | 🟠 MAYOR |
| Algorithm Shopping | Daftar 5+ algoritma tanpa justifikasi awal — menunjukkan bahwa peneliti tidak memahami trade-off antar metode dan hanya berharap salah satunya bekerja | 🟠 MAYOR |
| Black Box Evaluation | Hanya menyebut "akan dievaluasi" tanpa metrik spesifik — tanpa metrik yang terdefinisi, tidak ada cara untuk menentukan kapan penelitian dianggap berhasil | 🔴 FATAL |
| Overfit by Design | Tidak ada pemisahan training/testing yang ketat sejak rencana — menghasilkan evaluasi yang optimistis secara sistematis dan klaim performa yang tidak valid | 🔴 FATAL |
| Unreproducible Method | Tidak ada detail implementasi yang cukup untuk direproduksi — penelitian yang tidak dapat direproduksi tidak memenuhi standar minimun sains yang dapat diverifikasi | 🟠 MAYOR |

# Kriteria Review Bab 5 — Kesimpulan dan Saran (v4 Komprehensif Akademik)

> **Prinsip**: Bab 5 adalah pembuktian formal bahwa penelitian telah menjawab kontraknya
> dengan komunitas ilmiah. Setiap elemen yang tidak dipenuhi menunjukkan penelitian yang belum tuntas.

---

## 5.1 Kesimpulan

### Standar Akademik Global
Kesimpulan adalah laporan formal tentang sejauh mana tujuan penelitian tercapai, didukung oleh bukti kuantitatif dari Bab 4. Standar internasional mensyaratkan kesimpulan yang: (1) menjawab semua tujuan, (2) didukung angka konkret, (3) tidak memperkenalkan fakta baru, (4) bersifat factual bukan spekulatif.

### 5.1-A — Korespondensi Tujuan-Kesimpulan (Goal Achievement Report)
**Standar**: Setiap tujuan penelitian di Bab 1 harus dijawab secara eksplisit di kesimpulan, satu per satu, dengan urutan yang sama.
**Checklist**: [ ] Setiap tujuan dari Bab 1 memiliki jawaban eksplisit di Bab 5 dengan nomor yang sama
**Keburukan**: Tujuan yang tidak dijawab secara eksplisit di Bab 5 menunjukkan bahwa penelitian secara formal tidak selesai — ini adalah kegagalan struktural yang paling mudah dan cepat dideteksi penguji (dalam 2 menit), dan tidak dapat dibantah karena kontrak penelitian (tujuan di Bab 1) tertulis jelas, menjadikan tidak ada argumen untuk mempertahankan kelayakan sidang.
**Rekomendasi**: Struktur Bab 5 dengan format: "1. Tujuan pertama penelitian adalah [X]. Berdasarkan hasil eksperimen di Bab 4, [tujuan ini tercapai/tidak tercapai] yang dibuktikan dengan [angka konkret dari tabel/gambar Bab 4]."

---

### 5.1-B — Dukungan Angka Konkret
**Standar**: Setiap klaim pencapaian di kesimpulan harus didukung nilai metrik spesifik yang dapat dilacak ke tabel di Bab 4.
**Checklist**: [ ] Setiap klaim "berhasil/tercapai" disertai angka metrik dari Bab 4
**Keburukan**: Kesimpulan tanpa angka pendukung adalah assertion tanpa evidence — pernyataan "model berhasil mengklasifikasikan dengan baik" tanpa menyebut angka akurasi/F1 tidak dapat diverifikasi secara independen, dan penguji akan mempertanyakan dasar klaim tersebut, yang tidak dapat dijawab jika angka tidak tercantum.
**Rekomendasi**: Setiap kalimat kesimpulan yang mengklaim keberhasilan harus diikuti: "(Accuracy: X%, F1-Score: Y%, lihat Tabel 4.Z)"

---

### 5.1-C — Tidak Ada Fakta Baru
**Standar**: Kesimpulan hanya boleh berisi rangkuman dari yang sudah dibahas di Bab 1-4 — tidak ada fakta, angka, atau interpretasi baru.
**Checklist**: [ ] Tidak ada informasi baru yang pertama kali muncul di Bab 5
**Keburukan**: Fakta atau interpretasi yang pertama kali muncul di kesimpulan menciptakan ketidakseimbangan struktural yang serius — pembaca tidak dapat memverifikasi dari mana klaim tersebut berasal, penguji tidak dapat menelusuri buktinya ke Bab 4, dan keberadaan informasi baru di kesimpulan menunjukkan bahwa penelitian masih belum sepenuhnya dieksekusi dan dilaporkan.
**Rekomendasi**: Audit setiap kalimat di Bab 5: apakah ini dapat dilacak ke Bab 1-4? Jika tidak, pindahkan ke bab yang sesuai atau hapus.

---

### 5.1-D — Kesimpulan Bukan Ringkasan Metodologi
**Standar**: Kesimpulan melaporkan apa yang ditemukan dan terbukti — bukan ringkasan apa yang dilakukan.
**Checklist**: [ ] Bab 5 berisi pencapaian hasil, bukan ringkasan proses/metodologi
**Keburukan**: Kesimpulan yang merangkum Bab 3 (apa yang dilakukan) dan bukan Bab 4 (apa yang ditemukan) menunjukkan konfusi antara process report dan outcome report — penguji akan menunjukkan bahwa tidak ada satu pun kalimat di kesimpulan yang menyebut hasil, yang berarti penelitian secara formal tidak melaporkan pencapaiannya.
**Rekomendasi**: Hapus semua kalimat yang dimulai dengan "Penelitian ini melakukan..." atau "Pada penelitian ini digunakan..." — pertahankan hanya kalimat yang menyatakan apa yang terbukti atau ditemukan.

---

### 5.1-E — Moderasi Klaim (Avoid Overclaiming)
**Standar**: Klaim kesimpulan harus proporsional dengan scope dan kondisi eksperimen yang dilakukan.
**Checklist**: [ ] Tidak ada klaim generalisasi yang melampaui scope data/eksperimen
**Keburukan**: Overclaiming di kesimpulan menciptakan klaim yang mudah dibantah — menyimpulkan bahwa "metode ini terbukti superior untuk semua kasus klasifikasi" dari satu eksperimen pada satu dataset adalah kesimpulan yang tidak dapat dipertahankan secara ilmiah dan akan langsung digugurkan penguji dengan menunjukkan kondisi di mana metode ini mungkin tidak bekerja.
**Rekomendasi**: Batasi klaim dengan kondisi eksperimen: "Pada dataset X dengan karakteristik Y, dalam kondisi Z, metode yang diusulkan menunjukkan peningkatan [W]% dibandingkan baseline."

---

## 5.2 Keterbatasan Penelitian

### Standar Akademik Global
Pengakuan keterbatasan adalah tanda kejujuran ilmiah dan justru meningkatkan kredibilitas akademis. Penelitian tanpa keterbatasan yang diakui justru tampak tidak matang — seolah peneliti tidak menyadari batas kemampuan penelitiannya.

### 5.2-A — Keberadaan Keterbatasan yang Eksplisit
**Standar**: Minimal 3 keterbatasan nyata harus diakui secara eksplisit, bukan keterbatasan yang dibuat-buat untuk memenuhi formalitas.
**Checklist**: [ ] Ada minimal 3 keterbatasan spesifik yang dapat dilacak ke kondisi aktual penelitian
**Keburukan**: Absennya pengakuan keterbatasan menunjukkan kurangnya self-awareness ilmiah yang merupakan kompetensi akademis fundamental — penguji yang menemukan penelitian tanpa keterbatasan akan justru lebih agresif dalam mencari celah, dan tidak adanya pengakuan yang jujur menjadikan peneliti tidak siap menghadapi pertanyaan tentang batas generalisasi hasil.
**Rekomendasi**: Gunakan kategori keterbatasan: (1) Data (ukuran, representativitas), (2) Metodologi (asumsi metode), (3) Evaluasi (aspek yang tidak dievaluasi), (4) Generalisasi (konteks yang belum diuji).

---

### 5.2-B — Spesifisitas Keterbatasan
**Standar**: Setiap keterbatasan harus spesifik dan dapat dilacak ke kondisi aktual penelitian.
**Checklist**: [ ] Keterbatasan spesifik (bukan generik) dan terhubung ke kondisi aktual
**Keburukan**: Keterbatasan generik seperti "keterbatasan waktu" atau "sumber daya yang terbatas" tidak memberikan informasi ilmiah yang berguna — pembaca tidak dapat memahami batas validitas penelitian dari keterbatasan semacam itu, dan penguji akan mempertanyakan apakah peneliti benar-benar memahami keterbatasan ilmiah metodologinya.
**Rekomendasi**: Format keterbatasan yang baik: "Penelitian ini dibatasi oleh [kondisi spesifik], yang berarti hasil mungkin tidak berlaku untuk [konteks yang tidak dicakup], karena [alasan teknis]."

---

### 5.2-C — Keterbatasan Terhubung ke Saran
**Standar**: Setiap keterbatasan yang diakui harus menginspirasi minimal satu saran penelitian lanjutan.
**Checklist**: [ ] Setiap keterbatasan utama memiliki saran penelitian lanjutan yang meresponsnya
**Keburukan**: Keterbatasan yang diakui tapi tidak menghasilkan saran adalah pengakuan yang tidak produktif secara akademis — ini menunjukkan bahwa mahasiswa dapat mengidentifikasi masalah tapi tidak dapat merumuskan arah penyelesaiannya, yang melemahkan kesan tentang kedalaman pemahaman metodologis.
**Rekomendasi**: Buat tabel dua kolom: Keterbatasan | Saran Penelitian Lanjutan yang Merespons.

---

## 5.3 Saran Penelitian Lanjutan

### Standar Akademik Global
Saran penelitian lanjutan bukan basa-basi formalitas — ia adalah kontribusi terhadap agenda penelitian komunitas. Saran yang baik menunjukkan bahwa peneliti memiliki visi tentang bagaimana bidangnya harus berkembang.

### 5.3-A — Spesifisitas Saran
**Standar**: Setiap saran harus spesifik: menyebut metode/dataset/evaluasi yang konkret, bukan generik.
**Checklist**: [ ] Setiap saran menyebut apa yang konkret: dataset apa, metode apa, evaluasi apa
**Keburukan**: Saran generik seperti "gunakan dataset yang lebih besar" atau "eksplorasi metode lain" tidak memberikan panduan yang actionable bagi peneliti selanjutnya — saran demikian tidak menunjukkan bahwa peneliti memahami apa yang perlu dilakukan secara spesifik untuk mengatasi keterbatasan yang ditemukan, melemahkan nilai panduan akademis dari Bab 5.
**Rekomendasi**: Format saran yang kuat: "Penelitian selanjutnya dapat menggunakan dataset [nama spesifik] dari [sumber], yang mencakup [karakteristik yang belum ada], untuk menguji apakah [temuan ini] berlaku pada [konteks yang lebih luas]."

---

### 5.3-B — Saran Berangkat dari Keterbatasan
**Standar**: Setiap saran harus dapat dilacak ke keterbatasan yang diakui di 5.2.
**Checklist**: [ ] Tidak ada saran yang muncul tiba-tiba tanpa keterbatasan yang memotivasinya
**Keburukan**: Saran yang tidak terhubung ke keterbatasan aktual menunjukkan bahwa Bab 5 ditulis secara generik tanpa refleksi atas penelitian yang sebenarnya dilakukan — ini menciptakan kesan bahwa saran tersebut adalah template yang ditempel tanpa pertimbangan, melemahkan integritas akademis kesimpulan secara keseluruhan.
**Rekomendasi**: Untuk setiap saran, tambahkan kalimat pembuka: "Mengingat keterbatasan [X] pada penelitian ini, penelitian selanjutnya disarankan untuk..."

---

### 5.3-C — Realistisitas Saran
**Standar**: Saran harus feasible secara teknis dan realistis untuk peneliti selanjutnya.
**Checklist**: [ ] Saran dapat diimplementasikan oleh peneliti S1/S2 pada umumnya
**Keburukan**: Saran yang tidak realistis (mis: "kembangkan model baru yang mengatasi semua keterbatasan deep learning") tidak memberikan panduan yang berguna dan menunjukkan bahwa peneliti tidak memiliki pemahaman yang realistis tentang kompleksitas tantangan yang disarankan.
**Rekomendasi**: Batasi saran pada hal-hal yang dapat dicapai dalam konteks penelitian S1/S2: perluasan dataset, komparasi metode tambahan, evaluasi pada domain baru, atau integrasi ke sistem yang sudah ada.

---

## Pola Kegagalan Khas Bab 5

| Pola | Deskripsi | Keburukan Akademis | Level |
|---|---|---|---|
| Goal Amnesia | Kesimpulan tidak menjawab tujuan penelitian | Penelitian secara formal tidak selesai; tidak ada bukti bahwa kontrak penelitian dipenuhi | 🔴 FATAL |
| Angka-Free Conclusion | Klaim keberhasilan tanpa metrik dari Bab 4 | Klaim tidak dapat diverifikasi secara independen; penguji tidak dapat mengonfirmasi pencapaian | 🔴 FATAL |
| New Facts in Conclusion | Fakta baru pertama kali muncul di Bab 5 | Menunjukkan penelitian belum selesai dieksekusi; fakta tidak dapat dilacak ke bukti di Bab 4 | 🔴 FATAL |
| Methodology Summary | Bab 5 merangkum Bab 3, bukan Bab 4 | Penelitian gagal melaporkan outcomenya sendiri; Bab 5 tidak berkontribusi pada pengetahuan | 🟠 MAYOR |
| Generic Suggestions | Saran template tanpa spesifikasi | Tidak memberikan panduan yang berguna bagi peneliti selanjutnya; menunjukkan kurangnya refleksi | 🟠 MAYOR |
| No Limitations | Tidak ada keterbatasan yang diakui | Tampak tidak matang secara akademis; penguji akan lebih agresif mencari celah yang tidak diakui | 🟠 MAYOR |
| Overclaiming | Generalisasi yang melampaui scope eksperimen | Klaim yang tidak dapat dipertahankan di sidang; mudah dibantah dengan satu counter-example | 🟠 MAYOR |

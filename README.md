# SiPosMA (Sistem Informasi Posyandu Maju Anak) 👶🩺

SiPosMA adalah Sistem Informasi Posyandu Digital Berbasis Web yang dirancang secara modern untuk administrasi pelayanan kesehatan dan deteksi dini risiko *stunting*. Proyek ini merupakan evolusi (migrasi) dari sistem PHP/MySQL (*legacy*) menuju teknologi modern berbasis **React** dan **Next.js**.

---

## 🛠️ Teknologi & Konfigurasi Sistem

Sistem ini dibangun dengan tumpukan teknologi modern (*tech stack*) berikut:

* **Framework Utama:** [Next.js](https://nextjs.org/) (Versi 16.2.7) dengan pendekatan *App Router*.
* **Pustaka UI:** React 19 & TypeScript.
* **Database:** **SQLite** (`dev.db`) — Database tunggal yang sangat ringan dan portabel.
* **ORM:** [Prisma](https://www.prisma.io/) (Versi 7) dengan `adapter-better-sqlite3`.
* **Visualisasi Data:** `Chart.js` & `react-chartjs-2`.
* **Desain Visual:** CSS Murni dengan pendekatan *Glassmorphism Premium* (`premium.css`, `landing.css`).

---

## 📂 Struktur Direktori & Konfigurasi File

Berikut adalah "peta" dari sistem SiPosMA agar Anda tahu di mana letak berbagai pengaturannya:

### 1. Konfigurasi Inti
* `next.config.ts` : File pengaturan inti Next.js (seperti *redirects*, aturan *domain*, dsb).
* `package.json` : Daftar semua pustaka (*library*) NPM yang digunakan dan kumpulan *scripts* (seperti `npm run dev`).
* `prisma.config.ts` : File pengaturan Prisma versi 7 (berisi lokasi skema dan *script seed* database).
* `prisma/schema.prisma` : Konfigurasi tabel-tabel database (User, Sasaran, Pemeriksaan).
* `prisma/seed.ts` : Skrip Typescript khusus untuk menyuntikkan (memigrasikan) data awal (seperti data dari `dbsipograf.sql` lama ke dalam `dev.db`).

### 2. Kode Aplikasi (`/src`)
Seluruh tampilan dan logika aplikasi berada di dalam *folder* `src/`:

* **`src/app/`** : Direktori utama untuk Rute Halaman (*Pages*). 
  * `page.tsx` : Halaman Muka (*Landing Page* "Cegah Stunting").
  * `(dashboard)/` : Kumpulan rute untuk Dasbor (membutuhkan akses login).
    * `dashboard/page.tsx` : Halaman Ringkasan & Grafik.
    * `validasi/page.tsx` : Mesin Validasi Otomatis (Cek kelengkapan, KEK, PTM).
    * `anthro/page.tsx` : Kalkulator Deteksi Stunting WHO.
    * *...dan menu lainnya sesuai PRD.*
  * `api/` : Direktori untuk API internal (penyedia data ke *database* via metode `GET` atau `POST`).
  * `globals.css` & `premium.css` : File CSS utama yang mengatur gaya antarmuka (*UI styling*).

* **`src/components/`** : Potongan antarmuka (komponen) yang bisa dipakai ulang:
  * `auth/LoginCard.tsx` : Desain form login dengan autentikasi tiruan (*mock*) berdasar *Role*.
  * `layout/Sidebar.tsx` : Menu navigasi kiri (*Role-Based Access Control* / RBAC ada di sini).
  * `layout/Header.tsx` : Bagian atas *dashboard*.
  * `providers/AuthProvider.tsx` : Pusat logika penyimpanan sesi pengguna (menggunakan `localStorage`).

* **`src/lib/`** : Fungsi-fungsi pembantu logis (*Utilities*).
  * `whoAnthro.ts` : Otak algoritma deteksi Stunting berbasis tabel **LMS WHO Anthro**.

### 3. Aset Statis (`/public`)
* **`public/img/`** : Tempat penyimpanan gambar lokal seperti `logo.jpg`.

### 4. Database (`/`)
* **`dev.db`** : File *database* SQLite. Ini adalah **jantung data Anda**. Jika dihapus, data akan hilang (kecuali di-*seed* ulang).

---

## 🚀 Panduan Menjalankan Sistem

Pastikan [Node.js](https://nodejs.org/) telah terinstal di komputer Anda.

1. **Instalasi Pustaka (Hanya untuk pertama kali):**
   ```bash
   npm install
   ```

2. **Migrasi Struktur Database (Membuat tabel baru jika belum ada):**
   ```bash
   npx prisma db push
   ```

3. **Injeksi Data Awal / Seeding (Memasukkan data balita, lansia, bumil):**
   ```bash
   npx prisma db seed
   ```

4. **Menjalankan Server Aplikasi (Mode Development):**
   ```bash
   npm run dev
   ```
   Lalu buka browser Anda dan kunjungi: 👉 **`http://localhost:3000`**

---

## 🔍 Cara Melihat / Mengedit Isi Database

Anda tidak memerlukan *phpMyAdmin*. Cukup jalankan perintah ini di terminal baru (pada direktori proyek `siposma-app`):

```bash
npx prisma studio
```

Browser akan otomatis membuka `http://localhost:5555`, dan Anda dapat langsung mengelola isi *database* SQLite (`dev.db`) melalui antarmuka grafis yang ramah pengguna.

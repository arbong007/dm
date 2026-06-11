const fs = require('fs');
const code = fs.readFileSync('temp.tsx', 'utf8');

const pages = [
  { id: 'view-pendataan', path: 'pendataan', title: 'Pendataan Sasaran', context: 'Registrasi balita, ibu hamil, lansia' },
  { id: 'view-pelayanan', path: 'pelayanan', title: 'Pelayanan & Input Pemeriksaan', context: 'Input hasil timbang, ukur, imunisasi' },
  { id: 'view-validasi', path: 'validasi', title: 'Validasi & Pengolahan Data', context: 'Cek kelengkapan & hitung status gizi' },
  { id: 'view-riwayat', path: 'riwayat', title: 'Penyimpanan Riwayat Layanan', context: 'Histori pemeriksaan & KMS digital' },
  { id: 'view-pemantauan', path: 'pemantauan', title: 'Pencarian & Pemantauan Data', context: 'Cari sasaran & pantau tumbuh kembang' },
  { id: 'view-rekap', path: 'rekap', title: 'Rekapitulasi & Pelaporan', context: 'Laporan bulanan & ekspor data' },
  { id: 'view-evaluasi', path: 'evaluasi', title: 'Penyajian Informasi & Evaluasi', context: 'Analisis capaian & rekomendasi' },
  { id: 'view-pengguna', path: 'pengguna', title: 'Manajemen Pengguna', context: 'Hak akses sistem' },
  { id: 'view-anthro', path: 'anthro', title: 'Kalkulator WHO Anthro', context: 'Deteksi dini risiko stunting' },
  { id: 'view-export', path: 'export', title: 'Pelaporan & Ekspor', context: 'Unduh CSV, Excel & Cetak' },
  { id: 'view-integrasi', path: 'integrasi', title: 'Integrasi & Database', context: 'Backup, Restore & Sinkronisasi' }
];

pages.forEach(p => {
  const regex = new RegExp(`<section id="${p.id}"[^>]*>([\\s\\S]*?)<\\/section>`);
  const match = code.match(regex);
  if(match) {
    const componentName = p.path.charAt(0).toUpperCase() + p.path.slice(1) + 'Page';
    const jsx = `"use client";
import Header from "@/components/layout/Header";

export default function ${componentName}() {
  return (
    <>
      <Header title="${p.title}" context="${p.context}" />
      <section className="view-section active">
${match[1]}
      </section>
    </>
  );
}
`;
    fs.writeFileSync(`src/app/(dashboard)/${p.path}/page.tsx`, jsx);
    console.log(`Extracted ${p.path}`);
  } else {
    console.log(`Not found: ${p.id}`);
  }
});

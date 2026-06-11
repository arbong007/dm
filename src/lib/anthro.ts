/**
 * Kalkulator Z-Score WHO Anthro (Pendekatan Aproksimasi Sederhana)
 * Digunakan untuk perhitungan awal status gizi di aplikasi posyandu.
 */

export function calculateZScore(
  umurBulan: number,
  bb: number,
  tb: number,
  jk: 'L' | 'P' = 'L'
): { bbu: string; tbu: string; bbtb: string; statusGizi: string } {
  // --- APROKSIMASI (BUKAN TABEL MEDIS SEBENARNYA) ---
  
  // Median BB/TB berdasarkan umur
  let medianBB = umurBulan <= 12 ? 3.3 + (0.5 * umurBulan) : 2 * (umurBulan/12) + 8;
  let medianTB = umurBulan <= 12 ? 50 + (2.5 * umurBulan) : 75 + (5 * (umurBulan/12));
  
  // Standar Deviasi (SD) kasar sekitar 10-15% dari median
  let sdBB = medianBB * 0.12; 
  let sdTB = medianTB * 0.05;

  let zBB = (bb - medianBB) / sdBB;
  let zTB = (tb - medianTB) / sdTB;

  // Klasifikasi TB/U (Tinggi Badan menurut Umur) - Stunting Indicator
  let tbu = "Normal";
  if (zTB < -3) tbu = "Sangat Pendek (Stunting Berat)";
  else if (zTB < -2) tbu = "Pendek (Stunting)";
  else if (zTB > 3) tbu = "Tinggi";

  // Klasifikasi BB/U (Berat Badan menurut Umur)
  let bbu = "Normal";
  if (zBB < -3) bbu = "Gizi Buruk";
  else if (zBB < -2) bbu = "Gizi Kurang";
  else if (zBB > 2) bbu = "Risiko Berat Lebih";

  // Kesimpulan Status Gizi Gabungan
  let statusGizi = "Normal";
  if (tbu.includes("Stunting")) {
    statusGizi = tbu;
  } else if (bbu.includes("Gizi")) {
    statusGizi = bbu;
  }

  return {
    bbu,
    tbu,
    bbtb: "Normal",
    statusGizi
  };
}

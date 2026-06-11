"use client";

import Header from "@/components/layout/Header";

export default function PemantauanPage() {
  return (
    <>
      <Header title="Pemantauan Gizi & Kesehatan" context="Monitoring kondisi sasaran berkelanjutan" />
      <section className="view-section active">
        <div className="step-banner" style={{ borderLeftColor: 'var(--step5)' }}>
          <div className="step-banner-icon" style={{ background: 'var(--step5)' }}><i className="fas fa-heartbeat"></i></div>
          <div className="step-banner-text">
            <h4>Tahap 5 — Pemantauan Gizi &amp; Kesehatan</h4>
            <p>Pemantauan sasaran dengan kondisi khusus (Stunting, Gizi Buruk, Risiko KEK Bumil, dan Lansia dengan PTM) secara komprehensif.</p>
          </div>
        </div>
        <div className="card-container">
          <h3><i className="fas fa-search-plus"></i> Dashboard Pemantauan Khusus</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Di sini akan ditampilkan daftar balita stunting, bumil KEK, dan lansia risiko tinggi yang ditarik dari hasil pemeriksaan.</p>
          
          <div style={{ padding: '20px', background: 'var(--bg-light)', borderRadius: '8px', marginTop: '16px', borderLeft: '4px solid var(--warning)' }}>
            <strong>Fitur Dalam Pengembangan:</strong> Modul ini bergantung pada pengumpulan data longitudinal. Saat ini terintegrasi dengan `/api/stats`.
          </div>
        </div>
      </section>
    </>
  );
}

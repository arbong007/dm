"use client";

import Header from "@/components/layout/Header";

export default function EvaluasiPage() {
  return (
    <>
      <Header title="Evaluasi Program Posyandu" context="Capaian indikator kinerja" />
      <section className="view-section active">
        <div className="step-banner" style={{ borderLeftColor: 'var(--step7)' }}>
          <div className="step-banner-icon" style={{ background: 'var(--step7)' }}><i className="fas fa-star"></i></div>
          <div className="step-banner-text">
            <h4>Tahap 7 — Evaluasi Program</h4>
            <p>Bandingkan kinerja posyandu terhadap target standar pelayanan minimal (SPM) dan evaluasi capaian cakupan imunisasi, D/S, dan N/D.</p>
          </div>
        </div>
        <div className="card-container">
          <h3><i className="fas fa-chart-bar"></i> Indikator Capaian</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Modul evaluasi akan memproses rasio D/S (Partisipasi) dan N/D (Keberhasilan Program).</p>
          <div style={{ padding: '20px', background: 'var(--bg-light)', borderRadius: '8px', marginTop: '16px' }}>
            <strong>Capaian:</strong> Integrasi dengan `/api/stats` sedang berjalan.
          </div>
        </div>
      </section>
    </>
  );
}

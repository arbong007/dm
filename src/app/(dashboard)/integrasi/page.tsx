"use client";

import Header from "@/components/layout/Header";

export default function IntegrasiPage() {
  return (
    <>
      <Header title="Database Online & Integrasi" context="Sinkronisasi ke server desa/Puskesmas" />
      <section className="view-section active">
        <div className="card-container">
          <h3><i className="fas fa-cloud-upload-alt"></i> Sinkronisasi Cloud</h3>
          <p>Database saat ini berjalan di SQLite (lokal). Tekan tombol di bawah untuk mensinkronisasi data ke PostgreSQL server pusat (Puskesmas).</p>
          <button className="btn btn-primary" style={{ marginTop: '16px' }}><i className="fas fa-sync"></i> Sinkronisasi Sekarang</button>
        </div>
      </section>
    </>
  );
}

"use client";

import Header from "@/components/layout/Header";

export default function PenggunaPage() {
  return (
    <>
      <Header title="Manajemen Pengguna" context="Kelola hak akses pengguna sistem" />
      <section className="view-section active">
        <div className="card-container">
          <h3><i className="fas fa-users-cog"></i> Daftar Pengguna</h3>
          <p>Super Admin, Bidan Desa, dan Kader memiliki hak akses yang berbeda.</p>
          <button className="btn btn-primary"><i className="fas fa-user-plus"></i> Tambah Pengguna</button>
          <div className="table-wrapper" style={{ marginTop: '16px' }}>
            <table>
              <thead>
                <tr><th>Nama</th><th>Peran</th><th>Status</th></tr>
              </thead>
              <tbody>
                <tr><td>Super Admin</td><td>Administrator</td><td>Aktif</td></tr>
                <tr><td>Bidan Desa</td><td>Validator</td><td>Aktif</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

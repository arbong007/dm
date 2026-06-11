"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";

export default function PendataanPage() {
  const [activeTab, setActiveTab] = useState("daftar");
  const [sasaranList, setSasaranList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    kategori: "balita",
    nama: "",
    nik: "",
    tglLahir: "",
    jk: "L",
    namaAyah: "",
    namaIbu: "",
    hp: "",
    alamat: "",
    usiaHamil: "",
    hpht: "",
    catatan: ""
  });

  // Fetch data
  const fetchSasaran = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/sasaran');
      if (res.ok) {
        const data = await res.json();
        setSasaranList(data);
      }
    } catch (error) {
      console.error("Gagal mengambil data sasaran", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSasaran();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // Maps input id to state key (e.g. inp-nama -> nama)
    const key = id.replace('inp-', '').replace(/-([a-z])/g, g => g[1].toUpperCase());
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/sasaran', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert("Data berhasil disimpan!");
        setFormData({ ...formData, nama: "", nik: "", tglLahir: "", catatan: "" });
        setActiveTab("daftar");
        fetchSasaran();
      } else {
        alert("Gagal menyimpan data.");
      }
    } catch (error) {
      alert("Terjadi kesalahan.");
    }
  };

  const calculateAgeStr = (dateStr: string) => {
    if (!dateStr) return "-";
    const dob = new Date(dateStr);
    const diff = new Date().getTime() - dob.getTime();
    const ageDate = new Date(diff); 
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    return `${years} thn ${months} bln`;
  };

  return (
    <>
      <Header title="Pendataan Sasaran" context="Registrasi balita, ibu hamil, lansia" />
      <section className="view-section active">

        <div className="step-banner" style={{ borderLeftColor: 'var(--step1)' }}>
          <div className="step-banner-icon" style={{ background: 'var(--step1)' }}><i className="fas fa-user-plus"></i></div>
          <div className="step-banner-text">
            <h4>Tahap 1 — Pendataan Sasaran</h4>
            <p>Daftarkan seluruh sasaran posyandu: balita (0–5 tahun), ibu hamil, dan lansia. Data ini menjadi dasar seluruh alur layanan berikutnya.</p>
          </div>
        </div>

        <div className="tabs">
          <button className={`tab-btn ${activeTab === 'daftar' ? 'active' : ''}`} onClick={() => setActiveTab('daftar')}>
            <i className="fas fa-list"></i> Daftar Sasaran
          </button>
          <button className={`tab-btn ${activeTab === 'tambah' ? 'active' : ''}`} onClick={() => setActiveTab('tambah')}>
            <i className="fas fa-plus-circle"></i> Registrasi Baru
          </button>
        </div>

        {activeTab === 'daftar' && (
          <div className="tab-content active">
            <div className="card-container">
              <div className="card-header-actions">
                <h3><i className="fas fa-users"></i> Data Seluruh Sasaran</h3>
                <div className="search-bar">
                  <div className="search-input-wrapper">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Cari nama / NIK..." />
                  </div>
                </div>
              </div>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Nama</th>
                      <th>Kategori</th>
                      <th>Usia</th>
                      <th>Ibu/Wali</th>
                      <th>Alamat</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sasaranList.length === 0 && !loading && (
                      <tr><td colSpan={6} style={{textAlign: 'center'}}>Belum ada data sasaran.</td></tr>
                    )}
                    {sasaranList.map(s => (
                      <tr key={s.id}>
                        <td>{s.nama}<br/><small>{s.nik}</small></td>
                        <td>{s.kategori === 'balita' ? 'Balita' : s.kategori === 'ibu_hamil' ? 'Ibu Hamil' : 'Lansia'}</td>
                        <td>{calculateAgeStr(s.tglLahir)}</td>
                        <td>{s.namaIbu || '-'}</td>
                        <td>{s.alamat || '-'}</td>
                        <td>
                           <button className="btn btn-sm btn-secondary"><i className="fas fa-edit"></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tambah' && (
          <div className="tab-content active">
            <div className="card-container">
              <h3><i className="fas fa-user-plus"></i> Registrasi Sasaran Baru</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Kategori Sasaran <span className="req">*</span></label>
                    <select id="inp-kategori" value={formData.kategori} onChange={handleChange} required>
                      <option value="balita">Balita (0–5 Tahun)</option>
                      <option value="ibu_hamil">Ibu Hamil</option>
                      <option value="lansia">Lansia (&gt;60 Tahun)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Nama Lengkap <span className="req">*</span></label>
                    <input type="text" id="inp-nama" value={formData.nama} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>NIK</label>
                    <input type="text" id="inp-nik" maxLength={16} value={formData.nik} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Tanggal Lahir <span className="req">*</span></label>
                    <input type="date" id="inp-tgl-lahir" value={formData.tglLahir} onChange={handleChange} required />
                  </div>

                  {formData.kategori === 'balita' && (
                    <>
                      <div className="form-group">
                        <label>Jenis Kelamin</label>
                        <select id="inp-jk" value={formData.jk} onChange={handleChange}>
                          <option value="L">Laki-laki</option>
                          <option value="P">Perempuan</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Nama Ayah</label>
                        <input type="text" id="inp-nama-ayah" value={formData.namaAyah} onChange={handleChange} />
                      </div>
                    </>
                  )}

                  {formData.kategori !== 'lansia' && (
                    <div className="form-group">
                      <label>Nama Ibu / Wali</label>
                      <input type="text" id="inp-nama-ibu" value={formData.namaIbu} onChange={handleChange} />
                    </div>
                  )}

                  <div className="form-group">
                    <label>No. HP (Orang Tua / Pribadi)</label>
                    <input type="tel" id="inp-hp" value={formData.hp} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Jalan / Alamat</label>
                    <input type="text" id="inp-alamat" value={formData.alamat} onChange={handleChange} />
                  </div>

                  {formData.kategori === 'ibu_hamil' && (
                    <>
                      <div className="form-group">
                        <label>Usia Kehamilan (minggu)</label>
                        <input type="number" id="inp-usia-hamil" value={formData.usiaHamil} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label>HPHT</label>
                        <input type="date" id="inp-hpht" value={formData.hpht} onChange={handleChange} />
                      </div>
                    </>
                  )}
                </div>
                <div className="form-group" style={{ marginTop: '14px' }}>
                  <label>Catatan Khusus</label>
                  <textarea id="inp-catatan" value={formData.catatan} onChange={handleChange}></textarea>
                </div>
                <div className="btn-group">
                  <button className="btn btn-primary" type="submit"><i className="fas fa-save"></i> Simpan Data</button>
                  <button className="btn btn-secondary" type="button" onClick={() => setActiveTab('daftar')}><i className="fas fa-times"></i> Batal</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

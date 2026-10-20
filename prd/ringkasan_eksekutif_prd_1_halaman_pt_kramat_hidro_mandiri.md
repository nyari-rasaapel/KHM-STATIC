# RINGKASAN EKSEKUTIF (1-PAGER) — PRD & BRIEF PROYEK
## Web Portal Korporat & Platform Pengadaan EPC Terintegrasi
### **PT Kramat Hidro Mandiri (Hydropower & Electrical Grid EPC)**
*Klasifikasi Dokumen: Dokumen Strategis Internal & Ringkasan Pengadaan B2B/B2G • Status: Disetujui (Approved)*

---

### 1. Profil & Mandat Strategis Perusahaan
**PT Kramat Hidro Mandiri** adalah kontraktor EPC (*Engineering, Procurement, Construction*) terkemuka di Indonesia dengan rekam jejak **25+ tahun (sejak 1999)**, mengelola **140+ proyek strategis**, kapasitas terpasang **>1.200 MW**, serta rekor **Zero Fatalities (SMK3 Emas)**. 
* **Tujuan Portal:** Mengukuhkan otoritas teknis di hadapan Kementerian (ESDM, PUPR), BUMN (PT PLN), dan IPP internasional, sekaligus menjadi kanal resmi prakualifikasi tender B2B/B2G terenkripsi berstandar Non-Disclosure Agreement (NDA).

---

### 2. Kebutuhan Pengguna & Persona Pengambil Keputusan
| Persona Target | Prioritas & Kebutuhan Kunci | Fitur Solusi pada Portal |
|---|---|---|
| **Komite Tender / PPK (Kementerian & BUMN)** | Verifikasi legalitas formal, CSMS High-Risk, dan bukti kepatuhan TKDN. | Modul verifikasi sertifikasi (ISO/SMK3), formulir RFP resmi, audit track record. |
| **CTO & Chief Engineer (IPP / Mitra EPC)** | Pembuktian kapabilitas hidromekanikal, efisiensi turbin (>94%), otomasi SCADA. | Halaman studi kasus mendalam (Data penstock, kurva turbin Francis/Pelton, GIS 500 kV). |
| **VP Pengadaan & Pasokan Swasta** | Keandalan SLA, kepastian jadwal pengiriman, dan proteksi kerahasiaan data (NDA). | Garansi respon komersial 1x24 jam kerja, klausul enkripsi TOR/RFP. |
| **Site Operations Manager** | Tanggap darurat gangguan trafo, DGA, kavitasi turbin, dan ketersediaan overhaul. | Telemetri darurat O&M, hotline siaga 24/7 `0800-1-HIDRO` (<2 jam respons darurat). |

---

### 3. Ekosistem Antarmuka & Arsitektur Solusi (Screen Deliverables)
1. **Beranda Interaktif (Desktop & Mobile):** Dilengkapi simulasi hidrodinamika Three.js WebGL (60 FPS, ultra-ringan), metrik KPI, pilar EPC, dan portofolio Proyek Strategis Nasional (PSN).
2. **Layanan & Solusi Rekayasa:** Katalog spesialisasi PLTA Turnkey, Transmisi/Gardu Induk (GIS/AIS 150-500 kV), O&M, dan pengujian balai fabrikasi kendal (NDT & Hydrostatic).
3. **Profil Korporat & Tata Kelola:** Visi 2030 (2.5 GW), rekam jejak kepemimpinan (PII/IPU/PMP), serta akreditasi mutu internasional (ISO 9001/14001/45001).
4. **Studi Kasus Teknis (PLTA Peusangan 88 MW):** Dokumentasi teknis terperinci: tunneling NATM, penstock 3.2 MPa, turbin Francis, TKDN 68.4%, dan 4.2 juta jam kerja selamat.
5. **Portal Pengadaan B2B & Kontak Cepat:** Form RFP tender terverifikasi, direktori kantor pusat & balai fabrikasi Kendal, pemetaan satelit, dan direktori departemen.

---

### 4. Standar Visual, Teknis & Non-Fungsional
* **Design Identity (*Hydro-Engineering Prestige*):** Palet *Midnight Navy* (`#071325`), *Champagne Gold* (`#C9A84C`), dan *Hydro Cyan* (`#38BDF8`). Tipografi kombinasi *Playfair Display* (prestisius) dan *Inter* (presisi enjiniring).
* **Performa & Responsivitas:** First Contentful Paint (FCP) < 1.2 detik, payload animasi Three.js < 150 KB, navigasi mobile ramah satu jempol (*thumb-zone friendly*).
* **Keamanan & Kepatuhan:** Enkripsi TLS 1.3 / SSL 256-bit, tunduk pada UU Pelindungan Data Pribadi (UU PDP), klausul kerahasiaan NDA otomatis untuk data penawaran proyek.

---

### 5. Roadmap & Status Implementasi
* **Fase 1 (Selesai):** Seluruh arsitektur layar (Beranda Statis, Beranda Three.js WebGL, Mobile App, Layanan, Tentang Kami, Studi Kasus, dan Portal RFP) telah tervalidasi di kanvas.
* **Fase 2 (Q3-Q4):** Integrasi API e-Procurement BUMN, multi-bahasa (ID/EN) untuk konsorsium global, dan dashboard tracking penawaran tender.
* **Fase 3 (Tahun Depan):** Showcase telemetri SCADA IoT real-time dari gardu dan turbin terhubung.

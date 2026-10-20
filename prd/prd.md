# PRD (Product Requirement Document) — PT. Kramat Hidro Mandiri

## 1. Perubahan Terkini
- **Migrasi Stack:** Menghilangkan Tailwind CSS sepenuhnya, beralih ke CSS murni (Modern CSS Custom Properties, Flexbox/Grid) dan Vanilla JavaScript modern.
- **Keselarasan Konten:** Mengadopsi isi asli dari `kramathidromandiri.com` (Hydropower, Water Turbines, Machinery, MetalWorks, Steel Structure, Industrial Trading, General Constructions).
- **Fitur Baru (Top-Right Widget):** 
  - Tombol **Mode Gelap / Terang** (Dark/Light Mode) dengan ikon SVG modern.
  - Tombol **Pengaturan Ukuran Font** (A-/A+) untuk aksesibilitas pembaca.
- **Efek Navbar:** Navbar beralih menjadi melayang (*floating*) saat di-*scroll* ke bawah, **memendek menjadi 50% lebar layar** (terpusat horizontal), **posisi tulisan PT. Kramat Hidro Mandiri pindah ke atas semua menu** yang ada di navbar (menggunakan layout fleksibel kolom saat floating), dengan animasi lebih lambat & *smooth* (`transition: all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)`), jarak `50px` dari atas browser, desain *glass* transparan 70% opacity + *border-radius* 14px.
- **Kontak Diselaraskan:** 
  - Alamat lengkap: **Jalan Cihanjuang Rahayu No. 303A Parongpong, Bandung Barat 40559 JB, Indonesia** (berdasarkan koordinat Google Maps lama, Cigugur Girang/Parongpong, Bandung Barat).
  - Email: `info@kramathidromandiri.com`
  - Telepon: `+62 22 664 8089`
  - WhatsApp lama via `https://bit.ly/3hjLYXt` → `+62 812 2157 3499` (dipertahankan di kontak karena nomor WA terpisah; namun nomor telp kantor utama dipakai `+62 22 664 8089`).
  - Sosial: Instagram [@kramathidromandiri](https://www.instagram.com/kramathidromandiri/), Facebook [kramathidromandiri](https://www.facebook.com/kramathidromandiri/), Google [g.page/KRAMATHIDROMANDIRI](http://g.page/KRAMATHIDROMANDIRI).
- **SEO & Semantic:** Semua halaman dilengkapi `<meta>` deskripsi/kata kunci, canonical, Open Graph, Twitter Card, dan JSON-LD (`Organization` di index, `LocalBusiness`+geo di kontak). Struktur semantik ditambah `<main id="main">`, `<section aria-labelledby>`, `<address>`, `aria-current="page"`, `aria-label="Navigasi utama"`, `<a class="skip-link">`, `aria-describedby`/`aria-live` pada form.
- **Cleanup:** Footer semua halaman konsisten — alamat baru + telp + email. `tentang.html` profil perusahaan berisi bidang usaha + lokasi akurat.

## 2. Palet Warna & Desain (Hydro-Engineering Prestige)
- **Background Utama (Dark):** `#071325` (Deep Abyssal Navy)
- **Background Utama (Light):** `#f8fafc` (Slate Light)
- **Primary Accent (Gold):** `#c9a84c`
- **Text Color (Dark):** `#d7e3fc`
- **Text Color (Light):** `#0f172a`
- **Surface / Glass:** `rgba(26, 42, 74, 0.55)` dengan `backdrop-filter: blur(16px)`

## 3. Struktur File
- `index.html` (Halaman Beranda dengan widget tema & font, animasi Three.js/Canvas)
- `layanan.html` (Katalog Layanan)
- `tentang.html` (Tentang Kami)
- `studi-kasus.html` (Studi Kasus Proyek)
- `kontak.html` (Kontak & Informasi)
- `style.css` (CSS murni menggantikan Tailwind)
- `script.js` (Logika UI, tema dark/light, scaling font, animasi)

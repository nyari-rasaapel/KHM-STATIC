# PRD (Product Requirement Document) — PT. Kramat Hidro Mandiri

## 1. Perubahan Terkini
- **Migrasi Stack:** Menghilangkan Tailwind CSS sepenuhnya, beralih ke CSS murni (Modern CSS Custom Properties, Flexbox/Grid) dan Vanilla JavaScript modern.
- **Keselarasan Konten:** Mengadopsi isi asli dari `kramathidromandiri.com` (Hydropower, Water Turbines, Machinery, MetalWorks, Steel Structure, Industrial Trading, General Constructions).
- **Fitur Baru (Top-Right Widget):** 
  - Tombol **Mode Gelap / Terang** (Dark/Light Mode) dengan ikon SVG modern.
  - Tombol **Pengaturan Ukuran Font** (A-/A+) untuk aksesibilitas pembaca.

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

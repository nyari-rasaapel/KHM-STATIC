# PT Kramat Hidro Mandiri - Web Portal Korporat

Statis. Dark mode. Glassmorphism.

## Halaman
- `index.html` - Beranda (Three.js WebGL hero water simulation)
- `layanan.html` - Layanan EPC (PLTA, Transmisi, O&M, NDT)
- `tentang.html` - Profil korporat & visi 2030
- `studi-kasus.html` - Studi kasus PLTA Peusangan 88 MW
- `kontak.html` - Portal pengadaan B2B & RFP

## Dev/Build
Tidak ada build step untuk static site. Semua file HTML siap deploy ke hosting statis (GitHub Pages, Netlify, Vercel).

## Teknologi
- HTML5 + Tailwind CSS (via CDN)
- Vanilla JS (Three.js water simulation @ 150KB budget)
- Favicon.svg sebagai logo utama

## Deployment
Push ke `gh-pages` branch atau langsung ke domain `https://khmweb.nyerik...`

## Kontribusi
- Gunakan theme: `#071325` (surface) + `#c9a84c` (primary) + `#38bdf8` (tertiary)
- Font heading: Playfair Display
- Font body: Plus Jakarta Sans
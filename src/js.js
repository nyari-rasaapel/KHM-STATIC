// ==================== SCROLL REVEAL (Intersection Observer) ====================
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // repeat setiap scroll
      }
    });
  },
  { threshold: 0.2 },
); // 20% elemen terlihat

revealElements.forEach((el) => revealObserver.observe(el));

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.getElementById('navbar');
const heroSection = document.getElementById('home');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-md', 'bg-background/95');
    navbar.classList.remove('bg-background/80');
  } else {
    navbar.classList.remove('shadow-md', 'bg-background/95');
    navbar.classList.add('bg-background/80');
  }
});

// ==================== HAMBURGER MENU ====================
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('mobile-overlay');
const body = document.body;

function toggleMenu() {
  const isOpen = mobileMenu.classList.contains('hidden');

  if (isOpen) {
    mobileMenu.classList.remove('hidden');
    overlay.classList.remove('hidden');
    body.classList.add('menu-open');
    // Animasi hamburger menjadi X
    const lines = document.querySelectorAll('.hamburger-line');
    lines[0].classList.add('rotate-45', 'translate-y-2');
    lines[1].classList.add('opacity-0');
    lines[2].classList.add('-rotate-45', '-translate-y-2');
  } else {
    mobileMenu.classList.add('hidden');
    overlay.classList.add('hidden');
    body.classList.remove('menu-open');
    // Kembalikan hamburger
    const lines = document.querySelectorAll('.hamburger-line');
    lines[0].classList.remove('rotate-45', 'translate-y-2');
    lines[1].classList.remove('opacity-0');
    lines[2].classList.remove('-rotate-45', '-translate-y-2');
  }
}

hamburgerBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Tutup menu saat klik link di mobile menu
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (!mobileMenu.classList.contains('hidden')) {
      toggleMenu();
    }
  });
});

// ==================== FORM VALIDASI (contoh dasar) ====================
// Anda bisa tambahkan nanti saat membuat form section

// ==================== CATATAN UNTUK ANDA ====================
// 1. Scroll reveal: tambahkan class "scroll-reveal opacity-0 translate-y-6 transition-all duration-500" ke elemen yang ingin dianimasi
// 2. Untuk section berikutnya, copy-paste struktur section hero lalu modifikasi
// 3. Warna bisa diakses via class: bg-background, text-text-primary, bg-primary, bg-secondary, text-accent

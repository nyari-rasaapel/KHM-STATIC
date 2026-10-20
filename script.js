// ===== Theme (dark / light) =====
const htmlEl = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

const SUN_ICON = '<path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7.5-11.5a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm0 11a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 0V16a1 1 0 0 1 1-1zm-3.9-8.6a1 1 0 0 1 1.4 0l1 1a1 1 0 1 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4zm7.4 11.6a1 1 0 0 1 0 1.4l-1 1a1 1 0 0 1-1.4-1.4l1-1a1 1 0 0 1 1.4 0zM4 12a1 1 0 0 1-1 1H1.5a1 1 0 0 1 0-2H3a1 1 0 0 1 1 1zm18 0a1 1 0 0 1-1 1h-1.5a1 1 0 0 1 0-2H21a1 1 0 0 1 1 1zM5.6 5.6a1 1 0 0 1 1.4 0l1 1a1 1 0 0 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4zm11.4 11.4a1 1 0 0 1 1.4 0l1 1a1 1 0 0 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4zM18.4 5.6a1 1 0 0 1 0 1.4l-1 1a1 1 0 0 1-1.4-1.4l1-1a1 1 0 0 1 1.4 0zM7 17a1 1 0 0 1 0 1.4l-1 1a1 1 0 0 1-1.4-1.4l1-1a1 1 0 0 1 1.4 0z"/>';
const MOON_ICON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

function applyTheme(theme) {
  htmlEl.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  if (themeToggle) {
    const svg = themeToggle.querySelector('svg');
    if (svg) svg.innerHTML = theme === 'dark' ? SUN_ICON : MOON_ICON;
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
    themeToggle.setAttribute('title', theme === 'dark' ? 'Mode Terang' : 'Mode Gelap');
  }
}

themeToggle.addEventListener('click', () => {
  applyTheme(htmlEl.dataset.theme === 'dark' ? 'light' : 'dark');
});
applyTheme(localStorage.getItem('theme') || 'dark');

// ===== Font scaling =====
const fontDecrease = document.getElementById('font-decrease');
const fontIncrease = document.getElementById('font-increase');
const fontLabel = document.getElementById('font-size-label');
let fontScale = parseFloat(localStorage.getItem('fontScale')) || 1;

function applyFontScale() {
  htmlEl.style.setProperty('--font-size-base', (16 * fontScale).toFixed(2) + 'px');
  if (fontLabel) fontLabel.textContent = Math.round(fontScale * 100) + '%';
  localStorage.setItem('fontScale', fontScale);
}

fontDecrease.addEventListener('click', () => {
  fontScale = Math.max(0.75, fontScale - 0.125);
  applyFontScale();
});
fontIncrease.addEventListener('click', () => {
  fontScale = Math.min(1.5, fontScale + 0.125);
  applyFontScale();
});
applyFontScale();

// ===== Navbar floating on scroll =====
const header = document.querySelector('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('floating', window.scrollY > 10);
  });
}
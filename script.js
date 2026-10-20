// ===== Theme (dark / light) =====
const htmlEl = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

const SUN_ICON = '<path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-14a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 0V20a1 1 0 0 1 1-1zM4 12a1 1 0 0 1-1 1H1.5a1 1 0 0 1 0-2H3a1 1 0 0 1 1 1zm18 0a1 1 0 0 1-1 1h-1.5a1 1 0 0 1 0-2H21a1 1 0 0 1 1 1zM5.6 5.6a1 1 0 0 1 1.4 0l1 1a1 1 0 0 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4zm11.4 11.4a1 1 0 0 1 1.4 0l1 1a1 1 0 0 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4zM18.4 5.6a1 1 0 0 1 0 1.4l-1 1a1 1 0 0 1-1.4-1.4l1-1a1 1 0 0 1 1.4 0zM7 17a1 1 0 0 1 0 1.4l-1 1a1 1 0 0 1-1.4-1.4l1-1A1 1 0 0 1 7 17z"/>';
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

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    applyTheme(htmlEl.dataset.theme === 'dark' ? 'light' : 'dark');
  });
}

applyTheme(localStorage.getItem('theme') || 'dark');

// ===== Font size scaling (A- / A+) =====
const fontDecrease = document.getElementById('font-decrease');
const fontIncrease = document.getElementById('font-increase');
const fontLabel = document.getElementById('font-size-label');
let fontScale = parseFloat(localStorage.getItem('fontScale')) || 1;

function applyFontScale() {
  htmlEl.style.setProperty('--font-size-base', (16 * fontScale).toFixed(2) + 'px');
  if (fontLabel) fontLabel.textContent = Math.round(fontScale * 100) + '%';
  localStorage.setItem('fontScale', fontScale);
}

if (fontDecrease) {
  fontDecrease.addEventListener('click', () => {
    fontScale = Math.max(0.75, fontScale - 0.125);
    applyFontScale();
  });
}

if (fontIncrease) {
  fontIncrease.addEventListener('click', () => {
    fontScale = Math.min(1.5, fontScale + 0.125);
    applyFontScale();
  });
}

applyFontScale();

// ===== Water simulation hero (index only) =====
const canvas = document.getElementById('hero-canvas');
if (canvas) {
  let time = 0;

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    const ctx = canvas.getContext('2d');
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const styles = getComputedStyle(htmlEl);
    const bg = styles.getPropertyValue('--bg').trim() || '#071325';
    const isDark = htmlEl.dataset.theme === 'dark';

    const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) / 2);
    grad.addColorStop(0, bg);
    grad.addColorStop(1, isDark ? '#1a2a4a' : '#dbeafe');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.18)' : 'rgba(37, 99, 235, 0.18)';
    ctx.lineWidth = 1.5;
    for (let layer = 0; layer < 3; layer++) {
      ctx.beginPath();
      const baseY = h * (0.42 + layer * 0.08);
      for (let x = 0; x <= w; x += 6) {
        const wave =
          Math.sin(x * 0.015 + time + layer) * (18 - layer * 4) +
          Math.cos(x * 0.008 + time * 0.6 + layer) * 10;
        ctx.lineTo(x, baseY + wave);
      }
      ctx.stroke();
    }

    time += 0.015;
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    draw();
  } else {
    requestAnimationFrame(draw);
  }
}

// ===== Contact form (kontak only) =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.getElementById('form-status');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    [name, email, message].forEach((field) => {
      const ok = field.value.trim().length > 0;
      field.setAttribute('aria-invalid', String(!ok));
      if (!ok) valid = false;
    });

    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.setAttribute('aria-invalid', 'true');
      valid = false;
    }

    if (!valid) {
      if (status) status.textContent = 'Mohon lengkapi nama, email valid, dan pesan Anda.';
      return;
    }

    if (status) status.textContent = 'Terima kasih. Pesan Anda siap dikirim ke info@kramathidromandiri.com.';
    contactForm.reset();
    [name, email, message].forEach((field) => field.removeAttribute('aria-invalid'));
  });
}
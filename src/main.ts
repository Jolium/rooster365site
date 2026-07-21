import './style.css';
import { CHART } from './content';

const THEME_KEY = 'rooster365-theme';

function applyTheme(theme: 'light' | 'dark'): void {
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.textContent = theme === 'dark' ? '☀' : '☽';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Lichte modus inschakelen' : 'Donkere modus inschakelen');
  });
}

function currentTheme(): 'light' | 'dark' {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function initTheme(): void {
  applyTheme(currentTheme());
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  });
}

function initTopStrip(): void {
  const strip = document.querySelector<HTMLElement>('[data-top-strip]');
  if (!strip) return;
  const onScroll = () => strip.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initLightbox(): void {
  const lightbox = document.querySelector<HTMLElement>('[data-lightbox]');
  const lightboxImg = lightbox?.querySelector<HTMLImageElement>('img');
  if (!lightbox || !lightboxImg) return;

  const open = (src: string, alt: string) => {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
  };
  const close = () => {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  };

  document.querySelectorAll<HTMLImageElement>('.feature-media img').forEach((img) => {
    img.addEventListener('click', () => open(img.src, img.alt));
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) close();
  });
  lightbox.querySelector('[data-lightbox-close]')?.addEventListener('click', close);
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

function renderCompareTables(): void {
  document.querySelectorAll<HTMLElement>('[data-compare-table]').forEach((container) => {
    const rows = CHART.map(
      (row) => `
        <tr>
          <td>${row.label}</td>
          <td>${row.basic}</td>
          <td>${row.standard}</td>
        </tr>`,
    ).join('');

    container.innerHTML = `
      <table class="compare">
        <thead>
          <tr>
            <th></th>
            <th>Basic</th>
            <th>Standard</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>`;
  });
}

function initFooterYear(): void {
  document.querySelectorAll<HTMLElement>('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

initTheme();
initTopStrip();
initLightbox();
renderCompareTables();
initFooterYear();

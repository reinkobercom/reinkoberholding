import { inject } from '@vercel/analytics';

// Vercel Web Analytics (ohne Cookies) – nur auf der echten Website, nicht lokal
if (!/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) {
  inject({ mode: 'production' });
}

// Animationen: Einblenden beim Scrollen, hochzählende Kennzahlen,
// Licht-Effekt auf Karten. Respektiert „Bewegung reduzieren“.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Einblenden beim Scrollen ──────────────────────────────────
const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-draw], .split-words');

if (reduce || !('IntersectionObserver' in window)) {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  revealTargets.forEach((el) => io.observe(el));
}

// ── Hochzählende Kennzahlen ───────────────────────────────────
const fmt = new Intl.NumberFormat('de-DE');
const counters = document.querySelectorAll<HTMLElement>('[data-count]');

const runCounter = (el: HTMLElement) => {
  const target = Number(el.dataset.count);
  const out = el.querySelector<HTMLElement>('[data-count-out]');
  if (!out || !Number.isFinite(target)) return;
  const duration = 1800;
  const start = performance.now();
  const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    out.textContent = fmt.format(Math.round(target * ease(p)));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

if (!reduce && 'IntersectionObserver' in window) {
  counters.forEach((el) => {
    const out = el.querySelector<HTMLElement>('[data-count-out]');
    if (out) out.textContent = '0';
  });
  const cio = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          runCounter(entry.target as HTMLElement);
          cio.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.4 },
  );
  counters.forEach((el) => cio.observe(el));
}

// ── Licht folgt dem Mauszeiger auf Karten ─────────────────────
if (!reduce && window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll<HTMLElement>('[data-glow]').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

// ── Leichter Parallax-Effekt auf Fotos ────────────────────────
if (!reduce) {
  const parallax = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (parallax.length) {
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      parallax.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const progress = (r.top + r.height / 2 - vh / 2) / vh; // -1 … 1
        el.style.setProperty('--py', `${(progress * -24).toFixed(1)}px`);
      });
      ticking = false;
    };
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true },
    );
    update();
  }
}

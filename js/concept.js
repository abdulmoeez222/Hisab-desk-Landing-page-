/* Hisaab Desk concept-v2 (on v17a): hero entrance + parallax, desks filtered by the open space tab. Preview build. */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1. Hero entrance: .cv-go after first paint so the CSS keyframes run once */
  const hero = $(".hero");
  if (hero) requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add("cv-go")));

  /* 2. Subtle parallax (desktop pointer + scroll) via the CSS `translate` property (never fights keyframe `transform`) */
  const layers = $$("[data-parallax]");
  if (hero && !reduce && layers.length && matchMedia("(pointer:fine) and (min-width:900px)").matches) {
    let mx = 0, my = 0, sy = 0, raf = 0;
    const paint = () => {
      raf = 0;
      layers.forEach(el => {
        const k = parseFloat(el.dataset.parallax) || 1;
        el.style.translate = `${(mx * 10 * k).toFixed(1)}px ${(my * 8 * k - sy * 0.06 * k).toFixed(1)}px`;
      });
    };
    const q = () => { if (!raf) raf = requestAnimationFrame(paint); };
    hero.addEventListener("pointermove", e => { const r = hero.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - .5; my = (e.clientY - r.top) / r.height - .5; q(); });
    hero.addEventListener("pointerleave", () => { mx = my = 0; q(); });
    addEventListener("scroll", () => { sy = Math.min(scrollY, 900); q(); }, { passive: true });
  }

  /* 3. v17l: desks are rendered once each by main.js (all 9 visible); the space chips there highlight + jump. */

  /* v17e: tab rows scroll sideways on mobile; show the 24px right-edge fade only while there is more to scroll */
  $$(".pt-tabs,.dash-toggle,.pr-toggle").forEach(row => {
    const upd = () => row.classList.toggle("tab-fade", row.scrollWidth - row.clientWidth - row.scrollLeft > 2);
    row.addEventListener("scroll", upd, { passive: true }); addEventListener("resize", upd); upd();
    $$('[role="tab"],button', row).forEach(b => b.addEventListener("focus", () => b.scrollIntoView({ block: "nearest", inline: "nearest" })));
  });
})();

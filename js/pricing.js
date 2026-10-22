/* Founder Members seat count: ONE place to change it (e.g. "1,000"). Fills every [data-seats] on the page. */
(() => { const SEATS = "2,000"; document.querySelectorAll("[data-seats]").forEach(el => { el.textContent = SEATS; }); })();
/* Mahana / Saalana pricing toggle (planned prices). Updates the waitlist form's hidden plan_pref. */
(() => {
  const box = document.getElementById("pricing"); if (!box) return;
  const btns = box.querySelectorAll(".pr-btn"), pref = document.getElementById("planPref");
  function set(plan) {
    btns.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.plan === plan)));
    box.querySelectorAll("[data-view]").forEach(el => { el.hidden = el.dataset.view !== plan; });
    box.dataset.plan = plan;
    if (pref) pref.value = plan;
  }
  btns.forEach(b => b.addEventListener("click", () => set(b.dataset.plan)));
  set("saalana");
})();

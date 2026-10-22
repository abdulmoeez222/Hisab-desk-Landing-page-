(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- Nav (logo only) ---------- */
  const nav = $("#nav");
  const onScroll = () => nav && nav.classList.toggle("scrolled", scrollY > 10);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- Reveal ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach((el, i) => { el.style.setProperty("--d", (i % 4) * 70 + "ms"); io.observe(el); });

  /* ---------- Counters ---------- */
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0), t0 = performance.now();
    const step = t => { const p = Math.min((t - t0) / 1200, 1), v = end * (1 - Math.pow(1 - p, 3)); el.textContent = v.toFixed(dec); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step); cio.unobserve(el);
  }), { threshold: 0.6 });
  $$("[data-count]").forEach(el => cio.observe(el));

  /* ---------- v15d: Desks grid restored (v12 look): all nine visible, click to expand ---------- */
  // Exact desk names the Worker accepts (sent in the hidden "desk" field)
  const DESK_SEND = { daily: "Daily Hisaab Desk", business: "Business", scan: "Bill Scan", tameer: "Ghar Ki Tameer", procurement: "Procurement", sheet: "Sheet Se Hisaab", dutch: "Dutch", shaadi: "Shaadi", committee: "Committee" };
  // v17l: one card per desk, brief order; space tags drive the chip counts, highlight and jump
  const DESK_ORDER = ["daily", "scan", "committee", "tameer", "shaadi", "sheet", "business", "procurement", "dutch"];
  const SPACE_ORDER = ["individual", "family", "business", "sharing", "shaadi"];
  const SPACE_LABEL = { individual: "Individual", family: "Family", business: "Business", sharing: "Sharing", shaadi: "Shaadi" };
  const DESK_SPACES = { daily: ["individual", "family"], scan: ["individual", "family"], committee: ["individual", "family"], tameer: ["individual", "family"], shaadi: ["family", "shaadi"], sheet: ["individual"], business: ["business"], procurement: ["business"], dutch: ["sharing"] };
  const spacesOf = id => SPACE_ORDER.filter(s => (DESK_SPACES[id] || []).includes(s)).slice(0, 3);
  // Family household sample, crossfaded onto Daily Hisaab's crop while the Family chip is on (sample data only)
  const FAM_MOCK = `
      <div class="m-head"><b>Ghar Ka Budget · October</b><span class="fs-avs"><i>A</i><i>S</i><i>F</i><i>Z</i></span></div>
      <div class="m-ring-row"><div class="m-ring" style="--p:70;--c:#C6FF3D"><div><b>70%</b></div></div><div class="fs-ring-t"><b>Rs 84,300</b><small>of Rs 1,20,000</small></div></div>
      <div class="m-rows">
        <div class="m-rowi"><span>Ration · paid by S</span><b>Rs 32,000</b></div>
        <div class="m-rowi"><span>Bijli bill · paid by A</span><b>Rs 14,200</b></div>
        <div class="m-rowi"><span>School fee · due 5 Nov <i class="fs-rem">Reminder set</i></span><b>Rs 18,500</b></div>
      </div>
      <div class="ps-billu ps-pre fs-billu"><img class="ps-av" src="assets/billu-cap-avatar-256.png?v=v17j" srcset="assets/billu-cap-avatar-256.png?v=v17j 1x, assets/billu-cap-avatar-512.png?v=v17j 2x" alt="" width="30" height="30" loading="lazy"><p>Doodh wale ke Rs 4,500 baaki hain. Yaad hai!</p></div>`;
  const grid = $("#deskGrid");
  /* v18: only the launch desks look live: Daily Hisaab (covers udhaar, qist and bills) and Committee. Bill Scan comes in the mid-January update with Dukaan; it and the other 6 carry a "Jald aa raha hai" pill. */
  const LAUNCH = ["daily", "committee", "business"]; /* v18u: Business launches with the app */
  const DORD = DESK_ORDER.map(id => DESKS.find(d => d.id === id)).filter(Boolean);
  if (grid) {
  grid.innerHTML = DORD.map((d, i) => `
    <article class="dcard reveal${LAUNCH.includes(d.id) ? " dc-live" : " dc-later"}" id="desk-${d.id}" data-desk-id="${d.id}" data-desk="${DESK_SEND[d.id]}" data-spaces="${spacesOf(d.id).join(" ")}" style="--c:${d.color};--t:${d.tint}">
      <header class="dc-head">
        <span class="dc-tags">${spacesOf(d.id).map(s => `<span class="dc-sp">${SPACE_LABEL[s]}</span>`).join("")}</span>
        ${LAUNCH.includes(d.id) ? "" : `<span class="dc-soon">Jald aa raha hai</span>`}<span class="dc-no">No.&nbsp;${String(i + 1).padStart(2, "0")}<small>/${String(DORD.length).padStart(2, "0")}</small></span>
      </header>
      <h3>${d.short}</h3>
      <p class="dc-line">${d.line}</p>
      <div class="dc-prev"><div class="mini-phone"><div class="mp-top"><span class="mp-ic"><svg><use href="#${d.icon}"/></svg></span><b>${d.short}</b></div><div class="mp-body">${d.id === "daily" ? `<div class="xf"><div class="xf-a">${d.mock}</div><div class="xf-b" aria-hidden="true">${FAM_MOCK}</div></div>` : d.mock}</div></div></div>
      <div class="dc-more" id="more-${d.id}" hidden>
        <p class="dc-hook">${d.hook}</p>
        <ul class="dp-list">${d.bullets.map(b => `<li><svg><use href="#i-check"/></svg>${b}</li>`).join("")}</ul>
      </div>
      <button class="dc-toggle" type="button" aria-expanded="false" aria-controls="more-${d.id}"><span>Detail dekhein</span><svg class="ico"><use href="#i-arrow"/></svg></button>
    </article>`).join("");
  $$(".dcard", grid).forEach((el, i) => { el.style.setProperty("--d", (i % 3) * 80 + "ms"); io.observe(el); });
  const toggleDesk = (card, force) => {
    const btn = $(".dc-toggle", card), more = $(".dc-more", card);
    const open = force ?? btn.getAttribute("aria-expanded") !== "true";
    btn.setAttribute("aria-expanded", open); more.hidden = !open; card.classList.toggle("open", open);
    $("span", btn).textContent = open ? "Kam dikhayein" : "Detail dekhein";
  };
  grid.addEventListener("click", e => {
    const tg = e.target.closest(".dc-toggle"); if (tg) { toggleDesk(tg.closest(".dcard")); return; }
    /* Interactive desk mockups (sample only; nothing is saved or sent) */
    const t = e.target;
    const ap = t.closest(".m-approve");
    if (ap && t.closest("button")) {
      const ok = t.closest(".acc");
      ap.classList.add(ok ? "done" : "rejected");
      ap.querySelector(".ma-btns").outerHTML = ok
        ? `<div class="m-ok" style="animation-delay:0s"><svg><use href="#i-check"/></svg><div><b>Approve ho gaya!</b><small>Grey structure: Rs 32.9L / 36L</small></div></div>`
        : `<div class="m-alert">↩︎ Contractor ko wapas bheja: "Rate dobara check karein"</div>`;
      if (ok) window.Billu?.celebrate(ap, "Bill approve ho gaya! 🧱"); else window.Billu?.toast?.("Contractor ko wapas bhej diya ↩︎");
      if (ok) { const st = ap.closest(".mp-body").querySelectorAll(".m-stage")[1]; st.querySelector("em").textContent = "Rs 32.9L / 36L"; st.querySelector("i").style.width = "91%"; }
      return;
    }
    const mem = t.closest(".m-members div");
    if (mem) { const em = mem.querySelector("em"); if (em && !em.classList.contains("ok")) { em.className = "ok"; em.textContent = "Paid ✓"; window.Billu?.celebrate(mem, "Sab ki qist aa gayi! 🎉"); } return; }
    const per = t.closest(".m-people div");
    if (per) { const em = per.querySelector("em"); if (em && !em.classList.contains("ok")) { em.className = "ok"; em.textContent = "Settled ✓"; window.Billu?.mini?.(per); } return; }
    const cta = t.closest(".m-cta, .m-best button");
    if (cta && !cta.classList.contains("done")) { cta.classList.add("done"); window.Billu?.mini?.(cta); cta.textContent = cta.classList.contains("m-cta") ? "Drafts tayyar, aap bhej dein ✓" : "Order #1047 tayyar ✓"; return; }
    const sc = t.closest(".m-scan"); if (sc) { const body = sc.closest(".mp-body"), sl = body.querySelector(".scanline"); if (sl) { sl.style.animation = "none"; void sl.offsetWidth; sl.style.animation = ""; } }
  });
  }

  /* ---------- v15d: Dashboard restored (v12 look) — sidebar lists all 9 desks, each with its own sample view ---------- */
  if ($("#dash") && typeof DASH9 !== "undefined") {
    const nav = $("#dashNav");
    nav.innerHTML = DORD.map(d => `<button type="button" data-dash="${d.id}" data-desk-id="${d.id}" data-desk="${DESK_SEND[d.id]}" aria-pressed="false"><svg class="ico" aria-hidden="true"><use href="#${d.icon}"/></svg>${d.short}</button>`).join("");
    const dash = id => {
      const d = DASH9[id]; if (!d) return;
      $$("#dashNav [data-dash]").forEach(b => { const on = b.dataset.dash === id; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); });
      $$(".dash-toggle button").forEach(b => { const on = b.dataset.mode === d.group; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); });
      $(".dash-toggle").classList.toggle("biz", d.group === "business");
      $("#dashHello").textContent = d.hello; $("#dashTitle").textContent = d.title; $("#dashTip").textContent = d.tip;
      $("#kpis").innerHTML = d.kpis.map(k => `<div class="kpi" style="--c:${k.c}"><small>${k.l}</small><b>${k.v}</b><em>${k.d}</em></div>`).join("");
      $("#chartTitle").textContent = d.chartTitle; $("#chartSub").textContent = d.chartSub;
      const max = Math.max(...d.bars.map(b => b[1]));
      $("#bars").innerHTML = d.bars.map((b, i) => `<div class="bar ${i === d.bars.length - 1 ? "cur" : ""}"><em>${b[1]}</em><i style="--h:${(b[1] / max) * 100}%"></i><span>${b[0]}</span></div>`).join("");
      let acc = 0; const stops = d.legend.map(l => { const s = `${l[2]} ${acc}% ${acc + l[1]}%`; acc += l[1]; return s; }).join(",");
      $("#donut").style.background = `conic-gradient(${stops})`;
      $("#donutTitle").textContent = d.donutTitle; $("#donutLbl").textContent = d.donutLbl; $("#donutVal").textContent = d.donutVal;
      $("#legend").innerHTML = d.legend.map(l => `<li><i style="--c:${l[2]}"></i>${l[0]}<b>${l[1]}%</b></li>`).join("");
      $("#duesTitle").textContent = d.duesTitle;
      $("#dlist").innerHTML = d.dues.map(x => `<li><span style="--c:${x[4]}">${x[0]}</span><div><b>${x[1]}</b><small>${x[2]}</small></div><em>${x[3]}</em></li>`).join("");
      const el = $("#dash"); el.classList.remove("swap"); void el.offsetWidth; el.classList.add("swap");
    };
    nav.addEventListener("click", e => { const b = e.target.closest("[data-dash]"); if (b) dash(b.dataset.dash); });
    $$(".dash-toggle button").forEach(b => b.addEventListener("click", () => dash(b.dataset.mode === "business" ? "business" : "daily")));
    dash("daily");
    window.__dash = dash;
  }

  /* ---------- Forms → Billu Worker API (Cloudflare Pages version; no Netlify) ----------
     Each form POSTs to its own action URL (the Worker). Set TURNSTILE_SITEKEY to switch the bot check on. */
  const TURNSTILE_SITEKEY = "0x4AAAAAAFZdyJFEj7SeDQqM"; // e.g. "0x4AAAAAAA..." (public site key from Cloudflare Turnstile). Empty = no widget.
  // desk is a hidden field (default empty since v15d); legacy data-pick now also sends the exact Worker name
  document.addEventListener("click", e => { const p = e.target.closest("[data-pick]"); if (p && $("#joinDesk")) { const d = DESKS.find(x => x.id === p.dataset.pick); if (d) $("#joinDesk").value = DESK_SEND[d.id] || ""; } });

  // Turnstile (optional): one widget per form, rendered only when a site key is set.
  if (TURNSTILE_SITEKEY) {
    window.hdTurnstile = () => $$(".ts-slot").forEach(el => { el.hidden = false; el.dataset.wid = turnstile.render(el, { sitekey: TURNSTILE_SITEKEY, theme: "dark", size: "flexible", appearance: "interaction-only", "before-interactive-callback": () => el.classList.add("ts-on"), "after-interactive-callback": () => el.classList.remove("ts-on"), "error-callback": () => { el.classList.add("ts-on"); el.dataset.tsErr = "1"; } }); }); // v18q: zero height unless Turnstile actually needs a tap
    const s = document.createElement("script"); s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=hdTurnstile"; s.async = true; document.head.appendChild(s);
  }
  const tsReset = form => { const el = $(".ts-slot", form); if (window.turnstile && el?.dataset.wid) turnstile.reset(el.dataset.wid); };
  const encode = form => new URLSearchParams(new FormData(form)).toString();
  const send = form => {
    // Under file:// (local preview) there is no server to receive it.
    if (location.protocol === "file:") return Promise.reject(new Error("local preview"));
    const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 12000);
    return fetch(form.action, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json" }, body: encode(form), signal: ctl.signal })
      .then(async r => {
        clearTimeout(to);
        const data = await r.json().catch(() => ({}));
        if (!r.ok || !data.ok) { const err = new Error("HTTP " + r.status); err.userMsg = data.message; throw err; }
        return data; // waitlist: {status:"saved"|"pending"|"already_verified"|"received"}, feedback: {status:"saved"|"received"}
      })
      .finally(() => tsReset(form));
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const busyBtn = (btn, on, label) => { btn.disabled = on; btn.classList.toggle("loading", on); if (label) btn.firstChild.textContent = label; };
  const failMsg = `😅 Couldn't send right now. Check your internet and try again, or email us at <a href="mailto:hisaabdesk@gmail.com">hisaabdesk@gmail.com</a>.`;
  const firstName = v => (v || "").trim().split(/\s+/)[0].slice(0, 20);
  const showDone = (form, body, done, name) => {
    $$(".fd-name", done).forEach(n => n.textContent = name ? ", " + name : "");
    // v15f: habit-band CTA ("30-day Hisaab Challenge") adds a short line to the thank-you
    $(".fd-challenge", done)?.remove();
    if ($("#joinCta")?.value === "habit") { const p = document.createElement("p"); p.className = "fd-challenge"; p.textContent = "Challenge launch par shuru hoga, aur aap Founder Members ki list par hain."; $("h3", done)?.nextElementSibling?.after(p); }
    body.hidden = true; done.hidden = false; form.classList.add("sent");
    done.focus({ preventScroll: true });
    const r = form.getBoundingClientRect(); if (r.top < 0 || r.top > innerHeight * .6) form.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // Waitlist
  const join = $("#joinForm"), joinDone = $("#joinDone"), joinNote = $("#joinNote");
  const joinBody = { set hidden(v) { $$(":scope > :not(.form-done):not([type=hidden]):not(.hp)", join).forEach(el => el.hidden = v); } };
  const joinBtn = $("button[type=submit]", join);
  join.addEventListener("submit", e => {
    e.preventDefault(); if (joinBtn.disabled) return;
    const name = firstName(join.elements.name.value);
    busyBtn(joinBtn, true, "Sending… ");
    send(join).then(res => {
      // VERIFY_MODE=whatsapp only: show the "WhatsApp pe verify karein" step. In "none" mode the normal thank-you shows.
      $(".wa-verify", joinDone)?.remove();
      if (res.status === "pending" && res.verifyCode) {
        const box = document.createElement("div"); box.className = "wa-verify";
        box.style.cssText = "margin:12px 0;padding:12px;border:2px dashed currentColor;border-radius:14px";
        box.innerHTML = `<p><b>Last step:</b> verify on WhatsApp to confirm your signup. Code: <b>${esc(res.verifyCode)}</b></p>` +
          (res.waLink ? `<a class="btn btn-primary" target="_blank" rel="noopener" href="${esc(res.waLink)}">Verify on WhatsApp</a>` : "");
        $("h3", joinDone).after(box);
      }
      showDone(join, joinBody, joinDone, name);
      window.Billu?.celebrate(join, "Welcome to the family! 💚");
    }).catch(err => {
      joinNote.innerHTML = err?.userMsg ? esc(err.userMsg) : failMsg; joinNote.classList.add("err");
    }).finally(() => busyBtn(joinBtn, false, "Waitlist join karein "));
  });

  // Consent: friendly nudge instead of the browser bubble
  const consent = join.elements.consent, consentErr = $("#consentErr"), consentWrap = $("#consentWrap");
  const nudge = () => { consentErr.hidden = false; consentWrap.classList.remove("need"); void consentWrap.offsetWidth; consentWrap.classList.add("need"); };
  consent.addEventListener("invalid", e => { e.preventDefault(); if (join.elements.name.checkValidity() && join.elements.phone.checkValidity()) { nudge(); consentWrap.scrollIntoView({ behavior: "smooth", block: "center" }); } });
  consent.addEventListener("change", () => { if (consent.checked) { consentErr.hidden = true; consentWrap.classList.remove("need"); } });
  join.addEventListener("submit", e => { if (!consent.checked) { e.preventDefault(); e.stopImmediatePropagation(); nudge(); } }, true);

  // Founder Members CTA: scroll to the waitlist form and focus the first field
  $("#offerCta")?.addEventListener("click", e => {
    e.preventDefault();
    join.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => { (joinDone.hidden ? join.elements.name : joinDone).focus({ preventScroll: true }); join.classList.remove("ping"); void join.offsetWidth; join.classList.add("ping"); }, 500);
  });

  // v14: CTA source -> hidden "cta" (hero / badge / portal / habit / bottom); portal CTA also stores the open tab; scroll to the form
  $$("[data-cta]").forEach(a => a.addEventListener("click", e => {
    e.preventDefault(); const c = $("#joinCta"); if (c) c.value = a.dataset.cta;
    if (a.dataset.cta === "portal" && $("#joinPortal")) $("#joinPortal").value = window.HDPortals?.portal() || "";
    join.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => { if (!joinDone.hidden) return; join.elements.name.focus({ preventScroll: true }); join.classList.remove("ping"); void join.offsetWidth; join.classList.add("ping"); }, 500);
  }));
  // v13: "Billu aap ke liye kya yaad rakhe?" chips -> hidden "reminds" (comma list)
  const pickBtns = $$("#remindPick button"), reminds = $("#joinReminds"), pickedShow = $("#pickedShow");
  pickBtns.forEach(b => b.addEventListener("click", () => {
    b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true");
    const on = pickBtns.filter(x => x.getAttribute("aria-pressed") === "true");
    const v = on.map(x => x.dataset.v), l = on.map(x => x.dataset.l || x.dataset.v);
    if (reminds) reminds.value = v.join(",");
    if (pickedShow) { pickedShow.hidden = !v.length; pickedShow.textContent = "Billu will remember: " + l.join(", "); }
  }));

  /* ---------- v17l: Spaces chips = highlight-and-jump filters (All default). Every desk stays visible (never display:none). ---------- */
  const ptTabs = $$('.sp-chips [data-tab]');
  if (ptTabs.length) {
    const IDS = ptTabs.map(t => t.dataset.tab);
    // Only the portal values the waitlist already sends; All and Family send "" until the Worker is confirmed to accept them
    const PORTAL_OK = ["individual", "business", "sharing", "shaadi"];
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = grid ? $$(".dcard", grid) : [];
    const tagsOf = c => (c.dataset.spaces || "").split(" ");
    const has = (c, id) => id === "all" || tagsOf(c).includes(id);
    // counts from the real tags
    $$("[data-count-for]").forEach(el => { const id = el.dataset.countFor, n = cards.filter(c => has(c, id)).length; if (!cards.length) return; el.innerHTML = `${n}<span class="sr-only"> desk${n === 1 ? "" : "s"}</span>`; });
    let cur = "all", picked = false;
    const chipsRow = $(".sp-chips");
    // v17m: the sticky chip row (mobile) steps away once the rail has scrolled past it, so it never sits over the disclaimer or CTA
    const railEnd = $(".dk-progress") || grid;
    let offRaf = 0;
    const chipsOff = () => { offRaf = 0; if (!chipsRow || !railEnd) return; const sticky = getComputedStyle(chipsRow).position === "sticky";
      const off = sticky && railEnd.getBoundingClientRect().bottom < chipsRow.getBoundingClientRect().bottom + 8;
      chipsRow.classList.toggle("sp-off", off); };
    addEventListener("scroll", () => { if (!offRaf) offRaf = requestAnimationFrame(chipsOff); }, { passive: true });
    addEventListener("resize", chipsOff, { passive: true });
    const setNavH = () => { const n = $("#nav"); if (n) document.documentElement.style.setProperty("--hd-navh", Math.round(n.getBoundingClientRect().height) + "px"); };
    setNavH(); addEventListener("resize", setNavH, { passive: true });
    const topLimit = () => { const cs = chipsRow && getComputedStyle(chipsRow); const nav = $("#nav"); let t = nav ? nav.getBoundingClientRect().bottom : 0; if (cs && cs.position === "sticky") t += chipsRow.offsetHeight; return t + 12; }; // where the stuck chip row ends, not where it is now
    const jump = id => {
      const first = cards.find(c => has(c, id)); if (!first || !grid) return;
      const beh = reduce ? "auto" : "smooth";
      if (grid.scrollWidth > grid.clientWidth + 2) { const pl = parseFloat(getComputedStyle(grid).scrollPaddingLeft) || 0; grid.scrollTo({ left: grid.scrollLeft + first.getBoundingClientRect().left - grid.getBoundingClientRect().left - pl, behavior: beh }); }
      // measure the card's layout box, not its reveal/hover transform (a not-yet-revealed card sits 24px low)
      const br = first.getBoundingClientRect(), ty = new DOMMatrixReadOnly(getComputedStyle(first).transform === "none" ? undefined : getComputedStyle(first).transform).m42 || 0;
      const r = { top: br.top - ty, bottom: br.bottom - ty }, tl = topLimit(); let dy = 0;
      if (grid.scrollWidth > grid.clientWidth + 2) dy = r.top - tl; // rail: park the whole rail (+ progress) just under the sticky chips
      else if (r.top < tl) dy = r.top - tl; else if (r.bottom > innerHeight - 12) dy = Math.min(r.bottom - innerHeight + 12, r.top - tl);
      if (Math.abs(dy) > 1) scrollBy({ top: dy, behavior: beh });
    };
    const openTab = (id, opt = {}) => {
      if (!IDS.includes(id)) return; cur = id; picked = id !== "all";
      ptTabs.forEach(t => { t.setAttribute("aria-pressed", t.dataset.tab === id); t.classList.remove("follow"); });
      const panel = id === "all" ? "individual" : id;
      $$(".pt-panel").forEach(p => { p.hidden = p.dataset.panel !== panel; });
      cards.forEach(c => c.classList.toggle("is-dim", !has(c, id)));
      if (grid) grid.dataset.active = id;
      if (opt.user) { const pf = $("#joinPortal"); if (pf) pf.value = PORTAL_OK.includes(id) ? id : ""; }
      if (opt.jump) jump(id);
    };
    const showChip = t => { if (!chipsRow || chipsRow.scrollWidth <= chipsRow.clientWidth + 2) return; const a = t.getBoundingClientRect(), b = chipsRow.getBoundingClientRect(); if (a.left < b.left + 4 || a.right > b.right - 4) chipsRow.scrollLeft += a.left - b.left - (parseFloat(getComputedStyle(chipsRow).scrollPaddingLeft) || 0); }; // align to the chip start (the row snaps to chip starts) // instant: a second smooth scroll would cancel the page jump in Chrome
    ptTabs.forEach(t => t.addEventListener("click", () => { showChip(t); openTab(t.dataset.tab, { user: true, jump: true }); }));
    // Rail (mobile): 2px progress + "4 / 9"; while swiping, the chip follows the visible card's first tag unless the user picked a chip
    const bar = $(".dk-bar i"), pos = $(".dk-pos");
    let last = -1, raf = 0;
    const onRail = () => { raf = 0; if (!grid || !cards.length) return;
      const gl = grid.getBoundingClientRect().left + (parseFloat(getComputedStyle(grid).scrollPaddingLeft) || 0);
      let best = 0, bd = 1e9; cards.forEach((c, i) => { const d = Math.abs(c.getBoundingClientRect().left - gl); if (d < bd) { bd = d; best = i; } });
      if (grid.scrollWidth > grid.clientWidth + 2 && grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 2) best = cards.length - 1; // end of rail
      if (best === last) return; last = best;
      if (bar) bar.style.width = ((best + 1) / cards.length * 100).toFixed(2) + "%";
      if (pos) pos.textContent = `${best + 1} / ${cards.length}`;
      const isRail = grid.scrollWidth > grid.clientWidth + 2;
      if (!picked) { const f = isRail ? tagsOf(cards[best])[0] : ""; ptTabs.forEach(t => t.classList.toggle("follow", t.dataset.tab === f)); }
    };
    grid?.addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(onRail); }, { passive: true });
    addEventListener("resize", () => { last = -1; onRail(); }, { passive: true });
    // Preselect: ?tab=..., else group ref / utm_campaign, else All (no jump on load)
    const GROUP = { business: ["PEAHD", "EXTCOM", "TAJRAN"], sharing: ["NUSTHD", "FASTHD", "PUALUMNI"] };
    const pick = () => {
      const q = (new URLSearchParams(location.search).get("tab") || "").toLowerCase().trim();
      if (IDS.includes(q)) return q;
      const a = window.HDAttrib?.get() || {};
      const hay = [a.ref || "", a.utm_campaign || ""].map(x => x.toUpperCase().replace(/[^A-Z0-9]/g, ""));
      for (const [tab, refs] of Object.entries(GROUP)) if (refs.some(r => hay.some(h => h && (h === r || h.includes(r))))) return tab;
      return "all";
    };
    openTab(pick());
    onRail();
    window.HDPortals = { open: id => openTab(id, { user: true }), current: () => cur, portal: () => PORTAL_OK.includes(cur) ? cur : "" };
    // v15: "See all 9 desks" toggle (collapsed by default on every screen size)
    const adT = $("#adToggle"), adG = $("#adGrid");
    adT?.addEventListener("click", () => { const open = adT.getAttribute("aria-expanded") !== "true"; adT.setAttribute("aria-expanded", open); adG.hidden = !open; $(".ad-tl", adT).textContent = open ? "Hide the 9 desks" : "See all 9 desks"; });
    // v15: desk chips/tiles set the hidden "desk" field and mark the picked desk
    // Desk values match the Worker's accepted names exactly (DESK_LABELS): Daily Hisaab Desk, Bill Scan, Committee, Sheet Se Hisaab, Ghar Ki Tameer, Business, Procurement, Dutch, Shaadi
    document.addEventListener("click", e => { const c = e.target.closest("[data-desk]"); if (!c) return; const jd = $("#joinDesk"); if (jd) jd.value = c.dataset.desk; $$("[data-desk]").forEach(x => { const on = x.dataset.deskId === c.dataset.deskId; if (x.tagName === "BUTTON") x.setAttribute("aria-pressed", on); else x.classList.toggle("picked", on); }); });
    // v15: "All 9 desks" cards open their space's tab
    $$("[data-open-tab]").forEach(c => c.addEventListener("click", () => {
      const id = c.dataset.openTab; openTab(id, { user: true });
      $(".pt-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => $("#tab-" + id)?.focus({ preventScroll: true }), 400);
    }));
    // Lazy-load the scripted demo (client-side only, no network calls) when the section nears the viewport
    const sec = $("#portals"); let loaded = false;
    const load = () => { if (loaded) return; loaded = true; const s = document.createElement("script"); s.src = "js/portals-demo.js?v=v14"; s.async = true; document.body.appendChild(s); };
    if (sec && "IntersectionObserver" in window) { const lio = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { load(); lio.disconnect(); } }, { rootMargin: "400px 0px" }); lio.observe(sec); }
    else load();
    // Deep links to the old #try-billu anchor land on the portals section
    if (location.hash === "#try-billu") sec?.scrollIntoView();
  }
  /* ---------- v15c: "Look inside" 9 desks — mobile swipe carousel dots (desktop is a static grid) ---------- */
  const insT = $("#insTrack"), insD = $("#insDots");
  if (insT && insD) {
    const cards = $$(".ins-card", insT);
    insD.innerHTML = cards.map((c, i) => `<button type="button" aria-label="${c.querySelector("h3").textContent} (${i + 1} of ${cards.length})"${i ? "" : ' aria-current="true"'}></button>`).join("");
    const dots = $$("button", insD);
    const go = i => { const c = cards[i]; if (c) insT.scrollTo({ left: c.offsetLeft - insT.offsetLeft - (insT.clientWidth - c.offsetWidth) / 2, behavior: "smooth" }); };
    dots.forEach((d, i) => d.addEventListener("click", () => go(i)));
    let raf = 0;
    insT.addEventListener("scroll", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => {
      const mid = insT.scrollLeft + insT.clientWidth / 2; let best = 0, bd = 1e9;
      cards.forEach((c, i) => { const cm = c.offsetLeft - insT.offsetLeft + c.offsetWidth / 2, dd = Math.abs(cm - mid); if (dd < bd) { bd = dd; best = i; } });
      dots.forEach((d, i) => d.toggleAttribute("aria-current", i === best));
    }); }, { passive: true });
    insT.addEventListener("keydown", e => {
      if (insT.scrollWidth <= insT.clientWidth + 2) return; // desktop grid: nothing to scroll
      const cur = dots.findIndex(d => d.hasAttribute("aria-current"));
      if (e.key === "ArrowRight") { e.preventDefault(); go(Math.min(cards.length - 1, cur + 1)); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(Math.max(0, cur - 1)); }
    });
  }
  // Feedback form now lives on /feedback/ (js/feedback.js)
  // Non-JS fallback lands on /?sent=...: show the thank-you state
  const sent = new URLSearchParams(location.search).get("sent");
  if (sent === "waitlist") showDone(join, joinBody, joinDone, "");
  const formErr = new URLSearchParams(location.search).get("form_error"); // no-JS fallback that failed
  if (formErr === "waitlist") { joinNote.innerHTML = failMsg; joinNote.classList.add("err"); }

  /* Price ticker removed from home in v13 (data/prices.json kept). */

})();

/* v11: slide-out calculators tab */
(()=>{const t=document.getElementById('calcTab'),p=document.getElementById('calcPanel'),sc=document.getElementById('calcScrim'),c=document.getElementById('calcClose');if(!t)return;
const set=o=>{p.classList.toggle('open',o);sc.hidden=!o;t.setAttribute('aria-expanded',o);p.setAttribute('aria-hidden',!o);};
t.onclick=()=>set(!p.classList.contains('open'));c.onclick=()=>set(false);sc.onclick=()=>set(false);document.addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});
let sx=null;p.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});p.addEventListener('touchend',e=>{if(sx!==null&&sx-e.changedTouches[0].clientX>60)set(false);sx=null});})();

/* v16h: Meet Billu headline motion (once, on scroll-in; skipped for reduced motion) */
(() => {
  const sec = document.querySelector("#meet-billu .mb-copy");
  if (!sec || !("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  sec.classList.add("mb-anim");
  const o = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { sec.classList.add("mb-in"); o.disconnect(); } }, { threshold: 0.35 });
  o.observe(sec);
})();

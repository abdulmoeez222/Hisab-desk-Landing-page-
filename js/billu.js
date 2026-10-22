/* Billu — Hisaab Desk's AI partner. 3D poses (cut-out webp) with idle bob, hover wiggle, tap reactions and celebrations */
(() => {
  const LIME = "#C6FF3D", PINK = "#FF4F9A";
  const POSES = {
    // v17s: legacy pose keys now point at lime-cap Billu (ajrak-scarf art retired everywhere)
    lean: "assets/billu-cap-arms-crossed.webp?v=v17s", celebrate: "assets/billu-cap-celebrate.webp?v=v17s",
    warning: "assets/billu-cap-phone-point.webp?v=v17s", business: "assets/billu-cap-arms-crossed.webp?v=v17s", face: "assets/billu-face.webp?v=v17s",
    // v17h: lime-cap Billu pose set (Hisaab Design, billu-cap-poses/MAP.md). Homepage only; WebP with PNG fallback.
    "cap-peace": "assets/billu-cap-peace.webp?v=v17h", "cap-wave": "assets/billu-cap-wave.webp?v=v17h",
    "cap-phone-point": "assets/billu-cap-phone-point.webp?v=v17h", "cap-yaad-tap": "assets/billu-cap-yaad-tap.webp?v=v17h",
    "cap-celebrate": "assets/billu-cap-celebrate.webp?v=v17h", "cap-present": "assets/billu-cap-present.webp?v=v17h",
    "cap-arms-crossed": "assets/billu-cap-arms-crossed.webp?v=v17h", "cap-night-chai": "assets/billu-cap-night-chai.webp?v=v17h",
    "cap-thumbs-cta": "assets/billu-cap-thumbs-cta.webp?v=v17h"
  };
  const DIMS = { "cap-peace": [553, 900], "cap-wave": [598, 900], "cap-phone-point": [547, 900], "cap-yaad-tap": [533, 900], "cap-celebrate": [693, 900],
    "cap-present": [631, 900], "cap-arms-crossed": [445, 900], "cap-night-chai": [581, 900], "cap-thumbs-cta": [513, 900] };
  const ALT = { lean: "Billu, Hisaab Desk ka AI partner", celebrate: "Billu khushi se jump karta hua", warning: "Billu, haath bandhe hue", business: "Billu thumbs up karta hua", face: "Billu" };
  const FALLBACK = Object.fromEntries(Object.keys(DIMS).map(k => [k, POSES[k].replace(".webp", ".png")]));
  /* v17i: lime-cap avatar for the small round Billu icons (circle mask, object-fit:cover). 256 for 1x, 512 for retina. */
  const AV = "assets/billu-cap-avatar-", AVV = "?v=v17j";
  const avatar = alt => `<picture style="display:contents"><source type="image/webp" srcset="${AV}256.webp${AVV} 1x, ${AV}512.webp${AVV} 2x"><img class="bimg bavatar" src="${AV}256.png${AVV}" srcset="${AV}256.png${AVV} 1x, ${AV}512.png${AVV} 2x" alt="${alt ?? "Billu"}" width="256" height="256" loading="lazy" decoding="async" draggable="false"></picture>`;
  const img = (pose, alt, eager) => pose === "cap-avatar" ? avatar(alt) : FALLBACK[pose]
    ? `<picture style="display:contents"><source type="image/webp" srcset="${POSES[pose]}">${imgTag(pose, alt, eager).replace(`src="${POSES[pose]}"`, `src="${FALLBACK[pose]}"`)}</picture>`
    : imgTag(pose, alt, eager);
  const imgTag = (pose, alt, eager) => `<img class="bimg" src="${POSES[pose] || POSES.lean}" alt="${alt ?? ALT[pose] ?? "Billu"}" ${DIMS[pose] ? `width="${DIMS[pose][0]}" height="${DIMS[pose][1]}" ` : ""}${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" draggable="false">`;
  const setPose = (el, pose) => {
    const i = el.querySelector(".bimg"); if (!i || el.dataset.poseLock) return; // v17f: the hero Billu keeps its one pose
    const src = POSES[pose] || POSES.lean; if (i.getAttribute("src") === src) return;
    el.classList.add("swap"); i.src = src; setTimeout(() => el.classList.remove("swap"), 260);
  };
  // preload poses for instant swaps
  addEventListener("load", () => Object.entries(POSES).forEach(([k, s]) => { if (DIMS[k]) return; /* v17h: cap poses never swap, so they stay lazy */ const p = new Image(); p.src = s; }));

  const LINES = ["Salam! Main Billu hoon 👋", "Bill ki photo lo, date main yaad rakhunga 📸", "Aaj kitna kharcha hua? Main bata deta hoon 😊", "Due dates yaad rakhne mein madad karunga 🤞", "Mujhe click karein na 😄"];
  const TAPS = [["celebrate", "Hehe, gudgudi hoti hai! 😆"], [null, "Aap bohat ache ho 💚"], ["warning", "Bas karein, kaam bhi karna hai 😜"], ["celebrate", "Chalo hisaab karein! 🎉"], ["business", "Sab set hai, boss 👍"]];

  /* confetti */
  const COLORS = [LIME, PINK, "#FFD43B", "#7CC8FF", "#C9B6FF", "#7EF0C0"];
  const burst = (x, y, n = 36, spread = 1) => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    for (let i = 0; i < n; i++) {
      const p = document.createElement("i"); p.className = "confetti";
      const s = 6 + Math.random() * 8;
      p.style.cssText = `left:${x}px;top:${y}px;width:${s}px;height:${s * (Math.random() > .5 ? 1 : .45)}px;background:${COLORS[i % COLORS.length]};border-radius:${Math.random() > .6 ? "50%" : "2px"}`;
      document.body.appendChild(p);
      const a = Math.random() * Math.PI * 2, v = (80 + Math.random() * 180) * spread;
      const dx = Math.cos(a) * v, dy = Math.sin(a) * v - 120 * spread;
      p.animate([{ transform: "translate(0,0) rotate(0)", opacity: 1 }, { transform: `translate(${dx}px,${dy + 260}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }], { duration: 1200 + Math.random() * 700, easing: "cubic-bezier(.2,.7,.4,1)" }).onfinish = () => p.remove();
    }
  };
  const hearts = el => {
    const r = el.getBoundingClientRect();
    for (let i = 0; i < 5; i++) {
      const h = document.createElement("i"); h.className = "heart-pop"; h.textContent = ["💚", "✨", "💖", "⭐", "💚"][i];
      h.style.left = r.left + r.width * (.25 + Math.random() * .5) + "px"; h.style.top = r.top + r.height * .2 + "px";
      document.body.appendChild(h);
      h.animate([{ transform: "translateY(0) scale(.6)", opacity: 0 }, { opacity: 1, offset: .2 }, { transform: `translate(${(Math.random() - .5) * 80}px,-110px) scale(1.2)`, opacity: 0 }], { duration: 1300 + i * 120, easing: "ease-out" }).onfinish = () => h.remove();
    }
  };
  const toast = msg => {
    let t = document.querySelector(".toast"); if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.innerHTML = `<span class="toast-b">${img(document.body.classList.contains("cv1") ? "cap-avatar" : "face", "")}</span><b>${msg}</b>`; // v17i: cap avatar on the homepage only
    t.classList.remove("show"); void t.offsetWidth; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 3200);
  };
  const say = (wrap, text) => {
    const b = wrap.querySelector(".b-bubble"); if (!b) return;
    b.classList.remove("show"); void b.offsetWidth; b.textContent = text; b.classList.add("show");
  };
  const hop = el => { el.classList.remove("hop"); void el.offsetWidth; el.classList.add("hop"); };

  const mountAll = () => {
    document.querySelectorAll("[data-billu]").forEach(el => {
      const base = el.dataset.billu || "lean";
      el.innerHTML = img(base, el.dataset.label, el.classList.contains("billu-hero"));
      if (el.dataset.tap === "off") return;
      el.setAttribute("role", "button"); el.setAttribute("tabindex", "0"); el.setAttribute("aria-label", "Billu — tap karein");
      let k = 0;
      const tap = () => {
        const [pose, line] = TAPS[k++ % TAPS.length];
        if (pose) setPose(el, pose); hop(el); hearts(el);
        const wrap = el.closest(".billu-stage"); if (wrap) say(wrap, line);
        clearTimeout(el._t); el._t = setTimeout(() => setPose(el, base), 2200);
      };
      el.addEventListener("click", tap);
      el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); tap(); } });
    });
    const stage = document.querySelector(".hero .billu-stage");
    if (stage) {
      const hb = stage.querySelector("[data-billu]");
      setTimeout(() => { say(stage, LINES[0]); hop(hb); }, 700);
      let i = 1; setInterval(() => { if (!document.hidden) say(stage, LINES[i++ % LINES.length]); }, 5200);
      // gentle parallax tilt toward the cursor
      addEventListener("mousemove", e => {
        const r = hb.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / 600)), dy = Math.max(-1, Math.min(1, (e.clientY - cy) / 600));
        hb.style.setProperty("--tx", dx * 6 + "px"); hb.style.setProperty("--ty", dy * 4 + "px"); hb.style.setProperty("--rot", dx * 3 + "deg");
      }, { passive: true });
    }
  };

  const celebrate = (target, msg) => {
    const r = (target || document.body).getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + Math.min(r.height / 2, 260));
    document.querySelectorAll("[data-billu]").forEach(el => {
      const rr = el.getBoundingClientRect(); if (rr.bottom < 0 || rr.top > innerHeight || el.dataset.tap === "off") return;
      setPose(el, "celebrate"); hop(el);
      clearTimeout(el._t); el._t = setTimeout(() => setPose(el, el.dataset.billu || "lean"), 2600);
    });
    if (msg) toast(msg);
  };
  const mini = target => { const r = target.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, 16, .55); };

  window.Billu = { setPose, setMood: setPose, celebrate, mini, toast, hearts };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mountAll); else mountAll();
})();

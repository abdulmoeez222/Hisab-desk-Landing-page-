/* Try Billu: on-page demo chat (scripted replies, sample numbers only) + FAQ accordion */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- FAQ accordion (one open at a time) ---------- */
  const faqs = $$("#faqList .faq");
  const setFaq = (f, open) => { f.classList.toggle("open", open); $(".faq-q", f).setAttribute("aria-expanded", open); };
  faqs.forEach(f => $(".faq-q", f).addEventListener("click", () => {
    const open = !f.classList.contains("open");
    faqs.forEach(o => setFaq(o, false)); setFaq(f, open);
  }));

  /* ---------- Chat ---------- */
  const body = $("#chatBody"); if (!body) return;
  const form = $("#chatForm"), input = $("#chatIn"), status = $("#chatStatus"), chips = $("#chatChips");
  const rows = list => `<ul class="c-rows">${list.map(([k, v]) => `<li><span>${k}</span><b>${v}</b></li>`).join("")}</ul>`;

  const R = {
    kharcha: () => `<p>Aaj ab tak <b>Rs 2,340</b> kharch hue 👀</p>${rows([["⛽ Petrol", "Rs 1,200"], ["🛒 Grocery", "Rs 800"], ["☕ Chai aur samosay", "Rs 340"]])}<p>Budget ke andar ho, shabash! Bas chai thodi kam kar dein 😜</p>`,
    bijli: () => `<p>Bijli ka bill <b>Rs 7,850</b> hai, aur <b>3 din</b> mein due hai ⚡</p><p class="c-ok">✅ Reminder laga diya. Ek din pehle yaad dila dunga.</p>`,
    committee: () => `<p>Agli qist <b>Rs 10,000</b>, <b>1 Nov</b> ko jani hai.</p>${rows([["Qistein di", "5 / 10"], ["Aapki baari", "March mein 🎉"]])}<p>Paise alag rakh diye? Warna main yaad dilata rahunga 😉</p>`,
    shaadi: () => `<p>Mubarak ho! 💍 Chaliye plan banate hain. Sample budget <b>Rs 15,00,000</b>:</p>${rows([["Venue aur khana", "Rs 7,00,000"], ["Kapre aur zevar", "Rs 4,00,000"], ["Decor aur photo", "Rs 2,50,000"], ["Baaki sab", "Rs 1,50,000"]])}<p>Apna budget batayein, main isay aapke hisaab se set kar dunga.</p>`,
    udhaar: () => `<p>Ali ne aapke <b>Rs 2,000</b> wapas karne hain. 12 din ho gaye 👀</p><p>Ek polite sa reminder draft kar doon? Check karke aap khud bhej dena 😇</p>`,
    bachat: () => `<p>Is mahine ab tak kharcha <b>Rs 58,600</b> 📊</p><p>Sab se zyada bahar ke khane pe gaya. Agle hafte ka budget set karein?</p>`,
    business: () => `<p>Aaj ki dukaan ka hisaab 📊</p>${rows([["Sale", "Rs 38,400"], ["Kharcha", "Rs 21,150"], ["Profit", "Rs 17,250"]])}<p>Kal se behtar din! 2 customers ka udhaar baaki hai, list bana doon?</p>`,
    petrol: () => `<p>Is mahine petrol pe <b>Rs 24,800</b> lag gaye ⛽</p><p>Pichle mahine se <b>Rs 1,900</b> zyada.</p>`,
    scan: () => `<p>📸 Bill parh liya:</p>${rows([["⚡ Bijli ka bill", "Rs 7,850"], ["📅 Due date", "20 Oct"]])}<p class="c-ok">✅ 18 Oct ko yaad dila dunga. Pay ho jaye to ✓ daba dena.</p>`,
    salam: () => `<p>Wa alaikum salam! 👋 Kaise hain? Bataiye, aaj kis hisaab mein madad karun?</p>`,
    shukriya: () => `<p>Arre, shukriya kis baat ka! 💚 Yahi to mera kaam hai. Aur kuch poochna hai?</p>`,
    who: () => `<p>Main Billu hoon, Hisaab Desk ka AI partner 😎 Din ho ya raat, haazir hoon, aur yaad rakhne mein madad karta hoon.</p>`,
    fallback: () => `<p>Acha sawal! 😄 Ye demo hai, is liye abhi main thoda sa hi jaanta hoon.</p><p>Asli app mein main aapke poore hisaab se jawab dunga. Filhaal neeche wale sawal try karein 👇</p>`
  };
  const KEYS = [
    ["bijli", /bijli|bijlee|electric|light ka|bill|due/],
    ["committee", /committee|commitee|kameti|qist|kist|installment/],
    ["shaadi", /shaadi|shadi|wedding|baraat|mehndi|walima/],
    ["kharcha", /kharch|kharach|spend|expense|aaj kitna/],
    ["udhaar", /udhaar|udhar|udhar|qarz|karz|loan|owe/],
    ["bachat", /bachat|bacha|save|saving|kahan gaya|kahan gayi|recap/],
    ["business", /business|dukaan|dukan|shop|sale|profit|karobar/],
    ["petrol", /petrol|fuel|diesel/],
    ["shukriya", /shukriya|shukria|thanks|thank you|thx|jazakallah/],
    ["who", /kaun ho|who are you|tum kaun|aap kaun|billu/],
    ["salam", /^(hi|hello|hey|salam|assalam|aoa|slam)\b|salam/]
  ];
  const match = q => { const t = q.toLowerCase(); const k = KEYS.find(([, re]) => re.test(t)); return k ? k[0] : "fallback"; };

  const scroll = () => body.scrollTo({ top: body.scrollHeight, behavior: "smooth" });
  const add = (cls, html, text) => {
    const m = document.createElement("div"); m.className = "cmsg " + cls;
    if (text != null) { const p = document.createElement("p"); p.textContent = text; m.appendChild(p); } else m.innerHTML = html;
    body.appendChild(m); scroll(); return m;
  };
  let busy = false;
  const ask = (text, key) => {
    if (busy || !text.trim()) return;
    busy = true; form?.classList.add("busy");
    add("me", null, text.trim());
    const k = key || match(text);
    setTimeout(() => {
      const t = add("bot typing", `<i></i><i></i><i></i>`);
      status.textContent = "likh raha hai…"; status.classList.add("typing");
      setTimeout(() => {
        t.remove(); add("bot", R[k]());
        status.textContent = "online"; status.classList.remove("typing");
        busy = false; form?.classList.remove("busy");
        if (k === "shaadi" || k === "bijli") window.Billu?.mini($(".chat-av"));
      }, 900 + Math.random() * 500);
    }, 260);
  };
  chips.addEventListener("click", e => {
    const b = e.target.closest("button[data-q]"); if (!b || busy) return;
    b.classList.add("used"); ask(b.textContent, b.dataset.q);
  });
  form?.addEventListener("submit", e => { e.preventDefault(); const v = input.value; if (!v.trim() || busy) return; input.value = ""; ask(v); });
  $("#chatReset").addEventListener("click", () => {
    if (busy) return;
    $$(".cmsg", body).slice(1).forEach(m => m.remove());
    $$("button", chips).forEach(b => b.classList.remove("used"));
    body.scrollTop = 0;
  });
})();

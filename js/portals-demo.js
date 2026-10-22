/* Hisaab Desk v14: scripted sample demo for the portals section.
   Client-side only: no fetch, no storage, no form posts. Names and amounts are fixed examples. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const el = (cls, html) => { const d = document.createElement("div"); d.className = cls; d.innerHTML = html; return d; };
  const billu = txt => el("ps-billu", `<img class="ps-av" src="assets/billu-cap-avatar-256.png?v=v17i" srcset="assets/billu-cap-avatar-256.png?v=v17i 1x, assets/billu-cap-avatar-512.png?v=v17i 2x" alt="" width="30" height="30"><p>${txt}</p>`);

  /* ----- Individual ----- */
  const feed = $("#indFeed"), reset = $("#indReset"), acts = $("#indActions");
  const START = feed ? feed.innerHTML : "";
  const done = new Set();
  const scroll = f => f.scrollTo({ top: f.scrollHeight, behavior: "smooth" });
  const IND = {
    bill: () => [
      el("ps-card", `<span class="ps-tag" style="--c:#FFD43B">BILL</span><b>Bijli bill · Rs 7,850</b><small>Due 20 Oct · added from a sample bill photo</small>`),
      billu(`<b>2 din pehle yaad dilaunga.</b> Reminder set for 18 Oct.`)
    ],
    udhaar: () => [
      el("ps-card", `<span class="ps-tag" style="--c:#FF4F9A">UDHAAR</span><b>Ali owes you Rs 2,000</b><small>Given 6 Oct · sample</small>`),
      el("ps-draft", `<small>Reminder draft · You send it</small><p>“Salam Ali! Rs 2,000 ki yaad-dihani, jo 6 Oct ko diye the. Jab aasaani ho, lauta dena. Shukriya!”</p>`),
      billu(`Draft tayyar hai. Bhejna aap ne hai.`)
    ],
    month: () => {
      const rows = [["Rent", 35000], ["Bills", 15200], ["Groceries", 22400], ["Transport", 9800], ["Other", 6100]];
      const max = Math.max(...rows.map(r => r[1]));
      const fmt = n => "Rs " + n.toLocaleString("en-IN");
      return [
        el("ps-month", `<small>Your month · October (sample)</small>` + rows.map(([k, v]) => `<div class="mb"><span>${k}</span><i style="--w:${Math.round(v / max * 100)}%"></i><b>${fmt(v)}</b></div>`).join("")),
        billu(`Ye raha aap ka mahina. Sab se zyada rent pe gaya.`)
      ];
    }
  };
  acts?.addEventListener("click", e => {
    const b = e.target.closest("[data-act]"); if (!b || !feed) return;
    const k = b.dataset.act; if (!IND[k]) return;
    if (!done.size) feed.innerHTML = "";
    if (done.has(k)) { feed.querySelector(`[data-k="${k}"]`)?.scrollIntoView({ block: "nearest", behavior: "smooth" }); return; }
    done.add(k); b.classList.add("did");
    const g = document.createElement("div"); g.className = "ps-group"; g.dataset.k = k;
    IND[k]().forEach(n => g.appendChild(n)); feed.appendChild(g); scroll(feed);
    if (reset) reset.hidden = false;
  });
  reset?.addEventListener("click", () => {
    done.clear(); feed.innerHTML = START; reset.hidden = true;
    acts.querySelectorAll(".did").forEach(b => b.classList.remove("did"));
  });

  /* ----- Business ----- */
  const bizFeed = $("#bizFeed"), bizReset = $("#bizReset"), bizStart = bizFeed ? bizFeed.innerHTML : "";
  document.querySelector('#panel-business [data-act="invoice"]')?.addEventListener("click", e => {
    if (!bizFeed || bizFeed.querySelector(".ps-invoice")) return;
    e.currentTarget.classList.add("did");
    bizFeed.prepend(el("ps-invoice", `<div class="pi-top"><b>Invoice INV-0042</b><small>18 Oct · sample</small></div>
      <small>To: Bilal</small>
      <ul class="ps-rows"><li><span>Cooking oil 5L × 4</span><b>Rs 10,400</b></li><li><span>Rice 10kg × 2</span><b>Rs 6,200</b></li><li class="pi-tot"><span>Total</span><b>Rs 16,600</b></li></ul>
      <small class="pi-note">Draft ready to share. Bhejna aap ne hai.</small>`));
    bizFeed.scrollTo({ top: 0, behavior: "smooth" });
    if (bizReset) bizReset.hidden = false;
  });
  bizReset?.addEventListener("click", () => {
    bizFeed.innerHTML = bizStart; bizReset.hidden = true;
    document.querySelector('#panel-business [data-act="invoice"]')?.classList.remove("did");
  });
})();

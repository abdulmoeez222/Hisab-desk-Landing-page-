/* Hisaab Desk: UTM + referral attribution for the waitlist/feedback forms.
   On every page load, reads utm_source, utm_medium, utm_campaign and ref from the URL and keeps them in
   sessionStorage ("hd_attrib"), so they survive moving between the homepage, /for/* and /calculators/*.
   A later URL that carries any of these four keys replaces the whole saved set (no mixing of two campaigns).
   Values are normalised to Hisaab IT's rules; anything still invalid is dropped (the Worker would store it empty anyway).
   Just before a form that posts to the Worker's /api/waitlist or /api/feedback is submitted, the saved values are
   added as hidden inputs, so each form's existing FormData-based fetch picks them up. No visible change. */
(() => {
  const KEY = "hd_attrib", UTM = ["utm_source", "utm_medium", "utm_campaign"], ALL = [...UTM, "ref"];
  const norm = (k, v) => {
    v = String(v ?? "").trim();
    if (k === "ref") { v = v.toUpperCase().replace(/[\s_]+/g, "-").replace(/[^A-Z0-9-]/g, ""); return /^[A-Z0-9-]{3,24}$/.test(v) ? v : ""; }
    v = v.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9._-]/g, "").slice(0, 64); return v;
  };
  let mem = {};
  // sessionStorage first; localStorage copy (30 days) covers links opened in an in-app browser and finished in another tab.
  const TTL = 30 * 864e5;
  const load = () => {
    try { const s = JSON.parse(sessionStorage.getItem(KEY) || "null"); if (s && Object.keys(s).length) return s; } catch (e) { }
    try { const l = JSON.parse(localStorage.getItem(KEY) || "null"); if (l && l.t && Date.now() - l.t < TTL && l.v) return l.v; } catch (e) { }
    return mem;
  };
  const save = o => { mem = o; try { sessionStorage.setItem(KEY, JSON.stringify(o)); } catch (e) { } try { localStorage.setItem(KEY, JSON.stringify({ t: Date.now(), v: o })); } catch (e) { } };
  try {
    const qs = new URLSearchParams(location.search);
    if (ALL.some(k => qs.has(k))) {
      const o = {}; ALL.forEach(k => { const v = norm(k, qs.get(k)); if (v) o[k] = v; }); save(o);
    } else mem = load();
  } catch (e) { }
  // v3: team test flag (Hisaab IT, Worker 5616dca2). Read separately from the UTM set, so ?test=1 alone keeps saved UTMs.
  // ?test=1|true|yes -> localStorage hd_test=1; ?test=0|false|no -> removed. While set, every /api/waitlist and
  // /api/feedback form gets a hidden test=1, so team signups are excluded from pilot stats.
  const TKEY = "hd_test";
  try {
    const t = new URLSearchParams(location.search).get("test");
    if (t !== null) {
      const tv = t.trim().toLowerCase();
      if (["1", "true", "yes"].includes(tv)) localStorage.setItem(TKEY, "1");
      else if (["0", "false", "no", ""].includes(tv)) localStorage.removeItem(TKEY);
    }
  } catch (e) { }
  const isTest = () => { try { return localStorage.getItem(TKEY) === "1"; } catch (e) { return false; } };
  const get = () => { const o = load(), out = {}; ALL.forEach(k => { const v = norm(k, o[k]); if (v) out[k] = v; }); return out; };
  const isApiForm = f => f && f.tagName === "FORM" && /\/api\/(waitlist|feedback)(\?|$)/.test(f.getAttribute("action") || "");
  const apply = form => {
    if (!isApiForm(form)) return;
    const a = get();
    ALL.forEach(k => {
      let el = form.querySelector(`input[type=hidden][name="${k}"][data-attrib]`);
      if (a[k]) { if (!el) { el = document.createElement("input"); el.type = "hidden"; el.name = k; el.dataset.attrib = ""; form.appendChild(el); } el.value = a[k]; }
      else if (el) el.remove();
    });
    let te = form.querySelector('input[type=hidden][name="test"][data-attrib]');
    if (isTest()) { if (!te) { te = document.createElement("input"); te.type = "hidden"; te.name = "test"; te.dataset.attrib = ""; form.appendChild(te); } te.value = "1"; }
    else if (te) te.remove();
  };
  // Capture phase on document runs before each form's own submit handler builds its FormData.
  document.addEventListener("submit", e => apply(e.target), true);
  const all = () => document.querySelectorAll("form").forEach(apply);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", all); else all();
  addEventListener("pageshow", all);
  // Forms built later (e.g. the join sheet) get the fields as soon as they appear.
  try { new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => { if (n.nodeType === 1) { if (n.tagName === "FORM") apply(n); else n.querySelectorAll?.("form").forEach(apply); } }))).observe(document.documentElement, { childList: true, subtree: true }); } catch (e) { }
  window.HDAttrib = { get, apply, isTest };
})();

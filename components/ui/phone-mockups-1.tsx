"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Check,
  CheckCheck,
  ChevronLeft,
  MessageCircle,
  Paperclip,
  ScanLine,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { PhoneCarousel, type PhoneSlide } from "@/components/ui/phone-mockups-1-utils/phone-carousel";
import { cn } from "@/lib/utils";

const STEP_MS = 5000;
const ease = [0.22, 1, 0.36, 1] as const;

/** Fades a piece of a screen in after `at` seconds, once the screen mounts. */
function At({ at, children, className }: { at: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: at, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Step 1 · Send: bill forwarded on WhatsApp ---------- */
function SendScreen() {
  return (
    <div className="flex h-full flex-col bg-panel-warm text-[13px]">
      <div className="flex items-center gap-3 bg-ink-2 px-4 pb-3 pt-2 text-white">
        <ChevronLeft className="size-5 text-[#8A8A96]" />
        <span className="flex size-9 items-center justify-center rounded-full bg-lime font-display text-base font-extrabold text-ink-2">h.</span>
        <div className="flex-1 leading-tight">
          <p className="text-sm font-bold">Hisaab Desk</p>
          <p className="text-[11px] text-[#8A8A96]">Rasidi · online</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-3 py-4">
        <At at={0.4} className="ml-auto w-[78%] rounded-2xl rounded-tr-sm bg-wa p-2">
          <div className="flex h-28 flex-col justify-between rounded-xl border border-dashed border-[#9a9aa6] bg-white p-2.5">
            <div className="h-2 w-16 rounded bg-[#d9d9cf]" />
            <div className="space-y-1">
              <div className="h-1.5 w-full rounded bg-[#e4e4da]" />
              <div className="h-1.5 w-4/5 rounded bg-[#e4e4da]" />
              <div className="h-1.5 w-3/5 rounded bg-[#e4e4da]" />
            </div>
            <div className="flex items-center gap-1 text-[10px] text-caption">
              <Paperclip className="size-3" /> bill_alnoor.jpg
            </div>
          </div>
          <p className="mt-1 flex items-center justify-end gap-1 text-[10px] text-caption">
            10:42
            <motion.span initial={{ color: "#8A8A96" }} animate={{ color: "#4FB6FF" }} transition={{ delay: 1.4, duration: 0.3 }}>
              <CheckCheck className="size-3.5" />
            </motion.span>
          </p>
        </At>

        {/* Typing indicator, then the reply */}
        <motion.div
          className="flex w-fit gap-1 rounded-2xl rounded-tl-sm bg-white px-3 py-3"
          initial={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            height: ["0px", "34px", "34px", "0px"],
            paddingTop: [0, 12, 12, 0],
            paddingBottom: [0, 12, 12, 0],
          }}
          transition={{ delay: 1.7, duration: 1.4, times: [0, 0.15, 0.85, 1] }}
        >
          {[0, 1, 2].map((i) => (
            <motion.i
              key={i}
              className="block size-1.5 rounded-full bg-caption"
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.12 }}
            />
          ))}
        </motion.div>

        <At at={3.1} className="w-[85%] rounded-2xl rounded-tl-sm bg-white p-3 text-ink-2">
          <p className="font-bold">Mil gaya! ✅</p>
          <p className="mt-1 text-body-light">
            Al-Noor Traders · <b className="text-ink-2">Rs 48,500</b>
            <br />
            Due 25 Oct
          </p>
          <motion.p
            className="mt-2 inline-flex rounded-full bg-lime px-3 py-1 text-xs font-bold"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ delay: 3.8, repeat: Infinity, duration: 1.4 }}
          >
            Tap to review
          </motion.p>
          <p className="mt-1 text-right text-[10px] text-caption">10:42</p>
        </At>
      </div>
    </div>
  );
}

/* ---------- Step 2 · AI reads: scan and extract ---------- */
const FIELDS: [string, string][] = [
  ["Vendor", "Al-Noor Traders"],
  ["Invoice", "INV-2231"],
  ["Date", "12 Oct 2026"],
  ["Sales tax 16%", "Rs 6,690"],
  ["Total", "Rs 48,500"],
];

function ReadScreen() {
  return (
    <div className="flex h-full flex-col px-4 pt-3 text-ink-2">
      <p className="font-display text-xl font-extrabold">Rasidi parh raha hai</p>
      <div className="relative mt-3 h-36 overflow-hidden rounded-2xl border border-line-light bg-white p-3">
        <div className="h-2.5 w-24 rounded bg-[#d9d9cf]" />
        <div className="mt-3 space-y-1.5">
          {[100, 85, 92, 70, 80, 60].map((w, i) => (
            <div key={i} className="h-1.5 rounded bg-[#e4e4da]" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="mt-3 ml-auto h-2.5 w-16 rounded bg-[#d9d9cf]" />
        <motion.div
          aria-hidden
          className="absolute inset-x-0 h-8 bg-linear-to-b from-transparent to-lime/70"
          style={{ boxShadow: "0 2px 0 0 #C6FF3D" }}
          initial={{ top: "-2rem" }}
          animate={{ top: ["-2rem", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut", repeatDelay: 0.2 }}
        />
      </div>

      <dl className="mt-4 divide-y divide-line-light rounded-2xl border border-line-light bg-white px-3 text-[12.5px]">
        {FIELDS.map(([k, v], i) => (
          <At key={k} at={0.6 + i * 0.55} className="flex items-center justify-between py-2.5">
            <dt className="text-caption">{k}</dt>
            <dd className="font-semibold">{v}</dd>
          </At>
        ))}
      </dl>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-line-light">
        <motion.div
          className="h-full rounded-full bg-ink-2"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.4, duration: 3, ease: "easeInOut" }}
        />
      </div>
      <At at={3.5} className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-success">
        <Check className="size-3.5" strokeWidth={3} /> Ho gaya · 4 seconds · items add up
      </At>
    </div>
  );
}

/* ---------- Step 3 · You check: confirm the flagged field ---------- */
function CheckScreen() {
  const [confirmed, setConfirmed] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setConfirmed(true), 3200);
    return () => clearTimeout(t);
  }, []);

  const rows: [string, string, boolean?][] = [
    ["Vendor", "Al-Noor Traders"],
    ["Total", "Rs 48,500"],
    ["Due date", "25 Oct 2026", true],
    ["Category", "Raw material"],
  ];

  return (
    <div className="relative flex h-full flex-col px-4 pt-3 text-ink-2">
      <div className="flex items-center justify-between">
        <p className="font-display text-xl font-extrabold">Check karo</p>
        <span className="rounded-full bg-paper px-2.5 py-1 text-[10px] font-semibold text-caption">WhatsApp</span>
      </div>

      <dl className="mt-4 divide-y divide-line-light rounded-2xl border border-line-light bg-white p-2 text-[12.5px]">
        {rows.map(([k, v, flag]) => (
          <div key={k} className={cn("flex items-center justify-between gap-2 px-2 py-2.5", flag && "rounded-xl bg-blush")}>
            <dt className="text-caption">{k}</dt>
            <dd className="flex items-center gap-1.5 font-semibold">
              {v}
              {flag && (
                <motion.span
                  className="rounded-full bg-berry px-1.5 py-0.5 text-[9px] font-bold uppercase text-white"
                  animate={confirmed ? { opacity: 0, scale: 0.6 } : { scale: [1, 1.12, 1] }}
                  transition={confirmed ? { duration: 0.25 } : { repeat: Infinity, duration: 1.2 }}
                >
                  Check
                </motion.span>
              )}
            </dd>
          </div>
        ))}
      </dl>
      <At at={0.5} className="mt-3 rounded-xl bg-paper p-3 text-[11.5px] text-body-light">
        Rasidi ko due date par shak hai. Bill par smudge hai.
      </At>

      <div className="relative mt-4 grid grid-cols-2 gap-2.5">
        <motion.span
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full text-sm font-bold"
          animate={{ backgroundColor: confirmed ? "#14141A" : "#C6FF3D", color: confirmed ? "#C6FF3D" : "#14141A" }}
          transition={{ duration: 0.3 }}
        >
          <Check className="size-4" strokeWidth={3} /> {confirmed ? "Confirmed" : "Confirm"}
        </motion.span>
        <span className="inline-flex h-11 items-center justify-center rounded-full border-[1.5px] border-ink-2 text-sm font-bold">Edit</span>

        {/* Finger tap */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute left-[22%] top-1/2 size-9 rounded-full border-2 border-ink-2/40 bg-ink-2/15"
          initial={{ opacity: 0, scale: 1.6, y: 40 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [1.6, 1, 0.8, 1.4], y: [40, -18, -18, -18] }}
          transition={{ delay: 2.3, duration: 1.2, times: [0, 0.5, 0.7, 1] }}
        />
      </div>

      {confirmed && (
        <motion.div
          className="absolute inset-x-4 bottom-8 flex items-center gap-2 rounded-2xl bg-ink-2 px-4 py-3 text-[12.5px] font-semibold text-paper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
        >
          <span className="flex size-6 items-center justify-center rounded-full bg-lime text-ink-2">
            <Check className="size-3.5" strokeWidth={3} />
          </span>
          Books mein save ho gaya
        </motion.div>
      )}
    </div>
  );
}

/* ---------- Step 4 · Sorted: dashboard ---------- */
const MONTHS = [
  { m: "May", i: 55, e: 40 },
  { m: "Jun", i: 62, e: 48 },
  { m: "Jul", i: 58, e: 52 },
  { m: "Aug", i: 72, e: 50 },
  { m: "Sep", i: 80, e: 58 },
  { m: "Oct", i: 92, e: 62 },
];

function SortedScreen() {
  const tiles = [
    { k: "Cash and bank", v: "Rs 12,40,000", dark: true },
    { k: "Income", v: "Rs 8,75,000", note: "Up 12%", good: true },
    { k: "Expenses", v: "Rs 6,10,000" },
    { k: "Bills to pay", v: "Rs 1,95,000", note: "3 overdue" },
  ];
  return (
    <div className="flex h-full flex-col px-4 pt-3 text-ink-2">
      <p className="font-display text-xl font-extrabold">October</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {tiles.map((t, i) => (
          <At key={t.k} at={0.2 + i * 0.15} className={cn("rounded-2xl border p-3", t.dark ? "border-ink-2 bg-ink-2" : "border-line-light bg-white")}>
            <p className={cn("text-[10px]", t.dark ? "text-body-dark" : "text-caption")}>{t.k}</p>
            <p className={cn("mt-0.5 text-[14px] font-bold", t.dark ? "text-lime" : "text-ink-2")}>{t.v}</p>
            {t.note && (
              <p className={cn("mt-0.5 flex items-center gap-1 text-[10px] font-semibold", t.good ? "text-success" : "text-berry")}>
                {t.good && <TrendingUp className="size-3" />} {t.note}
              </p>
            )}
          </At>
        ))}
      </div>
      <At at={0.9} className="mt-3 rounded-2xl border border-line-light bg-white p-3">
        <p className="mb-2 text-[11px] font-bold">Income vs expenses</p>
        <div className="flex h-36 items-end justify-between gap-1.5">
          {MONTHS.map((d, i) => (
            <div key={d.m} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex h-28 w-full items-end justify-center gap-0.5">
                <motion.div
                  className="w-1/2 max-w-3 origin-bottom rounded-t-[3px] border border-ink-2 bg-lime"
                  style={{ height: `${d.i}%` }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.1 + i * 0.1, duration: 0.6, ease }}
                />
                <motion.div
                  className="w-1/2 max-w-3 origin-bottom rounded-t-[3px] bg-pink"
                  style={{ height: `${d.e}%` }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.6, ease }}
                />
              </div>
              <span className="text-[9px] text-caption">{d.m}</span>
            </div>
          ))}
        </div>
      </At>
      <At at={2} className="mt-3 flex items-center justify-between rounded-2xl bg-lime px-3 py-2.5 text-[12px] font-bold">
        Report for tax consultant <span className="rounded-full bg-ink-2 px-2 py-0.5 text-[10px] text-lime">PDF</span>
      </At>
      <p className="mt-2 text-[9px] text-caption">Sample figures for illustration.</p>
    </div>
  );
}

const STEPS = [
  { icon: MessageCircle, t: "Send", d: "WhatsApp par forward, camera se snap, ya Excel upload.", screen: SendScreen },
  { icon: ScanLine, t: "AI reads", d: "Vendor, items, tax aur total seconds mein nikal leta hai.", screen: ReadScreen },
  { icon: UserCheck, t: "You check", d: "Shak wali fields highlight. Aik tap se confirm.", screen: CheckScreen },
  { icon: BarChart3, t: "Sorted", d: "Books, dashboard aur reports, tax consultant ke liye tayyar.", screen: SortedScreen },
];

/** How it works: step list driving a live phone demo that auto-advances. */
export default function PhoneMockupBasic() {
  const [active, setActive] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  // Only play while on screen, so the demo starts at step 1 when people reach it
  React.useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % STEPS.length), STEP_MS);
    return () => clearTimeout(t);
  }, [active, visible]);

  const slides: PhoneSlide[] = STEPS.map((s, i) => {
    const Screen = s.screen;
    return { id: `${s.t}-${i}`, label: `Step ${i + 1} · ${s.t}`, content: <Screen /> };
  });

  return (
    <div
      ref={rootRef}
      className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20"
    >
      <ol className="order-2 flex flex-col gap-3 lg:order-1">
        {STEPS.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.t}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={on ? "step" : undefined}
                className={cn(
                  "relative w-full overflow-hidden rounded-3xl border p-5 text-left transition-colors sm:p-6",
                  on ? "border-ink-2 bg-ink-2" : "border-line-light bg-white hover:border-ink-2/40",
                )}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "inline-flex h-9 min-w-12 items-center justify-center rounded-full px-3 font-display text-lg font-extrabold",
                      on ? "bg-lime text-ink-2" : "bg-paper text-ink-2",
                    )}
                  >
                    {i + 1}
                  </span>
                  <h3 className={cn("flex-1 text-2xl font-bold", on ? "text-paper" : "text-ink-2")}>{s.t}</h3>
                  <s.icon className={cn("size-6", on ? "text-lime" : "text-ink-2")} strokeWidth={1.5} />
                </div>
                <p className={cn("mt-2 pl-16", on ? "text-body-dark" : "text-body-light")}>{s.d}</p>

                {on && (
                  <motion.span
                    key={`${active}-${visible}`}
                    aria-hidden
                    className="absolute bottom-0 left-0 h-1 bg-lime"
                    initial={{ width: "0%" }}
                    animate={{ width: visible ? "100%" : "0%" }}
                    transition={{ duration: visible ? STEP_MS / 1000 : 0, ease: "linear" }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ol>

      <PhoneCarousel slides={slides} index={active} onIndexChange={setActive} className="order-1 lg:order-2" />
    </div>
  );
}

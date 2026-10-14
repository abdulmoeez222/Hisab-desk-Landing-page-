import { Check, CheckCheck, ChevronLeft, Paperclip, Phone, ShieldAlert, TrendingUp } from "lucide-react";
import UserTable, { type User } from "@/components/ui/user-table";

export function Wordmark({ className = "", dark = true }: { className?: string; dark?: boolean }) {
  return (
    <span className={`font-display font-extrabold tracking-tight ${dark ? "text-paper" : "text-ink-2"} ${className}`}>
      hisaab desk
      <span className="ml-[0.06em] inline-block size-[0.28em] rounded-full bg-lime align-baseline" aria-hidden />
    </span>
  );
}

/* WhatsApp chat: bill forwarded, Rasidi replies */
export function WhatsAppPhone() {
  return (
    <div className="mx-auto w-full max-w-[320px] rounded-[2.6rem] border-[10px] border-ink-2 bg-ink-2 shadow-none">
      <div className="overflow-hidden rounded-[1.9rem] bg-panel-warm">
        <div className="flex items-center gap-3 bg-ink-2 px-4 pb-3 pt-4 text-white">
          <ChevronLeft className="size-5 text-[#8A8A96]" />
          <span className="flex size-9 items-center justify-center rounded-full bg-lime font-display text-base font-extrabold text-ink-2">h.</span>
          <div className="flex-1 leading-tight">
            <p className="text-sm font-bold">Hisaab Desk</p>
            <p className="text-[11px] text-[#8A8A96]">Rasidi · online</p>
          </div>
          <Phone className="size-4 text-[#8A8A96]" />
        </div>
        <div className="flex flex-col gap-3 px-3 py-4 text-[13px]">
          <div className="ml-auto w-[78%] rounded-2xl rounded-tr-sm bg-wa p-2">
            <div className="flex h-24 flex-col justify-between rounded-xl border border-dashed border-[#9a9aa6] bg-white p-2.5">
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
              10:42 <CheckCheck className="size-3.5 text-[#4FB6FF]" />
            </p>
          </div>
          <div className="w-[85%] rounded-2xl rounded-tl-sm bg-white p-3 text-ink-2">
            <p className="font-bold">Mil gaya! ✅</p>
            <p className="mt-1 text-body-light">
              Al-Noor Traders · <b className="text-ink-2">Rs 48,500</b>
              <br />
              Due 25 Oct
            </p>
            <p className="mt-2 inline-flex rounded-full bg-lime px-3 py-1 text-xs font-bold">Tap to review</p>
            <p className="mt-1 text-right text-[10px] text-caption">10:42</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* AI review card: one field flagged for checking */
export function ReviewCard() {
  const rows: [string, string, boolean?][] = [
    ["Vendor", "Al-Noor Traders"],
    ["Invoice", "INV-2231"],
    ["Date", "12 Oct 2026"],
    ["Sales tax 16%", "Rs 6,690"],
    ["Total", "Rs 48,500 ✓ items add up"],
    ["Due date", "25 Oct 2026", true],
    ["Category", "Raw material"],
  ];
  return (
    <div className="w-full rounded-3xl border border-line-light bg-white p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-bold text-ink-2">Rasidi ne parha</p>
        <span className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-caption">WhatsApp</span>
      </div>
      <dl className="divide-y divide-line-light text-sm">
        {rows.map(([k, v, flag]) => (
          <div key={k} className={`flex items-center justify-between gap-3 px-2 py-2.5 ${flag ? "-mx-1 rounded-xl bg-blush px-3" : ""}`}>
            <dt className="text-caption">{k}</dt>
            <dd className="flex items-center gap-2 text-right font-semibold text-ink-2">
              {v}
              {flag && <span className="rounded-full bg-berry px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">Check</span>}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <span className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-lime text-sm font-bold text-ink-2">
          <Check className="size-4" strokeWidth={3} /> Confirm
        </span>
        <span className="inline-flex h-11 items-center justify-center rounded-full border-[1.5px] border-ink-2 text-sm font-bold text-ink-2">
          Edit
        </span>
      </div>
    </div>
  );
}

/* Supplier quote comparison */
const QUOTES = [
  { name: "Al-Noor Traders", total: "Rs 4,85,000", days: "12 days", pay: "100% advance", warranty: "6 months" },
  { name: "Kashif & Sons", total: "Rs 4,42,000", days: "7 days", pay: "30 days credit", warranty: "12 months", best: true },
  { name: "Metro Supplies", total: "Rs 4,60,500", days: "15 days", pay: "50% advance", warranty: "6 months" },
];

export function QuoteCompare() {
  const suppliers: User[] = QUOTES.map((q) => ({
    id: q.name,
    name: q.name,
    email: `${q.pay} · ${q.warranty} warranty`,
    role: q.total,
    status: q.best ? "Best value" : q.pay === "100% advance" ? "Risk: full advance" : "Okay",
    statusTone: q.best ? "good" : q.pay === "100% advance" ? "risk" : "neutral",
    lastSeen: q.days,
    highlight: q.best,
  }));

  return (
    <div>
      <UserTable users={suppliers} caption="Supplier quotes compared" headers={["Supplier", "Total", "Rasidi says", "Delivery"]} />
      <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
        <p className="text-paper">
          <span className="font-bold text-lime">Rs 43,000 bachat</span> vs highest quote
        </p>
        <p className="flex items-center gap-1.5 text-body-dark">
          <ShieldAlert className="size-4 text-pink" /> Risk: Al-Noor wants full payment upfront
        </p>
      </div>
    </div>
  );
}

/* Dashboard: stat tiles + income/expense bars */
const MONTHS = [
  { m: "May", i: 62, e: 48 },
  { m: "Jun", i: 70, e: 52 },
  { m: "Jul", i: 66, e: 58 },
  { m: "Aug", i: 74, e: 55 },
  { m: "Sep", i: 78, e: 60 },
  { m: "Oct", i: 88, e: 61 },
];

export function Dashboard() {
  const tiles = [
    { k: "Cash and bank", v: "Rs 12,40,000", dark: true },
    { k: "Income this month", v: "Rs 8,75,000", note: "Up 12%", good: true },
    { k: "Expenses", v: "Rs 6,10,000" },
    { k: "Bills to pay", v: "Rs 1,95,000", note: "3 overdue" },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {tiles.map((t) => (
          <div key={t.k} className={`rounded-2xl border p-4 ${t.dark ? "border-ink-2 bg-ink-2" : "border-line-light bg-white"}`}>
            <p className={`text-xs ${t.dark ? "text-body-dark" : "text-caption"}`}>{t.k}</p>
            <p className={`mt-1 text-lg font-bold sm:text-2xl ${t.dark ? "text-lime" : "text-ink-2"}`}>{t.v}</p>
            {t.note && (
              <p className={`mt-1 flex items-center gap-1 text-xs font-semibold ${t.good ? "text-success" : "text-berry"}`}>
                {t.good && <TrendingUp className="size-3.5" />} {t.note}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-line-light bg-white p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between text-xs">
          <p className="font-bold text-ink-2">Income vs expenses</p>
          <div className="flex gap-3 text-caption">
            <span className="flex items-center gap-1.5"><i className="size-2.5 rounded-sm border border-ink-2 bg-lime" /> Income</span>
            <span className="flex items-center gap-1.5"><i className="size-2.5 rounded-sm bg-pink" /> Expenses</span>
          </div>
        </div>
        <div className="flex h-40 items-end justify-between gap-2 sm:gap-4">
          {MONTHS.map((d) => (
            <div key={d.m} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-32 w-full items-end justify-center gap-1">
                <div className="w-1/2 max-w-5 rounded-t-md border-[1.5px] border-ink-2 bg-lime" style={{ height: `${d.i}%` }} />
                <div className="w-1/2 max-w-5 rounded-t-md bg-pink" style={{ height: `${d.e}%` }} />
              </div>
              <span className="text-[11px] text-caption">{d.m}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-caption">Sample figures for illustration.</p>
    </div>
  );
}

import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileSpreadsheet,
  FileText,
  Globe,
  Languages,
  Lock,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  UserCheck,
} from "lucide-react";
import { Rasidi } from "@/components/rasidi";
import { Reveal } from "@/components/reveal";
import ShinyButton from "@/components/ui/shiny-button";
import Footer4 from "@/components/ui/footer-section-4";
import Hero6 from "@/components/ui/block-hero-6";
import PhoneMockupBasic from "@/components/ui/phone-mockups-1";
import { SiteNav } from "@/components/site-nav";
import { LiveDemo } from "@/components/live-demo";
import TextHighlight from "@/components/ui/text-highlight";
import BorderBeam from "@/components/ui/border-beam";
import ReceiptTiers from "@/components/ui/receipt-tiers";
import type { Plan } from "@/components/ui/receipt-tiers-utils/types";
import { QuoteCompare } from "@/components/mockups";

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const h2 = "font-display text-[2.35rem] font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow mb-4 ${light ? "text-berry" : "text-lime"}`}>{children}</p>;
}

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <Problem />
      <HowItWorks />
      <SmartBuying />
      <Teams />
      <SeeItLive />
      <Privacy />
      <Plans />
      <Faq />
      <FinalCta />
      <Hero6 />
      <Footer4 />
    </main>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pb-16 pt-10 sm:pt-16 lg:pb-24">
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14`}>
        <div>
          <div className="flex items-start justify-between gap-4">
            <p className="eyebrow max-w-[14rem] text-berry sm:max-w-none">AI finance desk for Pakistani business</p>
            <Rasidi mood="wink" body="#FFFFFF" sparkle className="-mt-4 w-24 shrink-0 lg:hidden" />
          </div>
          <h1 className="mt-4 font-display text-[3.4rem] font-extrabold leading-[0.95] tracking-tight text-ink-2 sm:text-7xl lg:text-[5.6rem]">
            Hisaab,
            <br />
            <span className="bg-lime px-[0.08em] box-decoration-clone">ab AI se.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body-light sm:text-xl">
            Bills, parchis aur supplier quotes. WhatsApp par forward karo, AI parhta hai, aap check karte hain.
            <TextHighlight>Aap ki books khud sorted.</TextHighlight>
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 text-sm font-medium text-ink-2">
            {[
              [MessageCircle, "WhatsApp"],
              [Globe, "Web"],
              [Smartphone, "Android · iPhone"],
              [Languages, "Urdu ya English"],
            ].map(([Icon, label]) => {
              const I = Icon as typeof Globe;
              return (
                <li key={label as string} className="inline-flex items-center gap-1.5 rounded-full border border-line-light bg-white px-3 py-1.5">
                  <I className="size-4 text-berry" strokeWidth={1.75} /> {label as string}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ShinyButton
              href="/waitlist"
              label="Founding 100 mein jagah lo"
              className="inline-flex"
              style={{ padding: "1rem 2rem", fontSize: "1.0625rem", lineHeight: "1.5rem", fontWeight: 700 }}
              fillColor="#14141A"
              labelColor="#F6F6EE"
              accentColor="#C6FF3D"
              accentSoftColor="#E2FF9E"
            />
            <a
              href="#how"
              className="inline-flex h-14 items-center gap-2 rounded-full border-[1.5px] border-ink-2 px-6 font-semibold text-ink-2 transition hover:bg-ink-2 hover:text-paper"
            >
              Kaise kaam karta hai <ArrowRight className="size-4" />
            </a>
          </div>
          <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-body-light">
            <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink-2">Founding 100</span>
            Yearly plan par <b className="text-ink-2">40% off</b>, jab tak aap saath hain.
          </p>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute right-0 top-6 rotate-3 rounded-2xl bg-card-dark px-5 py-4 font-display text-xl font-extrabold text-lime">
            Parchi do.
            <br />
            Baqi Rasidi dekh lega.
          </div>
          <Rasidi mood="wink" body="#FFFFFF" sparkle className="mx-auto mt-24 w-[88%]" />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    { icon: FileText, t: "Paper bills", d: "Draz mein dher. Mahinay ke aakhir tak gum." },
    { icon: MessageCircle, t: "WhatsApp photos", d: "Suppliers aur staff ki chats mein dafan." },
    { icon: FileSpreadsheet, t: "Retyping", d: "Accountant ke liye dino ka Excel kaam." },
  ];
  return (
    <section className="border-t border-line-dark bg-ink py-20 sm:py-28">
      <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center`}>
        <div>
          <Reveal>
            <Eyebrow>The problem</Eyebrow>
            <h2 className={`${h2} max-w-3xl text-paper`}>
              Aap ka hisaab har jagah hai. <span className="text-pink">Siwaye aik jagah ke.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {items.map((it, i) => (
              <Reveal key={it.t} delay={i * 0.08} className="h-full">
                <BorderBeam className="h-full" colorFrom="#FF4F9A" colorTo="#B0105A" duration={7} delay={i * 2.3} glow={0.35}>
                  <div className="h-full rounded-3xl border border-line-dark bg-card-dark p-6">
                    <it.icon className="size-7 text-pink" strokeWidth={1.5} />
                    <h3 className="mt-5 text-xl font-bold text-paper">{it.t}</h3>
                    <p className="mt-2 text-body-dark">{it.d}</p>
                  </div>
                </BorderBeam>
              </Reveal>
            ))}
          </div>
        </div>
        <Rasidi mood="shocked" wave={false} tilt={6} className="mx-auto w-40 sm:w-52 lg:w-60" />
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16 bg-paper py-20 sm:py-28">
      <div className={wrap}>
        <Reveal>
          <Eyebrow light>How it works · Live demo</Eyebrow>
          <h2 className={`${h2} text-ink-2`}>Four steps. No typing.</h2>
          <p className="mt-5 max-w-xl text-lg text-body-light">
            Bill bhejo, Rasidi parhta hai, aap check karte hain, <TextHighlight>books sorted</TextHighlight>. Kisi bhi step par tap karke dekho.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <PhoneMockupBasic />
        </Reveal>
        <p className="mt-10 flex items-start gap-2 text-sm text-caption">
          <ShieldCheck className="mt-0.5 size-4 shrink-0" />
          Har AI result ko insaan check karta hai, tab hi woh aap ki reports mein count hota hai.
        </p>
      </div>
    </section>
  );
}

function SmartBuying() {
  return (
    <section id="features" className="scroll-mt-16 bg-ink py-20 sm:py-28">
      <div className={wrap}>
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>Smart buying</Eyebrow>
            <h2 className={`${h2} max-w-2xl text-paper`}>
              Teen quotes. Aik click. <span className="text-lime">Best deal.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-body-dark">
              Supplier quotations upload karo. AI price, delivery, payment terms aur warranty side by side rakhta hai, aur{" "}
              <TextHighlight>hidden risk bata deta hai</TextHighlight>. Faisla aap ka.
            </p>
          </Reveal>
          <Rasidi mood="smirk" wave={false} className="hidden w-40 shrink-0 md:block" />
        </div>
        <Reveal delay={0.1} className="mt-10">
          <QuoteCompare />
        </Reveal>
      </div>
    </section>
  );
}

function Teams() {
  const roles = ["Owner", "Admin", "Accountant", "Approver", "Viewer", "Employee"];
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className={`${wrap} grid gap-6 lg:grid-cols-2`}>
        <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-3xl border border-line-light bg-white p-6 sm:p-8">
            <Users className="size-7 text-ink-2" strokeWidth={1.5} />
            <Eyebrow light>
              <span className="mt-6 block">Built for teams</span>
            </Eyebrow>
            <h3 className="font-display text-3xl font-extrabold leading-tight text-ink-2 sm:text-4xl">Staff send. You approve.</h3>
            <p className="mt-4 text-body-light">
              Staff phone se bills aur claims bhejta hai. Aap ki limit se upar (jaise Rs 50,000) sab <TextHighlight>approval ka intezar</TextHighlight> karta hai. Sab kuch
              role based aur logged.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {roles.map((r, i) => (
                <span
                  key={r}
                  className={`rounded-full border-[1.5px] px-3.5 py-1.5 text-sm font-semibold ${
                    i === 0 ? "border-ink-2 bg-ink-2 text-lime" : "border-ink-2 text-ink-2"
                  }`}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="h-full">
          <div className="flex h-full flex-col rounded-3xl bg-ink-2 p-6 sm:p-8">
            <Languages className="size-7 text-lime" strokeWidth={1.5} />
            <p className="eyebrow mb-4 mt-6 text-lime">Language and devices</p>
            <h3 className="font-display text-3xl font-extrabold leading-tight text-paper sm:text-4xl">Urdu ya English. Aap ki marzi.</h3>
            <p dir="rtl" lang="ur" className="mt-5 font-urdu text-2xl leading-[2.2] text-paper">
              حساب، اب AI سے۔
            </p>
            <p className="mt-3 text-body-dark">Same data, dono zubaanon mein. Web, Android, iPhone aur WhatsApp. <TextHighlight>Aik account, har jagah.</TextHighlight></p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SeeItLive() {
  return (
    <section id="demo" className="scroll-mt-16 bg-cream py-20 sm:py-28">
      <div className={wrap}>
        <Reveal>
          <Eyebrow light>Live system</Eyebrow>
          <h2 className={`${h2} text-ink-2`}>Asal app. Asal flow.</h2>
          <p className="mt-5 max-w-xl text-lg text-body-light">
            Dashboard se reports, books, quotes aur Urdu tak. Bas dekhte raho.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <LiveDemo />
        </Reveal>
      </div>
    </section>
  );
}

function Privacy() {
  const points = [
    { icon: Download, t: "Data aap ka hai", d: "Jab chahein export ya delete karein." },
    { icon: Lock, t: "Kabhi share nahi", d: "Aap ki wazeh ijazat ke baghair, kabhi nahi." },
    { icon: UserCheck, t: "Role based access", d: "Har shakhs sirf utna dekhe jitna zaroori." },
    { icon: ShieldCheck, t: "Encrypted", d: "Daily backups aur poora audit trail." },
  ];
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className={wrap}>
        <Reveal>
          <Eyebrow>Privacy promise</Eyebrow>
          <h2 className={`${h2} text-paper`}>
            Aap ka hisaab, <span className="text-lime">sirf aap ka.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06} className="h-full">
              <BorderBeam className="h-full" colorFrom="#C6FF3D" colorTo="#2E7D32" duration={8} delay={i * 2} glow={0.35}>
                <div className="h-full rounded-3xl border border-line-dark bg-card-dark p-6">
                  <p.icon className="size-6 text-lime" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-bold text-paper">{p.t}</h3>
                  <p className="mt-1.5 text-sm text-body-dark">{p.d}</p>
                </div>
              </BorderBeam>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Yearly billing = 2 months free, shown as the per-month equivalent
const yearly = (monthly: number) => Math.round((monthly * 10) / 12);

const plans: Plan[] = [
  { id: "free", name: "Free", tagline: "Try karne ke liye", price: { monthly: 0, annual: 0 }, cta: "Join waitlist", features: ["1 user", "20 AI docs / month"] },
  { id: "individual", name: "Individual", tagline: "Freelancers, professionals", price: { monthly: 499, annual: yearly(499) }, cta: "Join waitlist", features: ["1 user", "60 AI docs", "WhatsApp intake"] },
  { id: "starter", name: "Starter", tagline: "~10 staff tak", price: { monthly: 2499, annual: yearly(2499) }, cta: "Join waitlist", features: ["2 users", "150 AI docs", "Excel import"] },
  { id: "business", name: "Business", tagline: "10 se 50 log · 14 din free trial", price: { monthly: 5999, annual: yearly(5999) }, cta: "Join waitlist", badge: "Recommended", features: ["5 users", "500 AI docs", "Approvals, quotes", "Staff claims"] },
  { id: "pro", name: "Pro", tagline: "Multi site firms", price: { monthly: 11999, annual: yearly(11999) }, cta: "Join waitlist", features: ["15 users", "1,500 AI docs", "Onboarding session"] },
];

function Plans() {
  return (
    <section id="plans" className="scroll-mt-16 bg-cream py-20 sm:py-28">
      <div className={wrap}>
        <Reveal>
          <Eyebrow light>Plans</Eyebrow>
          <h2 className={`${h2} text-ink-2`}>Simple plans. Rupee prices.</h2>
          <p className="mt-5 max-w-xl text-lg text-body-light">
            Dollar mein nahi. 14 din Business free trial, <TextHighlight>card ki zaroorat nahi</TextHighlight>. Yearly par 2 mahine free.
          </p>
        </Reveal>
        <ReceiptTiers plans={plans} className="mt-10" />
        <p className="mt-6 text-xs text-caption">Plus sales tax. Launch prices, abhi confirm hona baqi hain.</p>
      </div>
    </section>
  );
}

function Faq() {
  const qs = [
    ["Hisaab Desk kab launch hoga?", "Hum jald launch kar rahe hain. Waitlist par sab se pehle aap ko WhatsApp par khabar milegi, aur Founding 100 ko pehle access."],
    ["Founding 100 offer kya hai?", "Pehle 100 businesses ko yearly plan par 40% off milega, jab tak woh Hisaab Desk ke saath hain."],
    ["Kya AI galti kar sakta hai?", "Isi liye har AI result insaan check karta hai. Jis field par AI ko shak ho, woh highlight hoti hai. Confirm kiye baghair kuch bhi aap ki reports mein count nahi hota."],
    ["Kya mujhe accounting aani chahiye?", "Bilkul nahi. Hisaab Desk saaf zubaan mein baat karta hai. Bill bhejo, check karo, bas."],
    ["Mera data kitna mehfooz hai?", "Data encrypted hai, daily backups hain, aur aap ki ijazat ke baghair kisi se share nahi hota. Jab chahein export ya delete karein."],
    ["Kya yeh tax filing karta hai?", "Nahi. Hisaab Desk aap ki books aur reports tayyar rakhta hai taake aap ka tax consultant aasani se kaam kar sake."],
  ];
  return (
    <section id="faq" className="scroll-mt-16 bg-cream py-20 sm:py-28">
      <div className={`${wrap} grid gap-10 lg:grid-cols-[0.8fr_1.2fr]`}>
        <Reveal>
          <Eyebrow light>FAQ</Eyebrow>
          <h2 className={`${h2} text-ink-2`}>Sawal? Jawab.</h2>
          <Rasidi mood="happy" className="mt-8 hidden w-44 lg:block" />
        </Reveal>
        <div className="flex flex-col gap-3">
          {qs.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-line-light bg-white p-5 open:pb-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-ink-2 [&::-webkit-details-marker]:hidden">
                {q}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-paper text-xl leading-none transition group-open:rotate-45 group-open:bg-lime">
                  +
                </span>
              </summary>
              <p className="mt-3 text-body-light">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]`}>
        <div>
          <p className="eyebrow mb-4 text-lime">Founding 100</p>
          <h2 className={`${h2} text-paper`}>Pehle 100 mein aao. 40% off, hamesha.</h2>
          <p className="mt-5 max-w-lg text-lg text-body-dark">
            Launch par 14 din Business free, card ki zaroorat nahi. Aur Founding 100 ko yearly plan par <TextHighlight>40% off, jab tak aap saath hain</TextHighlight>.
          </p>
          <Rasidi mood="happy" sparkle={false} body="#FFFFFF" className="mt-8 hidden w-40 lg:block" />
        </div>
        <BorderBeam radius="1.5rem" colorFrom="#FFFFFF" colorTo="#FF4F9A" duration={5} width={2}>
        <div className="rounded-3xl border-2 border-lime bg-lime p-1">
          <div className="rounded-[1.35rem] bg-[#d6ff70] p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-ink-2">
              <Sparkles className="size-4" /> 2 minute ka kaam
            </div>
            <ul className="mb-6 space-y-3 text-lg font-semibold text-ink-2">
              {["14 din Business free", "Card ki zaroorat nahi", "Yearly plan par 40% off, hamesha"].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 shrink-0" strokeWidth={2} /> {x}
                </li>
              ))}
            </ul>
            <ShinyButton
              href="/waitlist"
              label="Founding 100 mein jagah lo"
              className="flex w-full justify-center"
              style={{ padding: "1rem 2rem", fontSize: "1.0625rem", lineHeight: "1.5rem", fontWeight: 700 }}
              fillColor="#14141A"
              labelColor="#F6F6EE"
              accentColor="#C6FF3D"
              accentSoftColor="#E2FF9E"
            />
          </div>
        </div>
        </BorderBeam>
      </div>
    </section>
  );
}

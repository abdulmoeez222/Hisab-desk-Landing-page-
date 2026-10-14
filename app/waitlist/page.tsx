import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Join the waitlist · Hisaab Desk",
  description: "Founding 100 mein jagah lo. Yearly plan par 40% off, jab tak aap saath hain.",
};

export default function WaitlistPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream">
      <SiteNav home={false} />
      <section className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-md rounded-3xl border border-line-dark bg-ink-2 p-6 shadow-[0_24px_60px_-28px_rgba(20,20,26,0.6)] sm:p-8">
          <h1 className="mb-6 font-display text-3xl font-extrabold leading-tight text-paper">Waitlist join karo</h1>
          <WaitlistForm source="waitlist-page" />
        </div>
      </section>
    </main>
  );
}

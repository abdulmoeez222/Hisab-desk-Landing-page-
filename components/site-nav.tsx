import FloatingMenu from "@/components/ui/liquid-morph-floating-menu";
import { SlideTabs } from "@/components/ui/slide-tabs";
import ShinyButton from "@/components/ui/shiny-button";
import { Wordmark } from "@/components/mockups";

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

const sections = [
  { label: "How it works", hash: "#how" },
  { label: "Features", hash: "#features" },
  { label: "Plans", hash: "#plans" },
  { label: "FAQ", hash: "#faq" },
];

/** `home` links to sections on the same page; elsewhere they point back to the landing page. */
export function SiteNav({ home = true }: { home?: boolean }) {
  const items = sections.map((s) => ({ label: s.label, href: home ? s.hash : `/${s.hash}` }));

  return (
    <>
      <header className="sticky top-0 z-50 bg-cream">
        <div className={`${wrap} flex h-16 items-center justify-between`}>
          <a href={home ? "#top" : "/"} aria-label="Hisaab Desk home">
            <Wordmark dark={false} className="text-xl" />
          </a>
          <nav aria-label="Main" className="hidden md:block">
            <SlideTabs items={items} />
          </nav>
          {home ? (
            <ShinyButton
              href="/waitlist"
              label="Join waitlist"
              className="hidden md:inline-flex"
              style={{ padding: "0.75rem 1.5rem", fontSize: "1rem", lineHeight: "1.5rem", fontWeight: 600 }}
              fillColor="#14141A"
              labelColor="#F6F6EE"
              accentColor="#C6FF3D"
              accentSoftColor="#E2FF9E"
            />
          ) : (
            // Keeps the tabs centred where the CTA would sit
            <span aria-hidden className="hidden w-[150px] md:block" />
          )}
        </div>
      </header>
      <FloatingMenu className="md:hidden" items={items} />
    </>
  );
}

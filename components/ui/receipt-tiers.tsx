"use client";

import { cn } from "@/lib/utils";
import {
  REVEAL_KEYFRAMES,
  revealClass,
  revealDelay,
  useReveal,
} from "./receipt-tiers-utils/reveal";
import type { Plan } from "./receipt-tiers-utils/types";

export type ReceiptTiersVariant = "Tilted" | "Straight";

export interface ReceiptTiersProps {
  plans: Plan[];
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  merchant?: string;
  merchantLine?: string;
  variant?: ReceiptTiersVariant;
  className?: string;
}

const TILTS = [
  "@3xl:-rotate-1",
  "@3xl:rotate-[0.5deg] @3xl:-translate-y-2",
  "@3xl:rotate-[1.5deg]",
  "@3xl:-rotate-1",
  "@3xl:rotate-1",
];

// Pakistani digit grouping: Rs 11,999 · Rs 1,20,000
const rs = (n: number) => `RS ${n.toLocaleString("en-IN")}`;

function Rule() {
  return (
    <span
      aria-hidden
      className="my-3 block border-t border-dashed border-[#d9cdb8]"
    />
  );
}

export function ReceiptTiers({
  plans,
  eyebrow,
  heading,
  subheading,
  merchant = "HISAAB DESK",
  merchantLine = "AAP KA AI MUNSHI · MADE IN PAKISTAN",
  variant = "Tilted",
  className,
}: ReceiptTiersProps) {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={cn(
        "@container w-full rounded-3xl bg-panel-warm px-6 py-12 sm:px-10",
        className,
      )}
    >
      <style dangerouslySetInnerHTML={{ __html: REVEAL_KEYFRAMES }} />

      {heading && (
        <div
          className={cn(
            "mx-auto mb-12 max-w-[52ch] text-center font-mono",
            revealClass(shown),
          )}
        >
          {eyebrow && (
            <span className="text-[11px] tracking-[0.3em] text-caption">
              ··· {eyebrow.toUpperCase()} ···
            </span>
          )}
          <h2 className="mt-4 text-balance text-[24px] font-bold uppercase tracking-[0.12em] text-ink-2 @lg:text-[27px]">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-3 text-pretty text-[11.5px] uppercase leading-[1.7] tracking-[0.08em] text-caption">
              {subheading}
            </p>
          )}
        </div>
      )}

      <div className="mx-auto flex max-w-[1040px] flex-wrap items-stretch justify-center gap-8 font-mono @3xl:gap-7">
        {plans.map((plan, position) => (
          <div
            key={plan.id}
            style={revealDelay(shown, position)}
            className={cn(
              "relative flex w-full max-w-[360px] flex-col bg-cream px-6 pb-7 pt-8 text-[12.5px] leading-relaxed text-ink-2 shadow-[0_12px_32px_-16px_rgba(20,20,26,0.35)] @3xl:w-[calc((100%-3.5rem)/3)] @3xl:max-w-none",
              "[clip-path:polygon(0_0,100%_0,100%_calc(100%-8px),97%_100%,94%_calc(100%-8px),91%_100%,88%_calc(100%-8px),85%_100%,82%_calc(100%-8px),79%_100%,76%_calc(100%-8px),73%_100%,70%_calc(100%-8px),67%_100%,64%_calc(100%-8px),61%_100%,58%_calc(100%-8px),55%_100%,52%_calc(100%-8px),49%_100%,46%_calc(100%-8px),43%_100%,40%_calc(100%-8px),37%_100%,34%_calc(100%-8px),31%_100%,28%_calc(100%-8px),25%_100%,22%_calc(100%-8px),19%_100%,16%_calc(100%-8px),13%_100%,10%_calc(100%-8px),7%_100%,4%_calc(100%-8px),1%_100%,0_calc(100%-8px))]",
              revealClass(shown),
              variant === "Tilted" && TILTS[position % TILTS.length],
            )}
          >
            {plan.badge && (
              <span
                aria-hidden
                className="absolute right-4 top-16 -rotate-12 rounded border-2 border-berry px-2 py-1 text-[11px] font-bold tracking-[0.14em] text-berry opacity-80 mix-blend-multiply"
              >
                {plan.badge.toUpperCase()}
              </span>
            )}

            <p className="text-center text-[13.5px] font-bold tracking-[0.08em]">
              {merchant}
            </p>
            <p className="mt-1 text-center text-[10.5px] tracking-[0.06em] text-caption">
              {merchantLine}
            </p>

            <Rule />

            <div className="flex items-baseline justify-between">
              <span className="font-bold tracking-[0.08em]">
                {plan.name.toUpperCase()} PLAN
              </span>
              <span className="text-caption">×1</span>
            </div>
            <p className="mt-1 text-[11px] text-caption">
              {plan.tagline}
            </p>

            <Rule />

            <ul className="space-y-1.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-baseline gap-2">
                  <span className="min-w-0 flex-shrink truncate">
                    {feature.toUpperCase()}
                  </span>
                  <span
                    aria-hidden
                    className="mb-1 min-w-3 flex-1 border-b border-dotted border-[#d9cdb8]"
                  />
                  <span className="shrink-0 text-caption">
                    INCL
                  </span>
                </li>
              ))}
            </ul>

            {/* Keeps totals and buttons level across a row */}
            <div aria-hidden className="flex-1" />

            <Rule />

            <div className="flex items-baseline justify-between text-[11.5px] text-caption">
              <span>MONTHLY</span>
              <span>{plan.price ? rs(plan.price.monthly) : "ON QUOTE"}</span>
            </div>
            <div className="flex items-baseline justify-between text-[11.5px] text-caption">
              <span>YEARLY · 2 MAHINE FREE</span>
              <span>
                {plan.price && plan.price.monthly > 0
                  ? `-${rs(plan.price.monthly - plan.price.annual)}`
                  : "—"}
              </span>
            </div>

            <div className="mt-2 flex items-baseline justify-between text-[17px] font-bold">
              <span>TOTAL /MO</span>
              <span>{plan.price ? rs(plan.price.annual) : "CUSTOM"}</span>
            </div>

            <Rule />

            <a
              href={plan.href ?? "/waitlist"}
              className={cn(
                "block w-full py-3 text-center text-[12.5px] font-bold tracking-[0.1em]",
                "transition-transform duration-150 active:scale-[0.98]",
                "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-berry focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                plan.badge
                  ? "bg-lime text-ink-2 hover:bg-[#d4ff6a]"
                  : "bg-ink-2 text-paper hover:bg-black",
              )}
            >
              {plan.cta.toUpperCase()}
            </a>

            <div
              aria-hidden
              className="mx-auto mt-5 h-10 w-4/5 opacity-80 [background-image:repeating-linear-gradient(90deg,currentColor_0,currentColor_2px,transparent_2px,transparent_5px,currentColor_5px,currentColor_6px,transparent_6px,transparent_9px)]"
            />
            <p className="mt-2 text-center text-[10px] tracking-[0.2em] text-caption">
              {`NO. 00${28 + position} · SHUKRIYA`}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReceiptTiers;

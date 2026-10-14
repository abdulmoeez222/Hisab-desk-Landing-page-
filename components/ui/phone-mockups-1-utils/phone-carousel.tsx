"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImageItem {
  src: string;
  alt: string;
}

export interface PhoneSlide {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface PhoneCarouselProps {
  /** Static screenshots, or live React screens via `slides` */
  images?: ImageItem[];
  slides?: PhoneSlide[];
  index?: number;
  onIndexChange?: (index: number) => void;
  className?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

/** iPhone frame that pages through screens with arrows and dots. Controlled or uncontrolled. */
export function PhoneCarousel({ images, slides, index, onIndexChange, className }: PhoneCarouselProps) {
  const items: PhoneSlide[] =
    slides ??
    (images ?? []).map((img) => ({
      id: img.src,
      label: img.alt,
      // eslint-disable-next-line @next/next/no-img-element
      content: <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />,
    }));

  const [inner, setInner] = React.useState(0);
  const current = index ?? inner;

  // Slide direction follows the index change, wherever it came from (arrows, dots or the parent)
  const [seen, setSeen] = React.useState({ index: current, direction: 1 });
  if (seen.index !== current) {
    const last = items.length - 1;
    const forward = current > seen.index ? !(seen.index === 0 && current === last) : seen.index === last && current === 0;
    setSeen({ index: current, direction: forward ? 1 : -1 });
  }
  const direction = seen.direction;

  const go = (next: number) => {
    const n = (next + items.length) % items.length;
    if (index === undefined) setInner(n);
    onIndexChange?.(n);
  };

  if (!items.length) return null;
  const slide = items[current];

  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      {/* Frame */}
      <div className="relative w-[300px] rounded-[3.2rem] bg-ink-2 p-[11px] shadow-[0_40px_80px_-30px_rgba(20,20,26,0.55),inset_0_0_0_2px_#2c2c36]">
        {/* Side buttons */}
        <span aria-hidden className="absolute -left-[3px] top-28 h-8 w-[3px] rounded-l bg-ink-2" />
        <span aria-hidden className="absolute -left-[3px] top-40 h-14 w-[3px] rounded-l bg-ink-2" />
        <span aria-hidden className="absolute -right-[3px] top-36 h-20 w-[3px] rounded-r bg-ink-2" />

        <div className="relative h-[600px] overflow-hidden rounded-[2.5rem] bg-cream">
          {/* Status bar + dynamic island */}
          <div className="absolute inset-x-0 top-0 z-20 flex h-11 items-center justify-between px-7 text-[12px] font-semibold text-ink-2">
            <span>10:42</span>
            <span aria-hidden className="absolute left-1/2 top-2.5 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-ink-2" />
            <span className="flex items-center gap-1">
              <i className="block h-2.5 w-4 rounded-[3px] border border-ink-2 p-px">
                <i className="block h-full w-3/4 rounded-[1px] bg-ink-2" />
              </i>
            </span>
          </div>

          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={slide.id}
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0.6 }),
                center: { x: 0, opacity: 1 },
                exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0.6 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease }}
              className="absolute inset-0 pt-11"
              aria-label={slide.label}
            >
              {slide.content}
            </motion.div>
          </AnimatePresence>

          {/* Home indicator */}
          <span aria-hidden className="absolute bottom-2 left-1/2 z-20 h-[5px] w-28 -translate-x-1/2 rounded-full bg-ink-2/80" />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => go(current - 1)}
          aria-label="Previous screen"
          className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-ink-2 text-ink-2 transition hover:bg-ink-2 hover:text-lime"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${s.label}`}
              aria-current={i === current}
              className={cn("h-2 rounded-full transition-all", i === current ? "w-7 bg-ink-2" : "w-2 bg-ink-2/25 hover:bg-ink-2/50")}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(current + 1)}
          aria-label="Next screen"
          className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-ink-2 text-ink-2 transition hover:bg-ink-2 hover:text-lime"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}

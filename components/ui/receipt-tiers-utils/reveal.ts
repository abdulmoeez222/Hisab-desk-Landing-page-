"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

// Receipts "print" in: slide down from the slot and fade up, one after another
export const REVEAL_KEYFRAMES = `
@keyframes receipt-print {
  from { opacity: 0; transform: translateY(-18px); }
  to { opacity: 1; transform: translateY(0); }
}
.receipt-reveal {
  animation: receipt-print 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}
`;

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, shown };
}

export function revealClass(shown: boolean) {
  return shown ? "receipt-reveal" : "opacity-0";
}

export function revealDelay(shown: boolean, position: number): React.CSSProperties | undefined {
  return shown ? { animationDelay: `${120 + position * 110}ms` } : undefined;
}

"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TabItem {
  label: string;
  href: string;
}

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface SlideTabsProps {
  items: TabItem[];
  className?: string;
}

export const SlideTabs = ({ items, className = "" }: SlideTabsProps) => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  // Tab for the section currently in view (-1 while above the first section)
  const [selected, setSelected] = useState(-1);
  // Tab under the pointer, so its label can flip to dark over the lime cursor
  const [hovered, setHovered] = useState<number | null>(null);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  const moveTo = useCallback((i: number) => {
    const tab = tabsRef.current[i];
    if (!tab) {
      setPosition((p) => ({ ...p, opacity: 0 }));
      return;
    }
    const { width } = tab.getBoundingClientRect();
    setPosition({ left: tab.offsetLeft, width, opacity: 1 });
  }, []);

  // Park the cursor on the selected tab whenever it changes
  useEffect(() => {
    if (hovered === null) moveTo(selected);
  }, [selected, hovered, moveTo]);

  // Keep the selected tab in sync with the section on screen
  useEffect(() => {
    // Only same-page anchors can be tracked; links to other pages are skipped
    const sections = items
      .map((item) => (item.href.startsWith("#") ? document.querySelector<HTMLElement>(item.href) : null))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = items.findIndex((item) => item.href === `#${entry.target.id}`);
          if (i !== -1) setSelected(i);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    // Clear the selection once scrolled back above the first section
    const onScroll = () => {
      if (sections[0].getBoundingClientRect().top > window.innerHeight * 0.5) setSelected(-1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  const active = hovered ?? selected;

  return (
    <ul
      onMouseLeave={() => setHovered(null)}
      className={`relative mx-auto flex w-fit rounded-full bg-ink-2 p-1 shadow-[0_10px_30px_-12px_rgba(20,20,26,0.45)] ${className}`}
    >
      {items.map((item, i) => (
        <Tab
          key={item.href}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          href={item.href}
          isActive={active === i}
          onHover={() => {
            setHovered(i);
            moveTo(i);
          }}
          onClick={() => setSelected(i)}
        >
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = React.forwardRef<
  HTMLLIElement,
  {
    children: React.ReactNode;
    href: string;
    isActive: boolean;
    onHover: () => void;
    onClick: () => void;
  }
>(({ children, href, isActive, onHover, onClick }, ref) => {
  return (
    <li ref={ref} onMouseEnter={onHover} className="relative z-10 block">
      <a
        href={href}
        onClick={onClick}
        onFocus={onHover}
        aria-current={isActive ? "true" : undefined}
        style={{ fontFamily: "var(--font-dm-sans), var(--font-nastaliq), sans-serif" }}
        className={`block cursor-pointer px-5 py-2 text-base font-semibold leading-6 transition-colors duration-200 lg:px-8 ${
          isActive ? "text-ink-2" : "text-body-dark hover:text-paper"
        }`}
      >
        {children}
      </a>
    </li>
  );
});
Tab.displayName = "Tab";

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      aria-hidden
      animate={{
        ...position,
      }}
      className="absolute z-0 h-10 rounded-full bg-lime"
    />
  );
};

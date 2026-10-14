"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TextHighlightProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  color?: string;
}

export function TextHighlight({
  children,
  className,
  delay = 0.3,
  duration = 0.6,
  color = "#C6FF3D",
}: TextHighlightProps) {
  return (
    <span className={cn("relative inline-block pb-1", className)}>
      {/* Simple marker underline, drawn when the text scrolls into view */}
      <motion.span
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-[8px] rounded-sm"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          backgroundColor: color,
          transformOrigin: "left",
        }}
      />

      {/* Text */}
      <span className="relative">{children}</span>
    </span>
  );
}

export default TextHighlight;

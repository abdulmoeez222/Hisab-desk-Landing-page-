import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  children: ReactNode;
  className?: string;
  /** Must match the wrapped element's corner radius, e.g. "1.5rem". */
  radius?: string;
  /** Head and tail colours of the travelling beam. */
  colorFrom?: string;
  colorTo?: string;
  /** Seconds per lap. */
  duration?: number;
  /** Beam thickness in px. */
  width?: number;
  /** Strength of the soft glow outside the edge, 0 to 1. */
  glow?: number;
  /** Seconds to offset the lap, so neighbouring beams don't move in sync. */
  delay?: number;
}

/**
 * Wraps a card and runs a glowing beam around its edge.
 * A rotating conic gradient is masked down to a thin ring (the stroke), and a blurred copy sits behind the card (the glow).
 * The keyframes and the animatable angle live in app/globals.css.
 */
export function BorderBeam({
  children,
  className,
  radius = "1.5rem",
  colorFrom = "#C6FF3D",
  colorTo = "#FF4F9A",
  duration = 6,
  width = 2,
  glow = 0.55,
  delay = 0,
}: BorderBeamProps) {
  const vars = {
    "--bb-from": colorFrom,
    "--bb-to": colorTo,
    "--bb-duration": `${duration}s`,
    "--bb-width": `${width}px`,
    "--bb-glow": glow,
    "--bb-delay": `${-delay}s`,
    borderRadius: radius,
  } as CSSProperties;

  return (
    <div className={cn("relative isolate", className)} style={vars}>
      <span aria-hidden className="border-beam-glow" />
      {children}
      <span aria-hidden className="border-beam-ring" />
    </div>
  );
}

export default BorderBeam;

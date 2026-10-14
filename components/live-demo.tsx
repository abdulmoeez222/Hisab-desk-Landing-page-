"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// Timings match public/live-demo.mp4 (a recording of the web app prototype), in video seconds
const SPEED = 1.5;

/** Camera moves: between `from` and `to` the frame zooms to `scale`, anchored at (x%, y%) of the video. */
const ZOOMS = [
  { from: 1.5, to: 5.5, scale: 1.7, x: 22, y: 22 },
  { from: 9, to: 21, scale: 1.5, x: 30, y: 40 },
  { from: 29, to: 40, scale: 1.7, x: 88, y: 35 },
  { from: 41.5, to: 45, scale: 1.6, x: 18, y: 50 },
  { from: 48, to: 53, scale: 1.6, x: 22, y: 35 },
  { from: 61.5, to: 68, scale: 1.9, x: 50, y: 42 },
  { from: 72, to: 82, scale: 1.6, x: 85, y: 35 },
];

const DURATION = 93;

export function LiveDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);

  // Play only while the demo is on screen
  useEffect(() => {
    const video = videoRef.current;
    const root = rootRef.current;
    if (!video || !root) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  // Track playback every frame: the progress bar moves smoothly, React state only updates in 0.25s steps
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const v = videoRef.current;
      if (v) {
        const t = v.currentTime;
        if (barRef.current) barRef.current.style.width = `${(t / (v.duration || DURATION)) * 100}%`;
        setTime((prev) => {
          const q = Math.floor(t * 4) / 4;
          return q === prev ? prev : q;
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const zoom = ZOOMS.find((z) => time >= z.from && time < z.to);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div ref={rootRef}>
      {/* Browser frame */}
      <div className="overflow-hidden rounded-[1.4rem] border border-line-light bg-white shadow-[0_40px_80px_-40px_rgba(20,20,26,0.45)]">
        <div className="flex items-center gap-3 border-b border-line-light bg-paper px-4 py-3">
          <span className="flex gap-1.5" aria-hidden>
            <i className="size-3 rounded-full bg-pink" />
            <i className="size-3 rounded-full bg-[#ffc84a]" />
            <i className="size-3 rounded-full bg-lime" />
          </span>
          <span className="mx-auto flex min-w-0 items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-medium text-caption">
            <span className="size-2 shrink-0 rounded-full bg-success" aria-hidden />
            <span className="truncate">Hisaab Desk · web app · Noor Fabrics</span>
          </span>
          <span className="hidden w-[54px] sm:block" aria-hidden />
        </div>

        <div
          role="button"
          tabIndex={0}
          onClick={toggle}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              toggle();
            }
          }}
          aria-label={playing ? "Pause demo" : "Play demo"}
          className="group relative block aspect-[1600/724] w-full cursor-pointer overflow-hidden bg-cream"
        >
          <div
            className="absolute inset-0 transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
            style={{
              transform: `scale(${zoom?.scale ?? 1})`,
              transformOrigin: zoom ? `${zoom.x}% ${zoom.y}%` : "50% 50%",
            }}
          >
            <video
              ref={videoRef}
              src="/live-demo.mp4"
              poster="/live-demo-poster.webp"
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedMetadata={(e) => {
                e.currentTarget.playbackRate = SPEED;
              }}
              onPlay={(e) => {
                e.currentTarget.playbackRate = SPEED;
                setPlaying(true);
              }}
              onPause={() => setPlaying(false)}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Play / pause */}
          <span
            className={cn(
              "absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-ink-2/85 text-lime transition sm:right-5 sm:top-5 sm:size-11",
              playing && "opacity-0 group-hover:opacity-100",
            )}
          >
            {playing ? <Pause className="size-4 sm:size-5" /> : <Play className="size-4 sm:size-5" />}
          </span>

          {/* Progress */}
          <span className="absolute inset-x-0 bottom-0 h-1 bg-ink-2/10">
            <span ref={barRef} className="block h-full w-0 bg-lime" />
          </span>
        </div>
      </div>

    </div>
  );
}

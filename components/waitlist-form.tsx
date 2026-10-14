"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const EMAIL = /^\S+@\S+\.\S+$/;

export function WaitlistForm({ source }: { source: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) return setError("Sahi email likhein.");
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || "failed");
      setStatus("done");
      confetti({ particleCount: 110, spread: 75, origin: { y: 0.65 }, colors: ["#C6FF3D", "#FF4F9A", "#FFF4E6", "#14141A"] });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error && err.message !== "failed" ? err.message : "Kuch masla hua. Dobara try karein.");
    }
  }

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status !== "done" ? (
          <motion.form
            key="form"
            onSubmit={submit}
            noValidate
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-3"
          >
            <label className="sr-only" htmlFor={`${source}-email`}>Email</label>
            <input
              id={`${source}-email`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              placeholder="aap@example.com"
              className="h-14 w-full rounded-full border border-line-dark bg-card-dark px-6 text-base text-paper outline-none transition placeholder:text-[#8A8A96] focus:border-lime"
            />

            {error && (
              <p role="alert" className="px-2 text-sm font-medium text-pink">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-lime px-6 text-base font-bold text-ink-2 transition hover:bg-[#d4ff6a] active:scale-[0.98] disabled:opacity-70"
            >
              {status === "loading" ? (
                <Loader2 className="size-5 animate-spin" />
              ) : (
                <>
                  Waitlist join karo
                  <ArrowRight className="size-5 transition group-hover:translate-x-1" strokeWidth={2.25} />
                </>
              )}
            </button>
            <p className="px-2 text-xs text-body-dark">No spam. Launch par sirf ek email.</p>
          </motion.form>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-start gap-4"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-lime text-ink-2">
              <Check className="size-6" strokeWidth={3} />
            </span>
            <h3 className="font-display text-2xl font-extrabold leading-tight text-paper">Shukriya! Aap list par hain.</h3>
            <p className="text-body-dark">Launch hote hi hum aap ko email karenge.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

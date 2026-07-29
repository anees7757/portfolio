"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SITE_BG_READY_EVENT } from "@/components/background/SiteBackground";

const ease = [0.76, 0, 0.24, 1] as const;

type Phase = "show" | "exit" | "hidden";

/** Minimum time on screen, so the animation always plays rather than blinking. */
const MIN_VISIBLE_MS = 1900;
/** Hard cap, so a WebGL failure can never trap the page behind the overlay. */
const MAX_VISIBLE_MS = 3000;
/** Matches the panel slide duration below. */
const EXIT_MS = 1100;

export default function Intro() {
  // Starts visible so it is present in the server HTML and covers the very first
  // paint. It used to start "hidden" and return null, which let the hero paint
  // first and then get slammed over by the overlay a frame later.
  const [phase, setPhase] = useState<Phase>("show");

  useEffect(() => {
    let seen = false;
    try {
      seen = !!sessionStorage.getItem("intro-seen");
    } catch {
      // private mode / storage disabled — just play the intro
    }
    // Repeat visits within the session: the pre-paint script in layout.tsx has
    // already hidden this via CSS, so dropping it now is invisible.
    if (seen) {
      setPhase("hidden");
      return;
    }

    let settled = false;
    let exitTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;
    const start = performance.now();

    const beginExit = () => {
      setPhase("exit");
      try {
        sessionStorage.setItem("intro-seen", "1");
      } catch {
        /* ignore */
      }
      hideTimer = setTimeout(() => setPhase("hidden"), EXIT_MS);
    };

    // Uncover only once the background has a frame up, but never before the
    // animation has had its minimum run.
    const settle = () => {
      if (settled) return;
      settled = true;
      window.removeEventListener(SITE_BG_READY_EVENT, settle);
      clearTimeout(capTimer);
      const remaining = Math.max(0, MIN_VISIBLE_MS - (performance.now() - start));
      exitTimer = setTimeout(beginExit, remaining);
    };

    const capTimer = setTimeout(settle, MAX_VISIBLE_MS);

    if (window.__siteBgReady) {
      settle();
    } else {
      window.addEventListener(SITE_BG_READY_EVENT, settle);
    }

    return () => {
      settled = true;
      window.removeEventListener(SITE_BG_READY_EVENT, settle);
      clearTimeout(capTimer);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div className="site-intro fixed inset-0 z-[100] overflow-hidden pointer-events-auto">
      {/* Left panel */}
      <motion.div
        animate={phase === "exit" ? { x: "-100%" } : { x: "0%" }}
        transition={{ duration: 1, ease }}
        className="absolute left-0 top-0 w-1/2 h-full bg-background"
      />
      {/* Right panel */}
      <motion.div
        animate={phase === "exit" ? { x: "100%" } : { x: "0%" }}
        transition={{ duration: 1, ease }}
        className="absolute right-0 top-0 w-1/2 h-full bg-background"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={
          phase === "exit" ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }
        }
        transition={
          phase === "exit"
            ? { duration: 0.35, ease: "easeIn" }
            : { duration: 0.55, delay: 0.35, ease: "easeOut" }
        }
        className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 pointer-events-none"
      >
        {/* Name */}
        <div className="flex items-end gap-2">
          <span className="text-white font-bold text-4xl sm:text-5xl tracking-tight leading-none">
            Muhammad Anees
          </span>
          <span
            className="w-2 h-2 rounded-full mb-1 flex-shrink-0"
            style={{ backgroundColor: "hsl(138 32% 60%)" }}
          />
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={phase === "exit" ? { scaleX: 0 } : { scaleX: 1 }}
          transition={{
            duration: 0.4,
            delay: phase === "exit" ? 0 : 0.65,
            ease: "easeOut",
          }}
          className="w-32 h-px bg-white/30 origin-center"
        />

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.4, delay: phase === "exit" ? 0 : 0.75 }}
          className="text-white/50 text-xs tracking-[0.35em] uppercase"
        >
          Flutter Developer
        </motion.p>
      </motion.div>
    </div>
  );
}

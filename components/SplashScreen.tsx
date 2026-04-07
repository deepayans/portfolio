"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Animate progress bar from 0 → 100 over ~1.4s
    let start: number | null = null;
    const duration = 1400;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        // Give framer-motion time to play exit
        setTimeout(() => {
          setVisible(false);
          setTimeout(onDone, 600);
        }, 150);
      }
    };

    requestAnimationFrame(tick);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#020817]"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-10"
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: "0 0 60px 10px rgba(0,229,196,0.25)",
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[rgba(0,229,196,0.3)] bg-[rgba(0,229,196,0.06)] backdrop-blur-sm">
              {/* DS letters */}
              <svg width="56" height="40" viewBox="0 0 56 40" fill="none">
                <motion.path
                  d="M2 2h10c8 0 14 4 14 16s-6 16-14 16H2V2z"
                  stroke="#00e5c4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
                />
                <motion.path
                  d="M32 10c0-4 3-8 10-8s10 3 10 7c0 5-6 7-10 9s-10 4-10 9c0 4 3 7 10 7s10-3 10-7"
                  stroke="#00e5c4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Name fade */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-8 font-mono text-xs tracking-[0.35em] text-[rgba(0,229,196,0.7)] uppercase"
          >
            Deepayan Sarkar
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-px bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#00e5c4] to-[#7c3aed]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

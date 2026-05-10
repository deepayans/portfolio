"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 600ms display → 150ms pause → 550ms exit animation
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 550);
    }, 600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#020817]"
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8"
          >
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(0,229,196,0.3)] bg-[rgba(0,229,196,0.06)]">
              <svg width="48" height="34" viewBox="0 0 56 40" fill="none">
                <path d="M2 2h10c8 0 14 4 14 16s-6 16-14 16H2V2z"
                  stroke="#00e5c4" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M32 10c0-4 3-8 10-8s10 3 10 7c0 5-6 7-10 9s-10 4-10 9c0 4 3 7 10 7s10-3 10-7"
                  stroke="#00e5c4" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-6 font-mono text-xs tracking-[0.35em] text-[rgba(0,229,196,0.7)] uppercase"
          >
            Deepayan Sarkar
          </motion.p>

          {/* Progress bar — pure CSS, no JS RAF */}
          <div className="w-40 h-px bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00e5c4] to-[#7c3aed]"
              style={{ animation: "progressFill 600ms linear forwards" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

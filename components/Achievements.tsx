"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { resume } from "@/data/resume";
import { cn } from "@/lib/utils";

const GROUP_COLORS: Record<string, string> = {
  scale: "from-[#00e5c4] to-[#06b6d4]",
  impact: "from-[#7c3aed] to-[#a855f7]",
  reliability: "from-[#f59e0b] to-[#fbbf24]",
  leadership: "from-[#ec4899] to-[#f472b6]",
  ml: "from-[#00e5c4] to-[#7c3aed]",
};

const GROUP_LABELS: Record<string, string> = {
  scale: "Scale",
  impact: "Impact",
  reliability: "Reliability",
  leadership: "Leadership",
  ml: "ML Performance",
};

function CounterCard({ item, i }: { item: (typeof resume.achievements)[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const numRef = useRef<HTMLSpanElement>(null);

  const match = item.metric.replace(/[<>+%]/g, "").match(/[\d.]+/);
  const num = match ? parseFloat(match[0]) : null;
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (inView && num !== null) {
      animate(motionVal, num, {
        duration: 1.6,
        ease: "easeOut",
        onUpdate: (v) => {
          if (numRef.current) {
            const disp =
              num < 10 && item.metric.includes(".")
                ? v.toFixed(2)
                : Math.round(v).toString();
            numRef.current.textContent = item.metric.replace(/[\d.]+/, disp);
          }
        },
      });
    }
  }, [inView, num, motionVal, item.metric]);

  const gradient = GROUP_COLORS[item.group] ?? GROUP_COLORS.impact;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden border border-white/[0.07] bg-[rgba(10,22,40,0.7)] p-5 backdrop-blur-sm transition-all hover:border-white/[0.14] hover:shadow-glass"
    >
      {/* Spotlight glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className={cn("absolute inset-0 opacity-[0.05] bg-gradient-to-br", gradient)} />
      </div>

      {/* Top accent line */}
      <div className={cn("absolute top-0 left-0 right-0 h-px bg-gradient-to-r", gradient, "opacity-40")} />

      <div className="relative">
        <div className={cn("mb-1 bg-gradient-to-r bg-clip-text text-4xl font-black text-transparent tracking-tight", gradient)}>
          {num !== null ? <span ref={numRef}>{item.metric}</span> : item.metric}
        </div>
        <p className="text-sm font-medium text-white/70">{item.label}</p>
        <p className="mt-1 font-mono text-[11px] text-white/30">{item.context}</p>

        {/* Group badge */}
        <span className={cn("mt-3 inline-block font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 bg-gradient-to-r bg-clip-text text-transparent", gradient)}>
          {GROUP_LABELS[item.group] ?? item.group}
        </span>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#00e5c4] uppercase">
          <span className="h-px w-8 bg-[#00e5c4]" />
          Achievements & Metrics
        </p>
        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Results That Speak.
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {resume.achievements.map((a, i) => (
          <CounterCard key={a.label} item={a} i={i} />
        ))}
      </div>
    </section>
  );
}

"use client";

import type { ElementType } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Database, Zap, Clock } from "lucide-react";
import { resume } from "@/data/resume";

const icons: Record<string, ElementType> = {
  database: Database,
  zap: Zap,
  clock: Clock,
};

function AnimatedMetric({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionVal = useMotionValue(0);

  const match = value.match(/[\d.]+/);
  const num = match ? parseFloat(match[0]) : null;
  const prefix = value.replace(/[\d.]+.*/, "");
  const suffix = num !== null ? value.replace(prefix, "").replace(String(num), "") : "";

  useEffect(() => {
    if (inView && num !== null) {
      animate(motionVal, num, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) {
            const disp = num < 10 ? v.toFixed(2) : Math.round(v).toString();
            ref.current.textContent = prefix + disp + suffix;
          }
        },
      });
    }
  }, [inView, num, motionVal, prefix, suffix]);

  if (num === null) return <span>{value}</span>;
  return <span ref={ref}>{value}</span>;
}

export default function TopImpact() {
  return (
    <section className="relative border-y border-white/[0.06] bg-[rgba(0,229,196,0.03)] py-10">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[rgba(0,229,196,0.4)] to-transparent" />

      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="mb-6 text-center font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">
          Top 3 Impact Highlights
        </p>

        <div className="grid grid-cols-1 gap-px bg-white/[0.05] sm:grid-cols-3">
          {resume.topImpact.map((item, i) => {
            const Icon = icons[item.icon] ?? Zap;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col items-center gap-3 bg-[rgba(2,8,23,0.8)] p-8 text-center transition-all hover:bg-[rgba(0,229,196,0.04)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,229,196,0.2)] text-[#00e5c4] transition-all group-hover:border-[rgba(0,229,196,0.5)] group-hover:shadow-[0_0_20px_rgba(0,229,196,0.15)]">
                  <Icon size={18} />
                </div>
                <div className="font-display text-4xl font-black tracking-tight text-[#00e5c4]">
                  <AnimatedMetric value={item.metric} />
                </div>
                <p className="font-mono text-xs tracking-wider text-white/50 uppercase">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[rgba(0,229,196,0.2)] to-transparent" />
    </section>
  );
}

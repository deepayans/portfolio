"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { resume } from "@/data/resume";
import { cn } from "@/lib/utils";

const COLOR_MAP: Record<string, { border: string; glow: string; text: string; bg: string; badge: string; gradFrom: string; gradTo: string }> = {
  cyan: {
    border: "rgba(0,229,196,0.4)",
    glow: "rgba(0,229,196,0.12)",
    text: "#00e5c4",
    bg: "rgba(0,229,196,0.04)",
    badge: "border-[rgba(0,229,196,0.3)] text-[#00e5c4] bg-[rgba(0,229,196,0.07)]",
    gradFrom: "#00e5c4",
    gradTo: "#0891b2",
  },
  violet: {
    border: "rgba(124,58,237,0.45)",
    glow: "rgba(124,58,237,0.12)",
    text: "#a78bfa",
    bg: "rgba(124,58,237,0.04)",
    badge: "border-[rgba(124,58,237,0.35)] text-[#a78bfa] bg-[rgba(124,58,237,0.07)]",
    gradFrom: "#7c3aed",
    gradTo: "#a78bfa",
  },
  amber: {
    border: "rgba(245,158,11,0.45)",
    glow: "rgba(245,158,11,0.1)",
    text: "#fbbf24",
    bg: "rgba(245,158,11,0.04)",
    badge: "border-[rgba(245,158,11,0.35)] text-[#fbbf24] bg-[rgba(245,158,11,0.07)]",
    gradFrom: "#f59e0b",
    gradTo: "#fbbf24",
  },
  pink: {
    border: "rgba(236,72,153,0.45)",
    glow: "rgba(236,72,153,0.1)",
    text: "#f472b6",
    bg: "rgba(236,72,153,0.04)",
    badge: "border-[rgba(236,72,153,0.3)] text-[#f472b6] bg-[rgba(236,72,153,0.06)]",
    gradFrom: "#ec4899",
    gradTo: "#f472b6",
  },
  green: {
    border: "rgba(34,197,94,0.4)",
    glow: "rgba(34,197,94,0.12)",
    text: "#4ade80",
    bg: "rgba(34,197,94,0.04)",
    badge: "border-[rgba(34,197,94,0.3)] text-[#4ade80] bg-[rgba(34,197,94,0.07)]",
    gradFrom: "#16a34a",
    gradTo: "#4ade80",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#00e5c4] uppercase">
          <span className="h-px w-8 bg-[#00e5c4]" />
          Projects
        </p>
        <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
          Selected
          <br />
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#00e5c4] bg-clip-text text-transparent">
            Work.
          </span>
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 md:items-stretch">
        {resume.projects.map((proj, i) => {
          const c = COLOR_MAP[proj.color] ?? COLOR_MAP.cyan;
          return (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden border bg-[rgba(10,22,40,0.7)] p-7 backdrop-blur-sm transition-all duration-500 h-full"
              style={{
                borderColor: c.border,
                boxShadow: `0 0 0 0 ${c.glow}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${c.glow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${c.glow}`;
              }}
            >
              {/* Top gradient bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${c.gradFrom}, ${c.gradTo})` }}
              />

              {/* Gradient corner */}
              <div
                className="pointer-events-none absolute top-0 right-0 h-32 w-32 opacity-20 transition-opacity group-hover:opacity-40"
                style={{
                  background: `radial-gradient(circle at top right, ${c.text}, transparent 70%)`,
                }}
              />

              {/* Number indicator */}
              <div
                className="absolute top-6 right-7 font-mono text-[11px] opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ color: c.text }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Type badge */}
              <div className="mb-4 flex items-center gap-2">
                <span className={cn("font-mono text-[11px] tracking-widest uppercase px-2.5 py-1 border rounded-none", c.badge)}>
                  {proj.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-1 text-xl font-bold leading-snug text-white transition-colors group-hover:text-white">
                {proj.title}
              </h3>
              <p className="mb-5 font-mono text-xs text-white/35">{proj.context}</p>

              {/* Bullets — dots only, no numbers */}
              <ul className="mb-6 flex-1 space-y-3 list-none p-0 m-0">
                {proj.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-3 text-sm leading-relaxed text-white/55">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: c.text, boxShadow: `0 0 6px ${c.text}` }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Metrics */}
              {proj.metrics.length > 0 && (
                <div className="mb-5 flex flex-wrap rounded-none border border-white/5 bg-white/[0.02] divide-x divide-white/5">
                  {proj.metrics.map((m) => (
                    <div key={m.label} className="flex flex-1 basis-1/2 sm:basis-auto flex-col items-center justify-center py-3 px-2 text-center min-w-[60px]">
                      <div className="text-xl font-black leading-tight" style={{ color: c.text }}>
                        {m.value}
                      </div>
                      <div className="mt-0.5 font-mono text-[9px] text-white/35 uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5">
                {proj.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-none border border-white/10 px-2 py-0.5 font-mono text-[11px] text-white/35 transition-colors hover:border-white/20 hover:text-white/55"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Link */}
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-mono text-xs tracking-wider transition-all hover:gap-3"
                  style={{ color: c.text }}
                >
                  {proj.link.includes("github.com") ? "View on GitHub" : "View Dashboard"}
                  <ArrowUpRight size={14} />
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

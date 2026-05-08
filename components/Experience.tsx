"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Calendar, Briefcase } from "lucide-react";
import { resume } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function Experience() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#00e5c4] uppercase">
          <span className="h-px w-8 bg-[#00e5c4]" />
           Experience
        </p>
        <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
          Where I've Built
          <br />
          <span className="bg-gradient-to-r from-[#00e5c4] to-[#7c3aed] bg-clip-text text-transparent">
            Things.
          </span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative space-y-4">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.06] md:left-8" />

        {resume.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-6 z-10 flex h-4 w-4 -translate-x-1/2 md:left-8">
              <span className="absolute h-full w-full rounded-full bg-[#00e5c4] opacity-20 animate-ping" />
              <span className="relative h-4 w-4 rounded-full border-2 border-[#00e5c4] bg-[#020817]" />
            </div>

            {/* Card */}
            <div
              className={cn(
                "ml-6 overflow-hidden border transition-all duration-500 md:ml-16",
                open === i
                  ? "border-[rgba(0,229,196,0.25)] bg-[rgba(0,229,196,0.04)] shadow-[0_0_40px_rgba(0,229,196,0.06)]"
                  : "border-white/[0.07] bg-[rgba(10,22,40,0.6)] hover:border-white/[0.12]"
              )}
            >
              {/* Card header */}
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-start gap-3 p-4 sm:p-6 text-left"
              >
                {/* Company icon */}
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-none border border-[rgba(0,229,196,0.2)] bg-[rgba(0,229,196,0.06)] text-[#00e5c4]">
                  <Briefcase size={18} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-xl font-bold text-white leading-snug">{exp.role}</h3>
                      <p className="mt-0.5 font-mono text-sm text-[#00e5c4]">{exp.company}</p>
                    </div>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "shrink-0 text-white/30 transition-transform duration-300 mt-0.5",
                        open === i && "rotate-180 text-[#00e5c4]"
                      )}
                    />
                  </div>

                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    <span className="flex items-center gap-1.5 font-mono text-xs text-white/40">
                      <Calendar size={11} /> {exp.dates}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-white/40">
                      <MapPin size={11} /> {exp.location}
                    </span>
                  </div>
                </div>
              </button>

              {/* Metric chips preview */}
              <div className="flex flex-wrap gap-2 px-4 sm:px-6 pb-4">
                {exp.metrics.map((m) => (
                  <span
                    key={m.label}
                    className="inline-flex items-center gap-1.5 rounded-none border border-[rgba(0,229,196,0.2)] bg-[rgba(0,229,196,0.07)] px-3 py-1 font-mono text-xs text-[#00e5c4]"
                  >
                    <span className="font-bold">{m.value}</span>
                    <span className="text-white/40">{m.label}</span>
                  </span>
                ))}
              </div>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/[0.06] p-4 sm:p-6 pt-5">
                      {/* Bullets */}
                      <ul className="space-y-4">
                        {exp.bullets.map((b, bi) => (
                          <motion.li
                            key={bi}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: bi * 0.07, duration: 0.4 }}
                            className="flex gap-3 text-sm leading-relaxed text-white/60"
                          >
                            <span className="mt-0.5 h-4 w-4 shrink-0 flex items-center justify-center rounded-full border border-[rgba(0,229,196,0.3)] text-[#00e5c4] text-[10px] font-bold">
                              {bi + 1}
                            </span>
                            {b}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.05] pt-5">
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-none border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/40 hover:border-white/20 hover:text-white/60 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Impact panel */}
                      <div className="mt-5 rounded-none border border-[rgba(0,229,196,0.12)] bg-[rgba(0,229,196,0.04)] p-4">
                        <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[#00e5c4]/70 uppercase">
                          Impact Highlights
                        </p>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                          {exp.metrics.map((m) => (
                            <div key={m.label} className="text-center">
                              <div className="text-2xl font-black text-[#00e5c4]">{m.value}</div>
                              <div className="font-mono text-[10px] text-white/40">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

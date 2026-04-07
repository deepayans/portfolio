"use client";

import { motion } from "framer-motion";
import { Code, BarChart2, Cloud, Target } from "lucide-react";
import { resume } from "@/data/resume";

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  "bar-chart": BarChart2,
  cloud: Cloud,
  target: Target,
};

const GROUP_ACCENTS = ["#00e5c4", "#7c3aed", "#f59e0b", "#ec4899"];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#00e5c4] uppercase">
          <span className="h-px w-8 bg-[#00e5c4]" />
          Skills
        </p>
        <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
          Technical
          <br />
          <span className="bg-gradient-to-r from-[#f59e0b] to-[#00e5c4] bg-clip-text text-transparent">
            Arsenal.
          </span>
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {resume.skills.map((group, gi) => {
          const Icon = iconMap[group.icon] ?? Code;
          const accent = GROUP_ACCENTS[gi % GROUP_ACCENTS.length];
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: gi * 0.1 }}
              className="group relative overflow-hidden border border-white/[0.07] bg-[rgba(10,22,40,0.7)] p-7 backdrop-blur-sm transition-all hover:border-white/[0.12]"
            >
              {/* Accent top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-50 transition-opacity group-hover:opacity-100"
                style={{ background: accent }}
              />

              {/* Header */}
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-none border"
                  style={{ borderColor: `${accent}40`, color: accent, background: `${accent}0d` }}
                >
                  <Icon size={16} />
                </div>
                <h3 className="text-base font-bold text-white">{group.category}</h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.05 + si * 0.03 }}
                    className="cursor-default rounded-none border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/50 transition-all hover:text-white/80"
                    style={{
                      ["--hover-border" as string]: `${accent}60`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${accent}50`;
                      (e.currentTarget as HTMLElement).style.color = accent;
                      (e.currentTarget as HTMLElement).style.background = `${accent}0d`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "";
                      (e.currentTarget as HTMLElement).style.color = "";
                      (e.currentTarget as HTMLElement).style.background = "";
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

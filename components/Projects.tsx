"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { resume } from "@/data/resume";
import { cn } from "@/lib/utils";
import RevealText from "@/components/RevealText";

const COLOR_MAP: Record<string, {
  border: string; glow: string; text: string; bg: string;
  badge: string; gradFrom: string; gradTo: string;
}> = {
  cyan:   { border: "rgba(0,229,196,0.25)",  glow: "rgba(0,229,196,0.12)",  text: "#00e5c4", bg: "rgba(0,229,196,0.04)",  badge: "border-[rgba(0,229,196,0.3)] text-[#00e5c4] bg-[rgba(0,229,196,0.07)]",   gradFrom: "#00e5c4", gradTo: "#0891b2" },
  violet: { border: "rgba(124,58,237,0.3)",  glow: "rgba(124,58,237,0.12)", text: "#a78bfa", bg: "rgba(124,58,237,0.04)", badge: "border-[rgba(124,58,237,0.35)] text-[#a78bfa] bg-[rgba(124,58,237,0.07)]", gradFrom: "#7c3aed", gradTo: "#a78bfa" },
  amber:  { border: "rgba(245,158,11,0.3)",  glow: "rgba(245,158,11,0.1)",  text: "#fbbf24", bg: "rgba(245,158,11,0.04)", badge: "border-[rgba(245,158,11,0.35)] text-[#fbbf24] bg-[rgba(245,158,11,0.07)]", gradFrom: "#f59e0b", gradTo: "#fbbf24" },
  pink:   { border: "rgba(236,72,153,0.3)",  glow: "rgba(236,72,153,0.1)",  text: "#f472b6", bg: "rgba(236,72,153,0.04)", badge: "border-[rgba(236,72,153,0.3)] text-[#f472b6] bg-[rgba(236,72,153,0.06)]",  gradFrom: "#ec4899", gradTo: "#f472b6" },
  green:  { border: "rgba(34,197,94,0.25)",  glow: "rgba(34,197,94,0.12)",  text: "#4ade80", bg: "rgba(34,197,94,0.04)",  badge: "border-[rgba(34,197,94,0.3)] text-[#4ade80] bg-[rgba(34,197,94,0.07)]",   gradFrom: "#16a34a", gradTo: "#4ade80" },
};

function ProjectCard({ proj, i, cardClass }: {
  proj: typeof resume.projects[0];
  i: number;
  cardClass?: string;
}) {
  const c = COLOR_MAP[proj.color] ?? COLOR_MAP.cyan;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn("group relative flex flex-col overflow-hidden border bg-[rgba(10,22,40,0.75)] p-7 backdrop-blur-sm transition-shadow duration-500 shrink-0", cardClass)}
      style={{ borderColor: c.border }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 64px ${c.glow}`; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, ${c.gradFrom}, ${c.gradTo})` }} />
      <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 opacity-15 group-hover:opacity-35 transition-opacity"
        style={{ background: `radial-gradient(circle at top right, ${c.text}, transparent 70%)` }} />
      <div className="absolute top-6 right-7 font-mono text-[11px] opacity-20 group-hover:opacity-50 transition-opacity" style={{ color: c.text }}>
        {String(i + 1).padStart(2, "0")}
      </div>
      <div className="mb-4">
        <span className={cn("font-mono text-[11px] tracking-widest uppercase px-2.5 py-1 border rounded-none", c.badge)}>{proj.type}</span>
      </div>
      <h3 className="mb-1 text-xl font-bold leading-snug text-white">{proj.title}</h3>
      <p className="mb-5 font-mono text-xs text-white/35">{proj.context}</p>
      <ul className="mb-6 flex-1 space-y-3 list-none p-0 m-0">
        {proj.bullets.map((b, bi) => (
          <li key={bi} className="flex gap-3 text-sm leading-relaxed text-white/55">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: c.text, boxShadow: `0 0 6px ${c.text}` }} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {proj.metrics.length > 0 && (
        <div className="mb-5 flex rounded-none border border-white/5 bg-white/[0.02] divide-x divide-white/5">
          {proj.metrics.map((m) => (
            <div key={m.label} className="flex flex-1 flex-col items-center justify-center py-3 px-2 text-center">
              <div className="text-xl font-black leading-tight" style={{ color: c.text }}>{m.value}</div>
              <div className="mt-0.5 font-mono text-[9px] text-white/35 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-1.5">
        {proj.stack.map((s) => (
          <span key={s} className="rounded-none border border-white/10 px-2 py-0.5 font-mono text-[11px] text-white/35 hover:border-white/20 hover:text-white/55 transition-colors">{s}</span>
        ))}
      </div>
      {proj.link && (
        <a href={proj.link} target="_blank" rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 font-mono text-xs tracking-wider hover:gap-3 transition-all"
          style={{ color: c.text }}>
          {proj.link.includes("github.com") ? "View on GitHub" : "View Dashboard"}
          <ArrowUpRight size={14} />
        </a>
      )}
    </motion.div>
  );
}

/* ─── Desktop horizontal filmstrip ────────────────────────────────────────── */

function DesktopFilmstrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const trackW = trackRef.current.scrollWidth;
      setOverflow(Math.max(0, trackW - window.innerWidth + 80));
    };
    const t = setTimeout(measure, 120);
    window.addEventListener("resize", measure, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener("resize", measure); };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -overflow]);
  const x = useSpring(rawX, { stiffness: 90, damping: 22, mass: 0.6 });
  const progressW = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="projects" ref={sectionRef}
      style={{ height: overflow > 0 ? `calc(${overflow}px + 100vh)` : "auto" }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

        {/* ── Header ── */}
        <div className="flex-shrink-0 pt-24 pb-6 px-16 flex items-end justify-between">
          <div>
            <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#00e5c4] uppercase">
              <span className="h-px w-8 bg-[#00e5c4]" />
              Projects
            </p>
            <h2 className="text-5xl font-black tracking-tight text-white xl:text-6xl">
              <RevealText>Selected</RevealText>
              <br />
              <RevealText delay={0.18} className="bg-gradient-to-r from-[#7c3aed] to-[#00e5c4] bg-clip-text text-transparent">Work.</RevealText>
            </h2>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="mb-1 font-mono text-[11px] text-white/30 tracking-widest flex items-center gap-2">
            Scroll to explore
            <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
              <path d="M0 5h24M20 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.p>
        </div>

        {/* ── Cards track ── */}
        <div className="flex-1 overflow-hidden flex items-center min-h-0">
          <motion.div ref={trackRef} style={{ x }} className="flex gap-7 pl-16 will-change-transform">
            {resume.projects.map((proj, i) => (
              <ProjectCard key={proj.id} proj={proj} i={i} cardClass="w-[430px] xl:w-[470px] h-full" />
            ))}
            <div className="w-16 shrink-0" />
          </motion.div>
        </div>

        {/* ── Progress bar ── */}
        <div className="flex-shrink-0 px-16 pt-3 pb-7">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-white/25 tracking-wider">01</span>
            <div className="relative flex-1 h-px bg-white/10 overflow-hidden">
              <motion.div style={{ width: progressW }} className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#00e5c4] to-[#7c3aed]" />
            </div>
            <span className="font-mono text-[10px] text-white/25 tracking-wider">0{resume.projects.length}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Mobile / tablet grid ─────────────────────────────────────────────────── */

function MobileGrid() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#00e5c4] uppercase">
          <span className="h-px w-8 bg-[#00e5c4]" />
          Projects
        </p>
        <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
          <RevealText>Selected</RevealText>
          <br />
          <RevealText delay={0.18} className="bg-gradient-to-r from-[#7c3aed] to-[#00e5c4] bg-clip-text text-transparent">Work.</RevealText>
        </h2>
      </motion.div>
      <div className="grid gap-5 sm:grid-cols-2">
        {resume.projects.map((proj, i) => (
          <ProjectCard key={proj.id} proj={proj} i={i} cardClass="w-full" />
        ))}
      </div>
    </section>
  );
}

/* ─── Root export ───────────────────────────────────────────────────────────── */

export default function Projects() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    setReady(true);
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!ready) {
    return (
      <section id="projects" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
        <div className="mb-16">
          <p className="mb-3 font-mono text-xs tracking-[0.25em] text-[#00e5c4] uppercase">Projects</p>
          <h2 className="text-5xl font-black text-white md:text-6xl">Selected Work.</h2>
        </div>
      </section>
    );
  }

  return isDesktop ? <DesktopFilmstrip /> : <MobileGrid />;
}

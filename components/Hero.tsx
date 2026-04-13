"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, BarChart2, Mail } from "lucide-react";
import { resume } from "@/data/resume";
import Image from "next/image";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const scrollToExp = () =>
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });

const handleDownload = () => {
  window.open(
    "https://drive.google.com/uc?export=download&id=13GzyJi0YHa3JXNdEQcCSWNWTSUsEV2w2",
    "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 pb-32 text-center md:px-10"
    >
      {/* Animated grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,196,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,196,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, #00e5c4 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)", filter: "blur(80px)" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl"
      >
        {/* Profile photo */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="relative">
            {/* Rotating border */}
            <div
              className="absolute -inset-1 rounded-full opacity-75"
              style={{
                background: "conic-gradient(from 0deg, #00e5c4, #7c3aed, #00e5c4)",
                animation: "spin 6s linear infinite",
              }}
            />
            <div className="relative h-28 w-28 rounded-full overflow-hidden border-2 border-[#020817] bg-[#0f2442]">
              <Image
                src="/profile.jpg"
                alt="Deepayan Sarkar, Data Scientist"
                fill
                className="object-cover"
                priority
                sizes="112px"
              />
            </div>
            {/* Available dot */}
            <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-[#020817] bg-[#00e5c4] shadow-[0_0_8px_#00e5c4]" />
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div variants={item} className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#00e5c4] shadow-[0_0_8px_#00e5c4]" />
          <span className="font-mono text-xs tracking-[0.25em] text-[#00e5c4] uppercase">
            Available {resume.basics.availability} · {resume.basics.workAuth}
          </span>
          <span className="h-px w-10 bg-[#00e5c4] shadow-[0_0_8px_#00e5c4]" />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="mb-4 font-display text-[clamp(52px,10vw,110px)] font-black leading-none tracking-tight"
          style={{ fontFamily: "var(--font-display, sans-serif)" }}
        >
          <span className="text-white">Deepayan</span>
          <br />
          <span
            className="bg-gradient-to-r from-[#00e5c4] via-[#7c3aed] to-[#00e5c4] bg-clip-text text-transparent"
            style={{ backgroundSize: "200%" }}
          >
            Sarkar.
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={item}
          className="mb-8 font-mono text-sm tracking-[0.2em] text-white/40 uppercase"
        >
          Data Scientist & Analytics Professional
        </motion.p>

        {/* Summary */}
        <motion.p
          variants={item}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/60"
        >
          {resume.basics.shortSummary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <button
            onClick={scrollToExp}
            className="group flex items-center gap-3 rounded-none border border-[rgba(0,229,196,0.4)] bg-[rgba(0,229,196,0.08)] px-8 py-4 font-mono text-sm tracking-[0.12em] text-[#00e5c4] uppercase transition-all hover:bg-[rgba(0,229,196,0.15)] hover:shadow-[0_0_30px_rgba(0,229,196,0.2)]"
          >
            View Experience
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-3 rounded-none border border-white/10 bg-white/[0.04] px-8 py-4 font-mono text-sm tracking-[0.12em] text-white/60 uppercase transition-all hover:bg-white/[0.08] hover:text-white/90 hover:border-white/20"
          >
            Download Resume
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1v9M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-5">
          {[
            { href: resume.basics.links.github, Icon: Github, label: "GitHub" },
            { href: resume.basics.links.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: resume.basics.links.tableau, Icon: BarChart2, label: "Tableau" },
            { href: `mailto:${resume.basics.email}`, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-[rgba(0,229,196,0.4)] hover:text-[#00e5c4] hover:shadow-[0_0_16px_rgba(0,229,196,0.15)]"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-[#00e5c4] shadow-[0_0_6px_#00e5c4]" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const recommendations = [
  {
    name: "Tianyuan ZHANG",
    role: "Assistant Professor",
    company: "KEDGE Business School",
    relation: "Thesis Supervisor · March 2026",
    photo: "/tianyuan-zhang.png",
    avatarColor: "#0ea5e9",
    text: "I've had the pleasure of supervising Deepayan for his MSc thesis in Data Analytics for Business at KEDGE Business School. While his research is still in progress, he has already proven himself to be a highly capable and analytical problem-solver. What stands out to me during our supervision sessions is his ability to take high-level guidance and translate it into rigorous research, confidently navigating challenges like label scarcity through solid statistical validation. Deepayan is a dedicated researcher who takes feedback well and continuously refines his methodologies. Any data science team would greatly benefit from his technical skills and analytical mindset.",
  },
  {
    name: "Taqabul Nisha",
    role: "Digital Analytics Strategist · Martech Specialist",
    company: "Accenture",
    relation: "Direct Manager · May 2025",
    photo: "/taqabul-nisha.png",
    avatarColor: "#f472b6",
    text: "I had the pleasure of working with Deepayan for a year on a client project. Although he joined the team a bit later, he quickly adapted to the role and took ownership of key deliverables easily. Deepayan is a smart and driven individual who consistently explores innovative approaches to problem solving and brings his own unique perspective to the team. He is a quick learner, always eager to pick up new technologies. I highly recommend Deepayan and look forward to seeing the great things he will achieve in the future.",
  },
];

export default function Recommendations() {
  return (
    <section id="recommendations" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#00e5c4] uppercase">
          <span className="h-px w-8 bg-[#00e5c4]" />
          Recommendations
        </p>
        <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
          What They
          <br />
          <span className="bg-gradient-to-r from-[#a78bfa] to-[#00e5c4] bg-clip-text text-transparent">
            Say.
          </span>
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {recommendations.map((rec, i) => (
          <motion.div
            key={rec.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col overflow-hidden border border-white/[0.07] bg-[rgba(10,22,40,0.7)] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.14] hover:-translate-y-1"
            style={{
              boxShadow: "0 0 0 0 transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,229,196,0.07)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 transparent`;
            }}
          >
            {/* Top gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(90deg, ${rec.avatarColor}, transparent)` }}
            />

            {/* Quote icon */}
            <div className="mb-6">
              <Quote
                size={28}
                className="opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ color: rec.avatarColor }}
              />
            </div>

            {/* Quote text */}
            <p className="mb-8 flex-1 text-[15px] leading-relaxed text-white/60 group-hover:text-white/70 transition-colors">
              {rec.text}
            </p>

            {/* Divider */}
            <div className="mb-6 h-px bg-white/[0.06]" />

            {/* Author */}
            <div className="flex items-center gap-4">
              {/* Avatar photo */}
              <div
                className="h-12 w-12 shrink-0 overflow-hidden rounded-full"
                style={{ border: `2px solid ${rec.avatarColor}50` }}
              >
                <img
                  src={rec.photo}
                  alt={rec.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-bold text-white/90 leading-tight">{rec.name}</p>
                <p className="font-mono text-[11px] text-white/40 leading-snug mt-0.5">
                  {rec.role}
                </p>
                <p className="font-mono text-[11px] leading-snug" style={{ color: rec.avatarColor }}>
                  {rec.company}
                </p>
              </div>

              <div className="shrink-0">
                <span className="font-mono text-[10px] tracking-wider text-white/25 border border-white/[0.08] px-2.5 py-1 whitespace-nowrap">
                  {rec.relation}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LinkedIn CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex justify-center"
      >
        <a
          href="https://linkedin.com/in/deepayansarkar"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 border border-[rgba(14,165,233,0.25)] bg-[rgba(14,165,233,0.06)] px-6 py-3 font-mono text-xs tracking-[0.15em] text-[#38bdf8] uppercase transition-all hover:bg-[rgba(14,165,233,0.12)] hover:shadow-[0_0_30px_rgba(14,165,233,0.12)]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          View LinkedIn Profile
        </a>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, BarChart2, ExternalLink } from "lucide-react";
import { resume } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#00e5c4] uppercase">
          <span className="h-px w-8 bg-[#00e5c4]" />
          Contact
        </p>
        <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
          Let's Build
          <br />
          <span className="bg-gradient-to-r from-[#00e5c4] to-[#7c3aed] bg-clip-text text-transparent">
            Something.
          </span>
        </h2>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left — text + availability */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-8 max-w-md text-lg leading-relaxed text-white/55">
            I'm actively looking for Data Science internship opportunities from{" "}
            <span className="text-[#00e5c4]">May 2026</span>. Whether you have a role, a
            project, or just want to talk data — I'd love to hear from you.
          </p>

          {/* Availability card */}
          <div className="mb-8 border border-[rgba(0,229,196,0.2)] bg-[rgba(0,229,196,0.04)] p-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00e5c4] opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00e5c4]" />
              </span>
              <span className="font-mono text-sm text-[#00e5c4] tracking-wider">
                Available from {resume.basics.availability}
              </span>
            </div>
            <p className="mb-4 text-sm text-white/50">
              Based in {resume.basics.location} with {resume.basics.workAuth}. Open to
              internship roles in data science, machine learning, and analytics — in France or
              internationally.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Data Science Intern", "ML Engineering", "Analytics", "NLP Research"].map((t) => (
                <span
                  key={t}
                  className="border border-[rgba(0,229,196,0.2)] bg-[rgba(0,229,196,0.06)] px-3 py-1 font-mono text-[11px] text-[#00e5c4] tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Direct links */}
          <div className="space-y-0">
            {[
              { href: `mailto:${resume.basics.email}`, Icon: Mail, label: "Email", val: resume.basics.email },
              { href: `tel:${resume.basics.phone}`, Icon: Phone, label: "Phone", val: resume.basics.phone },
              { href: "#", Icon: MapPin, label: "Location", val: resume.basics.location },
            ].map(({ href, Icon, label, val }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 border-b border-white/[0.06] py-4 transition-all hover:pl-2 last:border-none"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 text-white/40 transition-all group-hover:border-[rgba(0,229,196,0.3)] group-hover:text-[#00e5c4]">
                  <Icon size={15} />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-white/30 uppercase">{label}</p>
                  <p className="text-sm text-white/65 transition-colors group-hover:text-white/90">{val}</p>
                </div>
                {href !== "#" && (
                  <ExternalLink size={12} className="ml-auto text-white/20 transition-all group-hover:text-[#00e5c4]" />
                )}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — social + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          {[
            {
              href: resume.basics.links.linkedin,
              Icon: Linkedin,
              label: "LinkedIn",
              sub: "linkedin.com/in/deepayansarkar",
              accent: "#0ea5e9",
            },
            {
              href: resume.basics.links.github,
              Icon: Github,
              label: "GitHub",
              sub: "github.com/deepayans",
              accent: "#a78bfa",
            },
            {
              href: resume.basics.links.tableau,
              Icon: BarChart2,
              label: "Tableau Public",
              sub: "deepayan.sarkar8273",
              accent: "#f59e0b",
            },
          ].map(({ href, Icon, label, sub, accent }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 border border-white/[0.07] bg-[rgba(10,22,40,0.7)] p-5 transition-all hover:border-white/[0.14] hover:-translate-y-1"
              style={{ ["--accent" as string]: accent }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center border transition-all group-hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                style={{
                  borderColor: `${accent}30`,
                  color: accent,
                  background: `${accent}0d`,
                }}
              >
                <Icon size={20} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-white/80 transition-colors group-hover:text-white">{label}</p>
                <p className="font-mono text-xs text-white/35">{sub}</p>
              </div>
              <ExternalLink
                size={14}
                className="text-white/20 transition-all group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ))}

          {/* Big CTA */}
          <a
            href={`mailto:${resume.basics.email}`}
            className="group mt-2 flex items-center justify-center gap-3 border border-[rgba(0,229,196,0.35)] bg-[rgba(0,229,196,0.07)] py-5 font-mono text-sm tracking-[0.15em] text-[#00e5c4] uppercase transition-all hover:bg-[rgba(0,229,196,0.13)] hover:shadow-[0_0_40px_rgba(0,229,196,0.15)]"
          >
            Get in Touch
            <Mail size={16} className="transition-transform group-hover:scale-110" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

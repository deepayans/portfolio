"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, BarChart2, ExternalLink, Send } from "lucide-react";
import { resume } from "@/data/resume";

const inputClass =
  "w-full border border-white/[0.08] bg-[rgba(10,22,40,0.6)] px-4 py-3 text-sm text-white/80 placeholder-white/25 outline-none transition-all focus:border-[rgba(0,229,196,0.4)] focus:bg-[rgba(0,229,196,0.04)] focus:shadow-[0_0_0_1px_rgba(0,229,196,0.15)]";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/deepayans77@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio contact from ${form.name}`,
          _captcha: "false",
        }),
      });
      const data = await res.json();
      setStatus(data.success === "true" || res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

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
        {/* Left — availability + direct links */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-8 max-w-md text-lg leading-relaxed text-white/55">
            I'm actively looking for end-of-studies internships and CDI opportunities across the EU. Whether you have a role, a project, or just want to talk data — I'd love to hear from you.
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
              Based in {resume.basics.location} with {resume.basics.workAuth}. Open to end-of-studies internship and CDI roles in data science, machine learning, and analytics across the EU.
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

          {/* Direct contact links */}
          <div className="space-y-0">
            {[
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

          {/* Social links */}
          <div className="mt-8 flex flex-col gap-3">
            {[
              { href: resume.basics.links.linkedin, Icon: Linkedin, label: "LinkedIn", sub: "linkedin.com/in/deepayansarkar", accent: "#0ea5e9" },
              { href: resume.basics.links.github, Icon: Github, label: "GitHub", sub: "github.com/deepayans", accent: "#a78bfa" },
              { href: resume.basics.links.tableau, Icon: BarChart2, label: "Tableau Public", sub: "deepayan.sarkar8273", accent: "#f59e0b" },
            ].map(({ href, Icon, label, sub, accent }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-white/[0.07] bg-[rgba(10,22,40,0.7)] p-4 transition-all hover:border-white/[0.14] hover:-translate-y-0.5"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center border"
                  style={{ borderColor: `${accent}30`, color: accent, background: `${accent}0d` }}
                >
                  <Icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{label}</p>
                  <p className="font-mono text-[11px] text-white/35 truncate">{sub}</p>
                </div>
                <ExternalLink size={13} className="text-white/20 transition-all group-hover:text-white/60" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — contact form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="border border-white/[0.07] bg-[rgba(10,22,40,0.6)] p-8">
            <p className="mb-6 font-mono text-xs tracking-[0.2em] text-[#00e5c4] uppercase">
              Send a message
            </p>

            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(0,229,196,0.3)] bg-[rgba(0,229,196,0.08)]">
                  <Send size={22} className="text-[#00e5c4]" />
                </div>
                <p className="text-lg font-bold text-white">Message sent!</p>
                <p className="text-sm text-white/50">I'll get back to you soon.</p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-2 font-mono text-xs text-[#00e5c4] tracking-widest uppercase hover:opacity-70 transition-opacity"
                >
                  Send another
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] tracking-widest text-white/30 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] tracking-widest text-white/30 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] tracking-widest text-white/30 uppercase">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about the role or project..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-400">
                    Something went wrong. Email me directly at{" "}
                    <a href={`mailto:${resume.basics.email}`} className="underline">
                      {resume.basics.email}
                    </a>
                    .
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === "sending" || !form.name || !form.email || !form.message}
                  className="group mt-2 flex items-center justify-center gap-3 border border-[rgba(0,229,196,0.35)] bg-[rgba(0,229,196,0.07)] py-4 font-mono text-sm tracking-[0.15em] text-[#00e5c4] uppercase transition-all hover:bg-[rgba(0,229,196,0.13)] hover:shadow-[0_0_40px_rgba(0,229,196,0.12)] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <Send size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <p className="text-center font-mono text-[10px] text-white/20 tracking-wider">
                  Or email directly:{" "}
                  <a href={`mailto:${resume.basics.email}`} className="text-white/35 hover:text-[#00e5c4] transition-colors">
                    {resume.basics.email}
                  </a>
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

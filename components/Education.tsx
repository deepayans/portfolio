"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { resume } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#00e5c4] uppercase">
          <span className="h-px w-8 bg-[#00e5c4]" />
          Education
        </p>
        <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
          Academic
          <br />
          <span className="bg-gradient-to-r from-[#00e5c4] to-[#ec4899] bg-clip-text text-transparent">
            Foundation.
          </span>
        </h2>
      </motion.div>

      {/* Degrees */}
      <div className="mb-10 grid gap-5 md:grid-cols-2">
        {resume.education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className="relative overflow-hidden border border-white/[0.07] bg-[rgba(10,22,40,0.7)] p-7 backdrop-blur-sm transition-all hover:border-[rgba(0,229,196,0.2)]"
          >
            {edu.current && (
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00e5c4] to-[#7c3aed] opacity-60" />
            )}

            <div className="mb-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none border border-[rgba(0,229,196,0.2)] bg-[rgba(0,229,196,0.06)] text-[#00e5c4]">
                <GraduationCap size={18} />
              </div>
              {edu.current && (
                <span className="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-[#00e5c4] border border-[rgba(0,229,196,0.3)] bg-[rgba(0,229,196,0.07)] px-2 py-0.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00e5c4] animate-pulse" />
                  Current
                </span>
              )}
            </div>

            <h3 className="mb-1 text-lg font-bold leading-snug text-white">{edu.degree}</h3>
            <p className="mb-1 font-mono text-sm font-medium text-[#00e5c4]">{edu.school}</p>
            <p className="mb-3 font-mono text-xs text-white/30">{edu.level}</p>

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span className="flex items-center gap-1.5 font-mono text-xs text-white/40">
                <Calendar size={11} /> {edu.period}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-white/40">
                <MapPin size={11} /> {edu.location}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.2 }}
      >
        <p className="mb-5 flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-white/40 uppercase">
          <Award size={12} /> Certifications
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {resume.certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-4 border border-white/[0.07] bg-[rgba(10,22,40,0.6)] p-5 transition-all hover:border-[rgba(0,229,196,0.2)] hover:bg-[rgba(0,229,196,0.03)]"
            >
              <span className="text-2xl shrink-0">{cert.icon}</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white/80 leading-snug">{cert.name}</p>
                <p className="font-mono text-xs text-white/35 mt-0.5">{cert.issuer}</p>
                {cert.year && (
                  <p className="font-mono text-[10px] text-[#00e5c4]/50 mt-1">{cert.year}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { resume } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[rgba(2,8,23,0.9)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row md:px-10">
        <p className="font-mono text-xs tracking-widest text-white/25">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#00e5c4]">{resume.basics.name}</span> — Built with precision.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-xs tracking-widest text-white/25 uppercase hover:text-[#00e5c4] transition-colors"
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}

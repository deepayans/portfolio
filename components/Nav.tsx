"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docH > 0 ? (window.scrollY / docH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Nav */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[rgba(2,8,23,0.85)] backdrop-blur-xl border-b border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="font-mono text-base font-bold tracking-widest text-[#00e5c4] hover:opacity-80 transition-opacity"
          >
            DS.
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative font-mono text-xs tracking-[0.1em] uppercase transition-colors duration-200",
                  active === item.id ? "text-[#00e5c4]" : "text-white/50 hover:text-white/80"
                )}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#00e5c4]"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">


            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
              className="hidden md:inline-flex items-center gap-2 rounded-none border border-[rgba(0,229,196,0.35)] bg-[rgba(0,229,196,0.07)] px-4 py-2 font-mono text-xs tracking-widest text-[#00e5c4] uppercase hover:bg-[rgba(0,229,196,0.14)] transition-all"
            >
              Hire Me
            </a>

            {/* Mobile burger */}
            <button
              className="md:hidden h-9 w-9 flex items-center justify-center text-white/70"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="h-px w-full bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00e5c4] to-[#7c3aed]"
            style={{ width: `${scrollPct}%` }}
          />
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-[rgba(2,8,23,0.97)] backdrop-blur-2xl border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col py-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "px-8 py-4 text-left font-mono text-sm tracking-widest uppercase border-b border-white/5 last:border-none transition-colors",
                    active === item.id ? "text-[#00e5c4]" : "text-white/60"
                  )}
                >
                  {item.label}
                </button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[rgba(2,8,23,0.92)] backdrop-blur-xl border-t border-white/10">
        <div className="flex items-center justify-around py-2">
          {NAV_ITEMS.slice(1, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 min-h-[44px] font-mono text-[10px] tracking-wider uppercase transition-colors",
                active === item.id ? "text-[#00e5c4]" : "text-white/40"
              )}
            >
              <div className={cn("h-0.5 w-4 rounded-full transition-colors", active === item.id ? "bg-[#00e5c4]" : "bg-transparent")} />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

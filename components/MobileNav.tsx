"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CV_URL = "https://drive.google.com/uc?export=download&id=13GzyJi0YHa3JXNdEQcCSWNWTSUsEV2w2";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/deepayansarkar/', external: true },
  ];

  const overlay = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[99999] bg-[#FAFAFA] flex flex-col px-8 pt-6 pb-8"
        >
          <div className="flex justify-between items-center mb-16">
            <div className="font-medium text-sm uppercase tracking-wide text-[#111]">
              Deepayan Sarkar
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-500 bg-transparent border-none cursor-pointer"
              aria-label="Close Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : '_self'}
                rel={link.external ? 'noreferrer' : ''}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.08, duration: 0.3 }}
                className="text-[30px] font-serif tracking-tight text-[#111] no-underline"
              >
                {link.name} {link.external && '↗'}
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-auto border-t border-gray-200 pt-8"
          >
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-gray-500 no-underline"
            >
              <span>Download Resum&eacute;</span>
              <span>&#8595;</span>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 -mr-2 text-gray-800 hover:text-black focus:outline-none"
        aria-label="Open Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </svg>
      </button>
      {mounted && createPortal(overlay, document.body)}
    </div>
  );
};

"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const cvLinkStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: '#6b7280', textDecoration: 'none' };
const overlayStyle = { position: 'fixed' as const, top: 0, left: 0, right: 0, bottom: 0, zIndex: 99999, backgroundColor: '#FAFAFA', display: 'flex', flexDirection: 'column' as const, padding: '24px 32px 32px' };
const linkStyle = { fontSize: '30px', fontFamily: 'Georgia, serif', letterSpacing: '-0.02em', color: '#111', textDecoration: 'none' };

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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} style={overlayStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '64px' }}>
            <div style={{ fontWeight: 500, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#111' }}>Deepayan Sarkar</div>
            <button onClick={() => setIsOpen(false)} style={{ padding: '8px', color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer' }} aria-label="Close Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {navLinks.map((link, i) => (
              <motion.a key={link.name} href={link.href} target={link.external ? '_blank' : '_self'} rel={link.external ? 'noreferrer' : ''} onClick={() => setIsOpen(false)} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + (i * 0.08), duration: 0.3 }} style={linkStyle}>
                {link.name} {link.external && '↗'}
              </motion.a>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ marginTop: 'auto', borderTop: '1px solid #e5e7eb', paddingTop: '32px' }}>
            <a href="/Deepayan_Sarkar_General_CV.pdf" target="_blank" rel="noreferrer" style={cvLinkStyle}>
              <span>Download Resum&eacute;</span><span>&#8595;</span>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="md:hidden flex items-center">
      <button onClick={() => setIsOpen(true)} className="p-2 -mr-2 text-gray-800 hover:text-black focus:outline-none" aria-label="Open Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="8" x2="20" y2="8"></line>
          <line x1="4" y1="16" x2="20" y2="16"></line>
        </svg>
      </button>
      {mounted && createPortal(overlay, document.body)}
    </div>
  );
};

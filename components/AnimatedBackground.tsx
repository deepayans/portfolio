"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number; opacity: number;
}
interface Blob {
  x: number; y: number;
  vx: number; vy: number;
  radius: number; color: string;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let lastTime = 0;
    const TARGET_FPS = 20;           // ← throttled from 60 to 20fps
    const INTERVAL = 1000 / TARGET_FPS;
    let W = 0, H = 0;

    const isMobile = () => window.innerWidth < 768;
    const PARTICLE_COUNT = () => (isMobile() ? 12 : 22);  // ← reduced from 55
    const LINE_DISTANCE = isMobile() ? 90 : 120;
    const BLOB_COUNT = 3;            // ← reduced from 5

    const blobColors = ["rgba(0,229,196,", "rgba(124,58,237,", "rgba(0,229,196,"];

    let particles: Particle[] = [];
    let blobs: Blob[] = [];

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }

    function init() {
      blobs = Array.from({ length: BLOB_COUNT }, (_, i) => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: isMobile() ? 150 + Math.random() * 80 : 220 + Math.random() * 160,
        color: blobColors[i % blobColors.length],
      }));

      const count = PARTICLE_COUNT();
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 1 + Math.random() * 1.5,
        opacity: 0.2 + Math.random() * 0.4,
      }));
    }

    function draw(ts: number) {
      // Throttle to TARGET_FPS
      if (ts - lastTime < INTERVAL) { animId = requestAnimationFrame(draw); return; }
      lastTime = ts;

      ctx!.clearRect(0, 0, W, H);

      // Background gradient
      const base = ctx!.createLinearGradient(0, 0, W, H);
      base.addColorStop(0, "#020817");
      base.addColorStop(0.5, "#0a1628");
      base.addColorStop(1, "#020817");
      ctx!.fillStyle = base;
      ctx!.fillRect(0, 0, W, H);

      // Blobs
      blobs.forEach((b) => {
        const g = ctx!.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        g.addColorStop(0, b.color + "0.06)");
        g.addColorStop(0.5, b.color + "0.025)");
        g.addColorStop(1, b.color + "0)");
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx!.fill();
        // update
        b.x += b.vx; b.y += b.vy;
        if (b.x < -b.radius) b.x = W + b.radius;
        if (b.x > W + b.radius) b.x = -b.radius;
        if (b.y < -b.radius) b.y = H + b.radius;
        if (b.y > H + b.radius) b.y = -b.radius;
      });

      // Lines between particles (O(n²) but n=22 now → 231 checks vs 1485)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = `rgba(0,229,196,${(1 - dist / LINE_DISTANCE) * 0.12})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      // Particles
      particles.forEach((p) => {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0,229,196,${p.opacity * 0.6})`;
        ctx!.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      });

      animId = requestAnimationFrame(draw);
    }

    // Pause when tab hidden — free CPU when not visible
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animId);
      else animId = requestAnimationFrame(draw);
    };

    const onResize = () => { resize(); init(); };

    resize();
    init();
    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  if (reduced) {
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #020817 0%, #0a1628 50%, #020817 100%)" }} />
    );
  }

  return (
    <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true" />
  );
}

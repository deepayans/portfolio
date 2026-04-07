"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;

    const isMobile = () => window.innerWidth < 768;

    const BLOB_COUNT = 5;
    const PARTICLE_COUNT = () => (isMobile() ? 25 : 55);
    const LINE_DISTANCE = isMobile() ? 100 : 140;

    // Color palette for blobs
    const blobColors = [
      "rgba(0,229,196,",    // cyan
      "rgba(124,58,237,",   // violet
      "rgba(245,158,11,",   // amber
      "rgba(0,229,196,",    // cyan again
      "rgba(59,130,246,",   // blue
    ];

    let particles: Particle[] = [];
    let blobs: Blob[] = [];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function initBlobs() {
      blobs = Array.from({ length: BLOB_COUNT }, (_, i) => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: isMobile()
          ? 150 + Math.random() * 100
          : 250 + Math.random() * 200,
        color: blobColors[i % blobColors.length],
      }));
    }

    function initParticles() {
      const count = PARTICLE_COUNT();
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 1 + Math.random() * 1.5,
        opacity: 0.2 + Math.random() * 0.4,
      }));
    }

    function drawBlobs() {
      blobs.forEach((b) => {
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        grad.addColorStop(0, b.color + "0.055)");
        grad.addColorStop(0.5, b.color + "0.025)");
        grad.addColorStop(1, b.color + "0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawParticles() {
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,196,${p.opacity * 0.6})`;
        ctx.fill();
      });
    }

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            const alpha = (1 - dist / LINE_DISTANCE) * 0.1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,229,196,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function updateBlobs() {
      blobs.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.radius) b.x = W + b.radius;
        if (b.x > W + b.radius) b.x = -b.radius;
        if (b.y < -b.radius) b.y = H + b.radius;
        if (b.y > H + b.radius) b.y = -b.radius;
      });
    }

    function updateParticles() {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Base dark gradient
      const base = ctx.createLinearGradient(0, 0, W, H);
      base.addColorStop(0, "#020817");
      base.addColorStop(0.5, "#0a1628");
      base.addColorStop(1, "#020817");
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, W, H);

      // Subtle dot grid
      ctx.fillStyle = "rgba(255,255,255,0.018)";
      const gridSize = 36;
      for (let x = 0; x < W; x += gridSize) {
        for (let y = 0; y < H; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      drawBlobs();
      drawLines();
      drawParticles();

      updateBlobs();
      updateParticles();

      animId = requestAnimationFrame(draw);
    }

    function init() {
      resize();
      initBlobs();
      initParticles();
      draw();
    }

    const onResize = () => {
      resize();
      initBlobs();
      initParticles();
    };

    if (!reduced) {
      init();
      window.addEventListener("resize", onResize);
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, [reduced]);

  if (reduced) {
    return (
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #020817 0%, #0a1628 50%, #020817 100%)",
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}

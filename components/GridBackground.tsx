"use client";
import { useEffect, useRef } from "react";

const CFG = {
  intensity: 0.79,
  cell: 45,
  speed: 10,
  patch: 9,
  lineWeight: 0.7,
};

function hash(x: number, y: number): number {
  const h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return h - Math.floor(h);
}

function sn(x: number, y: number): number {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix, fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  return (
    hash(ix,     iy    ) * (1 - ux) * (1 - uy) +
    hash(ix + 1, iy    ) *      ux  * (1 - uy) +
    hash(ix,     iy + 1) * (1 - ux) *      uy  +
    hash(ix + 1, iy + 1) *      ux  *      uy
  );
}

function waveAt(c: number, r: number, t: number): number {
  const sc = CFG.patch * 0.12;
  const sp = CFG.speed * 0.018;
  const n =
    sn(c * sc - t * sp * 0.8,          r * sc + t * sp * 0.5         ) * 0.55 +
    sn(c * sc * 1.9 + 3.7 - t * sp * 0.5, r * sc * 1.9 + 1.3 + t * sp * 0.3) * 0.30 +
    sn(c * sc * 4.1 + 7.1,             r * sc * 4.1 + 5.9 - t * sp * 0.2 ) * 0.15;
  const v = Math.max(0, (n - 0.45) / 0.55);
  return Math.pow(v, 1.8) * CFG.intensity;
}

export const GridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = (cv.width = window.innerWidth);
    let H = (cv.height = window.innerHeight);
    let rafId: number;

    function draw(ts: number) {
      ctx!.clearRect(0, 0, W, H);
      const t = ts * 0.001;
      const CELL = CFG.cell;
      const cols = Math.ceil(W / CELL) + 1;
      const rows = Math.ceil(H / CELL) + 1;
      ctx!.lineWidth = CFG.lineWeight;

      // Horizontal lines
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c < cols; c++) {
          const a = (waveAt(c, r, t) + waveAt(c + 1, r, t)) * 0.5;
          if (a < 0.004) continue;
          ctx!.strokeStyle = `rgba(100,100,100,${a})`;
          ctx!.beginPath();
          ctx!.moveTo(c * CELL, r * CELL);
          ctx!.lineTo((c + 1) * CELL, r * CELL);
          ctx!.stroke();
        }
      }

      // Vertical lines
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const a = (waveAt(c, r, t) + waveAt(c, r + 1, t)) * 0.5;
          if (a < 0.004) continue;
          ctx!.strokeStyle = `rgba(100,100,100,${a})`;
          ctx!.beginPath();
          ctx!.moveTo(c * CELL, r * CELL);
          ctx!.lineTo(c * CELL, (r + 1) * CELL);
          ctx!.stroke();
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    const handleResize = () => {
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

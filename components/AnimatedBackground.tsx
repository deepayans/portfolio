"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function AnimatedBackground() {
  const reduced = useReducedMotion();

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#020817]"
      aria-hidden="true"
    >
      {!reduced && (
        <>
          {/* Top cyan blob */}
          <div
            className="absolute rounded-full"
            style={{
              width: "700px", height: "600px",
              top: "-150px", left: "50%",
              background: "radial-gradient(ellipse, rgba(0,229,196,0.18) 0%, transparent 70%)",
              filter: "blur(80px)",
              willChange: "transform",
              animation: "blobFloat1 20s ease-in-out infinite",
            }}
          />
          {/* Left violet blob */}
          <div
            className="absolute rounded-full"
            style={{
              width: "500px", height: "500px",
              top: "30%", left: "-80px",
              background: "radial-gradient(ellipse, rgba(124,58,237,0.14) 0%, transparent 70%)",
              filter: "blur(80px)",
              willChange: "transform",
              animation: "blobFloat2 24s ease-in-out infinite",
            }}
          />
          {/* Right violet blob */}
          <div
            className="absolute rounded-full"
            style={{
              width: "500px", height: "500px",
              top: "40%", right: "-80px",
              background: "radial-gradient(ellipse, rgba(124,58,237,0.10) 0%, transparent 70%)",
              filter: "blur(80px)",
              willChange: "transform",
              animation: "blobFloat3 28s ease-in-out infinite",
            }}
          />
          {/* Bottom amber accent */}
          <div
            className="absolute rounded-full"
            style={{
              width: "400px", height: "400px",
              bottom: "10%", left: "25%",
              background: "radial-gradient(ellipse, rgba(245,158,11,0.07) 0%, transparent 70%)",
              filter: "blur(80px)",
              willChange: "transform",
              animation: "blobFloat2 32s ease-in-out infinite reverse",
            }}
          />
        </>
      )}
    </div>
  );
}

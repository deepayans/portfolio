"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [hasPointer, setHasPointer] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const dotX = useSpring(mouseX, { stiffness: 1200, damping: 60, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1200, damping: 60, mass: 0.1 });

  const ringX = useSpring(mouseX, { stiffness: 160, damping: 20, mass: 0.7 });
  const ringY = useSpring(mouseY, { stiffness: 160, damping: 20, mass: 0.7 });

  useEffect(() => {
    setMounted(true);
    const fine = window.matchMedia("(pointer: fine)").matches;
    setHasPointer(fine);
    if (!fine) return;

    const onMove = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a, button, [role='button'], input, textarea, select, label");
      setHovering(!!el);
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
    };
  }, [mouseX, mouseY]);

  if (!mounted || !hasPointer) return null;

  return (
    <>
      {/* Lagging ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-[rgba(0,229,196,0.55)]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
        animate={{
          width:  hovering ? 52 : clicking ? 26 : 40,
          height: hovering ? 52 : clicking ? 26 : 40,
          opacity: hovering ? 0.85 : 0.45,
          borderColor: hovering ? "#00e5c4" : "rgba(0,229,196,0.55)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />

      {/* Precise dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#00e5c4]"
        style={{
          x: dotX, y: dotY,
          translateX: "-50%", translateY: "-50%",
          width: 7, height: 7,
          willChange: "transform",
          boxShadow: "0 0 8px rgba(0,229,196,0.8)",
        }}
        animate={{ scale: clicking ? 0.3 : hovering ? 0 : 1, opacity: hovering ? 0 : 1 }}
        transition={{ duration: 0.12 }}
      />
    </>
  );
}

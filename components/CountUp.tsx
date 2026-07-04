"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  value: string;
  className?: string;
};

function parseValue(raw: string): { prefix: string; number: number; suffix: string } {
  const match = raw.match(/^([<]?)(\d+\.?\d*)(.*)/);
  if (!match) return { prefix: "", number: 0, suffix: raw };
  return {
    prefix: match[1] || "",
    number: parseFloat(match[2]),
    suffix: match[3] || "",
  };
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export const CountUp = ({ value, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");
  const { prefix, number, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = easeOut(progress) * number;
      const formatted = Number.isInteger(number)
        ? Math.round(current).toString()
        : current.toFixed(1);
      setDisplay(formatted);
      if (progress < 1) requestAnimationFrame(tick);
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, number]);

  return (
    <div ref={ref} className={className}>
      {prefix}{display}{suffix}
    </div>
  );
};

"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  value: string;        // e.g. "10M+", "35%", "99.9%", "40+ hrs", "30%"
  className?: string;
};

function parseValue(raw: string): { prefix: string; number: number; suffix: string } {
  // Handles: "10M+", "35%", "99.9%", "40+ hrs", "30%", "<1 hr", "97.8%"
  const match = raw.match(/^([<]?)(\d+\.?\d*)(.*)/);
  if (!match) return { prefix: "", number: 0, suffix: raw };
  return {
    prefix: match[1] || "",
    number: parseFloat(match[2]),
    suffix: match[3] || "",
  };
}

export const CountUp = ({ value, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");
  const { prefix, number, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const steps = 60;
    const increment = number / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, number);
      const formatted = Number.isInteger(number)
        ? Math.round(current).toString()
        : current.toFixed(1);
      setDisplay(formatted);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, number]);

  return (
    <div ref={ref} className={className}>
      {prefix}{display}{suffix}
    </div>
  );
};

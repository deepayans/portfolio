"use client";

import { motion } from "framer-motion";
import { ElementType, ReactNode } from "react";

interface RevealTextProps {
  children: string;
  className?: string;
  /** Extra delay before the animation starts (seconds) */
  delay?: number;
  /** Stagger between words (seconds). Default 0.07 */
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export default function RevealText({
  children,
  className,
  delay = 0,
  stagger = 0.07,
  as: Tag = "span",
}: RevealTextProps) {
  const words = children.split(" ");

  return (
    // @ts-ignore — dynamic tag
    <Tag className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
        >
          <motion.span
            initial={{ y: "105%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.72,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {word}
            {/* non-breaking space between words except last */}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

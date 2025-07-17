"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

interface AnimatedHeroTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedHeroTitle({ children, className }: AnimatedHeroTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Show the container after fonts are loaded
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(
        containerRef.current.querySelector("h1")!
      );

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <div
      className={className}
      ref={containerRef}
      style={{ visibility: "hidden" }}
    >
      <h1 className="font-serif text-6xl md:text-8xl tracking-tight font-bold mb-4 text-bone drop-shadow-lg">
        {children}
      </h1>
      <style>{`
        .split-word {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}
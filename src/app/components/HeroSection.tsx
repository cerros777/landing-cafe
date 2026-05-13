"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";

export default function HeroSection() {
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLDivElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!titleRef.current) return;
      titleRef.current.style.opacity = "1";
      const { words } = splitText(titleRef.current);
      animate(words, { opacity: [0, 1], y: [24, 0] }, {
        type: "spring", duration: 2.2, bounce: 0, delay: stagger(0.1),
      });
      setTimeout(() => {
        if (subRef.current) {
          subRef.current.style.opacity = "1";
          subRef.current.style.transform = "translateY(0)";
        }
        if (ctaRef.current) {
          ctaRef.current.style.opacity = "1";
          ctaRef.current.style.transform = "translateY(0)";
        }
      }, 1400);
    });
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/hero.jpg"
          alt="Coffee Beans Background"
          fill
          className="object-cover opacity-35"
          priority
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/90 via-charcoal/60 to-charcoal" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/60" />
      {/* Film grain texture */}
      <div className="absolute inset-0 z-0 bg-grain pointer-events-none" style={{ opacity: 0.08 }} />
      {/* Linen micro-texture */}
      <div className="absolute inset-0 z-0 texture-linen pointer-events-none" />
      {/* Radial vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(15,15,15,0.6) 100%)" }} />

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 max-w-5xl mx-auto pt-24">
        {/* Eyebrow badge */}
        <span className="pill-accent">
          San Salvador · El Salvador
        </span>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-serif text-[clamp(4rem,14vw,10rem)] font-bold text-bone leading-none tracking-tight"
          style={{ opacity: 0 }}
        >
          GRANO <span className="text-bronze">SANTO</span>
        </h1>

        {/* Divider line */}
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-bronze to-transparent opacity-60" />

        {/* Subtitle */}
        <div
          ref={subRef}
          className="transition-all duration-1000 ease-out"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <p className="text-xl md:text-2xl text-bone/70 font-light tracking-wide max-w-2xl leading-relaxed">
            Donde el café se convierte en ritual.
            <br />
            <span className="text-bronze/80">Cada taza, una obra de arte.</span>
          </p>
        </div>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 mt-2 transition-all duration-1000 ease-out"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <a
            href="#menu"
            className="bg-bronze text-charcoal font-semibold px-10 py-4 rounded-full hover:bg-bone transition-all duration-300 text-sm tracking-widest uppercase shadow-xl shadow-bronze/25"
          >
            Ver Menú
          </a>
          <a
            href="#reservas"
            className="border border-bone/30 text-bone px-10 py-4 rounded-full hover:bg-bone/10 hover:border-bronze transition-all duration-300 text-sm tracking-widest uppercase backdrop-blur-sm"
          >
            Reservar Mesa
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bone/35">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="scroll-bounce">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
      `}</style>
    </section>
  );
}

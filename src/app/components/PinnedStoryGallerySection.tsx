"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/menu1.jpg",   alt: "Espresso" },
  { src: "/menu2.jpg",   alt: "Latte art" },
  { src: "/interior.jpg",alt: "Interior" },
  { src: "/menu4.jpg",   alt: "Cocina" },
];

export default function PinnedStoryGallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const opacity0 = useTransform(scrollYProgress, [0, 0.125, 0.25],  [0, 1, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.25, 0.375, 0.5],[0, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.5, 0.625, 0.75],[0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.75, 0.875, 1],  [0, 1, 1]);
  const opacities = [opacity0, opacity1, opacity2, opacity3];

  // Parallax for floating mini image
  const floatY = useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]);

  return (
    <section
      id="historia"
      ref={ref}
      className="relative h-[600vh]"
      style={{ background: "radial-gradient(ellipse at 30% 50%, #1c1410 0%, #0F0F0F 60%)" }}
    >
      {/* Horizontal-line texture on the whole section */}
      <div className="absolute inset-0 bg-horizontal-lines pointer-events-none" />

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Grain layer */}
        <div className="absolute inset-0 bg-grain pointer-events-none" style={{ opacity: 0.06 }} />

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 w-full max-w-7xl mx-auto px-6 relative z-10">

          {/* Text side */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-5 max-w-lg">
            <span className="pill-accent">Nuestra historia</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-bone relative">
              Nuestra <span className="text-terracotta">Esencia</span>
              <span className="block w-16 h-0.5 bg-terracotta mt-3 rounded-full" />
            </h2>
            <p className="text-lg text-ash leading-relaxed">Nacimos del fuego y del grano.</p>
            <p className="text-base text-bone/75 leading-relaxed">
              En Grano Santo, cada taza es una obra de arte. El café es nuestro lenguaje, el espacio nuestro lienzo. Aquí, el tiempo se detiene y el ritual comienza.
            </p>
            <p className="text-base text-bone/75 leading-relaxed">
              Descubre la alquimia entre tradición y vanguardia, donde el lujo se siente en cada detalle y la calidez envuelve cada encuentro.
            </p>
            {/* Stats row */}
            <div className="flex gap-8 pt-4 border-t border-espresso/40 w-full">
              {[["2020", "Fundación"], ["4.9★", "Valoración"], ["18h", "Cold Brew"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="text-bronze font-serif text-2xl font-bold">{val}</p>
                  <p className="text-ash text-xs tracking-widest uppercase mt-0.5">{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image gallery side */}
          <div className="flex-1 flex justify-center items-center relative">
            {/* Main fading image */}
            <div className="relative w-80 h-96 md:w-96 md:h-[480px]">
              {images.map((img, i) => (
                <motion.div
                  key={img.src}
                  style={{ opacity: opacities[i], position: "absolute", inset: 0, pointerEvents: "none" }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-bronze/30">
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                    {/* Image caption */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-bone/70 text-xs tracking-widest uppercase">{img.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Floating parallax small image — bleeds outside the main image */}
              <motion.div
                style={{ y: floatY }}
                className="img-float-card img-tilt-cw -right-12 -bottom-8 w-28 h-36 hidden md:block"
              >
                <Image src="/barista.jpg" alt="Barista" fill className="object-cover" />
              </motion.div>

              {/* Decorative ring */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-bronze/20 pointer-events-none" />
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full border border-bronze/15 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
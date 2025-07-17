"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/menu1.jpg", alt: "Gallery 1" },
  { src: "/menu2.jpg", alt: "Gallery 2" },
  { src: "/menu3.jpg", alt: "Gallery 3" },
  { src: "/menu4.jpg", alt: "Gallery 4" },
];

export default function PinnedStoryGallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // UseTransform must be called at the top level, not in a loop
  const opacity0 = useTransform(scrollYProgress, [0/4, 0.125, 0.25], [0, 1, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.25, 0.375, 0.5], [0, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.5, 0.625, 0.75], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.75, 0.875, 1], [0, 1, 1]);
  const opacities = [opacity0, opacity1, opacity2, opacity3];

  // Static text content
  const title = <>
    Nuestra <span className="text-bronze">Esencia</span>
  </>;
  const subtitle = "Nacimos del fuego y del grano.";
  const description = "En Tierra Negra, cada taza es una obra de arte. El café es nuestro lenguaje, el espacio nuestro lienzo. Aquí, el tiempo se detiene y el ritual comienza.";
  const details = "Descubre la alquimia entre tradición y vanguardia, donde el lujo se siente en cada detalle y la calidez envuelve cada encuentro.";

  return (
    <section ref={ref} className="relative h-[600vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 w-full max-w-6xl mx-auto">
          {/* Text content (static) */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-6">
            <h2 className="font-sans text-4xl md:text-5xl font-bold mb-2 text-bone relative">
              {title}
              <span className="block w-16 h-1 bg-bronze mt-2 rounded-full" />
            </h2>
            <p className="text-xl text-ash mb-2">{subtitle}</p>
            <p className="text-lg text-bone/80 max-w-md mb-2">{description}</p>
            <p className="text-lg text-bone/80 max-w-md mb-2">{details}</p>
          </div>
          {/* Image gallery (fading) */}
          <div className="flex-1 flex justify-center items-center relative w-96 h-96">
            {images.map((img, i) => (
              <motion.div
                key={img.src}
                style={{
                  opacity: opacities[i],
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-96 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-bronze bg-espresso/60 flex items-center justify-center backdrop-blur-md">
                  <Image src={img.src} alt={img.alt} width={500} height={500} className="object-cover w-full h-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
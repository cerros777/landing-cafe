"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedStorySection from "./AnimatedStorySection";
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

  // Divide scroll progress into equal segments for each image
  const n = images.length;
  const opacities = images.map((_, i) => {
    const start = i / n;
    const mid = (i + 0.5) / n;
    // For the last image, keep opacity 1 from its midpoint to the end
    if (i === n - 1) {
      return useTransform(scrollYProgress, [start, mid, 1], [0, 1, 1]);
    }
    const end = (i + 1) / n;
    return useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]);
  });

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
"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AmbienteSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
      }),
      { threshold: 0.04 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="ambiente" ref={ref} className="py-32 overflow-hidden relative">
      {/* Dot-grid texture on this section */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      {/* Diagonal-line layer */}
      <div className="absolute inset-0 bg-diagonal-lines pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="pill-accent mx-auto">Vive la experiencia</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-bone mb-4">
            Nuestro <span className="text-terracotta">Ambiente</span>
          </h2>
          <p className="text-ash text-lg max-w-xl mx-auto">
            Un espacio diseñado para que el tiempo se detenga y los sentidos despierten.
          </p>
        </div>

        {/* ── Editorial Grid ── */}
        <div className="relative">

          {/* Decorative rotating frame (CSS-only, no image) */}
          <div className="hidden lg:block absolute -top-8 right-6 w-36 h-52 border border-bronze/25 rounded-2xl pointer-events-none rotate-6 z-0" />
          <div className="hidden lg:block absolute bottom-24 -left-4 w-28 h-36 border border-bone/10 rounded-xl pointer-events-none -rotate-3 z-0" />

          {/* Main two-column editorial row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start reveal">

            {/* LEFT — tall hero image bleeding slightly outside */}
            <div className="lg:col-span-7 relative h-[340px] lg:h-[620px] rounded-3xl overflow-hidden group z-10 lg:-ml-4 shadow-2xl shadow-charcoal border border-espresso/30">
              <Image
                src="/interior.jpg" alt="Interior Grano Santo" fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
              {/* Floating info card on top of image */}
              <div className="absolute bottom-6 left-6 glass-card rounded-2xl px-5 py-3.5 backdrop-blur-md border-terracotta/20">
                <p className="text-terracotta text-[10px] tracking-[0.25em] uppercase">Horario</p>
                <p className="text-bone text-sm font-medium mt-0.5">8:00 – 21:00 hrs</p>
              </div>
            </div>

            {/* RIGHT — stacked elements with offsets */}
            <div className="lg:col-span-5 flex flex-col gap-5">

              {/* Top image — shifted right */}
              <div className="relative h-56 lg:h-64 rounded-3xl overflow-hidden group lg:translate-x-4 border border-espresso/30 shadow-xl z-20 reveal reveal-delay-1">
                <Image src="/menu4.jpg" alt="Plato artesanal" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              </div>

              {/* Quote card — shifted left */}
              <div className="glass-card rounded-3xl p-7 lg:-translate-x-4 reveal reveal-delay-2 border border-bronze/15">
                <span className="text-bronze text-4xl font-serif leading-none">&ldquo;</span>
                <p className="font-serif text-xl text-bone leading-relaxed -mt-2">
                  Un lugar donde el tiempo se detiene y los sentidos despiertan.
                </p>
                <span className="text-bronze text-xs tracking-widest mt-3 block uppercase">— Grano Santo Café</span>
              </div>

              {/* Bottom image — shifted right, slight overlap with quote */}
              <div className="relative h-44 rounded-3xl overflow-hidden group lg:translate-x-2 lg:-mt-3 border border-espresso/30 shadow-xl z-20 reveal reveal-delay-3">
                <Image src="/barista.jpg" alt="Nuestro barista" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              </div>
            </div>
          </div>

          {/* ── Bottom row: wide image overlapping the row above ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:-mt-28 relative z-20 mt-5">
            {/* Spacer on left (desktop) — the tall image already fills here */}
            <div className="hidden lg:block" />

            {/* Wide image right — overlaps the tall hero image vertically */}
            <div className="reveal reveal-delay-2 relative h-60 lg:h-72 rounded-3xl overflow-hidden group border border-bone/10 shadow-2xl">
              <Image src="/menu2.jpg" alt="Latte art" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-l from-charcoal/80 via-charcoal/30 to-transparent" />
              <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right max-w-[180px]">
                <p className="font-serif text-xl text-bone leading-snug">&ldquo;Arte en cada taza&rdquo;</p>
                <span className="text-bronze text-xs tracking-widest mt-1 block">latte art</span>
              </div>
            </div>
          </div>

          {/* ── Floating tilted small photo — overlaps the grid ── */}
          <div className="img-float-card img-tilt-cw hidden xl:block bottom-10 left-[55%] -translate-x-1/2 translate-y-8 w-32 h-44">
            <Image src="/brenda-godinez-AAHdL8gp5b8-unsplash.jpg" alt="Croissant" fill className="object-cover" />
          </div>
        </div>

        {/* ── Bottom strip: 3-col mini gallery ── */}
        <div className="grid grid-cols-3 gap-3 mt-8 md:mt-12 reveal reveal-delay-3">
          {["/menu5.jpg", "/menu6.jpg", "/menu3.jpg"].map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl group border border-espresso/30 ${i === 1 ? "translate-y-4" : ""}`}
              style={{ height: "160px" }}
            >
              <Image src={src} alt={`Gallery ${i}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

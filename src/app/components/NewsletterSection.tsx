"use client";
import { useEffect, useRef } from "react";

export default function NewsletterSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
      }),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="newsletter"
      ref={ref}
      className="py-32 px-4 relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 50%, #2a1f16 0%, #0F0F0F 65%)" }}
    >
      {/* Diagonal-lines texture */}
      <div className="absolute inset-0 bg-diagonal-lines pointer-events-none opacity-80" />
      {/* Grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(205,170,125,0.07) 0%, transparent 70%)", filter: "blur(70px)" }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="reveal">
          <span className="pill-accent mx-auto">Únete a la comunidad</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-bone mb-4">
            Sé el primero en<br />
            <span className="text-terracotta">descubrir nuestras mezclas</span>
          </h2>
          <p className="text-ash text-lg mb-10">
            Recibe invitaciones exclusivas, noticias de temporada y sorpresas de Grano Santo directamente en tu correo.
          </p>
        </div>

        <form
          className="reveal reveal-delay-1 flex flex-col sm:flex-row gap-3 items-center"
          onSubmit={e => { e.preventDefault(); }}
        >
          <input
            type="email"
            required
            placeholder="Tu correo electrónico"
            className="cafe-input flex-1 sm:rounded-full"
          />
          <button
            type="submit"
            className="shrink-0 bg-terracotta text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-terracotta transition-all duration-300 text-sm tracking-widest uppercase shadow-lg shadow-terracotta/20 w-full sm:w-auto"
          >
            Unirme
          </button>
        </form>

        <p className="reveal reveal-delay-2 text-ash/50 text-xs mt-5 tracking-wide">
          Sin spam. Solo lo mejor del café. Cancela cuando quieras.
        </p>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  { quote: "El mejor café que he probado en San Salvador. Cada visita es un ritual que espero toda la semana.", author: "Valeria M.", role: "Diseñadora" },
  { quote: "El ambiente es increíble, la música perfecta y el espresso supremo es simplemente magistral.", author: "Carlos R.", role: "Fotógrafo" },
  { quote: "Me quedé trabajando aquí toda la tarde. El cold brew y la tostada de masa madre son un must.", author: "Ana García", role: "Arquitecta" },
  { quote: "Un espacio que cuida cada detalle. El latte art es una obra de arte comestible. Volveré siempre.", author: "Diego T.", role: "Músico" },
  { quote: "La mejor propuesta de café artesanal en El Salvador. Calidad, ambiente y servicio impecables.", author: "Sofía L.", role: "Emprendedora" },
  { quote: "El cappuccino artesanal me cambió la vida. Grano Santo es mi oficina favorita en la ciudad.", author: "Rodrigo H.", role: "Developer" },
];

const doubled = [...testimonials, ...testimonials];

const Stars = () => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#E07548">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

export default function TestimoniosSection() {
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
      id="testimonios"
      ref={ref}
      className="py-32 overflow-hidden relative"
      style={{ background: "radial-gradient(ellipse at 30% 50%, #1a1309 0%, #0F0F0F 60%)" }}
    >
      {/* Dot-grid texture */}
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
      {/* Grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 px-4 reveal relative z-10">
        <span className="pill-accent mx-auto">Lo que dicen nuestros clientes</span>
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-bone mb-4">
          Testi<span className="text-terracotta">monios</span>
        </h2>
        <p className="text-ash text-lg max-w-xl mx-auto">
          Cada visita deja una historia. Estas son algunas de las nuestras.
        </p>
      </div>

      {/* Infinite marquee */}
      <div className="relative reveal reveal-delay-1 z-10">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-[#0F0F0F] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-[#0F0F0F] to-transparent" />

        <div className="overflow-hidden">
          <div className="marquee-track gap-6 px-3">
            {doubled.map((t, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-7 flex flex-col shrink-0 w-[320px] md:w-[380px] hover:border-bronze/35 transition-colors duration-300"
              >
                <Stars />
                <blockquote className="text-bone/80 text-sm leading-relaxed mb-5 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 border-t border-espresso/40 pt-4">
                  <div className="w-9 h-9 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta font-bold text-sm">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-bone text-sm font-semibold">{t.author}</p>
                    <p className="text-ash text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

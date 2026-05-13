"use client";
import { useEffect, useRef } from "react";

export default function VisitSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
      }),
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="visit" ref={ref} className="py-32 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16 reveal">
        <span className="pill-accent mx-auto">Encuéntranos</span>
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-bone mb-4">
          Visí<span className="text-terracotta">tanos</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Map */}
        <div className="reveal rounded-3xl overflow-hidden border border-bronze/25 shadow-2xl shadow-bronze/5 h-96 lg:h-[480px]">
          <iframe
            title="Mapa Grano Santo San Salvador"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-89.2500,13.6700,-89.1900,13.7400&layer=mapnik"
            className="w-full h-full border-0 opacity-90"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="reveal reveal-delay-2 flex flex-col gap-8">
          {[
            {
              icon: "📍",
              label: "Dirección",
              content: "Av. Ficticia 123, Col. Escalón\nSan Salvador, El Salvador",
            },
            {
              icon: "🕐",
              label: "Horarios",
              content: "Lunes – Viernes: 8:00 – 20:00\nSábado – Domingo: 8:00 – 21:00",
            },
            {
              icon: "📱",
              label: "Contacto",
              content: "+503 7000-0000\nhola@granosanto.sv",
            },
          ].map(info => (
            <div key={info.label} className="flex gap-5 items-start group">
              <div className="w-12 h-12 rounded-2xl bg-terracotta/10 border border-terracotta/25 flex items-center justify-center text-xl shrink-0 group-hover:bg-terracotta/20 transition-colors">
                {info.icon}
              </div>
              <div>
                <p className="text-terracotta text-xs tracking-widest uppercase mb-1">{info.label}</p>
                {info.content.split("\n").map(line => (
                  <p key={line} className="text-bone/80 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            </div>
          ))}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/50370000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1ebe5c] transition-all duration-300 shadow-lg shadow-[#25D366]/20 text-sm tracking-wider w-fit"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.851L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.484-5.12-1.333l-.368-.218-3.76.98.999-3.645-.24-.378A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

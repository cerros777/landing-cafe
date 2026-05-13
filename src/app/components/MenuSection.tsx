"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type MenuItem = { name: string; desc: string; detail: string; price: string; img: string; tag?: string };

const tabs = ["Bebidas", "Comida", "Especiales"] as const;
type Tab = typeof tabs[number];

const menu: Record<Tab, MenuItem[]> = {
  Bebidas: [
    { name: "Espresso Supremo",     desc: "Elixir oscuro e intenso. El alma de nuestra barra.",                         detail: "Granos de tueste artesanal, extracción precisa, servido en taza de porcelana.",          price: "$3.50", img: "/menu1.jpg", tag: "Firma" },
    { name: "Latte de la Casa",     desc: "Leche orgánica vaporizada, doble espresso y arte latte.",                    detail: "Inspirado en la tradición italiana, equilibrio perfecto de crema y espresso.",           price: "$4.50", img: "/menu2.jpg" },
    { name: "Cold Brew Dorado",     desc: "Infusión en frío 18 horas, notas de cacao y caramelo.",                     detail: "Servido con hielo y un toque de naranja. Energía dorada para tu día.",                  price: "$4.00", img: "/menu3.jpg" },
    { name: "Cappuccino Artesanal", desc: "Espuma sedosa, espresso doble, equilibrio perfecto.",                        detail: "Leche texturizada a mano, proporción clásica italiana.",                                 price: "$4.00", img: "/menu6.jpg" },
  ],
  Comida: [
    { name: "Tostada de Masa Madre",   desc: "Pan recién horneado, aguacate y semillas tostadas.",                       detail: "Aceite de oliva extra virgen, sal marina, semillas de girasol y cáñamo.",               price: "$5.50", img: "/menu4.jpg", tag: "Popular" },
    { name: "Granola Bowl",            desc: "Granola artesanal, frutas frescas y yogurt griego.",                       detail: "Miel silvestre, arándanos frescos, plátano y mango de temporada.",                     price: "$5.00", img: "/menu5.jpg" },
    { name: "Croissant de Mantequilla",desc: "Masa hojaldrada, mantequilla europea, dorado perfecto.",                   detail: "Receta francesa tradicional, horneado fresco cada mañana.",                             price: "$3.50", img: "/brenda-godinez-AAHdL8gp5b8-unsplash.jpg" },
  ],
  Especiales: [
    { name: "Café de Temporada",    desc: "Mezcla exclusiva según el grano del mes.",                                   detail: "Descubre nuevos orígenes: Etiopía, Colombia, Guatemala. Perfil de sabor variable.",    price: "$5.00", img: "/menu1.jpg", tag: "Exclusivo" },
    { name: "Affogato al Espresso", desc: "Helado artesanal de vainilla ahogado en doble espresso.",                    detail: "Contraste perfecto de temperatura: helado cremoso y espresso ardiente.",               price: "$5.50", img: "/menu3.jpg" },
    { name: "Latte de Lavanda",     desc: "Lavanda orgánica, leche de avena, espresso suave.",                          detail: "Floral, relajante y único. Servido caliente o frío según tu preferencia.",             price: "$5.00", img: "/menu2.jpg", tag: "Nuevo" },
  ],
};

export default function MenuSection() {
  const [active, setActive] = useState<Tab>("Bebidas");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
      }),
      { threshold: 0.06 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const items = menu[active];
  const [featured, ...rest] = items;

  return (
    <section
      id="menu"
      ref={ref}
      className="py-32 px-4 relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 55% 40%, #2a1f18 0%, #0F0F0F 70%)" }}
    >
      {/* Mesh texture */}
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-70" />
      {/* Grain overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Glow blob */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(205,170,125,0.08) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="pill-accent mx-auto">Nuestra Carta</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-bone mb-4">
            El <span className="text-terracotta">Menú</span>
          </h2>
          <p className="text-ash text-lg max-w-xl mx-auto">
            Ingredientes de origen, preparación artesanal, experiencias memorables.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-14 border-b border-espresso/50 reveal reveal-delay-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`menu-tab pb-3 text-sm tracking-widest uppercase font-medium ${active === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Featured card (first item) — full-width hero ── */}
        <div className="reveal reveal-delay-1 mb-8 group relative rounded-3xl overflow-hidden border border-espresso/40 hover:border-bronze/35 transition-all duration-500 shadow-2xl shadow-charcoal/60">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[320px]">
            {/* Image side — bleeds right */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <Image
                src={featured.img} alt={featured.name} fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal/60 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent md:hidden" />
            </div>
            {/* Text side */}
            <div className="p-8 md:p-12 flex flex-col justify-center gap-4 bg-charcoal/80 relative">
              {/* Background diagonal line texture */}
              <div className="absolute inset-0 bg-diagonal-lines opacity-50 pointer-events-none" />
              <div className="relative z-10">
                {featured.tag && (
                  <span className="tag-terra mb-3">
                    {featured.tag}
                  </span>
                )}
                <h3 className="font-serif text-3xl md:text-4xl text-bone font-bold mb-2">{featured.name}</h3>
                <p className="text-ash text-base leading-relaxed mb-2">{featured.desc}</p>
                <p className="text-bone/60 text-sm leading-relaxed">{featured.detail}</p>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-espresso/40">
                  <span className="text-terracotta text-2xl font-semibold">{featured.price}</span>
                  <a
                    href="#reservas"
                    className="text-xs tracking-widest uppercase text-bone/60 hover:text-terracotta transition-colors border border-espresso/50 hover:border-terracotta/40 px-4 py-2 rounded-full"
                  >
                    Reservar →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Remaining cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((item, i) => (
            <div
              key={item.name}
              className="reveal group relative rounded-2xl overflow-hidden border border-espresso/40 hover:border-bronze/40 transition-all duration-500 hover:shadow-2xl hover:shadow-bronze/10 bg-charcoal/60"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {item.tag && (
                <span className="absolute top-4 left-4 z-10 tag-terra">
                  {item.tag}
                </span>
              )}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.img} alt={item.name} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-xl text-bone font-bold">{item.name}</h3>
                  <span className="text-terracotta font-semibold text-base ml-4 shrink-0">{item.price}</span>
                </div>
                <p className="text-ash text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

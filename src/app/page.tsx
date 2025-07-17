import React, { useRef, useEffect } from "react";
import Image from "next/image";
import AnimatedHeroTitle from "./components/AnimatedHeroTitle";
import PinnedStoryGallerySection from "./components/PinnedStoryGallerySection";

const menu = [
  {
    name: "Espresso Supremo",
    desc: "Elixir oscuro, intenso y aromático. El alma de nuestra barra.",
    price: "$60",
    detail: "Granos seleccionados, tueste artesanal, servido en taza de porcelana. Un ritual para los sentidos.",
    img: "/menu1.jpg"
  },
  {
    name: "Latte de la Casa",
    desc: "Suavidad cremosa, arte en cada taza. El abrazo cálido de la mañana.",
    price: "$75",
    detail: "Leche orgánica vaporizada, espresso doble, arte latte. Inspirado en la tradición europea.",
    img: "/menu2.jpg"
  },
  {
    name: "Cold Brew Dorado",
    desc: "Refrescante, con notas de cacao y caramelo. El verano en un vaso.",
    price: "$70",
    detail: "Infusión en frío por 18 horas, servido con hielo y un toque de naranja. Energía dorada para tu día.",
    img: "/menu3.jpg"
  },
  {
    name: "Tostada Artesanal",
    desc: "Pan de masa madre, aguacate, semillas. Sencillez elevada a arte.",
    price: "$85",
    detail: "Pan recién horneado, aguacate, semillas tostadas, aceite de oliva extra virgen. Un clásico reinventado.",
    img: "/menu4.jpg"
  },
];

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Café", href: "#menu" },
  { name: "Historia", href: "#story" },
  { name: "Visítanos", href: "#visit" },
  { name: "Contacto", href: "#newsletter" },
];

export default function Home() {
  

  return (
    <main className="bg-charcoal text-bone font-sans">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-charcoal/80 backdrop-blur-md border-b border-espresso/40 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <Image src="/barista.jpg" alt="grano santo Logo" width={40} height={40} className="rounded-full object-cover border-2 border-bronze" />
            <span className="font-sans text-2xl font-bold tracking-widest text-bone">GRANO <span className="text-bronze">SANTO</span></span>
          </div>
          <ul className="hidden md:flex gap-8 text-bone font-medium text-lg">
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-bronze transition-colors duration-200">{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#newsletter" className="hidden md:inline-block bg-bronze text-charcoal font-semibold rounded-full px-6 py-2 ml-6 hover:bg-espresso hover:text-bone transition-colors shadow-lg text-base">Únete</a>
        </div>
      </nav>
      <div className="h-20 md:h-24" />

      {/* Hero Section */}
      <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
      data-aos="fade-up"
      >
        {/* Background image with opacity */}
        <div className="absolute inset-0 -z-20" style={{ backgroundImage: "url('/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: 0.6 }} />
        {/* Gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-charcoal/95 via-espresso/90 to-charcoal/98" />
        <div className="relative z-10 flex flex-col items-center gap-8 pt-24 pb-32"></div>
        <AnimatedHeroTitle>
          <span className="inline-block px-8 py-3 rounded-2xl bg-charcoal/60 backdrop-blur-md border border-bronze shadow-lg">
            GRANO <span className="text-bronze">SANTO</span>
          </span>
        </AnimatedHeroTitle>
      </section>

      {/* Dramatic Divider */}
      <div className="w-full flex justify-center py-8">
        <div className="w-32 h-1 bg-gradient-to-r from-bronze via-bone to-bronze rounded-full opacity-60" />
      </div>

      {/* Replace Brand Story with Pinned Gallery */}
      <PinnedStoryGallerySection />

      {/* Dramatic Divider */}
      <div className="w-full flex justify-center py-8">
        <div className="w-32 h-1 bg-gradient-to-r from-bronze via-bone to-bronze rounded-full opacity-60" />
      </div>

      {/* Menu Highlights */}
      <section
        id="menu"
        className="py-32 px-4  mx-auto relative overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, #3a2c23 0%, #181716 80%)" // espresso to charcoal
        }}
        data-aos="fade-up"
      >
        {/* Blurred bronze/espresso glow overlay */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vw] rounded-full"
            style={{
              background: "radial-gradient(circle, #b08d57aa 0%, #3a2c23aa 80%, transparent 100%)", // bronze to espresso
              filter: "blur(80px)",
              opacity: 0.6,
            }}
          />
        </div>
        <div className="relative z-10">
          <h2 className="font-sans text-4xl md:text-5xl font-bold mb-10 text-center text-bone relative">
            Destacados del <span className="text-bronze">Menú</span>
            <span className="block mx-auto w-24 h-1 bg-bronze mt-3 rounded-full" />
          </h2>
          <p className="text-lg text-ash text-center mb-16 max-w-2xl mx-auto">Selección exclusiva de bebidas y sabores, creados para transformar tu día en un ritual de placer y sofisticación.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {menu.map((item, i) => (
              <div
                key={item.name}
                className="relative flex flex-col rounded-3xl shadow-2xl border border-espresso/40 bg-bone/90 overflow-hidden group hover:shadow-bronze/40 transition-all duration-300 min-h-[420px] md:min-h-[480px]"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="relative w-full h-64 md:h-80 overflow-hidden">
                  <Image src={item.img} alt={item.name} fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex flex-col flex-1 justify-between p-8 bg-charcoal/90 relative">
                  <h3 className="font-sans text-2xl md:text-3xl font-bold text-bone mb-2 group-hover:blur-sm transition-colors z-10">
                    {item.name}
                  </h3>
                  <span className="font-sans text-bronze text-xl mb-2 z-10 transition-all duration-500 ease-out group-hover:blur-sm">{item.price}</span>
                  {/* Hover overlay for description and detail, appears below name/price */}
                  <div className="absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-end items-center px-8 py-8 pointer-events-none">
                    <div className="transition-all duration-500 ease-out w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto bg-gradient-to-b from-transparent via-bone/60 to-charcoal/80 backdrop-blur-md p-6 rounded-3xl flex flex-col items-center justify-center min-h-[120px] mt-16">
                      <p className="text-espresso text-lg text-center font-semibold mb-2 drop-shadow">{item.desc}</p>
                      <p className="text-ash text-base text-center drop-shadow max-w-md mx-auto">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dramatic Divider */}
      <div className="w-full flex justify-center py-8">
        <div className="w-32 h-1 bg-gradient-to-r from-bronze via-bone to-bronze rounded-full opacity-60" />
      </div>

      {/* Visit Us */}
      <section
        id="visit"
        className="py-32 px-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-24 items-center"
        data-aos="fade-up"
      >
        <div className="flex-1 w-full h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-bronze bg-espresso/60 flex items-center justify-center">
          <iframe
            title="Mapa grano santo San Salvador"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-89.2500,13.6700,-89.1900,13.7400&amp;layer=mapnik"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Mapa grano santo San Salvador"
          ></iframe>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start gap-6">
          <h2 className="font-sans text-3xl font-bold mb-2 text-bone">Visítanos</h2>
          <p className="text-ash mb-1">Av. Ficticia 123, San Salvador, El Salvador</p>
          <p className="text-ash mb-4">Lunes a Domingo: 8:00 – 21:00</p>
          <p className="text-bone/80 mb-4 max-w-xs">Un espacio donde el tiempo se detiene y el café se convierte en encuentro. Vive la experiencia grano santo en el corazón de San Salvador.</p>
          <a
            href="https://wa.me/50370000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-bronze text-charcoal font-semibold rounded-full px-8 py-3 mt-2 hover:bg-espresso hover:text-bone transition-colors shadow-lg text-lg"
          >
            Contáctanos por WhatsApp
          </a>
        </div>
      </section>

      {/* Dramatic Divider */}
      <div className="w-full flex justify-center py-8">
        <div className="w-32 h-1 bg-gradient-to-r from-bronze via-bone to-bronze rounded-full opacity-60" />
      </div>

      {/* Newsletter Signup */}
      <section
        id="newsletter"
        className="py-34 px-4 text-center relative overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, #3a2c23 0%, #181716 80%)" // espresso to charcoal
        }}
        data-aos="fade-up"
      >
        {/* Blurred bronze/espresso glow overlay */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vw] rounded-full"
            style={{
              background: "radial-gradient(circle, #b08d57aa 0%, #3a2c23aa 80%, transparent 100%)", // bronze to espresso
              filter: "blur(80px)",
              opacity: 0.6,
            }}
          />
        </div>
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-sans text-2xl font-bold mb-6 text-bone">Sé el primero en probar nuestras nuevas mezclas.</h2>
          <p className="text-lg text-ash mb-8">Recibe invitaciones exclusivas, noticias y sorpresas de grano santo directamente en tu correo.</p>
          <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-charcoal border border-ash text-bone placeholder-ash focus:outline-none focus:border-bronze transition-colors text-lg shadow-md"
            />
            <button
              type="submit"
              className="bg-bronze text-charcoal font-semibold rounded-full px-10 py-4 hover:bg-espresso hover:text-bone transition-colors shadow-lg text-lg"
            >
              Unirme
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 flex flex-col items-center justify-center mx-auto border-t border-espresso/40 text-ash text-base gap-4 text-center">
        <div className="flex items-center gap-2 mb-4">
          <span>&copy; {new Date().getFullYear()} Grano Santo. Todos los derechos reservados.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-bronze transition-colors" aria-label="Instagram">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><rect x="9" y="9" width="6" height="6" rx="3" stroke="currentColor" strokeWidth="2"/><circle cx="17" cy="7" r="1.5" fill="currentColor"/></svg>
          </a>
          <a href="#" className="hover:text-bronze transition-colors" aria-label="Facebook">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M13 8h2v2h-2v6h-2v-6H9V8h2V7a2 2 0 1 1 4 0v1z" stroke="currentColor" strokeWidth="2"/></svg>
          </a>
          <a href="#" className="hover:text-bronze transition-colors" aria-label="X">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="2"/></svg>
          </a>
        </div>
      </footer>
    </main>
  );
}

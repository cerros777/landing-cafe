"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Historia", href: "#historia" },
  { name: "Menú",    href: "#menu"     },
  { name: "Ambiente",href: "#ambiente" },
  { name: "Reservas",href: "#reservas" },
  { name: "Visítanos",href:"#visit"   },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md border-b border-bronze/20 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-bronze/50 group-hover:border-bronze transition-all duration-300">
              <Image src="/barista.jpg" alt="Grano Santo" fill className="object-cover" />
            </div>
            <span className="font-serif text-xl md:text-2xl tracking-widest text-bone">
              GRANO <span className="text-bronze">SANTO</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <li key={l.name}>
                <a
                  href={l.href}
                  className="text-bone/70 hover:text-bronze transition-colors duration-200 text-sm tracking-wider uppercase font-light"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#reservas"
            className="hidden md:inline-flex items-center gap-2 bg-terracotta text-white text-sm font-semibold tracking-wider px-6 py-2.5 rounded-full hover:bg-white hover:text-terracotta transition-all duration-300 shadow-lg shadow-terracotta/20"
          >
            Reservar Mesa
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden text-bone p-2 rounded-lg hover:bg-bone/10 transition-colors"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-charcoal/98 backdrop-blur-xl border-l border-bronze/20 flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-bronze/20">
            <span className="font-serif text-lg text-bone tracking-widest">GRANO <span className="text-bronze">SANTO</span></span>
            <button onClick={() => setOpen(false)} className="text-ash hover:text-bone p-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-5">
            {navLinks.map(l => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-bone/80 hover:text-bronze transition-colors text-base tracking-wider uppercase font-light py-2 border-b border-espresso/40"
              >
                {l.name}
              </a>
            ))}
          </nav>
          <div className="px-6 mt-auto pb-10">
            <a
              href="#reservas"
              onClick={() => setOpen(false)}
              className="block text-center bg-terracotta text-white font-semibold py-3.5 rounded-full hover:bg-white hover:text-terracotta transition-colors tracking-wider"
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

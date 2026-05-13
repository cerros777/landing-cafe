export default function FooterSection() {
  const links = {
    "Explorar": [
      { name: "Historia",  href: "#historia"  },
      { name: "Menú",      href: "#menu"      },
      { name: "Ambiente",  href: "#ambiente"  },
      { name: "Reservas",  href: "#reservas"  },
      { name: "Visítanos", href: "#visit"     },
    ],
    "Contacto": [
      { name: "+503 7000-0000",       href: "https://wa.me/50370000000" },
      { name: "hola@granosanto.sv",   href: "mailto:hola@granosanto.sv" },
      { name: "Av. Ficticia 123, SS", href: "#visit"                   },
    ],
  };

  const socials = [
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M15 8h-2a1 1 0 00-1 1v2h3l-.5 3H12v7" />
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-espresso/40 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-serif text-2xl tracking-widest text-bone">
              GRANO <span className="text-terracotta">SANTO</span>
            </span>
            <p className="text-ash text-sm leading-relaxed mt-4 max-w-sm">
              Un café artesanal en el corazón de San Salvador donde el tiempo se detiene y cada taza se convierte en ritual.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-espresso/60 flex items-center justify-center text-ash hover:text-terracotta hover:border-terracotta transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-bone text-xs tracking-[0.25em] uppercase mb-5">{category}</h4>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-ash hover:text-terracotta transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-espresso/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-ash/60 text-xs">
          <p>© {new Date().getFullYear()} Grano Santo Café. Todos los derechos reservados.</p>
          <p className="tracking-wide">Artesanal · Premium · San Salvador</p>
        </div>
      </div>
    </footer>
  );
}

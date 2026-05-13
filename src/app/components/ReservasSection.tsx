"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type FormData = {
  nombre: string; email: string; telefono: string;
  fecha: string; hora: string; personas: string; notas: string;
};

const INITIAL: FormData = { nombre: "", email: "", telefono: "", fecha: "", hora: "", personas: "2", notas: "" };
const WHATSAPP_NUMBER = "50370000000";

export default function ReservasSection() {
  const [form, setForm] = useState<FormData>(INITIAL);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `¡Hola Grano Santo! Quisiera hacer una reserva ☕\n\n` +
      `👤 Nombre: ${form.nombre}\n` +
      `📅 Fecha: ${form.fecha}\n` +
      `⏰ Hora: ${form.hora}\n` +
      `👥 Personas: ${form.personas}\n` +
      (form.email ? `📧 Email: ${form.email}\n` : "") +
      `📱 Teléfono: ${form.telefono}\n` +
      (form.notas ? `📝 Notas: ${form.notas}` : "")
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section
      id="reservas"
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 60%, #1e1510 0%, #0F0F0F 65%)" }}
    >
      {/* Horizontal-lines texture */}
      <div className="absolute inset-0 bg-horizontal-lines pointer-events-none" />
      {/* Grain overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Glow blob */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(205,170,125,0.06) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Two-column layout: Form left, Image collage right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

          {/* LEFT — Form */}
          <div className="px-6 lg:px-16">
            <div className="text-left mb-12 reveal">
              <span className="pill-accent">Reserva tu mesa</span>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-bone mb-4">
                Haz tu <span className="text-terracotta">Reserva</span>
              </h2>
              <p className="text-ash text-base max-w-md">
                Asegura tu momento perfecto. Te confirmamos por WhatsApp en menos de 30 min.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 reveal reveal-delay-1">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-bone/50 text-xs tracking-widest uppercase">Nombre *</label>
                  <input required name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" className="cafe-input" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-bone/50 text-xs tracking-widest uppercase">Teléfono *</label>
                  <input required name="telefono" value={form.telefono} onChange={handleChange} placeholder="+503 7000-0000" className="cafe-input" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-bone/50 text-xs tracking-widest uppercase">Fecha *</label>
                  <input required type="date" name="fecha" value={form.fecha} onChange={handleChange}
                    className="cafe-input [color-scheme:dark]" min={new Date().toISOString().split("T")[0]} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-bone/50 text-xs tracking-widest uppercase">Hora *</label>
                  <input required type="time" name="hora" value={form.hora} onChange={handleChange}
                    className="cafe-input [color-scheme:dark]" min="08:00" max="21:00" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-bone/50 text-xs tracking-widest uppercase">Personas *</label>
                  <select required name="personas" value={form.personas} onChange={handleChange} className="cafe-input">
                    {["1","2","3","4","5","6","7","8+"].map(n => (
                      <option key={n} value={n} className="bg-charcoal">{n} {n === "1" ? "persona" : "personas"}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-bone/50 text-xs tracking-widest uppercase">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="correo@email.com" className="cafe-input" />
                </div>
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-bone/50 text-xs tracking-widest uppercase">Notas especiales</label>
                  <textarea name="notas" value={form.notas} onChange={handleChange}
                    placeholder="Alergias, ocasión especial, preferencias..." rows={2} className="cafe-input resize-none" />
                </div>
                <div className="sm:col-span-2 pt-1">
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold py-4 rounded-full hover:bg-[#1ebe5c] transition-all duration-300 shadow-xl shadow-[#25D366]/20 text-sm tracking-widest uppercase"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.851L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.484-5.12-1.333l-.368-.218-3.76.98.999-3.645-.24-.378A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    Reservar por WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT — Image collage overlapping */}
          <div className="hidden lg:block relative h-[700px] reveal reveal-delay-2">
            {/* Big back image */}
            <div className="absolute right-0 top-0 w-[85%] h-[75%] rounded-3xl overflow-hidden border border-espresso/30 shadow-2xl">
              <Image src="/interior.jpg" alt="Interior" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/60" />
            </div>

            {/* Floating front image — tilted, overlapping */}
            <div className="img-float-card img-tilt-ccw bottom-12 left-8 w-52 h-64">
              <Image src="/menu4.jpg" alt="Plato" fill className="object-cover" />
            </div>

            {/* Second floating image — opposite tilt */}
            <div className="img-float-card img-tilt-cw top-[40%] left-[30%] w-40 h-52">
              <Image src="/barista.jpg" alt="Barista" fill className="object-cover" />
            </div>

            {/* Decorative CSS frame */}
            <div className="absolute bottom-4 right-4 w-32 h-40 border border-bronze/20 rounded-2xl pointer-events-none rotate-3" />

            {/* Bronze label tag floating */}
            <div className="absolute top-6 left-6 glass-card rounded-full px-5 py-2.5 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
              <span className="text-bone text-xs tracking-widest uppercase">Reservas abiertas</span>
            </div>
          </div>
        </div>

        {/* Hours row */}
        <div className="flex flex-wrap justify-center gap-10 mt-16 reveal reveal-delay-3 px-6">
          {[
            { icon: "🕐", label: "Lun – Vie", time: "8:00 – 20:00" },
            { icon: "🕐", label: "Sáb – Dom", time: "8:00 – 21:00" },
            { icon: "📍", label: "Dirección", time: "Av. Ficticia 123, SS" },
          ].map(h => (
            <div key={h.label} className="flex items-center gap-3 text-sm text-ash">
              <span className="text-xl">{h.icon}</span>
              <div>
                <p className="text-bone/40 text-[10px] uppercase tracking-widest">{h.label}</p>
                <p className="text-bone text-sm">{h.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

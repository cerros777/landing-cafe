import Navbar               from "./components/Navbar";
import HeroSection           from "./components/HeroSection";
import PinnedStoryGallerySec from "./components/PinnedStoryGallerySection";
import MenuSection           from "./components/MenuSection";
import AmbienteSection       from "./components/AmbienteSection";
import ReservasSection       from "./components/ReservasSection";
import TestimoniosSection    from "./components/TestimoniosSection";
import VisitSection          from "./components/VisitSection";
import NewsletterSection     from "./components/NewsletterSection";
import FooterSection         from "./components/FooterSection";

const Divider = () => (
  <div className="w-full flex justify-center py-2">
    <div className="w-24 h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />
  </div>
);

export default function Home() {
  return (
    <main className="bg-charcoal text-bone font-sans">
      {/* ── Sticky Navigation ── */}
      <Navbar />

      {/* ── Hero ── */}
      <HeroSection />

      <Divider />

      {/* ── Historia / Brand Story (scroll gallery) ── */}
      <section id="historia">
        <PinnedStoryGallerySec />
      </section>

      <Divider />

      {/* ── Full Menu (tabbed) ── */}
      <MenuSection />

      <Divider />

      {/* ── Ambiente / Gallery ── */}
      <AmbienteSection />

      <Divider />

      {/* ── Reservas ── */}
      <ReservasSection />

      <Divider />

      {/* ── Testimonios ── */}
      <TestimoniosSection />

      <Divider />

      {/* ── Visit Us / Map ── */}
      <VisitSection />

      <Divider />

      {/* ── Newsletter ── */}
      <NewsletterSection />

      {/* ── Footer ── */}
      <FooterSection />
    </main>
  );
}

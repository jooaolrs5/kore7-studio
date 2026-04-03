import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CTASection from "@/components/sections/CTASection";
import DiferenciaisSection from "@/components/sections/DiferenciaisSection";
import HeroSection from "@/components/sections/HeroSection";
import HorariosSection from "@/components/sections/HorariosSection";
import LocalizacaoSection from "@/components/sections/LocalizacaoSection";
import ServicosSection from "@/components/sections/ServicosSection";
import SobreSection from "@/components/sections/SobreSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SobreSection />
      <DiferenciaisSection />
      <ServicosSection />
      <HorariosSection />
      <LocalizacaoSection />
      <CTASection />
      <Footer />
    </div>
  );
}

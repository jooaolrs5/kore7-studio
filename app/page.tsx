import HeroSection from "@/components/sections/HeroSection";
import SobreSection from "@/components/sections/SobreSection";
import DiferenciaisSection from "@/components/sections/DiferenciaisSection";
import ServicosSection from "@/components/sections/ServicosSection";
import HorariosSection from "@/components/sections/HorariosSection";
import LocalizacaoSection from "@/components/sections/LocalizacaoSection";
import CTASection from "@/components/sections/CTASection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SobreSection />
      <DiferenciaisSection />
      <ServicosSection />
      <HorariosSection />
      <LocalizacaoSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

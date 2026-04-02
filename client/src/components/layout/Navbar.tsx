import { WHATSAPP_URL } from "@/const";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">KORE7</div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#servicos" className="text-foreground hover:text-accent transition">
            Serviços
          </a>
          <a href="#diferenciais" className="text-foreground hover:text-accent transition">
            Diferenciais
          </a>
          <a href="#localizacao" className="text-foreground hover:text-accent transition">
            Localização
          </a>
          <a
            href={WHATSAPP_URL("Olá KORE7! Gostaria de conhecer mais sobre o studio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:opacity-90 transition"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}

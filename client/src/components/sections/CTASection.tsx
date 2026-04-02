import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/const";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="reveal py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377700058/Fgmy54taSGVi3KPEeesc5H/cta-section-jDuumwjMqjwzn2gD45dDsM.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white mb-4">Pronto para sua transformação?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Conheça nosso método, estrutura e atendimento com uma aula experimental
            sem custo.
          </p>
          <a
            href={WHATSAPP_URL("Olá KORE7! Gostaria de agendar minha aula experimental gratuita.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Agendar Agora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

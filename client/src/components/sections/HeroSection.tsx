import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/const";

export default function HeroSection() {
  return (
    <section className="pt-20 pb-0 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0 items-center">
        {/* Left: Text Content */}
        <div className="px-4 md:px-8 py-12 md:py-20 flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <p className="subtitle text-accent mb-2">Bem-vindo ao KORE7</p>
              <h1 className="text-primary leading-tight">
                Seu Studio de Treinamento Personalizado
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-lg">
              Fugir de academias lotadas e receber atendimento próximo, personalizado
              e de alta qualidade. Isso é o KORE7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={WHATSAPP_URL("Olá KORE7! Gostaria de agendar minha aula experimental gratuita.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto"
                >
                  Aula Experimental Gratuita
                </Button>
              </a>
              <a
                href={WHATSAPP_URL("Olá KORE7! Gostaria de mais informações.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Saiba Mais
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative h-96 md:h-full md:min-h-screen">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377700058/Fgmy54taSGVi3KPEeesc5H/hero-banner-mERQUSGSao8xcCDBnxsvE9.webp"
            alt="Grupo de treinamento no KORE7"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  MapPin,
  Phone,
  Users,
  Zap,
  Shield,
  Clock,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

/**
 * KORE7 Studio - Landing Page
 * Design: Elegância Corporativa com Toque Humano
 * Paleta: Azul-marinho (#1a3a52) + Ouro (#C9A961) + Teal (#2B7A8F)
 * Tipografia: Lora (títulos) + Montserrat (subtítulos) + Source Sans Pro (corpo)
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            KORE7
          </div>
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
              href="https://wa.me/559898578934?text=Olá%20KORE7!%20Gostaria%20de%20conhecer%20mais%20sobre%20o%20studio."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:opacity-90 transition"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
                Fugir de academias lotadas e receber atendimento próximo, personalizado e de alta qualidade. Isso é o KORE7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/559898578934?text=Olá%20KORE7!%20Gostaria%20de%20agendar%20minha%20aula%20experimental%20gratuita."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                    Aula Experimental Gratuita
                  </Button>
                </a>
                <a
                  href="https://wa.me/559898578934?text=Olá%20KORE7!%20Gostaria%20de%20mais%20informações."
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
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="subtitle text-accent mb-2">Por que escolher</p>
            <h2 className="text-primary mb-4">O que nos diferencia</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combinamos metodologia integrada, segurança profissional e atendimento exclusivo para sua transformação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Turmas Reduzidas */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border/50">
              <div className="mb-4">
                <Users className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-primary mb-3">Turmas Reduzidas</h3>
              <p className="text-muted-foreground">
                Grupos pequenos garantem atenção personalizada e acompanhamento próximo de cada aluno em cada sessão.
              </p>
            </Card>

            {/* Card 2: Metodologia Integrada */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border/50">
              <div className="mb-4">
                <Zap className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-primary mb-3">Metodologia Integrada</h3>
              <p className="text-muted-foreground">
                Condicionamento, mobilidade e prevenção de lesões combinados em um único programa estratégico.
              </p>
            </Card>

            {/* Card 3: Segurança Profissional */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border/50">
              <div className="mb-4">
                <Shield className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-primary mb-3">Segurança Profissional</h3>
              <p className="text-muted-foreground">
                Acompanhamento especializado para qualquer limitação ou lesão, garantindo sua evolução consistente.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="subtitle text-accent mb-2">Nossas ofertas</p>
            <h2 className="text-primary mb-4">Serviços Disponíveis</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Services List */}
            <div className="space-y-6">
              {[
                {
                  title: "Avaliação Física",
                  description: "Análise completa para entender seu ponto de partida e objetivos.",
                },
                {
                  title: "Treino em Turma Reduzida",
                  description: "Aulas em grupos pequenos com atenção personalizada do instrutor.",
                },
                {
                  title: "Treino com Personal Trainer",
                  description: "Sessões individuais totalmente customizadas para seus objetivos.",
                },
                {
                  title: "Consultoria Online",
                  description: "Orientação profissional à distância para sua evolução contínua.",
                },
              ].map((service, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div className="relative h-96 md:h-full">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377700058/Fgmy54taSGVi3KPEeesc5H/personal-training-G7kGtLiK4uLxGYS6PQWjBj.webp"
                alt="Personal trainer trabalhando com cliente"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Horários Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-primary mb-4">Horários de Funcionamento</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <p className="text-lg text-foreground mb-2">
                <strong>Segunda a Sexta</strong>
              </p>
              <p className="text-2xl font-bold text-accent mb-4">6h às 20h</p>
              <p className="text-muted-foreground">
                Todos os horários são agendados para garantir sua experiência exclusiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section id="localizacao" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative h-96 md:h-full order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377700058/Fgmy54taSGVi3KPEeesc5H/studio-interior-PBuLwcJhwcZjFxigT32uaL.webp"
                alt="Interior do estúdio KORE7"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right: Location Info */}
            <div className="order-1 md:order-2">
              <p className="subtitle text-accent mb-2">Nos encontre</p>
              <h2 className="text-primary mb-8">Nossa Localização</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua Xavier Chaves/da Caema, s/nº<br />
                      Altos do Calhau Center, loja 06<br />
                      Bairro Altos do Calhau<br />
                      São Luís, MA
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Contato</h4>
                    <a
                      href="https://wa.me/559898578934"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-accent transition font-medium"
                    >
                      (098) 98578-9534
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Clique para abrir WhatsApp</p>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="https://wa.me/559898578934?text=Olá%20KORE7!%20Gostaria%20de%20agendar%20minha%20aula%20experimental%20gratuita."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Agendar Aula Experimental
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
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
              Conheça nosso método, estrutura e atendimento com uma aula experimental sem custo.
            </p>
            <a
              href="https://wa.me/559898578934?text=Olá%20KORE7!%20Gostaria%20de%20agendar%20minha%20aula%20experimental%20gratuita."
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

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-primary mb-4">KORE7 Studio</h4>
              <p className="text-muted-foreground text-sm">
                Studio de treinamento personalizado com metodologia integrada, segurança profissional e atendimento exclusivo.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#servicos" className="text-muted-foreground hover:text-accent transition">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#diferenciais" className="text-muted-foreground hover:text-accent transition">
                    Diferenciais
                  </a>
                </li>
                <li>
                  <a href="#localizacao" className="text-muted-foreground hover:text-accent transition">
                    Localização
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Contato</h4>
              <p className="text-muted-foreground text-sm mb-2">
                <strong>WhatsApp:</strong> (098) 98578-9534
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Horário:</strong> Seg-Sex, 6h às 20h
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2026 KORE7 Studio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

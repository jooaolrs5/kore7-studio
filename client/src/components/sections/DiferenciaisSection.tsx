import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, Users, Zap } from "lucide-react";

const diferenciais = [
  {
    icon: Users,
    title: "Turmas Reduzidas",
    description:
      "Grupos pequenos garantem atenção personalizada e acompanhamento próximo de cada aluno em cada sessão.",
  },
  {
    icon: Zap,
    title: "Metodologia Integrada",
    description:
      "Condicionamento, mobilidade e prevenção de lesões combinados em um único programa estratégico.",
  },
  {
    icon: Shield,
    title: "Segurança Profissional",
    description:
      "Acompanhamento especializado para qualquer limitação ou lesão, garantindo sua evolução consistente.",
  },
];

export default function DiferenciaisSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="diferenciais" className="reveal section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="subtitle text-accent mb-2">Por que escolher</p>
          <h2 className="text-primary mb-4">O que nos diferencia</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combinamos metodologia integrada, segurança profissional e atendimento
            exclusivo para sua transformação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {diferenciais.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="p-8 hover:shadow-lg transition-shadow border-border/50">
              <div className="mb-4">
                <Icon className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-primary mb-3">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

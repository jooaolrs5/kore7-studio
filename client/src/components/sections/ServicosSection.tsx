import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";

const servicos = [
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
];

export default function ServicosSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="servicos" className="reveal py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="subtitle text-accent mb-2">Nossas ofertas</p>
          <h2 className="text-primary mb-4">Serviços Disponíveis</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Services List */}
          <div className="space-y-6">
            {servicos.map(({ title, description }) => (
              <div key={title} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">{title}</h4>
                  <p className="text-muted-foreground">{description}</p>
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
  );
}

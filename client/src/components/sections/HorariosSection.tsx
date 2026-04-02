import { Clock } from "lucide-react";

export default function HorariosSection() {
  return (
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
  );
}

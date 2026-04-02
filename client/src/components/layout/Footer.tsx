export default function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div>
            <h4 className="font-bold text-primary mb-4">KORE7 Studio</h4>
            <p className="text-muted-foreground text-sm">
              Studio de treinamento personalizado com metodologia integrada,
              segurança profissional e atendimento exclusivo.
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
  );
}

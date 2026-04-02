import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/const";
import { MapPin, MessageCircle, Phone } from "lucide-react";

export default function LocalizacaoSection() {
  return (
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
                    Rua Xavier Chaves/da Caema, s/nº
                    <br />
                    Altos do Calhau Center, loja 06
                    <br />
                    Bairro Altos do Calhau
                    <br />
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
                  <p className="text-sm text-muted-foreground mt-1">
                    Clique para abrir WhatsApp
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={WHATSAPP_URL("Olá KORE7! Gostaria de agendar minha aula experimental gratuita.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
                  >
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
  );
}

import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

const Localizacao = () => {
  const googleMapsUrl = "https://maps.google.com/?q=Av.+Abel+Cabral,+2550,+Nova+Parnamirim,+Parnamirim+RN";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.937!2d-35.267!3d-5.863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff8b81c3c3c3%3A0x0!2sAv.%20Abel%20Cabral%2C%202550%20-%20Nova%20Parnamirim%2C%20Parnamirim%20-%20RN!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr";

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Minimal Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 relative inline-block group">
            Nossa Localização
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C2D86C] to-[#60A4A3] transition-all duration-500 group-hover:w-full"></span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Fácil acesso no coração de Nova Parnamirim
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Google Maps Embed - Large */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Viverse"
              ></iframe>
            </div>
          </div>

          {/* Minimal Info */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">
            {/* Address */}
            <div>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-foreground mb-2">Endereço</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Av. Abel Cabral, 2550<br/>
                    Nova Parnamirim<br/>
                    Parnamirim - RN<br/>
                    CEP 59151-250<br/>
                    <span className="text-primary font-medium">Dentro do AR Mall</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-start gap-3 mb-4">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-foreground mb-2">Horário</h3>
                  <p className="text-sm text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br/>
                    Sábados: 8h às 12h<br/>
                    Domingos: Fechado
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-start gap-3 mb-4">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-foreground mb-2">Contato</h3>
                  <p className="text-sm text-muted-foreground">
                    WhatsApp: (84) 99448-2552<br/>
                    Resposta imediata
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <Button 
                variant="gradient"
                className="w-full"
                onClick={() => window.open(googleMapsUrl, '_blank')}
              >
                Ver rotas no Google Maps
              </Button>
              <Button 
                variant="gradient"
                className="w-full"
                onClick={() => window.open('https://wa.me/5584994482552', '_blank')}
              >
                Ligar agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;
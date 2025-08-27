import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactMap = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossa Localização
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visite nosso escritório ou entre em contato conosco através dos canais disponíveis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-brand-blue mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Av. Abel Cabral, 2550<br />
                      Nova Parnamirim - Parnamirim/RN<br />
                      CEP: 59151-250<br />
                      <span className="text-sm">Dentro do Prédio Comercial AR Mall</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Navigation className="h-6 w-6 text-brand-blue mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Como chegar</h4>
                    <p className="text-muted-foreground mb-3">
                      Localizada no AR Mall em Nova Parnamirim, com fácil acesso pela Av. Abel Cabral.
                    </p>
                    <Button 
                      variant="gradient" 
                      size="sm"
                      onClick={() => window.open('https://maps.google.com/?q=Av.+Abel+Cabral,+2550,+Nova+Parnamirim,+Parnamirim+RN', '_blank')}
                    >
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-medium text-foreground mb-4">Horário de Funcionamento</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda a Sexta:</span>
                    <span className="text-foreground font-medium">8:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado:</span>
                    <span className="text-foreground font-medium">8:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo:</span>
                    <span className="text-foreground font-medium">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Mapa Interativo</h3>
                <p className="text-muted-foreground mb-4">
                  Clique no botão abaixo para visualizar nossa localização no Google Maps
                </p>
                <Button 
                  variant="gradient"
                  onClick={() => window.open('https://maps.google.com/?q=Natal,RN', '_blank')}
                >
                  Abrir Google Maps
                </Button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Clínica Viverse</strong><br />
                  Av. Abel Cabral, 2550 - Nova Parnamirim<br />
                  Parnamirim/RN - CEP: 59151-250<br />
                  <span className="text-xs">Dentro do AR Mall</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
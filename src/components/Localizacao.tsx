import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Clock, Car, Phone, Calendar } from "lucide-react";

const Localizacao = () => {
  const googleMapsUrl = "https://maps.google.com/?q=Av.+Abel+Cabral,+2550,+Nova+Parnamirim,+Parnamirim+RN";
  
  const locationFeatures = [
    {
      icon: Car,
      title: "Estacionamento Gratuito",
      description: "Vagas disponíveis no AR Mall"
    },
    {
      icon: Navigation,
      title: "Fácil Acesso",
      description: "Localização central em Nova Parnamirim"
    },
    {
      icon: Clock,
      title: "Horário Conveniente", 
      description: "Segunda a Sexta: 8h às 18h"
    },
    {
      icon: Phone,
      title: "Agendamento Rápido",
      description: "WhatsApp (84) 99448-2552"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with city image overlay and gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-white"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%2360A4A3%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M10%2010h20v20H10zM40%2040h20v20H40zM70%2010h20v20H70zM10%2070h20v20H10z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossa <span className="text-primary">Localização</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Encontre-nos facilmente no coração de Nova Parnamirim, dentro do AR Mall, 
            com toda a comodidade e facilidade que você merece.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Location Info */}
          <div className="space-y-8">
            {/* Address Card */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-primary/10">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Main Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Endereço</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p className="font-medium">📍 Av. Abel Cabral, 2550 – Nova Parnamirim</p>
                        <p>Parnamirim – RN, CEP 59151-250</p>
                        <p className="text-primary font-semibold">
                          ➡️ Dentro do Prédio Comercial AR Mall
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Google Maps Button */}
                  <Button 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(googleMapsUrl, '_blank')}
                  >
                    📍 Abrir no Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {locationFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-4 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors border border-primary/10"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Map Placeholder */}
          <div>
            <Card className="overflow-hidden shadow-2xl border border-primary/10">
              {/* Map placeholder with interactive elements */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-brand-green/20 relative flex items-center justify-center">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%220%200%2050%2050%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%2360A4A3%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M25%2025m-5%200a5%205%200%201%201%2010%200a5%205%200%201%201-10%200%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
                
                {/* Map content */}
                <div className="text-center space-y-4 relative z-10">
                  <div className="w-20 h-20 bg-white/90 rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <MapPin className="h-10 w-10 text-primary animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Clínica Viverse
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      📍 AR Mall - Nova Parnamirim
                    </p>
                  </div>
                  
                  {/* Interactive elements */}
                  <div className="grid grid-cols-2 gap-4 mt-6 max-w-sm mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">🏥</div>
                      <p className="text-xs font-medium text-foreground">Clínica Moderna</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">🅿️</div>
                      <p className="text-xs font-medium text-foreground">Estacionamento</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">🛍️</div>
                      <p className="text-xs font-medium text-foreground">Shopping</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">🚗</div>
                      <p className="text-xs font-medium text-foreground">Fácil Acesso</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom section with action */}
              <CardContent className="p-6 bg-white">
                <div className="text-center space-y-4">
                  <h4 className="font-bold text-foreground">
                    Venha nos visitar!
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Estamos localizados em um dos pontos mais convenientes de Parnamirim, 
                    com fácil acesso e todas as comodidades do AR Mall.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.open(googleMapsUrl, '_blank')}
                    >
                      🗺️ Ver no Maps
                    </Button>
                    <Button 
                      className="flex-1 bg-brand-green hover:bg-brand-green/90 text-brand-green-foreground"
                      onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de visitar a Clínica Viverse. Podem me orientar sobre a localização?', '_blank')}
                    >
                      📲 Pedir Direções
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional info section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center bg-white/60 backdrop-blur-sm border border-primary/10">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Horário de Funcionamento</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Segunda a Sexta: <span className="font-medium">8h às 18h</span></p>
                <p>Sábados: <span className="font-medium">8h às 12h</span></p>
                <p>Domingos: <span className="font-medium">Fechado</span></p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 text-center bg-white/60 backdrop-blur-sm border border-primary/10">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Agendamento</h4>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>📲 WhatsApp: <span className="font-medium">(84) 99448-2552</span></p>
                <p>⚡ Resposta imediata</p>
                <p>📅 Horários disponíveis</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 text-center bg-white/60 backdrop-blur-sm border border-primary/10">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Como Chegar</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>🅿️ Estacionamento gratuito</p>
                <p>🚌 Transporte público</p>
                <p>📍 Dentro do AR Mall</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;
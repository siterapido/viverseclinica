import { Card } from "@/components/ui/card";
import { Network, Heart, Settings, Video, MapPin, Pill } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Network,
      title: "Rede própria",
      description: "Mais de 500 prestadores"
    },
    {
      icon: Heart,
      title: "Atendimento humanizado",
      description: "Cuidado próximo e personalizado"
    },
    {
      icon: Settings,
      title: "Planos sob medida",
      description: "Opções para todas as necessidades"
    },
    {
      icon: Video,
      title: "Telemedicina",
      description: "Consultas online sempre que precisar"
    },
    {
      icon: MapPin,
      title: "Ampla rede de atendimento",
      description: "Hospitais e clínicas em todo o estado"
    },
    {
      icon: Pill,
      title: "Descontos exclusivos",
      description: "Até 50% em medicamentos"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Benefits List */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Por que escolher a{" "}
              <span className="text-brand-blue">Security Saúde?</span>
            </h2>
            
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-4 border-border/50 hover:shadow-lg transition-all hover:border-brand-blue/30">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Mobile App Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-[600px] bg-primary rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-8 bg-brand-blue flex items-center justify-between px-6 text-brand-blue-foreground text-xs">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-brand-blue-foreground rounded-sm"></div>
                      <div className="w-4 h-2 bg-brand-blue-foreground rounded-sm"></div>
                      <div className="w-4 h-2 bg-brand-blue-foreground rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6 space-y-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-foreground">Security Saúde</h3>
                      <p className="text-sm text-muted-foreground">Seu plano na palma da mão</p>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-brand-blue/10 rounded-xl p-4 text-center">
                        <div className="w-8 h-8 bg-brand-blue rounded-full mx-auto mb-2 flex items-center justify-center">
                          <Video className="w-4 h-4 text-brand-blue-foreground" />
                        </div>
                        <span className="text-xs text-foreground">Telemedicina</span>
                      </div>
                      <div className="bg-brand-blue/10 rounded-xl p-4 text-center">
                        <div className="w-8 h-8 bg-brand-blue rounded-full mx-auto mb-2 flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-brand-blue-foreground" />
                        </div>
                        <span className="text-xs text-foreground">Rede Credenciada</span>
                      </div>
                    </div>
                    
                    {/* Features List */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                        <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                          <Heart className="w-3 h-3 text-brand-blue-foreground" />
                        </div>
                        <span className="text-sm text-foreground">Consultas Agendadas</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                        <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                          <Pill className="w-3 h-3 text-brand-blue-foreground" />
                        </div>
                        <span className="text-sm text-foreground">Descontos Farmácia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-blue/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent/40 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
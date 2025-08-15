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

          {/* Right Content - Statistics */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-blue/5 to-primary/5 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-brand-blue" />
                  </div>
                  <div className="text-2xl font-bold text-brand-blue">99%</div>
                  <p className="text-sm text-muted-foreground">Satisfação dos clientes</p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Network className="h-8 w-8 text-brand-blue" />
                  </div>
                  <div className="text-2xl font-bold text-brand-blue">24h</div>
                  <p className="text-sm text-muted-foreground">Atendimento disponível</p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full mx-auto flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-brand-blue" />
                  </div>
                  <div className="text-2xl font-bold text-brand-blue">100+</div>
                  <p className="text-sm text-muted-foreground">Cidades atendidas</p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Pill className="h-8 w-8 text-brand-blue" />
                  </div>
                  <div className="text-2xl font-bold text-brand-blue">50%</div>
                  <p className="text-sm text-muted-foreground">Desconto em medicamentos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
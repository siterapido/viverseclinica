import { Building2, Heart, Shield, Smartphone, MapPin, Pill } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Rede própria",
    description: "Mais de 500 prestadores credenciados"
  },
  {
    icon: Heart,
    title: "Atendimento humanizado",
    description: "Cuidado próximo e personalizado"
  },
  {
    icon: Shield,
    title: "Planos sob medida",
    description: "Opções para todas as necessidades"
  },
  {
    icon: Smartphone,
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

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                Por que escolher a Security Saúde?
              </h2>
              <p className="text-lg text-muted-foreground">
                Oferecemos muito mais do que um plano de saúde. Proporcionamos tranquilidade, 
                qualidade e atendimento de excelência para você e sua família.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="bg-secondary/20 rounded-full p-3 flex-shrink-0">
                    <feature.icon className="text-secondary" size={24} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              {/* Phone Mockup */}
              <div className="mx-auto max-w-sm">
                <div className="bg-primary rounded-[2.5rem] p-4 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    {/* Phone Header */}
                    <div className="bg-secondary p-6 text-white text-center">
                      <div className="text-2xl font-bold mb-2">Security Saúde</div>
                      <div className="text-sm opacity-90">Seu app de saúde</div>
                    </div>
                    
                    {/* Phone Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="bg-secondary/20 rounded-full p-2">
                          <Heart className="text-secondary" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">Consultas</div>
                          <div className="text-xs text-muted-foreground">Agende facilmente</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="bg-secondary/20 rounded-full p-2">
                          <Smartphone className="text-secondary" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">Telemedicina</div>
                          <div className="text-xs text-muted-foreground">Consultas online</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="bg-secondary/20 rounded-full p-2">
                          <MapPin className="text-secondary" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">Rede Credenciada</div>
                          <div className="text-xs text-muted-foreground">Encontre prestadores</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 right-8 bg-secondary text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">App Gratuito</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
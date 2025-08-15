import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, Stethoscope, Phone, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Planos Individuais",
      description: "Proteção personalizada para você e sua família com cobertura completa.",
      features: ["Consultas ilimitadas", "Exames laboratoriais", "Urgência 24h"]
    },
    {
      icon: Users,
      title: "Planos Empresariais",
      description: "Soluções corporativas para cuidar da saúde dos seus colaboradores.",
      features: ["Gestão simplificada", "Relatórios mensais", "Suporte dedicado"]
    },
    {
      icon: Shield,
      title: "Planos Sênior",
      description: "Cuidado especializado para quem tem mais de 60 anos.",
      features: ["Geriatria especializada", "Check-ups regulares", "Acompanhamento médico"]
    },
    {
      icon: Stethoscope,
      title: "Telemedicina",
      description: "Consultas médicas online com praticidade e segurança.",
      features: ["Disponível 24h", "Especialistas qualificados", "Receitas digitais"]
    },
    {
      icon: Phone,
      title: "Atendimento Emergencial",
      description: "Suporte médico de urgência sempre que você precisar.",
      features: ["Ambulância 24h", "Pronto atendimento", "UTI móvel"]
    },
    {
      icon: Clock,
      title: "Agendamento Online",
      description: "Marque suas consultas de forma rápida e prática pelo app.",
      features: ["App intuitivo", "Lembretes automáticos", "Reagendamento fácil"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nossos <span className="text-brand-blue">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de saúde para atender todas as suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-brand-blue/30">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full mx-auto flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                  <service.icon className="h-8 w-8 text-brand-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-blue rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-brand-blue group-hover:text-brand-blue-foreground group-hover:border-brand-blue transition-all"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-brand-blue hover:bg-brand-blue/90 text-brand-blue-foreground rounded-lg px-8 py-4 text-lg"
          >
            Solicitar Cotação Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
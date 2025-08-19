import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, Stethoscope, Phone, Clock, PawPrint, Cross } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Plano de Saúde Individual",
      description: "Plano de saúde completo para você com as melhores operadoras parceiras.",
      features: ["Bradesco Saúde", "SulAmérica", "Unimed", "Hapvida"]
    },
    {
      icon: Shield,
      title: "Plano de Saúde Empresarial",
      description: "Soluções para empresas de todos os portes, desde MEI até 99 colaboradores.",
      features: ["Dedução fiscal", "Gestão online", "Atendimento dedicado", "Relatórios de utilização"]
    },
    {
      icon: Users,
      title: "Coletivo por Adesão",
      description: "Planos coletivos com coberturas especiais e condições diferenciadas.",
      features: ["Cobertura nacional", "Telemedicina 24h", "Rede credenciada premium", "Sem carência para urgência"]
    },
    {
      icon: Stethoscope,
      title: "Plano Odontológico",
      description: "Cobertura odontológica completa para pessoa física e jurídica.",
      features: ["Limpeza e prevenção", "Tratamentos básicos", "Ortodontia", "Implantes"]
    },
    {
      icon: PawPrint,
      title: "Plano Pet",
      description: "Cuidado veterinário completo para seu animal de estimação.",
      features: ["Consultas veterinárias", "Exames laboratoriais", "Cirurgias", "Internação"]
    },
    {
      icon: Cross,
      title: "Assistência Funerária",
      description: "Suporte completo em momentos difíceis com atendimento humanizado.",
      features: ["Atendimento 24h", "Serviços completos", "Assistência domiciliar", "Suporte familiar"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23192A48%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M0%200h40v40H0V0zm40%2040h40v40H40V40z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nossos <span className="text-brand-blue">Produtos</span> e <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em saúde, odontologia, pets e assistência funerária.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-brand-blue/30 bg-background">
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
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-brand-blue rounded-full flex-shrink-0 mt-1.5"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-brand-blue group-hover:text-brand-blue-foreground group-hover:border-brand-blue transition-all"
                >
                  Solicitar Cotação
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 space-y-6">
          <div className="bg-secondary/50 rounded-2xl p-8 max-w-3xl mx-auto border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de ajuda para escolher?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe especializada oferece aconselhamento consultivo, sem vendas agressivas. 
              Construimos relacionamento de confiança e cuidamos de você do começo ao fim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-brand-blue-foreground rounded-lg px-8 py-4 text-lg transition-all"
              >
                Falar com Consultor
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg px-8 py-4 text-lg transition-all"
              >
                Solicitar Cotação
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
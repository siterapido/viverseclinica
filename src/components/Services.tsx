import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, Stethoscope, Phone, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Plano Pessoa Física Individual",
      description: "Plano de saúde completo para você com as melhores coberturas do mercado.",
      features: ["Consultas ilimitadas", "Exames sem carência", "Urgência e emergência 24h", "Telemedicina incluída"]
    },
    {
      icon: Users,
      title: "Plano Pessoa Física Familiar",
      description: "Proteção completa para toda sua família em um único plano com descontos especiais.",
      features: ["Descontos progressivos", "Pediatria especializada", "Cobertura obstétrica", "Rede nacional"]
    },
    {
      icon: Shield,
      title: "Plano PME - MEI",
      description: "Solução ideal para microempreendedores individuais a partir de 2 vidas.",
      features: ["Dedução fiscal", "Sem carência para urgência", "Gestão online", "Inclusão de dependentes"]
    },
    {
      icon: Stethoscope,
      title: "Plano PME - Pequenas Empresas",
      description: "Planos corporativos de 3 a 29 vidas com condições especiais.",
      features: ["Tabela diferenciada", "Relatórios de utilização", "Portal exclusivo", "Atendimento dedicado"]
    },
    {
      icon: Phone,
      title: "Plano PME - Médias Empresas",
      description: "Soluções customizadas para empresas de 30 a 99 colaboradores.",
      features: ["Negociação flexível", "Coparticipação opcional", "Rede premium", "Gestão de saúde"]
    },
    {
      icon: Clock,
      title: "Benefícios Adicionais",
      description: "Vantagens exclusivas incluídas em todos os nossos planos.",
      features: ["App Security Saúde", "Descontos em farmácias", "Programa de pontos", "Check-up anual"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23192A48%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M0%200h40v40H0V0zm40%2040h40v40H40V40z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Planos <span className="text-brand-blue">Pessoa Física</span> e <span className="text-primary">PME</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em saúde para indivíduos, famílias e empresas de todos os portes.
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
              Não sabe qual plano escolher?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe especializada está pronta para ajudar você a encontrar o plano ideal para suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-brand-blue-foreground rounded-lg px-8 py-4 text-lg transition-all"
              >
                Falar com Consultor PME
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg px-8 py-4 text-lg transition-all"
              >
                Consultor Pessoa Física
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
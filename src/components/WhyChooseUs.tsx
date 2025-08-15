import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Network, Heart, Settings, Video, MapPin, Pill, Shield, Clock, Award, Users } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Planos PME Flexíveis",
      description: "Soluções customizadas para empresas de 2 a 99 colaboradores, com benefícios fiscais e gestão simplificada.",
      highlight: "A partir de 2 vidas"
    },
    {
      icon: Heart,
      title: "Pessoa Física Completa",
      description: "Planos individuais e familiares com cobertura nacional, telemedicina incluída e rede premium.",
      highlight: "Cobertura nacional"
    },
    {
      icon: Video,
      title: "Telemedicina 24h",
      description: "Consultas médicas online disponíveis 24 horas, 7 dias por semana, com especialistas qualificados.",
      highlight: "Sempre disponível"
    },
    {
      icon: Network,
      title: "Rede Credenciada Premium",
      description: "Mais de 500 prestadores credenciados, incluindo hospitais de referência e laboratórios especializados.",
      highlight: "500+ prestadores"
    },
    {
      icon: MapPin,
      title: "Cobertura Regional",
      description: "Atendimento em mais de 100 cidades do Nordeste, sempre próximo de você e sua empresa.",
      highlight: "100+ cidades"
    },
    {
      icon: Award,
      title: "20 Anos de Excelência",
      description: "Mais de duas décadas cuidando da saúde com qualidade, confiança e atendimento humanizado.",
      highlight: "Tradição e qualidade"
    }
  ];

  const stats = [
    { icon: Users, value: "500k+", label: "Vidas atendidas", color: "brand-blue" },
    { icon: Clock, value: "24h", label: "Atendimento", color: "primary" },
    { icon: Award, value: "99%", label: "Satisfação", color: "brand-blue" },
    { icon: Pill, value: "50%", label: "Desconto farmácias", color: "primary" }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Por que escolher a{" "}
            <span className="text-brand-blue">Security Saúde?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 20 anos oferecendo as melhores soluções em saúde para pessoas físicas e empresas
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group p-6 border-border/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-background hover:border-brand-blue/30">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                    <benefit.icon className="h-7 w-7 text-brand-blue" />
                  </div>
                  <span className="text-xs font-medium text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                    {benefit.highlight}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-brand-blue transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-background rounded-3xl p-8 shadow-xl border border-border/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Números que comprovam nossa{" "}
              <span className="text-brand-blue">excelência</span>
            </h3>
            <p className="text-muted-foreground">
              Confiança construída ao longo de mais de duas décadas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-${stat.color}/10 rounded-2xl mx-auto flex items-center justify-center mb-4 group-hover:bg-${stat.color}/20 transition-colors`}>
                  <stat.icon className={`h-8 w-8 text-${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold text-${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Pronto para ter a melhor proteção em saúde?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale com nossos especialistas e descubra o plano ideal para você ou sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-brand-blue-foreground px-8 transition-all"
              >
                Solicitar Cotação PME
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 transition-all"
              >
                Cotação Pessoa Física
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Network, Heart, Settings, Video, MapPin, Pill, Shield, Clock, Award, Users } from "lucide-react";

const WhyChooseUs = () => {
  const clientBenefits = [
    {
      icon: Heart,
      title: "Aconselhamento Consultivo",
      description: "Sem vendas agressivas. Te ajudamos a escolher o plano ideal com transparência total.",
      highlight: "Consultoria gratuita"
    },
    {
      icon: Shield,
      title: "Suporte Pós-Venda Contínuo",
      description: "Acompanhamos você durante toda a utilização do plano, sempre disponíveis para ajudar.",
      highlight: "Suporte contínuo"
    },
    {
      icon: Network,
      title: "Parceiros Confiáveis",
      description: "Trabalhamos com as melhores operadoras: Bradesco, SulAmérica, Unimed, Hapvida.",
      highlight: "Melhores operadoras"
    }
  ];

  const brokerBenefits = [
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Atendimento humanizado e ágil para corretores, com comunicação transparente.",
      highlight: "Resposta rápida"
    },
    {
      icon: Award,
      title: "Treinamentos Exclusivos",
      description: "Eventos e treinamentos exclusivos para capacitação e desenvolvimento profissional.",
      highlight: "Capacitação contínua"
    },
    {
      icon: Settings,
      title: "Estrutura Completa",
      description: "Estrutura física em Recife + atuação digital, materiais personalizados para vendas.",
      highlight: "Físico + Digital"
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
            Nossos{" "}
            <span className="text-brand-blue">Diferenciais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendimento humanizado, transparência e suporte estratégico desde 1992
          </p>
        </div>

        {/* Client Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Para <span className="text-brand-blue">Clientes Finais</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {clientBenefits.map((benefit, index) => (
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
        </div>

        {/* Broker Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Para <span className="text-primary">Corretores</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {brokerBenefits.map((benefit, index) => (
              <Card key={index} className="group p-6 border-border/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-background hover:border-primary/30">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {benefit.highlight}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
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
        </div>

        {/* Statistics Section */}
        <div className="bg-background rounded-3xl p-8 shadow-xl border border-border/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Números que comprovam nossa{" "}
              <span className="text-brand-blue">excelência</span>
            </h3>
            <p className="text-muted-foreground">
              Confiança construída ao longo de 32 anos de atuação
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
              Aqui, você escolhe o plano certo com quem entende de verdade
            </h3>
            <p className="text-muted-foreground mb-6">
              E cuida de você do começo ao fim. Entre em contato e tenha experiência completa do atendimento à utilização do plano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-brand-blue-foreground px-8 transition-all"
              >
                Falar com Consultor
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 transition-all"
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

export default WhyChooseUs;
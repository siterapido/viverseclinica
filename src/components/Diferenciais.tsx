import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Building, Users, Heart, Shield, MapPin, Star } from "lucide-react";

const Diferenciais = () => {
  const mainDiferenciais = [
    {
      icon: Clock,
      emoji: "⚡",
      title: "Atendimento sem burocracia",
      description: "Consultas rápidas e eficientes, sem longas esperas ou processos complicados. Priorizamos seu tempo e bem-estar."
    },
    {
      icon: DollarSign,
      emoji: "💰",
      title: "Valores acessíveis",
      description: "Preços justos e transparentes para que todos tenham acesso a cuidados de saúde de qualidade."
    },
    {
      icon: Building,
      emoji: "🏥",
      title: "Estrutura moderna",
      description: "Instalações confortáveis e equipamentos de última geração para proporcionar o melhor atendimento."
    },
    {
      icon: Users,
      emoji: "👩🏽‍⚕️",
      title: "Profissionais qualificados",
      description: "Equipe médica especializada e experiente, comprometida com sua saúde e bem-estar."
    }
  ];

  const additionalFeatures = [
    {
      icon: "📍",
      title: "Localização privilegiada",
      description: "No coração de Nova Parnamirim, dentro do AR Mall com estacionamento gratuito"
    },
    {
      icon: "⏰",
      title: "Horários flexíveis",
      description: "Atendimento em horários convenientes para sua rotina"
    },
    {
      icon: "🤝",
      title: "Atendimento humanizado",
      description: "Cuidado personalizado com atenção às suas necessidades específicas"
    },
    {
      icon: "🔍",
      title: "Diagnósticos precisos",
      description: "Tecnologia moderna para resultados confiáveis e tratamentos eficazes"
    },
    {
      icon: "📱",
      title: "Agendamento fácil",
      description: "Marque suas consultas rapidamente pelo WhatsApp"
    },
    {
      icon: "🌟",
      title: "Satisfação garantida",
      description: "Compromisso com a excelência no atendimento e cuidado"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Diferenciais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O que nos torna únicos no cuidado com sua saúde. Conheça os motivos pelos quais 
            milhares de pacientes confiam na Clínica Viverse.
          </p>
        </div>

        {/* Main Diferenciais - 4 cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainDiferenciais.map((diferencial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-border/50 hover:border-primary/30 bg-white hover:bg-gradient-to-br hover:from-brand-green/5 hover:to-white"
            >
              <CardContent className="p-8 text-center space-y-6">
                {/* Icon with hover effect */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-brand-green/10 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <diferencial.icon className="h-10 w-10 text-primary group-hover:text-primary/80" />
                  </div>
                  {/* Emoji overlay */}
                  <div className="absolute -top-2 -right-2 text-2xl group-hover:scale-125 transition-transform duration-300">
                    {diferencial.emoji}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {diferencial.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {diferencial.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional features section */}
        <div className="bg-gradient-to-r from-primary/5 via-white to-brand-green/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              E ainda oferecemos muito mais
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada detalhe pensado para proporcionar a melhor experiência em cuidados de saúde.
            </p>
          </div>
          
          {/* Additional features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-colors duration-300"
              >
                <div className="text-3xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Pacientes atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Especialidades médicas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfação dos pacientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Atendimento WhatsApp</div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-brand-green/10 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">
              ✨ Clínica Viverse – Saúde para Todos com qualidade e confiança
            </span>
            <Star className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
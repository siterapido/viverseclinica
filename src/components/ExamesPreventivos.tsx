import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Activity, Heart, FileText, Calendar } from "lucide-react";

const ExamesPreventivos = () => {
  const exames = [
    {
      icon: "📊",
      iconComponent: Activity,
      title: "Ultrassonografias",
      description: "Exames de imagem não invasivos para diagnóstico preciso.",
      details: ["Ultrassom abdominal", "Obstétrico", "Pélvico", "Doppler"]
    },
    {
      icon: "💼",
      iconComponent: FileText,
      title: "Avaliações Ocupacionais",
      description: "Exames médicos para empresas e trabalhadores.",
      details: ["Admissionais", "Periódicos", "ASO", "Retorno ao trabalho"]
    },
    {
      icon: "🔬",
      iconComponent: Heart,
      title: "Exames Laboratoriais",
      subtitle: "(em breve)",
      description: "Análises clínicas completas para diagnóstico e prevenção.",
      details: ["Hemograma", "Bioquímica", "Hormônios", "Marcadores"],
      coming: true
    },
    {
      icon: "👩🏽‍⚕️",
      iconComponent: Calendar,
      title: "Acompanhamento Clínico",
      description: "Consultas regulares para manutenção da sua saúde.",
      details: ["Check-up geral", "Prevenção", "Seguimento", "Orientações"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/10 to-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            <span className="text-primary">Exames</span> e Cuidados <span className="text-primary">Preventivos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de exames e serviços preventivos para 
            cuidar da sua saúde de forma integral e proativa.
          </p>
        </div>

        {/* Exames Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {exames.map((exame, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-white/80 backdrop-blur-sm ${
                exame.coming ? 'opacity-80' : 'hover:border-primary/30'
              }`}
            >
              <CardContent className="p-6 text-center space-y-4">
                {/* Icon */}
                <div className="relative">
                  <div className={`text-5xl mb-2 ${exame.coming ? 'grayscale' : 'group-hover:scale-110'} transition-all duration-300`}>
                    {exame.icon}
                  </div>
                  {exame.coming && (
                    <div className="absolute -top-2 -right-2 bg-brand-green text-brand-green-foreground text-xs px-2 py-1 rounded-full font-medium">
                      Em breve
                    </div>
                  )}
                </div>
                
                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exame.title}
                  </h3>
                  {exame.subtitle && (
                    <p className="text-sm text-brand-green font-medium">{exame.subtitle}</p>
                  )}
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {exame.description}
                </p>
                
                {/* Details list */}
                <ul className="space-y-2">
                  {exame.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className={`h-4 w-4 flex-shrink-0 ${exame.coming ? 'text-muted-foreground' : 'text-primary'}`} />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Action Button */}
                {!exame.coming && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    onClick={() => window.open(`https://wa.me/5584994482552?text=Olá! Gostaria de agendar ${exame.title.toLowerCase()} na Clínica Viverse.`, '_blank')}
                  >
                    📅 Agendar
                  </Button>
                )}
                
                {exame.coming && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full cursor-not-allowed opacity-50"
                    disabled
                  >
                    🔔 Notificar quando disponível
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Por que escolher nossos <span className="text-primary">cuidados preventivos?</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Detecção Precoce</h4>
              <p className="text-sm text-muted-foreground">
                Identificamos problemas de saúde antes que se tornem graves, 
                aumentando as chances de tratamento bem-sucedido.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <Activity className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Equipamentos Modernos</h4>
              <p className="text-sm text-muted-foreground">
                Utilizamos tecnologia de ponta para garantir resultados 
                precisos e confiáveis em todos os nossos exames.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Cuidado Integral</h4>
              <p className="text-sm text-muted-foreground">
                Acompanhamento completo da sua saúde com profissionais 
                qualificados e atendimento humanizado.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/20 to-brand-green/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Cuide da sua saúde preventivamente
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Agende seus exames e consultas de acompanhamento. A prevenção é o melhor remédio!
            </p>
            <Button 
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-brand-green-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de agendar exames preventivos na Clínica Viverse.', '_blank')}
            >
              📲 Agendar Exames → (84) 99448-2552
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamesPreventivos;
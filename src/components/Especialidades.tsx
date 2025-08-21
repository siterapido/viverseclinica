import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Especialidades = () => {
  const specialties = [
    {
      icon: "👶",
      title: "Pediatria",
      description: "Cuidado completo para a saúde das crianças com profissionais especializados e ambiente acolhedor.",
      features: ["Consultas de rotina", "Acompanhamento do desenvolvimento", "Vacinação", "Emergências pediátricas"]
    },
    {
      icon: "🔬",
      title: "Dermatologia",
      description: "Tratamentos e diagnósticos especializados para pele, cabelo e unhas com tecnologia moderna.",
      features: ["Consultas dermatológicas", "Tratamentos de pele", "Diagnóstico de lesões", "Dermatoscopia"]
    },
    {
      icon: "📊",
      title: "Ultrassonografia",
      description: "Exames rápidos e precisos para o seu acompanhamento médico com equipamentos de última geração.",
      features: ["Ultrassom abdominal", "Ultrassom obstétrico", "Doppler", "Laudos em tempo real"]
    },
    {
      icon: "💼",
      title: "Medicina do Trabalho",
      description: "Serviços e exames ocupacionais completos para empresas e colaboradores.",
      features: ["Exames admissionais", "Exames periódicos", "ASO", "PCMSO"]
    },
    {
      icon: "👩🏽‍⚕️",
      title: "Clínico Geral",
      description: "Atendimento completo e humanizado para sua saúde no dia a dia com foco na prevenção.",
      features: ["Consultas preventivas", "Check-up geral", "Acompanhamento crônico", "Orientações de saúde"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossas <span className="text-primary">Especialidades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidado especializado em diversas áreas da saúde com profissionais qualificados e preços acessíveis.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specialties.slice(0, 4).map((specialty, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/30 bg-white hover:bg-gradient-to-br hover:from-brand-green/5 hover:to-white cursor-pointer"
            >
              <CardHeader className="text-center space-y-4">
                <div className="text-6xl mx-auto group-hover:scale-110 transition-transform duration-300">
                  {specialty.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {specialty.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center">
                  {specialty.description}
                </p>
                
                <ul className="space-y-2">
                  {specialty.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  onClick={() => window.open(`https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta de ${specialty.title} na Clínica Viverse.`, '_blank')}
                >
                  📲 Agendar Consulta
                </Button>
              </CardContent>
            </Card>
          ))}
          
          {/* Fifth specialty card - centered */}
          <div className="md:col-span-2 lg:col-span-3 flex justify-center">
            <div className="w-full max-w-sm">
              <Card 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/30 bg-white hover:bg-gradient-to-br hover:from-brand-green/5 hover:to-white cursor-pointer"
              >
                <CardHeader className="text-center space-y-4">
                  <div className="text-6xl mx-auto group-hover:scale-110 transition-transform duration-300">
                    {specialties[4].icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {specialties[4].title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">
                    {specialties[4].description}
                  </p>
                  
                  <ul className="space-y-2">
                    {specialties[4].features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    onClick={() => window.open(`https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta de ${specialties[4].title} na Clínica Viverse.`, '_blank')}
                  >
                    📲 Agendar Consulta
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-brand-green/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Não encontrou a especialidade que procura?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Entre em contato conosco! Temos uma ampla rede de parceiros especialistas 
            para atender todas as suas necessidades de saúde.
          </p>
          <Button 
            size="lg"
            className="bg-brand-green hover:bg-brand-green/90 text-brand-green-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de saber sobre outras especialidades na Clínica Viverse.', '_blank')}
          >
            📲 Falar com Especialista → (84) 99448-2552
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
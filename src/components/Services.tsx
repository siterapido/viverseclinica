import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Baby, Microscope, Briefcase, Activity } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: "🔹",
      title: "Pediatria",
      description: "Cuidado completo para a saúde das crianças com profissionais especializados e ambiente acolhedor.",
      features: ["Consultas de rotina", "Acompanhamento do desenvolvimento", "Vacinação", "Atendimento emergencial"],
      emoji: "👶"
    },
    {
      icon: "🔹",
      title: "Dermatologia",
      description: "Tratamentos e diagnósticos especializados para pele, cabelo e unhas com tecnologia moderna.",
      features: ["Consultas dermatológicas", "Tratamentos de pele", "Diagnóstico de lesões", "Cuidados estéticos"],
      emoji: "🔬"
    },
    {
      icon: "🔹",
      title: "Ultrassonografia",
      description: "Exames rápidos e precisos para o seu acompanhamento médico com equipamentos de última geração.",
      features: ["Ultrassom abdominal", "Ultrassom obstétrico", "Doppler", "Laudos em tempo real"],
      emoji: "📊"
    },
    {
      icon: "🔹",
      title: "Medicina do Trabalho",
      description: "Serviços e exames ocupacionais completos para empresas e colaboradores.",
      features: ["Exames admissionais", "Exames periódicos", "ASO", "PCMSO"],
      emoji: "💼"
    },
    {
      icon: "🔹",
      title: "Clínico Geral",
      description: "Atendimento completo e humanizado para sua saúde no dia a dia com foco na prevenção.",
      features: ["Consultas preventivas", "Acompanhamento crônico", "Check-up geral", "Orientação nutricional"],
      emoji: "👩🏽‍⚕️"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23192A48%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M0%200h40v40H0V0zm40%2040h40v40H40V40z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🍃</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nossas <span className="text-brand-green">Especialidades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidado especializado em diversas áreas da saúde com profissionais qualificados e preços acessíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-brand-green/30 bg-background">
              <CardHeader className="text-center space-y-4">
                <div className="text-5xl mx-auto">
                  {service.emoji}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  <span className="text-brand-green">{service.icon}</span> {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-brand-accent rounded-full flex-shrink-0 mt-1.5"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="gradient" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta de ' + service.title + ' na Clínica Viverse.', '_blank')}
                >
                  📲 Agendar Consulta
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 space-y-6">
          <div className="bg-background rounded-2xl p-8 max-w-4xl mx-auto border border-border/50 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  📲 Agende sua consulta agora mesmo pelo WhatsApp:
                </h3>
                <p className="text-muted-foreground">
                  Atendimento rápido e humanizado com profissionais qualificados. 
                  Entre em contato e cuide da sua saúde com quem realmente se importa!
                </p>
              </div>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta na Clínica Viverse."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button 
                    variant="gradient"
                    size="lg"
                    className="px-8 py-6 text-xl w-full"
                  >
                    👉 (84) 99448-2552
                  </Button>
                </a>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    📍 <strong>Localização</strong>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Av. Abel Cabral, 2550 – Nova Parnamirim, Parnamirim – RN<br/>
                    ➡️ Dentro do Prédio Comercial AR Mall
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-brand-accent text-2xl mb-2">✔</div>
              <p className="text-sm font-medium">Atendimento rápido e acessível</p>
            </div>
            <div className="text-center">
              <div className="text-brand-accent text-2xl mb-2">✔</div>
              <p className="text-sm font-medium">Estrutura confortável e moderna</p>
            </div>
            <div className="text-center">
              <div className="text-brand-accent text-2xl mb-2">✔</div>
              <p className="text-sm font-medium">Profissionais qualificados</p>
            </div>
            <div className="text-center">
              <div className="text-brand-accent text-2xl mb-2">✔</div>
              <p className="text-sm font-medium">Localização de fácil acesso</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-lg font-medium text-foreground">
              ✨ <span className="text-brand-green">Clínica Viverse</span> – Saúde para Todos com qualidade e confiança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
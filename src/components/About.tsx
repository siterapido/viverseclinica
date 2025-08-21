import { Card } from "@/components/ui/card";
import { Users, Award, MapPin, Target, Heart, Shield, Stethoscope, Clock, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Stethoscope,
      number: "5+",
      label: "especialidades médicas"
    },
    {
      icon: Users,
      number: "1000+",
      label: "pacientes atendidos"
    },
    {
      icon: Award,
      number: "100%",
      label: "satisfação dos pacientes"
    }
  ];

  const specialties = [
    {
      icon: "👶",
      title: "Pediatria",
      description: "Cuidado completo para a saúde das crianças com profissionais especializados."
    },
    {
      icon: "🔬",
      title: "Dermatologia", 
      description: "Tratamentos e diagnósticos para pele, cabelo e unhas."
    },
    {
      icon: "📊",
      title: "Ultrassonografia",
      description: "Exames rápidos e precisos para o seu acompanhamento médico."
    },
    {
      icon: "💼",
      title: "Medicina do Trabalho",
      description: "Serviços e exames ocupacionais para empresas e colaboradores."
    },
    {
      icon: "👩🏽‍⚕️",
      title: "Clínico Geral",
      description: "Atendimento completo para sua saúde no dia a dia."
    }
  ];

  const whyChoose = [
    {
      icon: Clock,
      title: "Atendimento Rápido e Acessível",
      description: "Consultas ágeis com preços que cabem no seu bolso."
    },
    {
      icon: Heart,
      title: "Estrutura Confortável e Moderna",
      description: "Instalações pensadas para seu bem-estar e conforto."
    },
    {
      icon: Shield,
      title: "Profissionais Qualificados",
      description: "Médicos especialistas em diversas áreas da saúde."
    },
    {
      icon: MapPin,
      title: "Localização de Fácil Acesso",
      description: "Situada no AR Mall com estacionamento gratuito."
    }
  ];

  return (
    <>
      {/* Seção 1: Sobre a Clínica */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%2305AAE5%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M20%2020h20v20h-20z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-3xl">🍃</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                <span className="text-brand-blue">Clínica Viverse</span> - Saúde para Todos
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Saúde com conforto e qualidade ao seu alcance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground leading-tight">
                  Consultas acessíveis em{" "}
                  <span className="text-brand-blue">diversas especialidades</span>
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Na Clínica Viverse, você encontra atendimento humanizado, preços acessíveis 
                  e profissionais preparados para cuidar da sua saúde com toda atenção que você merece.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-green-500">✔</span>
                    <span>Atendimento rápido e acessível</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-green-500">✔</span>
                    <span>Estrutura confortável e moderna</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-green-500">✔</span>
                    <span>Profissionais qualificados</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-green-500">✔</span>
                    <span>Localização de fácil acesso</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-green-500">✔</span>
                    <span>Diversas especialidades</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-green-500">✔</span>
                    <span>Preços justos e acessíveis</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="p-6 text-center border-border/50 hover:shadow-lg transition-shadow bg-background">
                    <div className="space-y-3">
                      <div className="mx-auto w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                        <stat.icon className="h-6 w-6 text-brand-blue" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-brand-blue">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Content - Location */}
            <div className="relative">
              <div className="bg-secondary/30 rounded-2xl p-8 border border-border/50">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Nossa <span className="text-brand-blue">Localização</span>
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-background/50 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-brand-blue" />
                        <span>Endereço</span>
                      </h4>
                      <p className="text-muted-foreground">
                        📍 Av. Abel Cabral, 2550 – Nova Parnamirim<br/>
                        Parnamirim – RN, CEP 59151-250<br/>
                        <strong>➡️ Dentro do Prédio Comercial AR Mall</strong>
                      </p>
                    </div>
                    
                    <div className="bg-background/50 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-3">Agendamento</h4>
                      <p className="text-muted-foreground mb-3">
                        📲 Agende sua consulta agora mesmo pelo WhatsApp:
                      </p>
                      <a 
                        href="https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta na Clínica Viverse."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        👉 (84) 99448-2552
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Especialidades */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossas <span className="text-brand-blue">Especialidades</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cuidado especializado em diversas áreas da saúde
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="p-6 border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background">
                <div className="space-y-4">
                  <div className="text-4xl">{specialty.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">
                    {specialty.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 3: Por que escolher */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por que escolher a <span className="text-brand-blue">Clínica Viverse?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ✨ Clínica Viverse – Saúde para Todos com qualidade e confiança.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <Card key={index} className="p-6 text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta na Clínica Viverse."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-brand-blue to-brand-blue/80 hover:from-brand-blue/90 hover:to-brand-blue/70 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              📲 Agendar Consulta pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
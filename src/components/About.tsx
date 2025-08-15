import { Card } from "@/components/ui/card";
import { Users, Award, Building2, Target, Heart, Shield } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Award,
      number: "+ 20",
      label: "anos de experiência"
    },
    {
      icon: Users,
      number: "+ 15 mil",
      label: "empresas PME atendidas"
    },
    {
      icon: Building2,
      number: "+ 500 mil",
      label: "vidas PF e PME"
    }
  ];

  const teamValues = [
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description: "Cada cliente recebe atendimento dedicado e soluções sob medida para suas necessidades específicas."
    },
    {
      icon: Shield,
      title: "Transparência",
      description: "Informações claras sobre coberturas, valores e processos. Sem surpresas desagradáveis."
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos constantemente a melhoria contínua em nossos serviços e relacionamento com clientes."
    }
  ];

  return (
    <>
      {/* Seção 1: História e Missão */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%2305AAE5%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M20%2020h20v20h-20z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossa <span className="text-brand-blue">História</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mais de duas décadas dedicadas à saúde e bem-estar de empresas e famílias brasileiras
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground leading-tight">
                  Especialistas em planos de saúde{" "}
                  <span className="text-brand-blue">PME e Pessoa Física</span>
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Security Saúde nasceu da visão de democratizar o acesso à saúde de qualidade. 
                  Fundada há mais de 20 anos, nossa empresa se consolidou como líder em planos de 
                  saúde para pequenas e médias empresas e pessoa física.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nossa missão é oferecer soluções completas e acessíveis, desde MEI com 2 vidas 
                  até empresas com 99 colaboradores, além de planos individuais e familiares com 
                  a melhor rede credenciada do mercado.
                </p>
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

            {/* Right Content - Mission */}
            <div className="relative">
              <div className="bg-secondary/30 rounded-2xl p-8 border border-border/50">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Nossa <span className="text-brand-blue">Missão</span>
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-background/50 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-3">Visão</h4>
                      <p className="text-muted-foreground">
                        Ser a empresa de referência em planos de saúde PME no Brasil, 
                        reconhecida pela excelência no atendimento e inovação em soluções de saúde.
                      </p>
                    </div>
                    
                    <div className="bg-background/50 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-3">Missão</h4>
                      <p className="text-muted-foreground">
                        Proporcionar acesso à saúde de qualidade através de planos flexíveis 
                        e personalizados, com atendimento humanizado e rede credenciada de excelência.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Equipe e Valores */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossos <span className="text-brand-blue">Valores</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os princípios que norteiam nossa atuação e relacionamento com clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teamValues.map((value, index) => (
              <Card key={index} className="p-8 text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border/50">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Nossa <span className="text-brand-blue">Equipe</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Contamos com uma equipe de especialistas em saúde suplementar, formada por 
                profissionais experientes e comprometidos com o sucesso de nossos clientes. 
                Cada membro da nossa equipe está preparado para oferecer consultoria personalizada, 
                desde a escolha do plano ideal até o suporte contínuo durante toda a vigência do contrato.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-secondary/30 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Especialistas Certificados</h4>
                  <p className="text-muted-foreground">
                    Profissionais com certificações em saúde suplementar e conhecimento 
                    profundo do mercado de planos de saúde.
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Suporte Dedicado</h4>
                  <p className="text-muted-foreground">
                    Atendimento personalizado com consultores exclusivos para 
                    cada segmento de cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Diferenciais e Compromisso */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossos <span className="text-brand-blue">Diferenciais</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O que nos torna únicos no mercado de planos de saúde
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Differentials */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 6.707l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L9 10.586l3.293-3.293a1 1 0 011.414 1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Planos PME Flexíveis</h4>
                    <p className="text-sm text-muted-foreground">Desde MEI com 2 vidas até empresas com 99 colaboradores</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 6.707l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L9 10.586l3.293-3.293a1 1 0 011.414 1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Benefícios Fiscais</h4>
                    <p className="text-sm text-muted-foreground">Dedução de impostos para empresas e MEI</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 6.707l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L9 10.586l3.293-3.293a1 1 0 011.414 1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Rede Premium Nacional</h4>
                    <p className="text-sm text-muted-foreground">Hospitais e laboratórios de referência em todo Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 6.707l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L9 10.586l3.293-3.293a1 1 0 011.414 1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telemedicina 24h</h4>
                    <p className="text-sm text-muted-foreground">Incluída em todos os planos PF e PME</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Commitment */}
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border/50">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Nosso <span className="text-brand-blue">Compromisso</span>
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Com Você</h4>
                    <p className="text-muted-foreground">
                      Garantimos atendimento personalizado, transparência em todos os processos 
                      e suporte contínuo para que você tenha tranquilidade e segurança na sua 
                      escolha de plano de saúde.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Com a Qualidade</h4>
                    <p className="text-muted-foreground">
                      Trabalhamos apenas com as melhores operadoras do mercado, garantindo 
                      acesso à rede credenciada de excelência e cobertura completa para 
                      todas as suas necessidades de saúde.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Com a Inovação</h4>
                    <p className="text-muted-foreground">
                      Estamos sempre atualizados com as novidades do setor, oferecendo 
                      soluções modernas como telemedicina, aplicativos de saúde e 
                      programas de bem-estar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Heart, Stethoscope, Target, Eye, CheckCircle } from "lucide-react";
import annandaImg from "@/assets/equipe/Dra Annanda Gonçalves Clínico Geral CRM 12128.png";
import lauraImg from "@/assets/equipe/Dra Laura Medeiros Nutrição CRN612854.png";

const QuemSomos = () => {
  const teamMembers = [
    {
      name: "Dr. Henrique Dantas",
      specialty: "Geriatria e Nutrologia",
      crm: "CRM 10240",
      image: "/Imagens/Equipe/Dr. Henrique Dantas -  Geriatria e Nutrologia - CRM 10240.jpeg",
      emoji: "👨‍⚕️"
    },
    {
      name: "Dra. Izadora Queiroz",
      specialty: "Cirurgia Geral e Ultrassonografia",
      crm: "CRM 10020",
      image: "/Imagens/Equipe/Dra Izadora Queiroz, CRM 10020 - Cirurgia Geral e Ultrassonografia.jpeg",
      emoji: "👩‍⚕️"
    },
    {
      name: "Dra. Annanda Gonçalves",
      specialty: "Clínico Geral",
      crm: "CRM 12128",
      image: annandaImg,
      emoji: "👩‍⚕️"
    },
    {
      name: "Dra. Danila Bezerra",
      specialty: "Psicologia",
      crm: "CRP 17:8769",
      image: "/Imagens/Equipe/Dra. Danila Bezerra - Psicologia - CRP 17:8769.jpeg",
      emoji: "🧠"
    },
    {
      name: "Dra. Laura Medeiros",
      specialty: "Nutrição",
      crm: "CRN 612854",
      image: lauraImg,
      emoji: "🥗"
    },
    {
      name: "Dr. Yago Mavignier Amaral da Costa",
      specialty: "Psiquiatra",
      crm: "CRM 12920",
      image: "/Imagens/Equipe/Yago Mavignier Amaral da Costa - CRM 12920 - Psiquiatra .jpeg",
      emoji: "🧠"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "6+",
      label: "profissionais especializados"
    },
    {
      icon: Stethoscope,
      number: "5+",
      label: "especialidades médicas"
    },
    {
      icon: Heart,
      number: "100%",
      label: "dedicação ao paciente"
    }
  ];

  const valores = [
    {
      icon: Heart,
      title: "Acessibilidade",
      description: "Saúde de qualidade ao alcance de todos."
    },
    {
      icon: Users,
      title: "Humanização",
      description: "Atendimento empático, respeitoso e acolhedor."
    },
    {
      icon: CheckCircle,
      title: "Ética e Transparência",
      description: "Compromisso com a verdade, confiança e responsabilidade."
    },
    {
      icon: Award,
      title: "Excelência Profissional",
      description: "Atualização contínua da equipe e serviços de alto padrão."
    },
    {
      icon: Target,
      title: "Integralidade",
      description: "Cuidado com a saúde física, mental e social."
    },
    {
      icon: Eye,
      title: "Comunidade",
      description: "Valorização do vínculo com os pacientes e contribuição para o bem-estar coletivo."
    }
  ];

  return (
    <>
      {/* Seção 1: Quem Somos */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23192A48%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M0%200h40v40H0V0zm40%2040h40v40H40V40z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-3xl">🍃</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground relative inline-block group">
              Quem <span className="text-brand-green">Somos</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-accent to-brand-green transition-all duration-500 group-hover:w-full"></span>
            </h1>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Coluna de texto principal */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-brand-green/10 rounded-full">
                    <span className="text-brand-green font-semibold text-sm">Nossa História</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                    A <span className="text-brand-green">Clínica Viverse</span> nasceu com o propósito de 
                    <span className="relative">
                      tornar a saúde acessível
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-accent/30 -z-10"></span>
                    </span>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A Clínica Viverse nasceu com o propósito de tornar a saúde de qualidade acessível para todos. Localizada em <span className="text-foreground font-medium">Nova Parnamirim</span>, somos uma clínica de especialidades médicas e multiprofissionais, oferecendo atendimento em áreas várias especialidades médicas, psicologia, nutrição, entre outras.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center">
                    <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                    Nossos Serviços
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-5">
                    Além das consultas, contamos com serviços de <span className="text-brand-green font-medium">ultrassonografia</span> e <span className="text-brand-green font-medium">exames laboratoriais</span>, proporcionando praticidade e cuidado integral em um só lugar.
                  </p>
                </div>
              </div>

              {/* Coluna de destaque - Imagem principal */}
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden shadow-lg border border-brand-green/20">
                  <img 
                    src="/Imagens/Equipe/foto prinicipal quem somos.jpeg" 
                    alt="Equipe Clínica Viverse" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <Card className="p-8 bg-gradient-to-br from-brand-green/5 to-brand-accent/5 border-brand-green/20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-brand-green" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Nosso Compromisso</h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Nosso compromisso é cuidar de cada paciente com <span className="text-brand-green font-medium">atenção</span>, <span className="text-brand-green font-medium">respeito</span> e <span className="text-brand-green font-medium">ética</span>, oferecendo um atendimento humanizado e acessível para a população que busca cuidar da saúde sem abrir mão da qualidade.
                    </p>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-brand-accent/5 to-brand-green/5 border-brand-accent/20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-brand-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Nossa Filosofia</h3>
                    </div>
                    
                    <blockquote className="border-l-4 border-brand-green pl-4 italic">
                      <p className="text-lg text-foreground font-medium leading-relaxed">
                        "Na Clínica Viverse, acreditamos que saúde é um direito de todos. Por isso, trabalhamos todos os dias para que cada pessoa que nos procura se sinta acolhida, confiante e bem cuidada."
                      </p>
                    </blockquote>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Missão, Visão e Valores */}
       <section className="py-20 bg-background relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%2305AAE5%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M20%2020h20v20h-20z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
         <div className="container mx-auto px-4 relative">
           {/* Missão e Visão */}
           <div className="grid md:grid-cols-2 gap-12 mb-16">
             {/* Missão */}
             <Card className="p-8 text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background">
               <div className="space-y-6">
                 <div className="mx-auto w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center">
                   <Target className="h-10 w-10 text-brand-green" />
                 </div>
                 <h3 className="text-2xl font-bold text-foreground">
                   <span className="text-brand-green">Missão</span>
                 </h3>
                 <p className="text-muted-foreground leading-relaxed">
                   Oferecer cuidados de saúde acessíveis e de qualidade, em diversas especialidades médicas e multiprofissionais, promovendo bem-estar físico e mental para toda a comunidade, com atendimento humano, ético e acolhedor.
                 </p>
               </div>
             </Card>

             {/* Visão */}
             <Card className="p-8 text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background">
               <div className="space-y-6">
                 <div className="mx-auto w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center">
                   <Eye className="h-10 w-10 text-brand-green" />
                 </div>
                 <h3 className="text-2xl font-bold text-foreground">
                   <span className="text-brand-green">Visão</span>
                 </h3>
                 <p className="text-muted-foreground leading-relaxed">
                   Ser referência em saúde acessível na região, reconhecida pela qualidade dos serviços, pelo atendimento humanizado e pela promoção de uma vida mais saudável para a população
                 </p>
               </div>
             </Card>
           </div>

           {/* Valores */}
           <div className="space-y-8">
             <div className="text-center">
               <div className="inline-flex items-center px-4 py-2 bg-brand-green/10 rounded-full mb-4">
                 <Heart className="h-5 w-5 text-brand-green mr-2" />
                 <span className="text-brand-green font-semibold text-sm">Nossos Valores</span>
               </div>
               <h3 className="text-3xl font-bold text-foreground mb-4">
                 Os <span className="text-brand-green">Princípios</span> que nos Guiam
               </h3>
               <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                 Cada valor representa nosso compromisso com a excelência no cuidado à saúde e o bem-estar de nossa comunidade.
               </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {valores.map((valor, index) => (
                 <Card key={index} className="p-6 border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background group">
                   <div className="space-y-4">
                     <div className="flex items-center space-x-3">
                       <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                         <valor.icon className="h-6 w-6 text-brand-green" />
                       </div>
                       <h4 className="text-lg font-bold text-foreground group-hover:text-brand-green transition-colors">
                         {valor.title}
                       </h4>
                     </div>
                     <p className="text-muted-foreground leading-relaxed text-sm">
                       {valor.description}
                     </p>
                   </div>
                 </Card>
               ))}
             </div>
           </div>
         </div>
       </section>

      {/* Seção 3: Nossa Equipe */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23192A48%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M0%200h40v40H0V0zm40%2040h40v40H40V40z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground relative inline-block group">
              Nossa <span className="text-brand-green">Equipe</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-accent to-brand-green transition-all duration-500 group-hover:w-full"></span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça os profissionais especializados que cuidam da sua saúde com dedicação e excelência.
            </p>
          </div>



          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-brand-green/30 bg-background">
                <CardHeader className="text-center space-y-4">
                  <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    <span className="text-brand-green">🔹</span> {member.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4 text-center">
                  <p className="text-brand-green font-semibold">
                    {member.specialty}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.crm}
                  </p>
                  
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group-hover:bg-brand-green group-hover:text-white transition-colors duration-300"
                    >
                      Agendar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 3: CTA Final */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23192A48%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M0%200h40v40H0V0zm40%2040h40v40H40V40z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Cuidado Especializado e <span className="text-brand-green">Humanizado</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nossa equipe multidisciplinar está comprometida em oferecer o melhor atendimento médico, 
                combinando conhecimento técnico, experiência e um cuidado verdadeiramente humano.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Atendimento Humanizado
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Cuidado personalizado com foco no bem-estar e conforto do paciente.
                  </p>
                </div>
              </Card>

              <Card className="p-6 text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Excelência Médica
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Profissionais qualificados e especializados em suas respectivas áreas.
                  </p>
                </div>
              </Card>

              <Card className="p-6 text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <Stethoscope className="h-8 w-8 text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Tecnologia Avançada
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Equipamentos modernos para diagnósticos precisos e tratamentos eficazes.
                  </p>
                </div>
              </Card>
            </div>

            <div className="mt-12">
               <Button 
                 size="lg" 
                 className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-3"
               >
                 Agendar Consulta
               </Button>
             </div>
           </div>
         </div>
       </section>
     </>
   );
 };

 export default QuemSomos;
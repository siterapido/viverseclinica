import { Card } from "@/components/ui/card";
import { Users, Award, Building2 } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Award,
      number: "+ 20",
      label: "anos de experiência"
    },
    {
      icon: Users,
      number: "+ 500 mil",
      label: "beneficiários"
    },
    {
      icon: Building2,
      number: "+ 2.000",
      label: "prestadores credenciados"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Há mais de 20 anos cuidando com excelência da saúde de nossos{" "}
                <span className="text-brand-blue">beneficiários!</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Security Saúde é referência em planos de saúde, garantindo qualidade e 
                atendimento próximo em cada etapa. Nossos serviços abrangem desde planos 
                individuais até soluções empresariais, com uma ampla rede de prestadores 
                e benefícios exclusivos.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center border-border/50 hover:shadow-lg transition-shadow">
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

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-blue/5 to-primary/5 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-40 h-40 bg-brand-blue/10 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-28 h-28 bg-brand-blue/20 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-brand-blue-foreground" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-brand-blue/60 rounded-full animate-pulse delay-1000"></div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-foreground">
                    Excelência em Saúde
                  </p>
                  <p className="text-muted-foreground">
                    Cuidado de qualidade há mais de duas décadas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
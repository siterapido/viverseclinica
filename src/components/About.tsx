import { Users, Award, Building2 } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Há mais de 20 anos cuidando com excelência da saúde de nossos beneficiários!
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Security Saúde é referência em planos de saúde, garantindo qualidade e atendimento próximo em cada etapa. Nossos serviços abrangem desde planos individuais até soluções empresariais, com uma ampla rede de prestadores e benefícios exclusivos.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-primary/5 rounded-xl">
                <div className="bg-secondary rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">+ 20</div>
                <div className="text-sm text-muted-foreground">anos de experiência</div>
              </div>

              <div className="text-center p-6 bg-primary/5 rounded-xl">
                <div className="bg-secondary rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">+ 500k</div>
                <div className="text-sm text-muted-foreground">beneficiários</div>
              </div>

              <div className="text-center p-6 bg-primary/5 rounded-xl">
                <div className="bg-secondary rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">+ 2.000</div>
                <div className="text-sm text-muted-foreground">prestadores credenciados</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <div className="bg-secondary/20 rounded-full p-8 w-32 h-32 mx-auto flex items-center justify-center">
                    <Users className="text-secondary" size={64} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">Cuidado Integral</h3>
                    <p className="text-muted-foreground">
                      Para você, sua família e sua empresa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-secondary text-white px-6 py-3 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">Líder no Mercado</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">Qualidade Garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
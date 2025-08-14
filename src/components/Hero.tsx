import { Button } from "@/components/ui/button";
import { Shield, Heart, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Security Saúde: Para quem sempre quer o 
                <span className="text-secondary"> melhor plano!</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Atendimento de Excelência para você, sua família e sua empresa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 text-lg"
              >
                Solicitar Cotação
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
              >
                Conhecer Planos
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-secondary/20 rounded-full p-3 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <Shield className="text-secondary" size={32} />
                </div>
                <p className="text-sm text-white/80">Mais de 20 anos</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 rounded-full p-3 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <Users className="text-secondary" size={32} />
                </div>
                <p className="text-sm text-white/80">500 mil beneficiários</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 rounded-full p-3 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <Heart className="text-secondary" size={32} />
                </div>
                <p className="text-sm text-white/80">2.000 prestadores</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-white/10 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="bg-secondary/30 rounded-full p-6 w-24 h-24 mx-auto flex items-center justify-center">
                    <Heart className="text-white" size={40} />
                  </div>
                  <p className="text-white/80 text-lg">
                    Atendimento humanizado e de qualidade
                  </p>
                </div>
              </div>
            </div>
            
            {/* Trust Badge */}
            <div className="absolute -bottom-4 -right-4 bg-secondary text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">✓ Certificado de Qualidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
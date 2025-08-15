import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Security Saúde: Para quem sempre quer o{" "}
                <span className="text-brand-blue">melhor plano!</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Atendimento de Excelência para você, sua família e sua empresa.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue/90 text-brand-blue-foreground rounded-lg px-8 py-4 text-lg"
            >
              Solicitar Cotação
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-blue/10 to-primary/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-brand-blue/20 rounded-full mx-auto flex items-center justify-center">
                  <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-brand-blue-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <p className="text-lg font-semibold text-foreground">
                  Atendimento Humanizado
                </p>
                <p className="text-muted-foreground">
                  Cuidado próximo e personalizado
                </p>
              </div>
            </div>
            
            {/* Trust Seal */}
            <div className="absolute bottom-4 right-4 bg-background rounded-lg shadow-lg p-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-blue-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Confiança</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
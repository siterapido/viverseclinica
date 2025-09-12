import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "/Imagens/2149611199.jpg",
    "/Imagens/closeup-de-um-apoio-de-maos.jpg",
    "/Imagens/retrato-de-jovens-medicos-sorridentes-juntos-retrato-da-equipe-medica-dentro-hospital-moderno-sorrindo-para-camera.jpg"
  ];

  const featuredPromotions = [
    {
      title: "Saúde da Mulher",
      description: "Ginecologia + Preventivo + USG",
      highlight: "Pacote Completo",
      icon: "♀",
      color: "from-[#C2D86C] to-[#C2D86C]/70"
    },
    {
      title: "Ultrassonografia",
      description: "Todos os exames disponíveis",
      highlight: "30% OFF",
      icon: "⚕",
      color: "from-[#C2D86C]/90 to-[#C2D86C]/60"
    },
    {
      title: "Saúde Mental",
      description: "Psiquiatria + 10 Sessões",
      highlight: "6x sem juros",
      icon: "✧",
      color: "from-[#C2D86C]/80 to-[#C2D86C]/50"
    }
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="pt-20 min-h-screen relative overflow-hidden">
      {/* Background image slideshow */}
      {backgroundImages.map((image, index) => (
        <div 
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url("${image}")`
          }}
        ></div>
      ))}
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#60A4A3]/85 via-[#60A4A3]/75 to-[#5FA4A3]/90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 min-h-[calc(100vh-5rem)] flex flex-col">
        {/* Main Hero Content */}
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="max-w-6xl w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Message */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                  <Clock className="w-4 h-4 text-[#C2D86C] mr-2" />
                  <span className="text-white/90 text-sm font-medium">Ofertas por tempo limitado</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight mb-6 drop-shadow-2xl">
                  Cuidando da sua
                  <span className="block font-normal text-[#C2D86C] relative">
                    saúde com carinho
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-white/95 font-light mb-8 max-w-xl lg:max-w-none drop-shadow-xl">
                  Atendimento humanizado, preços acessíveis e promoções especiais em Nova Parnamirim
                </p>
                
                {/* Primary CTA */}
                <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                  <Button 
                    size="lg"
                    className="px-8 py-6 text-lg bg-[#C2D86C] hover:bg-[#B8D060] text-[#2D5A59] font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
                    onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta na Clínica Viverse.', '_blank')}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Agendar Agora
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="px-8 py-6 text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all duration-300"
                    onClick={() => document.getElementById('promocoes')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Ver Promoções
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
              
              {/* Right Column - Featured Promotions */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-6 text-center lg:text-left">
                  Ofertas em Destaque
                </h3>
                
                <div className="grid gap-4">
                  {featuredPromotions.map((promo, index) => {
                    return (
                      <div
                        key={index}
                        className="group cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        onClick={() => window.open(`https://wa.me/5584994482552?text=Olá! Gostaria de saber mais sobre: ${promo.title}`, '_blank')}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${promo.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                              <span className="text-white text-xl font-light">{promo.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-semibold text-lg group-hover:text-[#C2D86C] transition-colors leading-tight">
                                {promo.title}
                              </h4>
                              <p className="text-white/80 text-sm mt-1 leading-relaxed">
                                {promo.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-center ml-4 flex-shrink-0">
                            <span className="inline-block px-3 py-1 bg-[#C2D86C] text-[#2D5A59] text-sm font-bold rounded-full whitespace-nowrap">
                              {promo.highlight}
                            </span>
                            <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-[#C2D86C] mt-2 transition-colors" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Quick Access to All Promotions */}
                <div className="text-center pt-4">
                  <button
                    onClick={() => document.getElementById('promocoes')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#C2D86C] hover:text-white text-sm font-medium underline underline-offset-4 hover:no-underline transition-all duration-300"
                  >
                    Ver todas as promoções →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center gap-2 pb-8">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'w-8 bg-[#C2D86C]' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "/Imagens/2149611199.jpg",
    "/Imagens/closeup-de-um-apoio-de-maos.jpg",
    "/Imagens/retrato-de-jovens-medicos-sorridentes-juntos-retrato-da-equipe-medica-dentro-hospital-moderno-sorrindo-para-camera.jpg"
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="pt-20 min-h-screen relative overflow-hidden flex items-center">
      <div className="container mx-auto px-4 relative z-10 flex items-center min-h-[calc(100vh-5rem)]">
        <div className="grid lg:grid-cols-5 gap-8 w-full items-center">
          {/* Text Content - 40% */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight">
              Cuidando da sua
              <span className="block font-normal text-[#60A4A3] relative inline-block group">
                saúde com carinho
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C2D86C] to-[#60A4A3] transition-all duration-500 group-hover:w-full"></span>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              Atendimento humanizado e preços acessíveis em Nova Parnamirim
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                variant="gradient"
                className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta na Clínica Viverse.', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Image Content - 60% */}
          <div className="lg:col-span-3 relative">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
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
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {backgroundImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'w-8 bg-white' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
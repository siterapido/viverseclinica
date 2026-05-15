import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "/Imagens/fotoclinica.webp",
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
          <div className="max-w-4xl w-full text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight mb-6 drop-shadow-2xl">
              Cuidando da sua
              <span className="block font-normal text-[#C2D86C] relative">
                saúde com carinho
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/95 font-light mb-8 max-w-2xl mx-auto drop-shadow-xl">
              Atendimento humanizado, preços acessíveis e promoções especiais em Nova Parnamirim
            </p>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer Serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
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
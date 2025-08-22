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
      
      {/* Gradient overlay with better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="max-w-3xl w-full text-center">
          {/* Minimalist content */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight mb-6 mx-auto drop-shadow-lg">
            Cuidando da sua
            <span className="block font-normal text-[#5FA4A3] relative inline-block group">
              saúde com carinho
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C2D86C] to-[#60A4A3] transition-all duration-500 group-hover:w-full"></span>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light mb-8 md:mb-12 max-w-2xl mx-auto px-4 drop-shadow-md">
            Atendimento humanizado e preços acessíveis em Nova Parnamirim
          </p>
          
          {/* Minimalist CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button 
              size="lg"
              variant="gradient"
              className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta na Clínica Viverse.', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar Consulta
            </Button>
            
            <Button 
              variant="minimal-outline"
              size="lg"
              className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-[#60A4A3] hover:bg-[#558F8E] border-[#60A4A3] text-white w-full sm:w-auto"
              onClick={() => document.getElementById('especialidades')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Especialidades
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          {/* Minimalist trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 md:mt-16">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-light text-[#5FA4A3]">1000+</p>
              <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest">Pacientes</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-light text-[#5FA4A3]">5</p>
              <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest">Especialidades</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-light text-[#5FA4A3]">100%</p>
              <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest">Satisfação</p>
            </div>
          </div>

          {/* Slide indicators - centered */}
          <div className="flex justify-center gap-2 mt-8 absolute bottom-8 left-0 right-0">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'w-8 bg-[#60A4A3]' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";

const CtaFinal = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&h=900&fit=crop&crop=center")'
        }}
      ></div>
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main CTA Content */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            Agende sua consulta
          </h2>
          
          <p className="text-xl text-white/90 mb-10">
            Cuidamos da sua saúde com qualidade e preços acessíveis
          </p>

          {/* Single CTA Button */}
          <Button 
            variant="gradient"
            size="lg"
            className="px-10 py-6 text-xl shadow-2xl hover:shadow-3xl"
            onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta na Clínica Viverse.', '_blank')}
          >
            Agendar pelo WhatsApp
          </Button>
          
          <p className="text-white/70 text-sm mt-6">
            (84) 99448-2552
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;
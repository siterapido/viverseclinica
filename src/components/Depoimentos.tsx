import { useEffect } from "react";

declare global {
  interface Window {
    elfsight?: {
      initialize: () => void;
    };
  }
}

const Depoimentos = () => {
  useEffect(() => {
    // Carrega o script do Elfsight se ainda não estiver carregado
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    
    // Verifica se o script já foi adicionado
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      document.body.appendChild(script);
    }

    // Force re-render of Elfsight widget
    if (window.elfsight) {
      window.elfsight.initialize();
    }
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 relative inline-block group">
            O que nossos pacientes dizem
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C2D86C] to-[#60A4A3] transition-all duration-500 group-hover:w-full"></span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Avaliações reais do Google sobre nosso atendimento
          </p>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="max-w-6xl mx-auto">
          <div className="elfsight-app-20f89c98-6480-46c3-9510-35f738f9062b" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
import React from "react";

const Depoimentos = () => {

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
          <div className="elfsight-app-209d711b-629b-4bcf-a7ed-595d4cd85703" data-elfsight-app-lazy="false"></div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
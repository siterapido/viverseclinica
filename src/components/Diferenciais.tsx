import { CheckCircle } from "lucide-react";

const Diferenciais = () => {
  const mainDiferenciais = [
    {
      number: "01",
      title: "Atendimento sem burocracia",
      description: "Consultas rápidas e eficientes, priorizando seu tempo e bem-estar"
    },
    {
      number: "02",
      title: "Valores acessíveis",
      description: "Preços justos e transparentes para cuidados de saúde de qualidade"
    },
    {
      number: "03",
      title: "Estrutura moderna",
      description: "Instalações confortáveis e equipamentos de última geração"
    },
    {
      number: "04",
      title: "Profissionais qualificados",
      description: "Equipe médica especializada e experiente"
    }
  ];

  const additionalFeatures = [
    "Localização privilegiada no AR Mall",
    "Horários flexíveis de atendimento",
    "Atendimento humanizado e personalizado",
    "Diagnósticos precisos com tecnologia",
    "Agendamento fácil via WhatsApp",
    "Ambiente climatizado e confortável",
    "Resultados rápidos de exames",
    "Equipe multidisciplinar especializada"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 relative inline-block group">
            Nossos <span className="font-medium text-[#60A4A3]">Diferenciais</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C2D86C] to-[#60A4A3] transition-all duration-500 group-hover:w-full"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O que nos torna únicos no cuidado com sua saúde
          </p>
        </div>

        {/* Main Diferenciais - Elegant cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mainDiferenciais.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Number */}
              <div className="text-6xl font-thin text-gray-200 mb-4 group-hover:text-brand-green/20 transition-colors duration-300">
                {item.number}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-brand-green transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              
              {/* Accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-green/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Additional features section - Elegant minimal style */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Title */}
            <div>
              <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                E ainda oferecemos <span className="font-medium text-brand-green">muito mais</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada detalhe pensado para proporcionar a melhor experiência em cuidados de saúde, 
                com conforto, tecnologia e humanização.
              </p>
            </div>
            
            {/* Right - Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {additionalFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 group"
                >
                  <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Diferenciais;
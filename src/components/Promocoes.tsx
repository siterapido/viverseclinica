import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Promocoes = () => {
  const promocoes = [
    {
      titulo: "Saúde da Mulher",
      itens: [
        "Ginecologia",
        "Preventivo",
        "USG Transvaginal"
      ]
    },
    {
      titulo: "Saúde Mental",
      itens: [
        "1 Psiquiatria Adulto",
        "10 Sessões de Psicologia"
      ]
    },
    {
      titulo: "Emagrecimento",
      itens: [
        "Nutrologia",
        "4 Consultas Nutrição"
      ]
    },
    {
      titulo: "Neurodesenvolvimento",
      itens: [
        "1 Neurologia Infantil",
        "Avaliação Neuropsicológica (8 sessões)"
      ]
    },
    {
      titulo: "Melhor Idade",
      itens: [
        "Geriatria",
        "Endocrinologia",
        "Nutrição"
      ]
    },
    {
      titulo: "Saúde Vascular",
      itens: [
        "Angiologia",
        "USG Membros Inferiores c/ Doppler"
      ]
    },
    {
      titulo: "Ultrassonografia",
      itens: [
        "30% de desconto",
        "Todos os tipos de ultrassom"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Minimal Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 relative inline-block group">
            Promoções
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C2D86C] to-[#60A4A3] transition-all duration-500 group-hover:w-full"></span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofertas especiais por tempo limitado
          </p>
        </div>

        {/* Healthcare Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {promocoes.map((promo, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              onClick={() => window.open(`https://wa.me/5584994482552?text=Olá! Gostaria de saber mais sobre: ${promo.titulo}`, '_blank')}
            >
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {promo.titulo}
                </h3>
                <ul className="space-y-2">
                  {promo.itens.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>


        {/* Terms */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          *Consulte condições no atendimento
        </p>
      </div>
    </section>
  );
};

export default Promocoes;
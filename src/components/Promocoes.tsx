import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Promocoes = () => {
  const promocoes = [
    {
      titulo: "Check-up Completo",
      descricao: "Consulta + exames básicos",
      desconto: "-40%"
    },
    {
      titulo: "Primeira Consulta",
      descricao: "Qualquer especialidade",
      desconto: "-50%"
    },
    {
      titulo: "Pacote Família",
      descricao: "4 consultas mensais",
      desconto: "Economia"
    },
    {
      titulo: "Nutrição Trimestral",
      descricao: "3 meses de acompanhamento",
      desconto: "Promoção"
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

        {/* Ultra Minimal Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {promocoes.map((promo, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => window.open(`https://wa.me/5584994482552?text=Olá! Gostaria de saber mais sobre: ${promo.titulo}`, '_blank')}
            >
              <div className="space-y-2 pb-4 border-b border-gray-100 group-hover:border-primary/30 transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                    {promo.titulo}
                  </h3>
                  <span className="text-xs text-primary">
                    {promo.desconto}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {promo.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal PIX Discount Banner */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
              <span className="font-medium text-primary">10% de desconto</span> no pagamento via PIX
            </h3>
            <p className="text-muted-foreground mb-8">
              Parcelamento em até 12x também disponível para sua comodidade
            </p>
            <Button
              variant="gradient"
              size="lg"
              className="px-8"
              onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de saber mais sobre o desconto via PIX.', '_blank')}
            >
              Aproveitar Desconto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
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
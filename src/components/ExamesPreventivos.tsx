import { Button } from "@/components/ui/button";
import { CreditCard, Calendar, Shield, CheckCircle } from "lucide-react";

const ExamesPreventivos = () => {
  const convenios = [
    {
      icon: Shield,
      title: "Unimed",
      description: "Atendimento completo para beneficiários",
      status: "Aceito"
    },
    {
      icon: Shield,
      title: "Bradesco Saúde",
      description: "Cobertura para consultas e exames",
      status: "Aceito"
    },
    {
      icon: Shield,
      title: "SulAmérica",
      description: "Rede credenciada completa",
      status: "Aceito"
    },
    {
      icon: Shield,
      title: "Outros Convênios",
      description: "Consulte disponibilidade",
      status: "Consultar"
    }
  ];

  const formasPagamento = [
    {
      icon: CreditCard,
      title: "Cartões de Crédito",
      description: "Visa, Mastercard, Elo e American Express",
      parcelamento: "Parcelamos em até 6x sem juros"
    },
    {
      icon: CreditCard,
      title: "Cartões de Débito",
      description: "Todas as bandeiras aceitas",
      parcelamento: "Pagamento à vista"
    },
    {
      icon: Calendar,
      title: "PIX",
      description: "Pagamento instantâneo",
      parcelamento: "Desconto de 5% para pagamento via PIX"
    },
    {
      icon: Calendar,
      title: "Dinheiro",
      description: "Pagamento em espécie",
      parcelamento: "Desconto de 5% para pagamento à vista"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 relative inline-block group">
            <span className="font-medium text-primary">Convênios</span> e Formas de Pagamento
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C2D86C] to-[#60A4A3] transition-all duration-500 group-hover:w-full"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Facilitamos o acesso à saúde com diversas opções de pagamento
          </p>
        </div>

        {/* Convênios Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-foreground mb-8 text-center">
            Convênios <span className="font-medium text-[#60A4A3]">Aceitos</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {convenios.map((convenio, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#60A4A3]/10 rounded-lg">
                    <convenio.icon className="h-6 w-6 text-[#60A4A3]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{convenio.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{convenio.description}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      convenio.status === 'Aceito' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {convenio.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formas de Pagamento Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-foreground mb-8 text-center">
            Formas de <span className="font-medium text-[#60A4A3]">Pagamento</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {formasPagamento.map((forma, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#60A4A3]/10 rounded-lg">
                    <forma.icon className="h-6 w-6 text-[#60A4A3]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">{forma.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{forma.description}</p>
                    <div className="flex items-center text-sm text-[#60A4A3] font-medium">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      {forma.parcelamento}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl py-12 px-8 shadow-sm">
          <h3 className="text-2xl font-light text-foreground mb-4">
            Valores acessíveis para <span className="font-medium text-[#60A4A3]">sua saúde</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Consulte-nos sobre condições especiais e descontos para pagamento à vista.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="gradient"
              size="lg"
              className="px-8 py-3"
              onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de saber sobre convênios e formas de pagamento na Clínica Viverse.', '_blank')}
            >
              Consultar Valores
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-3 border-[#60A4A3] text-[#60A4A3] hover:bg-[#60A4A3] hover:text-white"
              onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de verificar se meu convênio é aceito na Clínica Viverse.', '_blank')}
            >
              Verificar Convênio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamesPreventivos;
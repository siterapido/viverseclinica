import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Building2, Users } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "PREMIUM NACIONAL",
    subtitle: "Coparticipação Completa + Quarto Coletivo",
    price: "R$ 129,90",
    features: [
      "Cobertura nacional completa",
      "Quarto coletivo",
      "Emergência 24h",
      "Exames laboratoriais",
      "Consultas especializadas",
      "Cirurgias eletivas"
    ],
    popular: false,
    badge: "Básico"
  },
  {
    name: "SUPERIOR",
    subtitle: "Coparticipação Básica + Quarto Privativo",
    price: "R$ 189,90",
    features: [
      "Coparticipação reduzida",
      "Quarto privativo",
      "Emergência 24h premium",
      "Exames de imagem",
      "Check-up anual incluso",
      "Telemedicina ilimitada",
      "Desconto em medicamentos"
    ],
    popular: true,
    badge: "Mais Escolhido"
  },
  {
    name: "IDEAL",
    subtitle: "Coparticipação Completa + Quarto Privativo",
    price: "R$ 249,90",
    features: [
      "Zero coparticipação",
      "Quarto privativo VIP",
      "Atendimento premium 24h",
      "Todos os exames inclusos",
      "Check-up semestral",
      "Telemedicina premium",
      "Farmácia com desconto máximo",
      "Concierge médico"
    ],
    popular: false,
    badge: "Premium"
  }
];

const PlansTable = () => {
  const [hasCompany, setHasCompany] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            Proteção completa para você e sua família
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano de saúde que melhor se encaixa no seu momento. A partir de R$ 129,90*
          </p>
          
          {/* Company Toggle */}
          <div className="flex justify-center gap-4">
            <Button
              variant={!hasCompany ? "secondary" : "outline"}
              onClick={() => setHasCompany(false)}
              className={!hasCompany ? "bg-secondary text-white" : ""}
            >
              <Users className="mr-2" size={18} />
              Não tenho CNPJ
            </Button>
            <Button
              variant={hasCompany ? "secondary" : "outline"}
              onClick={() => setHasCompany(true)}
              className={hasCompany ? "bg-secondary text-white" : ""}
            >
              <Building2 className="mr-2" size={18} />
              Tenho CNPJ
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden ${
                plan.popular 
                  ? 'border-secondary shadow-lg scale-105' 
                  : 'border-border hover:shadow-md'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-secondary text-white text-center py-2">
                  <div className="text-sm font-semibold flex items-center justify-center">
                    <Star className="mr-1" size={16} />
                    {plan.badge}
                  </div>
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <div className="space-y-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {plan.subtitle}
                  </p>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary">
                      {plan.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      por mês*
                    </div>
                  </div>
                  {!plan.popular && (
                    <Badge variant="secondary" className="mt-2">
                      {plan.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                        <Check className="text-secondary" size={16} />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-secondary hover:bg-secondary/90 text-white' 
                      : 'bg-primary hover:bg-primary/90 text-white'
                  }`}
                  size="lg"
                >
                  Solicitar Cotação
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          * Valores sujeitos a análise e podem variar conforme idade e região.
        </div>
      </div>
    </section>
  );
};

export default PlansTable;
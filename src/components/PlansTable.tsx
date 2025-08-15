import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PlansTable = () => {
  const [hasCompany, setHasCompany] = useState(false);

  const plans = [
    {
      name: "PREMIUM NACIONAL",
      subtitle: "Coparticipação Completa + Quarto Coletivo",
      price: "R$ 129,90",
      features: [
        "Atendimento nacional",
        "Coparticipação em consultas",
        "Internação em quarto coletivo",
        "Urgência e emergência 24h",
        "Exames laboratoriais",
        "Telemedicina incluída"
      ],
      highlight: false
    },
    {
      name: "SUPERIOR",
      subtitle: "Coparticipação Básica + Quarto Privativo",
      price: "R$ 189,90",
      features: [
        "Atendimento regional",
        "Coparticipação reduzida",
        "Internação em quarto privativo",
        "Urgência e emergência 24h",
        "Exames de alta complexidade",
        "Telemedicina incluída",
        "Desconto em farmácias"
      ],
      highlight: true
    },
    {
      name: "IDEAL",
      subtitle: "Coparticipação Completa + Quarto Privativo",
      price: "R$ 249,90",
      features: [
        "Atendimento nacional premium",
        "Sem coparticipação",
        "Internação em quarto privativo",
        "Urgência e emergência 24h",
        "Todos os exames incluídos",
        "Telemedicina ilimitada",
        "Desconto máximo em farmácias",
        "Check-up anual gratuito"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Proteção completa para você e sua{" "}
              <span className="text-brand-blue">família</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano de saúde que melhor se encaixa no seu momento. 
              A partir de R$ 129,90*.
            </p>
          </div>

          {/* CNPJ Toggle */}
          <div className="flex justify-center space-x-4">
            <Button
              variant={!hasCompany ? "default" : "outline"}
              onClick={() => setHasCompany(false)}
              className={!hasCompany ? "bg-brand-blue hover:bg-brand-blue/90" : ""}
            >
              Não tenho CNPJ
            </Button>
            <Button
              variant={hasCompany ? "default" : "outline"}
              onClick={() => setHasCompany(true)}
              className={hasCompany ? "bg-brand-blue hover:bg-brand-blue/90" : ""}
            >
              Tenho CNPJ
            </Button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-2 transition-all hover:shadow-xl ${
                plan.highlight 
                  ? "border-brand-blue shadow-lg scale-105" 
                  : "border-border/50 hover:border-brand-blue/30"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-brand-blue text-brand-blue-foreground text-center py-2 text-sm font-medium">
                    Mais Popular
                  </div>
                </div>
              )}
              
              <CardHeader className={`text-center space-y-4 ${plan.highlight ? "pt-12" : ""}`}>
                <div className="space-y-2">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {plan.subtitle}
                  </p>
                </div>
                
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-brand-blue">
                    {plan.price}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    *Valor individual a partir de
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand-blue" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.highlight 
                      ? "bg-brand-blue hover:bg-brand-blue/90 text-brand-blue-foreground" 
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  Solicitar Cotação
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            *Valores sujeitos a alteração conforme idade, localização e tipo de contratação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansTable;
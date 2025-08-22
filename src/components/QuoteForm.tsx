import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    hasCompany: "no",
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    observations: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted to CRM:", formData);
    // TODO: Integrate with CRM system as mentioned in briefing
    // This form should connect to the CRM for personalized service
    alert("Obrigado! Nossa equipe entrará em contato em breve para oferecer o melhor aconselhamento consultivo.");
  };

  const states = [
    "Rio Grande do Norte",
    "Paraíba",
    "Pernambuco",
    "Ceará",
    "Bahia",
    "Alagoas",
    "Sergipe",
    "Maranhão",
    "Piauí"
  ];

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23192A48%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M0%200h30v30H0V0zm30%2030h30v30H30V30z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50 shadow-xl bg-background">
            <CardHeader className="text-center space-y-4 bg-secondary/50 rounded-t-lg">
              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                Encontre o plano ideal{" "}
                <span className="text-brand-blue">para você</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Nossa equipe vai te ajudar a escolher a melhor proteção para sua saúde. 
                Sem vendas agressivas, apenas aconselhamento consultivo e transparente.
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Type Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Tipo de plano desejado:</Label>
                  <RadioGroup
                    value={formData.hasCompany}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, hasCompany: value }))}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2 border-2 rounded-lg p-4 cursor-pointer hover:bg-primary/5 hover:border-primary transition-all">
                      <RadioGroupItem value="yes" id="company-yes" />
                      <Label htmlFor="company-yes" className="cursor-pointer">
                        <div className="space-y-1">
                          <div className="font-medium">Plano PME</div>
                          <div className="text-sm text-muted-foreground">MEI, ME ou EPP (2-99 vidas)</div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border-2 rounded-lg p-4 cursor-pointer hover:bg-brand-blue/5 hover:border-brand-blue transition-all">
                      <RadioGroupItem value="no" id="company-no" />
                      <Label htmlFor="company-no" className="cursor-pointer">
                        <div className="space-y-1">
                          <div className="font-medium">Pessoa Física</div>
                          <div className="text-sm text-muted-foreground">Individual ou Familiar</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(81) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade *</Label>
                    <Input
                      id="city"
                      type="text"
                      placeholder="Sua cidade"
                      value={formData.city}
                      onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">Estado *</Label>
                  <Select
                    value={formData.state}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu estado" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="observations">Observações</Label>
                  <Textarea
                    id="observations"
                    placeholder="Conte-nos sobre suas necessidades. Queremos entender melhor como podemos te ajudar a escolher o plano perfeito..."
                    value={formData.observations}
                    onChange={(e) => setFormData(prev => ({ ...prev, observations: e.target.value }))}
                    rows={4}
                  />
                </div>

                <Button
                  variant="gradient"
                  type="submit"
                  size="lg"
                  className="w-full py-4"
                >
                  Receber Minha Proposta Personalizada
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  🔒 Seus dados estão protegidos. Nossa equipe especializada entrará em contato 
                  para oferecer o melhor aconselhamento, sem pressão comercial. 
                  <br />Formulário conectado ao nosso CRM para atendimento personalizado.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
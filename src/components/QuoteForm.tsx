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
    console.log("Form submitted:", formData);
    // Here you would handle the form submission
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
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50 shadow-xl">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                Preencha o formulário e garanta as{" "}
                <span className="text-brand-blue">melhores condições</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Nossa equipe entrará em contato em até 2 horas úteis
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Type Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Tipo de contratação:</Label>
                  <RadioGroup
                    value={formData.hasCompany}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, hasCompany: value }))}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50">
                      <RadioGroupItem value="yes" id="company-yes" />
                      <Label htmlFor="company-yes" className="cursor-pointer">
                        <div className="space-y-1">
                          <div className="font-medium">Tenho CNPJ</div>
                          <div className="text-sm text-muted-foreground">Ideal para empresas</div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50">
                      <RadioGroupItem value="no" id="company-no" />
                      <Label htmlFor="company-no" className="cursor-pointer">
                        <div className="space-y-1">
                          <div className="font-medium">Não tenho CNPJ</div>
                          <div className="text-sm text-muted-foreground">Ideal para pessoas físicas</div>
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
                      placeholder="(84) 99999-9999"
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
                    placeholder="Conte-nos um pouco sobre suas necessidades específicas..."
                    value={formData.observations}
                    onChange={(e) => setFormData(prev => ({ ...prev, observations: e.target.value }))}
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-brand-blue-foreground"
                >
                  Solicitar Cotação Gratuita
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar o formulário, você concorda com nossa política de privacidade.
                  Seus dados estão seguros e não serão compartilhados com terceiros.
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
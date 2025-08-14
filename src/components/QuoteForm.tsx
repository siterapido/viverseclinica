import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2, Users, Phone, Mail } from "lucide-react";
import { useState } from "react";

const QuoteForm = () => {
  const [hasCompany, setHasCompany] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">
              Preencha o formulário e garanta as melhores condições
            </h2>
            <p className="text-xl text-muted-foreground">
              Nossa equipe especializada entrará em contato para oferecer a melhor proposta para suas necessidades.
            </p>
          </div>

          <Card className="shadow-lg border-0 bg-gray-50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-primary mb-6">
                Solicite sua Cotação Gratuita
              </CardTitle>
              
              {/* Company Toggle */}
              <div className="flex justify-center gap-4">
                <Button
                  variant={!hasCompany ? "secondary" : "outline"}
                  onClick={() => setHasCompany(false)}
                  className={`${!hasCompany ? "bg-secondary text-white" : ""} flex items-center gap-2`}
                >
                  <Users size={18} />
                  Não tenho CNPJ
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">
                    Pessoa Física
                  </span>
                </Button>
                <Button
                  variant={hasCompany ? "secondary" : "outline"}
                  onClick={() => setHasCompany(true)}
                  className={`${hasCompany ? "bg-secondary text-white" : ""} flex items-center gap-2`}
                >
                  <Building2 size={18} />
                  Tenho CNPJ
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">
                    Empresarial
                  </span>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary font-semibold">
                      Nome Completo *
                    </Label>
                    <Input 
                      id="name" 
                      placeholder="Digite seu nome completo"
                      className="bg-white border-gray-300 focus:border-secondary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary font-semibold">
                      E-mail *
                    </Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-white border-gray-300 focus:border-secondary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-primary font-semibold">
                      Telefone *
                    </Label>
                    <Input 
                      id="phone" 
                      placeholder="(84) 99999-9999"
                      className="bg-white border-gray-300 focus:border-secondary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-primary font-semibold">
                      Cidade *
                    </Label>
                    <Input 
                      id="city" 
                      placeholder="Digite sua cidade"
                      className="bg-white border-gray-300 focus:border-secondary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="text-primary font-semibold">
                    Estado *
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-white border-gray-300 focus:border-secondary">
                      <SelectValue placeholder="Selecione seu estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rn">Rio Grande do Norte</SelectItem>
                      <SelectItem value="pe">Pernambuco</SelectItem>
                      <SelectItem value="pb">Paraíba</SelectItem>
                      <SelectItem value="ce">Ceará</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Company Information (conditional) */}
                {hasCompany && (
                  <div className="space-y-6 p-6 bg-secondary/5 rounded-lg border-l-4 border-secondary">
                    <h3 className="text-lg font-semibold text-primary flex items-center">
                      <Building2 className="mr-2" size={20} />
                      Informações da Empresa
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-primary font-semibold">
                          Nome da Empresa
                        </Label>
                        <Input 
                          id="company" 
                          placeholder="Nome da sua empresa"
                          className="bg-white border-gray-300 focus:border-secondary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cnpj" className="text-primary font-semibold">
                          CNPJ
                        </Label>
                        <Input 
                          id="cnpj" 
                          placeholder="00.000.000/0000-00"
                          className="bg-white border-gray-300 focus:border-secondary"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="observations" className="text-primary font-semibold">
                    Observações (Opcional)
                  </Label>
                  <Textarea 
                    id="observations"
                    placeholder="Conte-nos mais sobre suas necessidades, número de dependentes, preferências de atendimento, etc."
                    className="bg-white border-gray-300 focus:border-secondary min-h-[100px]"
                  />
                </div>

                <div className="text-center space-y-4">
                  <Button 
                    type="submit"
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-12 py-4 text-lg"
                  >
                    Solicitar Cotação Gratuita
                  </Button>
                  
                  <p className="text-sm text-muted-foreground">
                    * Campos obrigatórios. Seus dados estão seguros conosco.
                  </p>
                </div>
              </form>

              {/* Contact Info */}
              <div className="border-t pt-6 mt-8">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-semibold text-primary">
                    Ou entre em contato diretamente:
                  </h3>
                  <div className="flex justify-center gap-8">
                    <a 
                      href="tel:+5584999999999" 
                      className="flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors"
                    >
                      <Phone size={20} />
                      <span className="font-semibold">(84) 9999-9999</span>
                    </a>
                    <a 
                      href="mailto:contato@securitysaude.com.br" 
                      className="flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors"
                    >
                      <Mail size={20} />
                      <span className="font-semibold">contato@securitysaude.com.br</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
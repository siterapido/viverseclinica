import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactForm = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Solicite sua Cotação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato com você em até 24 horas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Por que escolher a Security Saúde?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Atendimento Personalizado</h4>
                    <p className="text-muted-foreground text-sm">Consultoria especializada para encontrar o plano ideal.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Melhores Preços</h4>
                    <p className="text-muted-foreground text-sm">Condições exclusivas e descontos especiais.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Suporte Completo</h4>
                    <p className="text-muted-foreground text-sm">Acompanhamento durante todo o processo de contratação.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nome completo</label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Telefone</label>
                    <Input placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Estado</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rn">Rio Grande do Norte</SelectItem>
                        <SelectItem value="pb">Paraíba</SelectItem>
                        <SelectItem value="pe">Pernambuco</SelectItem>
                        <SelectItem value="ce">Ceará</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Tipo de plano</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de plano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="familiar">Familiar</SelectItem>
                      <SelectItem value="empresarial">Empresarial</SelectItem>
                      <SelectItem value="mei">MEI</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Mensagem (opcional)</label>
                  <Textarea placeholder="Descreva suas necessidades ou tire suas dúvidas..." rows={4} />
                </div>

                <Button variant="gradient" className="w-full py-4">
                  Solicitar Cotação Gratuita
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Ao enviar este formulário, você concorda com nossos termos de uso e política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
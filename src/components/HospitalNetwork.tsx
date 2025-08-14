import { Button } from "@/components/ui/button";
import { Building2, MapPin, Star } from "lucide-react";

const HospitalNetwork = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            Tenha acesso a uma ampla rede de hospitais de qualidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa infraestrutura conta com parcerias estratégicas com os melhores hospitais de referência, 
            garantindo atendimento de excelência onde você estiver.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Featured Hospital */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Hospital Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="bg-white rounded-full p-6 w-20 h-20 mx-auto flex items-center justify-center shadow-lg">
                    <Building2 className="text-primary" size={40} />
                  </div>
                  <p className="text-primary font-semibold text-lg">Hospital de Referência</p>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-primary">Hospital Security Care</h3>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Centro de excelência em cardiologia, oncologia e cirurgia geral. 
                  Equipamentos de última geração e equipe médica especializada.
                </p>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>Natal, Rio Grande do Norte</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Network Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-secondary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="text-secondary" size={32} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Hospitais Parceiros</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-secondary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="text-secondary" size={32} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">85+</div>
                <div className="text-muted-foreground">Cidades Atendidas</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-secondary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="text-secondary" size={32} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">4.8</div>
                <div className="text-muted-foreground">Avaliação Média</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-secondary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="text-secondary" size={32} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-muted-foreground">Atendimento</div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8"
              >
                Solicitar Cotação
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalNetwork;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";

const HospitalNetwork = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Tenha acesso a uma ampla rede de{" "}
                <span className="text-brand-blue">hospitais de qualidade</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa infraestrutura conta com parcerias estratégicas com os principais 
                hospitais e clínicas da região. Garantimos atendimento de excelência com 
                tecnologia de ponta e profissionais qualificados, sempre próximo de você.
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue/90 text-brand-blue-foreground rounded-lg"
            >
              Solicitar Cotação
            </Button>
          </div>

          {/* Right Content - Hospital Highlight */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow">
              <div className="relative">
                {/* Hospital Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-brand-blue/10 to-primary/10 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-brand-blue/20 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-8 h-8 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-4v-4H6v-4h4V5h4v4h4v4h-4v4z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Hospital de Referência</p>
                  </div>
                </div>
                
                {/* Quality Badge */}
                <div className="absolute top-4 right-4 bg-background rounded-full shadow-lg p-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">5.0</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Hospital Santa Catarina
                    </h3>
                    <div className="flex items-center space-x-2 text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Natal - RN</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    Referência em atendimento de alta complexidade, com tecnologia 
                    de ponta e equipe médica especializada em diversas áreas.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs rounded-full">
                      UTI Neonatal
                    </span>
                    <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs rounded-full">
                      Cardiologia
                    </span>
                    <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs rounded-full">
                      Oncologia
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalNetwork;
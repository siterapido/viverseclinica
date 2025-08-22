import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, ChevronLeft, ChevronRight, Building2, Heart, Activity, Shield } from "lucide-react";

const HospitalNetwork = () => {
  const [currentPartner, setCurrentPartner] = useState(0);

  const partners = [
    {
      name: "Laboratórios Parceiros",
      location: "Parnamirim e Região - RN",
      rating: 5.0,
      description: "Parcerias estratégicas com os melhores laboratórios da região para exames complementares rápidos e precisos.",
      specialties: ["Análises Clínicas", "Exames de Imagem", "Patologia"],
      icon: Activity,
      color: "brand-blue"
    },
    {
      name: "Rede Credenciada de Especialistas",
      location: "Grande Natal - RN",
      rating: 4.9,
      description: "Ampla rede de médicos especialistas credenciados para encaminhamentos quando necessário.",
      specialties: ["Cardiologia", "Ginecologia", "Ortopedia"],
      icon: Heart,
      color: "primary"
    },
    {
      name: "Hospitais de Referência",
      location: "Natal e Região - RN",
      rating: 4.8,
      description: "Convênios com hospitais de referência para casos que requerem internação e procedimentos complexos.",
      specialties: ["Urgência", "Emergência", "Cirurgias"],
      icon: Building2,
      color: "brand-blue"
    },
    {
      name: "Farmácias Conveniadas",
      location: "Nova Parnamirim - RN",
      rating: 5.0,
      description: "Descontos especiais em medicamentos nas farmácias parceiras próximas à clínica.",
      specialties: ["Medicamentos", "Genéricos", "Manipulados"],
      icon: Shield,
      color: "primary"
    }
  ];

  // Auto-rotate partners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [partners.length]);

  const nextPartner = () => {
    setCurrentPartner((prev) => (prev + 1) % partners.length);
  };

  const prevPartner = () => {
    setCurrentPartner((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const currentData = partners[currentPartner];
  
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🍃</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Conheça nossa rede de{" "}
                <span className="text-brand-blue">parceiros qualificados</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Clínica Viverse trabalha com uma rede de parceiros estratégicos 
                para garantir que você tenha acesso completo aos melhores serviços de saúde da região. 
                Cuidamos de você com qualidade e confiança em todos os momentos.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-green-500">✔</span>
                  <span>Rede credenciada de qualidade</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-green-500">✔</span>
                  <span>Atendimento próximo e acessível</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-green-500">✔</span>
                  <span>Parcerias estratégicas confiáveis</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5584994482552?text=Olá! Gostaria de conhecer mais sobre os parceiros da Clínica Viverse."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="gradient"
                size="lg"
              >
                📲 Saber Mais pelo WhatsApp
              </Button>
            </a>
          </div>

          {/* Right Content - Rotating Partner Cards */}
          <div className="space-y-6">
            <div className="relative">
              <Card className="overflow-hidden border-border/50 shadow-xl transition-all duration-500">
                <div className="relative">
                  {/* Partner Image Placeholder */}
                  <div className={`h-48 bg-${currentData.color}/10 flex items-center justify-center transition-all duration-500`}>
                    <div className="text-center space-y-2">
                      <div className={`w-16 h-16 bg-${currentData.color}/20 rounded-full mx-auto flex items-center justify-center`}>
                        <currentData.icon className={`w-8 h-8 text-${currentData.color}`} />
                      </div>
                      <p className="text-sm text-muted-foreground">Parceiro Qualificado</p>
                    </div>
                  </div>
                  
                  {/* Quality Badge */}
                  <div className="absolute top-4 right-4 bg-background rounded-full shadow-lg p-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{currentData.rating}</span>
                    </div>
                  </div>
                  
                  {/* Navigation Controls */}
                  <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <button
                      onClick={prevPartner}
                      className="w-10 h-10 bg-background/90 hover:bg-background rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                      aria-label="Parceiro anterior"
                    >
                      <ChevronLeft className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                  
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <button
                      onClick={nextPartner}
                      className="w-10 h-10 bg-background/90 hover:bg-background rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                      aria-label="Próximo parceiro"
                    >
                      <ChevronRight className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground transition-all duration-300">
                        {currentData.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{currentData.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground min-h-[3rem] transition-all duration-300">
                      {currentData.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {currentData.specialties.map((specialty, index) => (
                        <span key={index} className={`px-3 py-1 bg-${currentData.color}/10 text-${currentData.color} text-xs rounded-full transition-all duration-300`}>
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-2 pt-4">
                      {partners.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPartner(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentPartner 
                              ? `bg-${currentData.color}` 
                              : 'bg-border hover:bg-border/60'
                          }`}
                          aria-label={`Ir para parceiro ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-background rounded-2xl p-8 max-w-4xl mx-auto border border-border/50 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ✨ <span className="text-brand-blue">Clínica Viverse</span> – Sua saúde em boas mãos
            </h3>
            <p className="text-muted-foreground mb-6">
              Com nossa rede de parceiros qualificados, garantimos que você tenha acesso aos melhores 
              serviços de saúde da região, sempre com preços acessíveis e atendimento humanizado.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  📍 <strong>Localização:</strong> Av. Abel Cabral, 2550 – AR Mall
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  📲 <strong>WhatsApp:</strong> (84) 99448-2552
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalNetwork;
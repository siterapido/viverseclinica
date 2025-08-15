import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, ChevronLeft, ChevronRight, Building2, Heart, Activity } from "lucide-react";

const HospitalNetwork = () => {
  const [currentHospital, setCurrentHospital] = useState(0);

  const hospitals = [
    {
      name: "Hospital Santa Catarina",
      location: "Natal - RN",
      rating: 5.0,
      description: "Referência em atendimento de alta complexidade, com tecnologia de ponta e equipe médica especializada em diversas áreas.",
      specialties: ["UTI Neonatal", "Cardiologia", "Oncologia"],
      icon: Building2,
      color: "brand-blue"
    },
    {
      name: "Hospital Universitário Onofre Lopes",
      location: "Natal - RN",
      rating: 4.8,
      description: "Centro de excelência em ensino e pesquisa médica, oferecendo atendimento humanizado com foco em inovação e qualidade.",
      specialties: ["Neurologia", "Ortopedia", "Pediatria"],
      icon: Heart,
      color: "primary"
    },
    {
      name: "Hospital do Coração",
      location: "João Pessoa - PB",
      rating: 4.9,
      description: "Especializado em cardiologia e cirurgia cardíaca, com equipamentos de última geração e equipe altamente qualificada.",
      specialties: ["Cardiologia", "Hemodinâmica", "Cirurgia Cardíaca"],
      icon: Activity,
      color: "brand-blue"
    },
    {
      name: "Real Hospital Português",
      location: "Recife - PE",
      rating: 4.7,
      description: "Tradição em excelência médica há mais de 180 anos, oferecendo serviços de alta complexidade e atendimento humanizado.",
      specialties: ["Emergência", "Maternidade", "Check-up"],
      icon: Building2,
      color: "primary"
    }
  ];

  // Auto-rotate hospitals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHospital((prev) => (prev + 1) % hospitals.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [hospitals.length]);

  const nextHospital = () => {
    setCurrentHospital((prev) => (prev + 1) % hospitals.length);
  };

  const prevHospital = () => {
    setCurrentHospital((prev) => (prev - 1 + hospitals.length) % hospitals.length);
  };

  const currentData = hospitals[currentHospital];
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

          {/* Right Content - Rotating Hospital Cards */}
          <div className="space-y-6">
            <div className="relative">
              <Card className="overflow-hidden border-border/50 shadow-xl transition-all duration-500">
                <div className="relative">
                  {/* Hospital Image Placeholder */}
                  <div className={`h-48 bg-${currentData.color}/10 flex items-center justify-center transition-all duration-500`}>
                    <div className="text-center space-y-2">
                      <div className={`w-16 h-16 bg-${currentData.color}/20 rounded-full mx-auto flex items-center justify-center`}>
                        <currentData.icon className={`w-8 h-8 text-${currentData.color}`} />
                      </div>
                      <p className="text-sm text-muted-foreground">Hospital de Referência</p>
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
                      onClick={prevHospital}
                      className="w-10 h-10 bg-background/90 hover:bg-background rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                      aria-label="Hospital anterior"
                    >
                      <ChevronLeft className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                  
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <button
                      onClick={nextHospital}
                      className="w-10 h-10 bg-background/90 hover:bg-background rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                      aria-label="Próximo hospital"
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
                      {hospitals.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentHospital(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentHospital 
                              ? `bg-${currentData.color}` 
                              : 'bg-border hover:bg-border/60'
                          }`}
                          aria-label={`Ir para hospital ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalNetwork;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Phone } from "lucide-react";

const Servicos = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredServices = [
    {
      image: "/Imagens/neuropediatra.webp",
      title: "Neuropediatria",
      category: "consulta",
      description: "Especialização em distúrbios neurológicos em crianças e adolescentes",
      details: "Diagnóstico e tratamento de transtornos neurológicos infantis, epilepsia, TDAH, TEA, atrasos do desenvolvimento e distúrbios do sono.",
      horarios: "Segunda a Sexta: 8h às 17h | Sábado: 8h às 12h"
    },
    {
      image: "/Imagens/ultrasonografia.jpg",
      title: "Ultrassonografia",
      category: "exame",
      description: "Exames precisos com equipamentos de última geração",
      details: "Ultrassonografia abdominal, pélvica, obstétrica, morfológica, transvaginal e doppler. Resultados rápidos e laudos detalhados.",
      horarios: "Segunda a Sexta: 7h às 17h | Sábado: 7h às 13h"
    },
    {
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop",
      title: "Exames Laboratoriais",
      category: "exame",
      description: "Análises clínicas completas para diagnóstico preciso",
      details: "Hemograma, glicemia, colesterol, função hepática e renal, hormônios, marcadores tumorais, exames de urina e fezes. Resultados rápidos e confiáveis.",
      horarios: "Segunda a Sexta: 7h às 17h"
    },
    {
      image: "/Imagens/psiquiatra.jpg",
      title: "Psiquiatria",
      category: "consulta",
      description: "Cuidado especializado em saúde mental e bem-estar",
      details: "Diagnóstico e tratamento de transtornos mentais, depressão, ansiedade, bipolaridade, esquizofrenia e outros distúrbios psiquiátricos. Acompanhamento psicofarmacológico.",
      horarios: "Segunda a Sexta: 8h às 17h | Sábado: 8h às 12h"
    },
    {
      image: "/Imagens/pedriatria.jpg",
      title: "Pediatria",
      category: "consulta",
      description: "Cuidado completo para a saúde das crianças",
      details: "Acompanhamento do crescimento e desenvolvimento infantil, vacinação, tratamento de doenças da infância e orientação aos pais.",
      horarios: "Segunda a Sexta: 8h às 17h | Sábado: 8h às 12h"
    }
  ];

  const allConsultas = [
    "Neuropediatria",
    "Psiquiatria",
    "Pediatria",
    "Geriatria",
    "Nutrologia",
    "Ginecologia",
    "Cirurgia Vascular",
    "Dermatologia",
    "Gastroenterologia",
    "Psicologia",
    "Nutrição",
    "Clínico Geral"
  ];

  const allExames = [
    "Ultrassonografia",
    "Exames Laboratoriais"
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 relative inline-block group">
            Nossos <span className="font-medium text-primary">Serviços</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C2D86C] to-[#60A4A3] transition-all duration-500 group-hover:w-full"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidado especializado com profissionais qualificados
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Services List */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h3 className="text-3xl font-light text-foreground mb-8 text-center">
            Todos os nossos <span className="font-medium text-primary">serviços</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Consultas */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                CONSULTAS
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {allConsultas.map((consulta, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceClick({
                      title: consulta,
                      category: 'consulta',
                      details: `Consulta especializada em ${consulta} com profissionais qualificados e experientes.`,
                      horarios: "Segunda a Sexta: 8h às 17h"
                    })}
                    className="text-left p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      {consulta}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Exames */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                EXAMES
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {allExames.map((exame, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceClick({
                      title: exame,
                      category: 'exame',
                      details: `${exame} com equipamentos modernos e resultados precisos.`,
                      horarios: "Segunda a Sexta: 7h às 17h | Sábado: 7h às 13h"
                    })}
                    className="text-left p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      {exame}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mt-12 text-center bg-white rounded-2xl p-8">
            <h4 className="text-2xl font-light text-foreground mb-4">
              Formas de Pagamento
            </h4>
            <p className="text-lg text-primary font-medium">
              Parcelamento disponível e desconto via PIX
            </p>
            <p className="text-muted-foreground mt-2">
              Facilitamos o pagamento para você cuidar da sua saúde
            </p>
          </div>
        </div>

        {/* Service Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold">
                {selectedService?.title}
              </DialogTitle>
              <DialogDescription className="text-base mt-4">
                {selectedService?.details}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Agendamento</p>
                  <p className="text-sm text-muted-foreground">(84) 99448-2552</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button 
                variant="gradient"
                size="lg"
                className="w-full"
                onClick={() => {
                  window.open(`https://wa.me/5584994482552?text=Olá! Gostaria de agendar ${selectedService?.category === 'consulta' ? 'uma consulta de' : 'um exame de'} ${selectedService?.title} na Clínica Viverse.`, '_blank');
                  setIsModalOpen(false);
                }}
              >
                Agendar pelo WhatsApp
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Servicos;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Especialidades = () => {
  const specialties = [
    {
      image: "/Imagens/dermatologia.jpg",
      title: "Dermatologia",
      description: "Cuidados especializados para sua pele com tecnologia avançada"
    },
    {
      image: "/Imagens/ultrasonografia.jpg",
      title: "Ultrassonografia",
      description: "Exames precisos com equipamentos de última geração"
    },
    {
      image: "/Imagens/medicina do trabalhi.jpg",
      title: "Medicina do Trabalho",
      description: "Soluções completas para saúde ocupacional"
    },
    {
      image: "/Imagens/closeup-de-um-apoio-de-maos.jpg",
      title: "Clínico Geral",
      description: "Atendimento humanizado para toda a família"
    },
    {
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop",
      title: "Pediatria",
      description: "Cuidado completo para a saúde das crianças"
    }
  ];

  return (
    <section id="especialidades" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Minimal Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 relative inline-block group">
            Nossas <span className="font-medium text-primary">Especialidades</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C2D86C] to-[#60A4A3] transition-all duration-500 group-hover:w-full"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidado especializado com profissionais qualificados
          </p>
        </div>

        {/* Minimal Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => window.open(`https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta de ${specialty.title} na Clínica Viverse.`, '_blank')}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                <img 
                  src={specialty.image} 
                  alt={specialty.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {specialty.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom CTA */}
        <div className="text-center bg-gray-50 rounded-3xl py-12 px-8">
          <h3 className="text-2xl font-light text-foreground mb-4">
            Precisa de outra especialidade?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Entre em contato conosco para conhecer nossa rede de especialistas parceiros.
          </p>
          <Button 
            variant="gradient"
            size="lg"
            className="px-8 py-3"
            onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de saber sobre outras especialidades na Clínica Viverse.', '_blank')}
          >
            Falar Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
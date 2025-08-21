import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Depoimentos = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "A Clínica Viverse oferece atendimento humanizado com preços acessíveis. Finalmente encontrei uma clínica que realmente se preocupa com o paciente. Recomendo!",
      author: "Maria Silva",
      role: "Professora",
      location: "Nova Parnamirim, Parnamirim/RN",
      initials: "MS",
      rating: 5,
      avatar: "👩🏽‍🏫"
    },
    {
      text: "Excelente estrutura e profissionais qualificados. O atendimento pediátrico para minha filha foi excepcional. A Clínica Viverse é nossa escolha para toda família!",
      author: "João Santos",
      role: "Engenheiro",
      location: "Parnamirim/RN",
      initials: "JS",
      rating: 5,
      avatar: "👨🏽‍💼"
    },
    {
      text: "Consultas rápidas e precisas. O dermatologista foi muito atencioso e o preço muito acessível. Agora toda família se consulta na Clínica Viverse!",
      author: "Ana Oliveira",
      role: "Administradora",
      location: "Natal/RN",
      initials: "AO",
      rating: 5,
      avatar: "👩🏽‍💼"
    },
    {
      text: "Localização perfeita no AR Mall e atendimento de qualidade. A ultrassonografia foi rápida e o resultado muito preciso. Super recomendo a clínica!",
      author: "Carlos Medeiros",
      role: "Comerciante",
      location: "Nova Parnamirim/RN",
      initials: "CM",
      rating: 5,
      avatar: "👨🏽‍💼"
    },
    {
      text: "Atendimento em Medicina do Trabalho excelente para nossa empresa. Equipe preparada e preços justos. A Clínica Viverse é nossa parceira de confiança!",
      author: "Luciana Costa",
      role: "Gestora de RH",
      location: "Parnamirim/RN",
      initials: "LC",
      rating: 5,
      avatar: "👩🏽‍💼"
    },
    {
      text: "Clínico geral muito competente e estrutura moderna. Valores acessíveis e localização conveniente. A Clínica Viverse superou minhas expectativas!",
      author: "Roberto Lima",
      role: "Aposentado",
      location: "Natal/RN",
      initials: "RL",
      rating: 5,
      avatar: "👨🏽‍🦳"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-green/5 to-white"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que nossos <span className="text-primary">pacientes dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de quem confia na Clínica Viverse para cuidar da sua saúde e da sua família.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="relative overflow-hidden bg-white shadow-2xl border-border/10">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-brand-green/5"></div>
            
            <div className="relative p-8 md:p-12">
              {/* Quote icon */}
              <div className="absolute top-6 left-6 text-primary/20">
                <Quote className="h-12 w-12" />
              </div>
              
              <div className="space-y-8">
                {/* Rating */}
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <blockquote className="text-xl md:text-2xl text-foreground italic text-center leading-relaxed min-h-[6rem] flex items-center justify-center">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                {/* Author info */}
                <div className="flex items-center justify-center space-x-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-brand-green/20 rounded-full flex items-center justify-center text-2xl border-2 border-primary/10">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                  </div>
                  
                  {/* Author details */}
                  <div className="text-center">
                    <div className="font-bold text-lg text-foreground">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-primary font-medium">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      📍 {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl border border-primary/10"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </Button>
              </div>
              
              <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl border border-primary/10"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-125' 
                    : 'bg-border hover:bg-primary/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All testimonials grid preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                index === currentTestimonial 
                  ? 'ring-2 ring-primary bg-primary/5' 
                  : 'hover:border-primary/30'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="space-y-4">
                {/* Mini rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Mini testimonial */}
                <p className="text-sm text-muted-foreground italic line-clamp-3">
                  "{testimonial.text}"
                </p>
                
                {/* Mini author */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-brand-green/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Seja o próximo a ter uma experiência excepcional!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se aos milhares de pacientes que já descobriram a diferença 
              do atendimento humanizado da Clínica Viverse.
            </p>
            <Button 
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-brand-green-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Vi os depoimentos e gostaria de agendar uma consulta na Clínica Viverse.', '_blank')}
            >
              📲 Agendar Minha Consulta → (84) 99448-2552
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
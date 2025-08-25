import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Local agradável, com médicos excelentes!! Atendimento bom, com pessoas simpáticas.",
      author: "Josi Silva",
      role: "Avaliação Google",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces"
    },
    {
      text: "Atendimento humanizado e de qualidade. Profissionais capacitados e ambiente acolhedor.",
      author: "Renata Costa",
      role: "Avaliação Google",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces"
    },
    {
      text: "Excelente clínica! Equipe muito atenciosa e preços justos. Recomendo!",
      author: "Paulo Henrique",
      role: "Avaliação Google",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
    },
    {
      text: "Ótimo atendimento, médicos competentes e ambiente muito limpo e organizado.",
      author: "Ana Paula",
      role: "Avaliação Google",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces"
    },
    {
      text: "Fui muito bem atendida! Médicos atenciosos e estrutura excelente.",
      author: "Carla Souza",
      role: "Avaliação Google",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Minimal Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 relative inline-block group">
            O que nossos pacientes dizem
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C2D86C] to-[#60A4A3] transition-all duration-500 group-hover:w-full"></span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span>({testimonials.length} avaliações)</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Photo */}
              <div className="md:col-span-1">
                <div className="relative w-48 h-48 mx-auto">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover rounded-full shadow-xl"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md">
                    <div className="flex">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2 text-center md:text-left">
                <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 rounded-full bg-white shadow-md hover:shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 rounded-full bg-white shadow-md hover:shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative transition-all duration-300 ${
                index === currentIndex ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-100'
              }`}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="w-16 h-16 object-cover rounded-full border-2 border-white shadow-md"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 rounded-full border-2 border-primary"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
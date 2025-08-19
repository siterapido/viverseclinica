import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Star, Instagram, ChevronLeft, ChevronRight } from "lucide-react";

const Footer = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "A Security Saúde realmente entende nossas necessidades. O atendimento é humanizado e eles cumprem tudo que prometem. Melhor escolha que fizemos para nossa empresa.",
      author: "Mariana Santos",
      role: "Empresária - Boa Viagem, Recife/PE",
      initials: "MS",
      rating: 5
    },
    {
      text: "Não é só um plano de saúde, é uma parceria de verdade. Eles nos acompanham desde o início e sempre estão disponíveis quando precisamos. Transparência total!",
      author: "João Carlos",
      role: "Diretor Comercial - Espinheiro, Recife/PE",
      initials: "JC",
      rating: 5
    },
    {
      text: "Escolhi a Security Saúde pela proximidade e confiança. Eles realmente cuidam da gente do começo ao fim, como prometem. Minha família se sente segura.",
      author: "Patricia Oliveira",
      role: "Médica - Casa Forte, Recife/PE",
      initials: "PO",
      rating: 5
    },
    {
      text: "Atendimento consultivo de verdade, sem pressão para vender. Eles me ajudaram a encontrar o plano perfeito pro meu negócio. Recomendo demais!",
      author: "Fernando Alves",
      role: "MEI - Torre, Recife/PE",
      initials: "FA",
      rating: 5
    },
    {
      text: "Desde que conheci a Security Saúde, sinto que tenho um parceiro de confiança. A equipe é próxima, humana e sempre resolve tudo rapidamente.",
      author: "Luciana Medeiros",
      role: "Advogada - Aflitos, Recife/PE",
      initials: "LM",
      rating: 5
    },
    {
      text: "Estrutura física aqui em Recife faz toda diferença! Quando preciso, posso ir pessoalmente. Mas o atendimento digital também é excelente.",
      author: "Roberto Tenório",
      role: "Contador - Santo Antônio, Recife/PE",
      initials: "RT",
      rating: 5
    }
  ];

  const quickLinks = [
    "Planos de Saúde",
    "Sobre a Security",
    "Rede Credenciada",
    "Telemedicina",
    "Contato",
    "Política de Privacidade"
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" }
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
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <img 
                src="/logo-security-saude.png" 
                alt="Security Saúde" 
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="text-primary-foreground/80 leading-relaxed">
                Desde 1992 cuidando com excelência da saúde de nossos beneficiários. 
                Na Security Saúde, acreditamos que saúde de verdade começa com confiança.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Rua do Paissandu, 233</p>
                  <p>Santo Antônio - Recife/PE</p>
                  <p>CEP: 50010-240</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-blue flex-shrink-0" />
                <a href="tel:81999999999" className="text-sm hover:text-brand-blue transition-colors">
                  (81) 9 9999-9999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-blue flex-shrink-0" />
                <a href="mailto:segurosdesaude1@gmail.com" className="text-sm hover:text-brand-blue transition-colors">
                  segurosdesaude1@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Customer Testimonials - Rotating */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary-foreground">O que nossos clientes dizem</h3>
            
            <div className="relative">
              <Card className="bg-background border-border/20 p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-foreground italic text-sm leading-relaxed min-h-[4rem]">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-brand-blue">{testimonials[currentTestimonial].initials}</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm text-foreground">{testimonials[currentTestimonial].author}</div>
                        <div className="text-xs text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                      </div>
                    </div>
                    
                    {/* Navigation buttons */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={prevTestimonial}
                        className="w-8 h-8 bg-brand-blue/10 hover:bg-brand-blue/20 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Depoimento anterior"
                      >
                        <ChevronLeft className="w-4 h-4 text-brand-blue" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-8 h-8 bg-brand-blue/10 hover:bg-brand-blue/20 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Próximo depoimento"
                      >
                        <ChevronRight className="w-4 h-4 text-brand-blue" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Dots indicator */}
                  <div className="flex justify-center space-x-2 pt-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial ? 'bg-brand-blue' : 'bg-border'
                        }`}
                        aria-label={`Ir para depoimento ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Links Rápidos</h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-brand-blue transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <h4 className="font-medium mb-3">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-brand-blue/20 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/70">
              © 2024 Security Saúde. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/70">
              <a href="#" className="hover:text-brand-blue transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-brand-blue transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-brand-blue transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
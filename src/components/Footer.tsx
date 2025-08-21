import { MapPin, Phone, Mail, Instagram, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Especialidades", href: "#especialidades" },
    { name: "Exames", href: "#exames" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
    { name: "Política de Privacidade", href: "#" }
  ];

  const specialties = [
    "👶 Pediatria",
    "🔬 Dermatologia", 
    "📊 Ultrassonografia",
    "💼 Medicina do Trabalho",
    "👩🏽‍⚕️ Clínico Geral"
  ];

  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-white"></div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo-viverse-clinica.png" 
                  alt="Clínica Viverse" 
                  className="h-12 w-auto"
                />
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🍃</span>
                  <span className="text-xl font-bold text-primary">Clínica Viverse</span>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                <strong className="text-primary">Saúde para Todos</strong> 🍃<br />
                Oferecemos atendimento humanizado, preços acessíveis e profissionais 
                preparados para cuidar da sua saúde com toda atenção que você merece.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium">📍 Av. Abel Cabral, 2550</p>
                  <p>Nova Parnamirim - Parnamirim/RN</p>
                  <p>CEP: 59151-250</p>
                  <p className="text-primary font-medium mt-1">
                    ➡️ Dentro do Prédio Comercial AR Mall
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:5584994482552" 
                  className="text-sm hover:text-primary transition-colors font-medium"
                >
                  📲 (84) 99448-2552
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contato@viverseclinica.com.br" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  contato@viverseclinica.com.br
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Segunda a Sexta: <span className="font-medium">8h às 18h</span></p>
                  <p>Sábados: <span className="font-medium">8h às 12h</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Specialties */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Nossas Especialidades</h3>
            
            <ul className="space-y-3">
              {specialties.map((specialty, index) => (
                <li key={index}>
                  <a 
                    href="#especialidades" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center space-x-2"
                  >
                    <span>{specialty}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="https://wa.me/5584994482552?text=Olá! Gostaria de saber mais sobre as especialidades da Clínica Viverse."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="sm"
                  className="bg-brand-green hover:bg-brand-green/90 text-brand-green-foreground rounded-lg"
                >
                  📅 Agendar Consulta
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Links Rápidos</h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-medium mb-4 text-foreground">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/viverseclinica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Clínica Viverse"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                
                <a
                  href="https://wa.me/5584994482552"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Clínica Viverse"
                  className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 <strong className="text-primary">Clínica Viverse</strong>. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                LGPD
              </a>
            </div>
          </div>
          
          {/* Final tagline */}
          <div className="text-center mt-6 pt-6 border-t border-primary/5">
            <div className="flex items-center justify-center space-x-2">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                ✨ Saúde para Todos com qualidade e confiança
              </span>
              <Heart className="h-4 w-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
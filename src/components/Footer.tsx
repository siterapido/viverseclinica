import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Especialidades", href: "#especialidades" },
    { name: "Exames", href: "#exames" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Contato", href: "#contato" }
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: '#60A4A3' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="/Id vidual/Viverse LOGO PNG fundo incolor 1.png" 
                alt="Clínica Viverse" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              Oferecemos atendimento humanizado, preços acessíveis e profissionais 
              preparados para cuidar da sua saúde com toda atenção que você merece.
            </p>
            
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/viverseclinica/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5584994482552"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-white/80 mt-0.5" />
                <div className="text-sm text-white/80">
                  <p>Av. Abel Cabral, 2550</p>
                  <p>Nova Parnamirim - RN</p>
                  <p>CEP: 59151-250</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/80" />
                <a 
                  href="tel:5584994482552" 
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  (84) 99448-2552
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-white/80" />
                <div className="text-sm text-white/80">
                  <p>Seg-Sex: 8h-18h</p>
                  <p>Sáb: 8h-12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="text-center">
            <h3 className="text-xl font-light mb-4">
              Agende sua consulta agora
            </h3>
            <Button 
              variant="gradient"
              className="px-8 py-3"
              onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta na Clínica Viverse.', '_blank')}
            >
              Agendar pelo WhatsApp
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80">
              © 2024 Clínica Viverse. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
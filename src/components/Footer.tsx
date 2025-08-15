import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Star, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Planos de Saúde",
    "Sobre a Security",
    "Rede Credenciada",
    "Telemedicina",
    "Contato",
    "Política de Privacidade"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-2xl font-bold">Security Saúde</div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Há mais de 20 anos cuidando com excelência da saúde de nossos beneficiários. 
                Qualidade, confiança e atendimento humanizado.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Av. Prudente de Morais, 4262</p>
                  <p>Lagoa Nova - Natal/RN</p>
                  <p>CEP: 59056-200</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-blue flex-shrink-0" />
                <a href="tel:8440001234" className="text-sm hover:text-brand-blue transition-colors">
                  (84) 4000-1234
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-blue flex-shrink-0" />
                <a href="mailto:contato@securitysaude.com.br" className="text-sm hover:text-brand-blue transition-colors">
                  contato@securitysaude.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Customer Testimonial */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">O que nossos clientes dizem</h3>
            
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-primary-foreground/90 italic">
                  "Atendimento excepcional e uma rede de hospitais de primeira qualidade. 
                  A Security Saúde realmente se preocupa com o bem-estar dos seus beneficiários."
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-brand-blue">MR</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Maria Regina</div>
                    <div className="text-xs text-primary-foreground/70">Empresária - Natal/RN</div>
                  </div>
                </div>
              </div>
            </Card>
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
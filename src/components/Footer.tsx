import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-3xl font-bold">
                Security <span className="text-secondary">Saúde</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                Há mais de 20 anos oferecendo planos de saúde de qualidade para você, 
                sua família e sua empresa. Cuidado que você merece, quando você precisa.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
                <div className="text-white/80">
                  <div>Av. Presidente Vargas, 123, Centro</div>
                  <div>Natal/RN - CEP: 59012-000</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-secondary flex-shrink-0" size={20} />
                <a href="tel:+5584999999999" className="text-white/80 hover:text-secondary transition-colors">
                  (84) 9999-9999
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-secondary flex-shrink-0" size={20} />
                <a href="mailto:contato@securitysaude.com.br" className="text-white/80 hover:text-secondary transition-colors">
                  contato@securitysaude.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Customer Testimonial */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">O que nossos clientes dizem</h3>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-secondary rounded-full p-3 w-16 h-16 flex items-center justify-center text-white font-bold text-lg">
                  MC
                </div>
                <div>
                  <div className="font-semibold text-white">Maria Clara Silva</div>
                  <div className="text-white/60 text-sm">Empresária - Natal/RN</div>
                </div>
              </div>
              
              <blockquote className="text-white/80 italic leading-relaxed">
                "Há 5 anos confio na Security Saúde para cuidar da minha família. 
                O atendimento é excepcional e a rede de hospitais é excelente. 
                Recomendo de olhos fechados!"
              </blockquote>
              
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Links Rápidos</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#planos" className="block text-white/80 hover:text-secondary transition-colors">
                  Nossos Planos
                </a>
                <a href="#sobre" className="block text-white/80 hover:text-secondary transition-colors">
                  Sobre Nós
                </a>
                <a href="#rede" className="block text-white/80 hover:text-secondary transition-colors">
                  Rede Credenciada
                </a>
                <a href="#contato" className="block text-white/80 hover:text-secondary transition-colors">
                  Contato
                </a>
              </div>
              
              <div className="space-y-3">
                <a href="#app" className="block text-white/80 hover:text-secondary transition-colors">
                  Baixar App
                </a>
                <a href="#segunda-via" className="block text-white/80 hover:text-secondary transition-colors">
                  Segunda Via
                </a>
                <a href="#politica" className="block text-white/80 hover:text-secondary transition-colors">
                  Política de Privacidade
                </a>
                <a href="#termos" className="block text-white/80 hover:text-secondary transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-secondary p-3 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-secondary p-3 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-secondary p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-secondary p-3 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Security Saúde. Todos os direitos reservados.
            </div>
            <div className="text-white/60 text-sm">
              ANS: 123456789 | CNPJ: 12.345.678/0001-00
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
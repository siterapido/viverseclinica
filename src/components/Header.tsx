import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-lg border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo-security-saude.png" 
              alt="Security Saúde" 
              className="h-10 w-auto"
            />
          </div>

          {/* Center Navigation Menu */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-brand-blue transition-colors font-medium"
            >
              Início
            </Link>
            <Link 
              to="/sobre-nos" 
              className="text-foreground hover:text-brand-blue transition-colors font-medium"
            >
              Sobre nós
            </Link>
            <Link 
              to="/corretor" 
              className="text-foreground hover:text-brand-blue transition-colors font-medium"
            >
              Corretor
            </Link>
            <Link 
              to="/contato" 
              className="text-foreground hover:text-brand-blue transition-colors font-medium"
            >
              Contato
            </Link>
          </nav>

          {/* Right Side - Phone and CTA */}
          <div className="flex items-center space-x-4">
            {/* Phone */}
            <a 
              href="tel:81999999999" 
              className="hidden sm:flex items-center space-x-2 text-primary hover:text-brand-blue transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(81) 9 9999-9999</span>
            </a>
            
            {/* CTA Button */}
            <Button 
              className="bg-gradient-to-r from-brand-blue to-brand-blue/80 hover:from-brand-blue/90 hover:to-brand-blue/70 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-brand-blue/20"
            >
              Solicitar Cotação
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
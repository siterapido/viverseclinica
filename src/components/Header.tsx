import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu on window resize to large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/Id vidual/Viverse LOGO PNG fundo incolor 1.png" 
              alt="Clínica Viverse" 
              className="h-10 w-auto"
            />
          </div>

          {/* Minimalist Center Navigation Menu */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-6">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/especialidades" 
              className="text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group"
            >
              Especialidades
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/exames" 
              className="text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group"
            >
              Exames
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/diferenciais" 
              className="text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group"
            >
              Diferenciais
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/depoimentos" 
              className="text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group"
            >
              Depoimentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contato" 
              className="text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Right Side - Phone and CTA */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Phone - Hidden on small screens */}
            <a 
              href="tel:5584994482552" 
              className="hidden md:flex items-center space-x-2 text-foreground/70 hover:text-brand-green transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              <span>(84) 99448-2552</span>
            </a>
            
            {/* Minimalist CTA Button */}
            <Button 
              variant="gradient"
              size="sm"
              className="hidden sm:flex px-4 py-2 text-sm"
              onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta na Clínica Viverse.', '_blank')}
            >
              Agendar
            </Button>
            
            {/* Minimalist Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden relative p-2 text-foreground/80 hover:text-brand-green transition-colors"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Minimalist Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-40 lg:hidden" 
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-16 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border/10 shadow-xl z-50 lg:hidden">
            <nav className="container mx-auto px-4 py-8">
              <div className="space-y-1">
                <Link 
                  to="/" 
                  onClick={closeMobileMenu}
                  className="block py-3 px-0 text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group"
                >
                  Início
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-8"></span>
                </Link>
                <Link 
                  to="/especialidades" 
                  onClick={closeMobileMenu}
                  className="block py-3 px-0 text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group"
                >
                  Especialidades
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-8"></span>
                </Link>
                <Link 
                  to="/exames" 
                  onClick={closeMobileMenu}
                  className="block py-3 px-0 text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group"
                >
                  Exames
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-8"></span>
                </Link>
                <Link 
                  to="/diferenciais" 
                  onClick={closeMobileMenu}
                  className="block py-3 px-0 text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group"
                >
                  Diferenciais
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-8"></span>
                </Link>
                <Link 
                  to="/depoimentos" 
                  onClick={closeMobileMenu}
                  className="block py-3 px-0 text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group"
                >
                  Depoimentos
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-8"></span>
                </Link>
                <Link 
                  to="/contato" 
                  onClick={closeMobileMenu}
                  className="block py-3 px-0 text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group"
                >
                  Contato
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-8"></span>
                </Link>
              </div>
              
              {/* Mobile Contact and CTA */}
              <div className="pt-8 mt-8 border-t border-border/20 space-y-4">
                <a 
                  href="tel:5584994482552" 
                  className="flex items-center space-x-3 text-foreground/70 hover:text-brand-green transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>(84) 99448-2552</span>
                </a>
                
                <Button 
                  variant="gradient"
                  onClick={() => {closeMobileMenu(); window.open('https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta na Clínica Viverse.', '_blank');}}
                  className="w-full py-3 text-sm"
                >
                  Agendar consulta
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-lg border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo-viverse-clinica.png" 
              alt="Clínica Viverse" 
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
              to="/especialidades" 
              className="text-foreground hover:text-brand-blue transition-colors font-medium"
            >
              Especialidades
            </Link>
            <Link 
              to="/contato" 
              className="text-foreground hover:text-brand-blue transition-colors font-medium"
            >
              Contato
            </Link>
          </nav>

          {/* Right Side - Phone and CTA */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Phone - Hidden on small screens */}
            <a 
              href="tel:5584994482552" 
              className="hidden md:flex items-center space-x-2 text-primary hover:text-brand-blue transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(84) 99448-2552</span>
            </a>
            
            {/* CTA Button - Hidden on mobile, shown on larger screens */}
            <Button 
              className="hidden sm:flex bg-gradient-to-r from-brand-blue to-brand-blue/80 hover:from-brand-blue/90 hover:to-brand-blue/70 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-brand-blue/20"
            >
              Agendar Consulta
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-foreground hover:text-brand-blue transition-colors"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/20 shadow-2xl z-50 lg:hidden animate-in slide-in-from-top-2 duration-300">
            <nav className="container mx-auto px-4 py-6">
              <div className="space-y-2">
                <Link 
                  to="/" 
                  onClick={closeMobileMenu}
                  className="block py-4 px-4 text-foreground hover:text-brand-blue hover:bg-brand-blue/10 rounded-xl transition-all font-medium border border-transparent hover:border-brand-blue/20"
                >
                  Início
                </Link>
                <Link 
                  to="/sobre-nos" 
                  onClick={closeMobileMenu}
                  className="block py-4 px-4 text-foreground hover:text-brand-blue hover:bg-brand-blue/10 rounded-xl transition-all font-medium border border-transparent hover:border-brand-blue/20"
                >
                  Sobre nós
                </Link>
                <Link 
                  to="/especialidades" 
                  onClick={closeMobileMenu}
                  className="block py-4 px-4 text-foreground hover:text-brand-blue hover:bg-brand-blue/10 rounded-xl transition-all font-medium border border-transparent hover:border-brand-blue/20"
                >
                  Especialidades
                </Link>
                <Link 
                  to="/contato" 
                  onClick={closeMobileMenu}
                  className="block py-4 px-4 text-foreground hover:text-brand-blue hover:bg-brand-blue/10 rounded-xl transition-all font-medium border border-transparent hover:border-brand-blue/20"
                >
                  Contato
                </Link>
                
                {/* Mobile Contact Info */}
                <div className="pt-4 mt-4 border-t border-border/30">
                  <a 
                    href="tel:5584994482552" 
                    className="flex items-center space-x-3 py-4 px-4 text-primary hover:text-brand-blue hover:bg-brand-blue/10 rounded-xl transition-all border border-transparent hover:border-brand-blue/20"
                  >
                    <Phone className="h-5 w-5" />
                    <div className="flex flex-col">
                      <span className="font-medium">(84) 99448-2552</span>
                      <span className="text-xs text-muted-foreground">Ligue agora</span>
                    </div>
                  </a>
                </div>
                
                {/* Mobile CTA Button */}
                <div className="pt-4">
                  <Button 
                    onClick={closeMobileMenu}
                    className="w-full bg-gradient-to-r from-brand-blue to-brand-blue/80 hover:from-brand-blue/90 hover:to-brand-blue/70 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Agendar Consulta
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
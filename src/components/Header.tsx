import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

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
            <a 
              href="#" 
              onClick={(e) => {e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'})}}
              className="text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/sobre-nos" 
              className="text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
            >
              Quem Somos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#servicos" 
              onClick={(e) => {e.preventDefault(); document.getElementById('servicos')?.scrollIntoView({behavior: 'smooth'})}}
              className="text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
            >
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#promocoes" 
              onClick={(e) => {e.preventDefault(); document.getElementById('promocoes')?.scrollIntoView({behavior: 'smooth'})}}
              className="text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
            >
              Promoções
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#diferenciais" 
              onClick={(e) => {e.preventDefault(); document.getElementById('diferenciais')?.scrollIntoView({behavior: 'smooth'})}}
              className="text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
            >
              Diferenciais
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#depoimentos" 
              onClick={(e) => {e.preventDefault(); document.getElementById('depoimentos')?.scrollIntoView({behavior: 'smooth'})}}
              className="text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
            >
              Depoimentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#localizacao" 
              onClick={(e) => {e.preventDefault(); document.getElementById('localizacao')?.scrollIntoView({behavior: 'smooth'})}}
              className="text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </a>
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
          <div className="fixed top-16 left-0 right-0 bg-white border-b border-border/10 shadow-xl z-50 lg:hidden">
            <nav className="container mx-auto px-4 py-8">
              <div className="space-y-1">
                <a 
                  href="#" 
                  onClick={(e) => {e.preventDefault(); closeMobileMenu(); window.scrollTo({top: 0, behavior: 'smooth'})}}
                  className="block py-3 px-0 text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
                >
                  Início
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-8"></span>
                </a>
                <a 
                  href="/sobre-nos" 
                  onClick={(e) => {closeMobileMenu();}}
                  className="block py-3 px-0 text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
                >
                  Quem Somos
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-8"></span>
                </a>
                <a 
                  href="#servicos" 
                  onClick={(e) => {e.preventDefault(); closeMobileMenu(); document.getElementById('servicos')?.scrollIntoView({behavior: 'smooth'})}}
                  className="block py-3 px-0 text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
                >
                  Serviços
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-8"></span>
                </a>
                <a 
                  href="#promocoes" 
                  onClick={(e) => {e.preventDefault(); closeMobileMenu(); document.getElementById('promocoes')?.scrollIntoView({behavior: 'smooth'})}}
                  className="block py-3 px-0 text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
                >
                  Promoções
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-8"></span>
                </a>
                <a 
                  href="#diferenciais" 
                  onClick={(e) => {e.preventDefault(); closeMobileMenu(); document.getElementById('diferenciais')?.scrollIntoView({behavior: 'smooth'})}}
                  className="block py-3 px-0 text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
                >
                  Diferenciais
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-8"></span>
                </a>
                <a 
                  href="#depoimentos" 
                  onClick={(e) => {e.preventDefault(); closeMobileMenu(); document.getElementById('depoimentos')?.scrollIntoView({behavior: 'smooth'})}}
                  className="block py-3 px-0 text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
                >
                  Depoimentos
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-8"></span>
                </a>
                <a 
                  href="#localizacao" 
                  onClick={(e) => {e.preventDefault(); closeMobileMenu(); document.getElementById('localizacao')?.scrollIntoView({behavior: 'smooth'})}}
                  className="block py-3 px-0 text-foreground/80 hover:text-brand-green transition-colors font-normal text-sm tracking-wide relative group cursor-pointer"
                >
                  Contato
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-8"></span>
                </a>
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
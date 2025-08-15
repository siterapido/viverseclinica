import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-foreground">
              Security Saúde
            </div>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-primary-foreground text-sm">
              <span>Você está em:</span>
              <Select defaultValue="rn">
                <SelectTrigger className="w-48 bg-transparent border-primary-foreground/20 text-primary-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rn">Rio Grande do Norte</SelectItem>
                  <SelectItem value="pb">Paraíba</SelectItem>
                  <SelectItem value="pe">Pernambuco</SelectItem>
                  <SelectItem value="ce">Ceará</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Right Side - Phone and CTA */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:8440001234" 
              className="hidden sm:flex items-center space-x-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(84) 4000-1234</span>
            </a>
            
            <Button 
              className="bg-brand-blue hover:bg-brand-blue/90 text-brand-blue-foreground rounded-lg"
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
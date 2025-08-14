import { Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              Security <span className="text-secondary">Saúde</span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Location Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-sm">Você está em:</span>
              <Select defaultValue="rn">
                <SelectTrigger className="w-48 bg-primary border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rn">Rio Grande do Norte</SelectItem>
                  <SelectItem value="pe">Pernambuco</SelectItem>
                  <SelectItem value="pb">Paraíba</SelectItem>
                  <SelectItem value="ce">Ceará</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Phone */}
            <a 
              href="tel:+5584999999999" 
              className="flex items-center space-x-2 text-white hover:text-secondary transition-colors"
            >
              <Phone size={18} />
              <span>(84) 9999-9999</span>
            </a>

            {/* CTA Button */}
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
            >
              Solicitar Cotação
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              Cotação
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
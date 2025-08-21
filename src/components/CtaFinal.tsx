import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar, Heart } from "lucide-react";

const CtaFinal = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with diagonal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-brand-green"></div>
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%200h40v40H0V0zm40%2040h40v40H40V40z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-8">
          {/* Main CTA Content */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-4xl">🍃</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Agende sua consulta agora mesmo!
              </h2>
              <span className="text-4xl">👩🏽‍⚕️</span>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Não deixe sua saúde para depois. Na <strong>Clínica Viverse</strong>, 
              cuidamos de você com carinho, qualidade e preços que cabem no seu bolso.
            </p>
          </div>

          {/* Main CTA Button */}
          <div className="space-y-6">
            <a
              href="https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta na Clínica Viverse."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-brand-green-foreground font-bold px-12 py-8 text-2xl rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 border-4 border-white/20"
              >
                <MessageCircle className="mr-3 h-8 w-8" />
                📲 (84) 99448-2552
              </Button>
            </a>
            
            <p className="text-white/80 text-lg">
              Atendimento imediato pelo WhatsApp ⚡
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold text-white mb-2">Atendimento Rápido</h4>
              <p className="text-white/80 text-sm">Sem burocracia, sem espera</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-semibold text-white mb-2">Preços Acessíveis</h4>
              <p className="text-white/80 text-sm">Qualidade que cabe no bolso</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="font-semibold text-white mb-2">Estrutura Moderna</h4>
              <p className="text-white/80 text-sm">Equipamentos de ponta</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl mb-3">👩🏽‍⚕️</div>
              <h4 className="font-semibold text-white mb-2">Profissionais Qualificados</h4>
              <p className="text-white/80 text-sm">Equipe especializada</p>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
            <Button 
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm py-4 rounded-xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de saber mais sobre as especialidades da Clínica Viverse.', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Ver Especialidades
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm py-4 rounded-xl transition-all duration-300"
              onClick={() => window.open('https://www.instagram.com/viverseclinica/', '_blank')}
            >
              <Heart className="mr-2 h-5 w-5" />
              Seguir no Instagram
            </Button>
          </div>

          {/* Final message */}
          <div className="mt-12 space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">✨</span>
              <p className="text-2xl font-bold text-white">
                Clínica Viverse – Saúde para Todos
              </p>
              <span className="text-2xl">✨</span>
            </div>
            
            <p className="text-white/90 text-lg">
              Qualidade, confiança e cuidado em um só lugar
            </p>
            
            <div className="text-white/70 text-sm space-y-1">
              <p>📍 Av. Abel Cabral, 2550 – Nova Parnamirim, Parnamirim – RN</p>
              <p>🏢 Dentro do Prédio Comercial AR Mall</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;
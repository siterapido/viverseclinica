import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen relative overflow-hidden bg-gradient-to-b from-primary/20 to-white">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-white/90"></div>
      
      {/* Optional background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2360A4A3%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">Clínica Viverse</span> –<br/>
                <span className="text-foreground">Saúde para Todos</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-muted-foreground flex items-center">
                  <span className="text-2xl mr-2">🍃</span>
                  <span>Saúde com conforto e qualidade</span>
                </p>
                
                <p className="text-xl md:text-2xl text-muted-foreground flex items-center">
                  <span className="text-2xl mr-2">👩🏽‍⚕️</span>
                  <span>Consultas acessíveis em diversas especialidades</span>
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Na Clínica Viverse, você encontra atendimento humanizado, preços acessíveis 
                e profissionais preparados para cuidar da sua saúde com toda atenção que você merece.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-brand-green-foreground font-bold px-8 py-6 text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta na Clínica Viverse.', '_blank')}
              >
                📲 Agendar Consulta no WhatsApp → (84) 99448-2552
              </Button>
            </div>
          </div>

          {/* Right Content - Image placeholder with medical illustration */}
          <div className="relative">
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* Medical illustration placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-brand-green/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="text-6xl">👩🏽‍⚕️</div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-primary">Profissionais Qualificados</h3>
                    <p className="text-muted-foreground">
                      Equipe especializada em diversas áreas da medicina
                    </p>
                  </div>
                  
                  {/* Features icons */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center space-y-2">
                      <div className="text-3xl">🏥</div>
                      <p className="text-sm text-muted-foreground">Estrutura Moderna</p>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-3xl">💰</div>
                      <p className="text-sm text-muted-foreground">Preços Acessíveis</p>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-3xl">⏰</div>
                      <p className="text-sm text-muted-foreground">Atendimento Rápido</p>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-3xl">📍</div>
                      <p className="text-sm text-muted-foreground">Fácil Acesso</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating cards with specialties preview */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-primary/10">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">👶</span>
                  <span className="text-sm font-medium text-primary">Pediatria</span>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-primary/10">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🔬</span>
                  <span className="text-sm font-medium text-primary">Dermatologia</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-primary/10">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">📊</span>
                  <span className="text-sm font-medium text-primary">Ultrassom</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-primary/10">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">💼</span>
                  <span className="text-sm font-medium text-primary">Med. Trabalho</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
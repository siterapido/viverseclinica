import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2305AAE5%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M50%2030c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020-20-8.954-20-20%208.954-20%2020-20zm0%205c-8.284%200-15%206.716-15%2015s6.716%2015%2015%2015%2015-6.716%2015-15-6.716-15-15-15z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🍃</span>
                <span className="text-lg font-medium text-brand-blue">Clínica Viverse</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">
                  Saúde para Todos
                </span>{" "}
                com{" "}
                <span className="text-brand-blue">
                  conforto e qualidade
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                👩🏽‍⚕️ <strong>Consultas acessíveis em diversas especialidades</strong><br/>
                Na Clínica Viverse, você encontra atendimento humanizado, preços acessíveis 
                e profissionais preparados para cuidar da sua saúde com toda atenção que você merece.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span className="text-green-500">✅</span>
                <span>Conforto no atendimento</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span className="text-green-500">✅</span>
                <span>Acessibilidade nos valores</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span className="text-green-500">✅</span>
                <span>Diversas especialidades</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-brand-blue to-brand-blue/80 hover:from-brand-blue/90 hover:to-brand-blue/70 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-brand-blue/20"
                onClick={() => window.open('https://wa.me/5584994482552?text=Olá! Gostaria de agendar uma consulta na Clínica Viverse.', '_blank')}
              >
                📲 Agendar Consulta
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary/80 hover:text-primary-foreground font-semibold px-8 py-4 text-lg rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Ver Especialidades
              </Button>
            </div>
          </div>

          {/* Right Content - Image Area */}
          <div className="relative">
            <div className="aspect-square bg-secondary/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-border/40">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-brand-blue/10 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-10 h-10 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm">
                  Espaço reservado para imagem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
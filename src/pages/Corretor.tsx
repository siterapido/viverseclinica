import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Corretor = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    console.log("Login attempt:", { email, password });
  };

  const handleDownload = () => {
    if (!selectedOperator) {
      alert("Por favor, selecione uma operadora primeiro.");
      return;
    }
    // Download logic would go here
    console.log("Download material for:", selectedOperator);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#192A48] via-[#1a2d4a] to-[#0f1a2e]">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          {/* Header Section */}
          <div className="text-center text-white mb-16">
            <img 
              src="/logo-security-saude.png" 
              alt="Security Saúde" 
              className="h-16 w-auto mx-auto mb-8 brightness-0 invert"
            />
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              ÁREA DO <span className="text-[#05AAE5]">CORRETOR</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-[#05AAE5] to-transparent rounded-full mx-auto mb-6"></div>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Oferecemos suporte estratégico completo: treinamentos exclusivos, campanhas de incentivo 
              com premiações, materiais personalizados e atendimento ágil e humanizado.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Login Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/10 h-fit">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-[#192A48]">
                    Identifique-se
                  </h2>
                  <p className="text-gray-600">
                    Acesse sua área exclusiva
                  </p>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#192A48] font-medium">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite seu e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#05AAE5] focus:border-[#05AAE5] transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-[#192A48] font-medium">
                      Senha
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#05AAE5] focus:border-[#05AAE5] transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#05AAE5] to-[#0489c7] hover:from-[#0489c7] hover:to-[#05AAE5] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    ACESSAR ÁREA
                  </Button>
                  
                  <div className="text-center pt-2">
                    <a 
                      href="#" 
                      className="text-[#05AAE5] hover:text-[#0489c7] text-sm font-medium transition-colors duration-300 hover:underline"
                    >
                      Esqueci minha senha
                    </a>
                  </div>
                </form>
              </div>
            </div>

            {/* Materials Download Section */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/10 h-fit">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-[#192A48]">
                    MATERIAL DAS OPERADORAS
                  </h2>
                  <p className="text-gray-600">
                    Download de materiais disponíveis
                  </p>
                </div>
                
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="operator" className="text-[#192A48] font-medium">
                      Selecione a Operadora
                    </Label>
                    <Select value={selectedOperator} onValueChange={setSelectedOperator}>
                      <SelectTrigger className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#05AAE5] focus:border-[#05AAE5] transition-all duration-300">
                        <SelectValue placeholder="Escolha sua operadora" />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg border-2 border-gray-200">
                        <SelectItem value="bradesco" className="py-2">Bradesco Saúde</SelectItem>
                        <SelectItem value="sulamerica" className="py-2">SulAmérica</SelectItem>
                        <SelectItem value="unimed" className="py-2">Unimed</SelectItem>
                        <SelectItem value="hapvida" className="py-2">Hapvida</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button
                    onClick={handleDownload}
                    disabled={!selectedOperator}
                    className="w-full bg-gradient-to-r from-[#192A48] to-[#1a2d4a] hover:from-[#1a2d4a] hover:to-[#192A48] disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:transform-none disabled:scale-100"
                  >
                    BAIXAR MATERIAL
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
              SEUS <span className="text-[#05AAE5]">BENEFÍCIOS</span> EXCLUSIVOS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
                <div className="w-12 h-12 bg-[#05AAE5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-3 text-center">Treinamentos Exclusivos</h3>
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                  Eventos e treinamentos exclusivos para capacitação contínua e desenvolvimento profissional
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
                <div className="w-12 h-12 bg-[#05AAE5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-3 text-center">Campanhas de Incentivo</h3>
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                  Campanhas de incentivo com premiações e reconhecimento pelos resultados alcançados
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
                <div className="w-12 h-12 bg-[#05AAE5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-3 text-center">Materiais Personalizados</h3>
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                  Materiais personalizados para vendas e comunicação estratégica com seus clientes
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
                <div className="w-12 h-12 bg-[#05AAE5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-3 text-center">Atendimento Ágil</h3>
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                  Atendimento ágil e humanizado com comunicação transparente e estratégica
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
                <div className="w-12 h-12 bg-[#05AAE5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-3 text-center">Estrutura Completa</h3>
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                  Estrutura física em Recife combinada com atuação digital para suporte integral
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
                <div className="w-12 h-12 bg-[#05AAE5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-3 text-center">Comissões Competitivas</h3>
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                  Acompanhe suas comissões e tenha transparência total nos ganhos e bonificações
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Corretor;
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
              Neste ambiente você pode acompanhar as campanhas em andamento, comissões a receber, 
              entre outras informações importantes para sua operação.
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
                        <SelectItem value="amil" className="py-2">Amil</SelectItem>
                        <SelectItem value="bradesco" className="py-2">Bradesco Saúde</SelectItem>
                        <SelectItem value="unimed" className="py-2">Unimed</SelectItem>
                        <SelectItem value="sulamerica" className="py-2">SulAmérica</SelectItem>
                        <SelectItem value="notredame" className="py-2">NotreDame Intermédica</SelectItem>
                        <SelectItem value="hapvida" className="py-2">Hapvida</SelectItem>
                        <SelectItem value="prevent" className="py-2">Prevent Senior</SelectItem>
                        <SelectItem value="alice" className="py-2">Alice</SelectItem>
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

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20">
              <div className="w-12 h-12 bg-[#05AAE5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Campanhas Ativas</h3>
              <p className="text-sm text-gray-300">Acompanhe suas campanhas em tempo real</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20">
              <div className="w-12 h-12 bg-[#05AAE5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Comissões</h3>
              <p className="text-sm text-gray-300">Visualize comissões a receber</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20">
              <div className="w-12 h-12 bg-[#05AAE5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Downloads</h3>
              <p className="text-sm text-gray-300">Materiais das operadoras</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20">
              <div className="w-12 h-12 bg-[#05AAE5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Suporte</h3>
              <p className="text-sm text-gray-300">Atendimento especializado</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Corretor;
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-20 bg-brand-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a encontrar o melhor plano de saúde para suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Telefone</h3>
            <p className="text-white/90">(84) 4000-1234</p>
            <p className="text-white/90 text-sm mt-1">Atendimento gratuito</p>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-white/90">contato@securitysaude.com.br</p>
            <p className="text-white/90 text-sm mt-1">Resposta em até 24h</p>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Endereço</h3>
            <p className="text-white/90">Av. das Avenidas, 123</p>
            <p className="text-white/90">Natal/RN - CEP: 59000-000</p>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Horário</h3>
            <p className="text-white/90">Segunda à Sexta</p>
            <p className="text-white/90">8h às 18h</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
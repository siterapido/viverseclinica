import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Especialidades from "@/components/Especialidades";
import ExamesPreventivos from "@/components/ExamesPreventivos";
import Diferenciais from "@/components/Diferenciais";
import Depoimentos from "@/components/Depoimentos";
import Localizacao from "@/components/Localizacao";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="especialidades">
          <Especialidades />
        </section>
        <section id="exames">
          <ExamesPreventivos />
        </section>
        <section id="diferenciais">
          <Diferenciais />
        </section>
        <section id="depoimentos">
          <Depoimentos />
        </section>
        <section id="localizacao">
          <Localizacao />
        </section>
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
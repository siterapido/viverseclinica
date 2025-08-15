import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HospitalNetwork from "@/components/HospitalNetwork";
import WhyChooseUs from "@/components/WhyChooseUs";
import PlansTable from "@/components/PlansTable";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <HospitalNetwork />
      <WhyChooseUs />
      <PlansTable />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Index;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuemSomos from "@/components/Team";

const TeamPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <QuemSomos />
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
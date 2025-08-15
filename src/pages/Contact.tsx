import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <ContactInfo />
        <ContactForm />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
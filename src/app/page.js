import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/ContactForm";
import Projects from "@/components/ui/Projects";
import About from "@/components/ui/About";
import Services from "@/components/ui/Services";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

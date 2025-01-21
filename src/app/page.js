// app/page.js
import Footer from "@/components/layout/Footer";
import ThemeToggle from "../components/ThemeToggle";
import ContactForm from "@/components/ui/ContactForm";
import Projects from "@/components/ui/Projects";
import About from "@/components/ui/About";
import Services from "@/components/ui/Services";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <About />
      <Services />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

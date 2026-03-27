import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Bridge from "@/components/Bridge";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Products />
        <Bridge />
        <Industries />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

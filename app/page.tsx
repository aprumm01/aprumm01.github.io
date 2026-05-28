import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Work from "@/app/components/Work";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

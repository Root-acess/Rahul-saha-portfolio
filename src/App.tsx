import BackgroundFX from "@/components/graphics/BackgroundFX";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import BmiCheck from "@/components/sections/BmiCheck";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Videos from "@/components/sections/Videos";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function App() {
  return (
    <>
      <BackgroundFX />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <BmiCheck />
        <Gallery />
        <Videos />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

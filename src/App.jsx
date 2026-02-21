import { useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Certificates from "./pages/Certificates";
import Services from "./pages/Services";
import Footer from "./pages/Footer";
import Portfolio from "./pages/Portfolio";
import AOS from "aos";
import "aos/dist/aos.css";
import Bulb from "./components/Bulb";
import Brands from "./pages/Brands";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 100,
    });
  }, []);

  // إنشاء مراجع (Refs) لكل قسم
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const certificatesRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <>
      {/* <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Certificates /> */}

      <Navbar
        sections={{
          heroRef,
          aboutRef,
          servicesRef,
          certificatesRef,
          footerRef,
          portfolioRef,
        }}
      />
      <div className="overflow-x-hidden">
        {/* تمرير المراجع للـ Navbar */}

        {/* ربط المراجع بالـ Sections */}
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <AboutUs />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        <div ref={certificatesRef}>
          <Certificates />
        </div>
        <div>
          <Brands />
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

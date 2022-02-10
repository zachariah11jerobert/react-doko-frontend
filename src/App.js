import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Section10 from "./components/Section10/Section10";
import Section13 from "./components/Section13/Section13";
import Section14 from "./components/Section14/Section14";
import Section15 from "./components/Section15/Section15";
import ContactForm from "./components/ContactForm/ContactForm";
import Section17 from "./components/Section17/Section17";
import SectionSlider from "./components/SectionSlider/SectionSlider";
import Shipping from "./components/Shipping/Shipping";
import SectionHowItWorks from "./components/SectionHowItWorks/SectionHowItWorks";
import Section6 from "./components/Section6/Section6";
import CertifiedDoctors from "./components/CertifiedDoctors/CertifiedDoctors";
import CerifiedDoctorsCourousal from "./components/CerifiedDoctorsCourousal/CerifiedDoctorsCourousal";
import PharmacyPartner from "./components/PharmacyPartner/PharmacyPartner";
import ComparePrice from "./components/ComparePrice/ComparePrice";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Hero />
        <ComparePrice />
        <Blog />

        <SectionHowItWorks />
        <div data-aos="fade-up">
          <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
            <CertifiedDoctors />
          </div>
          <div className="d-sm-block d-md-none d-lg-none d-xl-none">
            <CerifiedDoctorsCourousal />
          </div>
        </div>

        <div data-aos="fade-up">
          <PharmacyPartner />
        </div>

        <Shipping />

        <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
          <Section6 />
        </div>

        <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
          <Section10 />
        </div>
        <div className="d-sm-block d-md-none d-lg-none d-xl-none mt-3">
          <SectionSlider />
        </div>

        <div data-aos="fade-up">
          <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
            <Section13 />
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
            <Section14 />
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
            <Section15 />
          </div>
        </div>
        <div data-aos="fade-up">
          <ContactForm />
        </div>

        <Section17 />
      </div>
      <Footer />
    </div>
  );
}

export default App;

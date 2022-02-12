import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import DidYouKnow from "./components/DidYouKnow/DidYouKnow";
import Reviews from "./components/Reviews/Reviews";
import Section14 from "./components/Section14/Section14";
import Section15 from "./components/Section15/Section15";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactUs from "./components/ContactUs/ContactUs";
import DidYouKnowSlider from "./components/DidYouKnowSlider/DidYouKnowSlider";
import Shipping from "./components/Shipping/Shipping";
import SectionHowItWorks from "./components/SectionHowItWorks/SectionHowItWorks";
import MiniDescription from "./components/MiniDescription/MiniDescription";
import CertifiedDoctors from "./components/CertifiedDoctors/CertifiedDoctors";
import CerifiedDoctorsCourousal from "./components/CerifiedDoctorsCourousal/CerifiedDoctorsCourousal";
import PharmacyPartner from "./components/PharmacyPartner/PharmacyPartner";
import ComparePrice from "./components/ComparePrice/ComparePrice";
import ReviewsSlider from "./components/ReviewSlider/ReviewsSlider";

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
          <MiniDescription />
        </div>

        <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
          <DidYouKnow />
        </div>
        <div className="d-sm-block d-md-none d-lg-none d-xl-none">
          <DidYouKnowSlider />
        </div>

        <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
          <Reviews />
        </div>
        <div className="d-sm-block d-md-none d-lg-none d-xl-none">
          <ReviewsSlider/>
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

        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Section10 from "./components/Section10/Section10";
import Section11 from "./components/Section11/Section11";
import Section12 from "./components/Section12/Section12";
import Section13 from "./components/Section13/Section13";
import Section14 from "./components/Section14/Section14";
import Section15 from "./components/Section15/Section15";
import Section16 from "./components/Section16/Section16";
import Section17 from "./components/Section17/Section17";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Section6 from "./components/Section6/Section6";
import Section7 from "./components/Section7/Section7";
import Section8 from "./components/Section8/Section8";
import Section9 from "./components/Section9/Section9";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Hero />
        <div data-aos="fade-up">
          <Section2 />
        </div>
        <div data-aos="fade-up">
          <Blog />
        </div>
        <div data-aos="fade-up">
          <Section3 />
        </div>
        <div data-aos="fade-up">
          <Section4 />
        </div>
        <div data-aos="fade-up">
          <Section5 />
        </div>
        <div data-aos="fade-up">
          <Section6 />
        </div>
        <div data-aos="fade-up">
          <Section7 />
        </div>
        <div data-aos="fade-up">
          <Section8 />
        </div>
        <div data-aos="fade-up">
          <Section9 />
        </div>
        <div data-aos="fade-up">
          <Section10 />
        </div>
        <div data-aos="fade-up">
          <Section11 />
        </div>
        <div data-aos="fade-up">
          <Section12 />
        </div>
        <div data-aos="fade-up">
          <Section13 />
        </div>
        <div data-aos="fade-up">
          <Section14 />
        </div>
        <div data-aos="fade-up">
          <Section15 />
        </div>
        <div data-aos="fade-up">
          <Section16 />
        </div>
        <div data-aos="fade-up">
          <Section17 />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

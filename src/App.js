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
  return (
    <div className="App">
      <Header />
      <div class="main">
        <Hero />
        <Section2 />
        <Blog />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
        <Section13 />
        <Section14 />
        <Section15 />
        <Section16 />
        <Section17 />
      </div>
      <Footer/>
    </div>
  );
}

export default App;

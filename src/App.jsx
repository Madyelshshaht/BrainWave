import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits/Benefits";
import Collaboration from "./components/Collaboration/Collaboration";
import CompanyLogos from "./components/CompanyLogos/CompanyLogos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Roadmap from "./components/Roadmap/Roadmap";
import Section from "./components/Section";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>


      {/* <ButtonGradient />  ==> but Inside the Button*/}
    </>
  );
};

export default App;

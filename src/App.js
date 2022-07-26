import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About"
import { Services } from "./components/Services"
import { CTA } from "./components/CTA";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="bg-skin-fill font-poppins">
      <Header />
      <Hero />
      <About />
      <Services />
      <CTA title="Want to discuss about your project?"
        desc="Lets talk in detail, I am free tomorrow. Can you do?"
        btnText="Book A Meeting!" />
      <Portfolio />
      <CTA title="Lets get your project done!"
        desc="If it is what you require? Hit me up right now!"
        btnText="Hire Me Now!" />
      <Footer />
    </div>
  );
}

export default App;

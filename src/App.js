import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Sidebar from "./components/Sidebar";
import ConterSection from "./components/CounterSection";
import Products from "./components/Products";
import TeamSection from './components/TeamSection/index';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleSidebar() {
    setIsOpen(!isOpen);
    console.log("clicked");
  }
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <HeroSection toggle={toggleSidebar} />
      <ConterSection />
      <Products/>
      <TeamSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

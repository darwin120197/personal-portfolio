import Navbar from "./components/Navbar/Navbar";
import Home from "./components/-Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import LatestProjects from "./components/LatestProjects/LatestProjects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1200,
      easing: "ease-in-sine",
      delay: 300,
    });

    AOS.refresh();
  }, []);

  return (
    <div className="text-textColor font-nunito xs:text-[90%] md:text-[100%] overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <LatestProjects />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};
export default App;

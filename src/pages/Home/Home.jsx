import { useEffect } from "react";

import { Toaster } from "react-hot-toast";

import Alert from "../../components/Alert/Alert";
import General from "../../components/General/General";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import BackToTop from "../../components/BackToTop/BackToTop";

const Home = () => {

  useEffect(() => {
    document.title = "bombel.top - Home";
  });

  return (
    <>
      <Toaster />
      <Alert />
      <General />
      <About />
      <Projects />
      <Contact />
      <BackToTop />
    </>
  );
};

export default Home;

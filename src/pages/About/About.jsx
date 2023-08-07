import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles, faFolderOpen, faHourglassEnd } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

import nerdImage from "../../../public/images/about_subpage/nerd.png";

import Skills from "../../components/Skills/Skills.jsx";
import Assure from "../../components/Assure/Assure.jsx"

import "./about.scss";

const About = () => {
  useEffect(() => {
    document.title = "bombel.top - About";
  });

  return (
    <>
      <section className="aboutme">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            delay: 0.20 
          }}
        >
          <h3 className="text--small aboutme__subtitle">Get To Know</h3>
          <h1 className="text--large aboutme__title">About Me</h1>
        </motion.div>
        <div className="aboutme__wrapper">
          <motion.div className="aboutme__image"
              whileHover={{ rotate: 0 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 10}}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
          >
            <img src={nerdImage} alt="logo" draggable="false"></img>
          </motion.div>
          <motion.div className="aboutme__content"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{
              type: "spring",
              delay: .2
            }}
          >
            <div className="aboutme__cards">
              <div className="aboutme-card">
                <FontAwesomeIcon icon={faHourglassEnd} />
                <h3>Experience</h3>
                <span>Coding for 1+ year</span>
              </div>
              <div className="aboutme-card">
                <FontAwesomeIcon icon={faCakeCandles} />
                <h3>Birthday</h3>
                <span>15.02.2024</span>
              </div>
              <div className="aboutme-card">
                <FontAwesomeIcon icon={faFolderOpen} />
                <h3>Projects</h3>
                <span>10+</span>
              </div>
            </div>
            <div className="aboutme__text text--medium">
              <span>
                So hi, I'm Eryk, I'm 15 and I live in Poznań. I started to be
                interested in websites when I was about 12 years old, but the
                level at which I made my first websites was very low. At the age
                of 14, I started to be interested in it seriously, I tried to
                copy website templates from the Internet, I watched a lot of
                tutorials, etc.. It wasn't always easy, but I owe a lot to my
                two brothers who are web-developers on a daily basis, who always
                helped me when I needed something. Now I started learning React
                and I hope that in the future my efforts will not be wasted!
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      <Skills />
      <Assure />
    </>
  );
};

export default About;
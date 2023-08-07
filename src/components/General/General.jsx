import { Typewriter } from 'react-simple-typewriter';

import { motion } from "framer-motion";

import PhonesImage from "/images/general/phones.png";

import "./general.scss";
import "../../scss/partials/_buttons.scss";

const General = () => {

  return (
    <section className="general">
      <div className="general__wrapper">
        <motion.div className="general__content"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="general__title">
            Hi there, <span>I'm bombel</span>
          </h1>
          <div className="general__text">
            <h2>I'm&nbsp;</h2>
            <h2>
                <Typewriter
                    words = {[
                        "an ambitious person",
                        "friendly, polite and helpful",
                        "keen on spending time with people",
                        "interested in programming",
                        "solving problems you can't solve",
                        "looking forward to our cooperation",
                        "simply bombel.",
                      ]}
                      loop={true}
                      cursor
                      typeSpeed={100}
                      deleteSpeed={50}
                />
            </h2>
          </div>
          <div className="general__buttons">
            <a href="#about" className="btn">
              <span>About me</span>
            </a>
          </div>
        </motion.div>
        <motion.div className="general__img"
          initial={{ scale: 0}}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <img src={PhonesImage} draggable="false" alt="phones image"></img>
        </motion.div>
      </div>
    </section>
  );
};

export default General;

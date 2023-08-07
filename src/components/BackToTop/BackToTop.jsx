import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

import "./backToTop.scss";

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setBackToTopButton(true) : setBackToTopButton(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="backToTop">
      {backToTopButton && (
        <motion.button
          onClick={scrollUp}
          initial={{ scale: 0, translateY: 50, opacity: 0 }}
          animate={{
            translateY: 0,
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              bounce: 0.5,
            },
          }}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </motion.button>
      )}
    </div>
  );
};

export default BackToTop;

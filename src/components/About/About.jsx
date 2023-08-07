import { Link } from "react-router-dom";

import Logo from "/images/logo.png";

import "./about.scss";
import "../../scss/partials/_buttons.scss";
import "../../scss/partials/_text.scss";

const About = () => {

  const itemVariants = {
    offscreen: {
      opacity: 0,
      y: '-100%',
    },
    onscreen: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="about" id="about">
      <div className="about__wrapper">
        <h2 className="about__title text--x-large">About me</h2>
        <div className="about__content">
          <div className="about__image">
            <img src={Logo} alt="logo" draggable="false"></img>
          </div>
          <div className="about__text text--medium">
            <span>
              Hi, I'm Eryk, also known as bombel. I am currently learning
              front-end development and aspire to work at a higher level in the
              future. Although I don't have many public projects yet, I plan to
              create more in the future. Currently, I am focusing on learning
              JavaScript and Sass, and hope to expand my skills by learning
              React.js, a well-known JavaScript library. If you have any further
              questions, feel free to reach me out on Discord.
            </span>
            <div className="about__buttons">
              <Link to="/about" reloadDocument className="btn btn--white">
                <span>Show more</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

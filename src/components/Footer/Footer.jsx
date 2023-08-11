import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram, faGithub, faDiscord,} from "@fortawesome/free-brands-svg-icons";

import "./footer.scss";

import bombelLogo from "../../../public/images/footer/bombel.png";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer__wrapper">
        <div className="main-footer__image">
          <img src={bombelLogo} alt="logo" draggable="false" />
        </div>
        <div className="main-footer__content">
          <Link to="/" reloadDocument>
            <span>home</span>
          </Link>
          <a href="/#about">
            <span>about</span>
          </a>
          <a href="/#projects">
            <span>projects</span>
          </a>
          <a href="/#contact">
            <span>contact</span>
          </a>
          <Link to="/about" reloadDocument>
            <span>more</span>
          </Link>
        </div>
        <div className="main-footer__socials">
          <Link to="https://github.com/bombelll" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link to="https://discord.com/users/428618348205703179" target="_blank">
            <FontAwesomeIcon icon={faDiscord} />
          </Link>
          <Link to="https://www.instagram.com/young_bombell/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
        <span className="copyright">bombel.top &copy; 2023 - All Rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faShare } from "@fortawesome/free-solid-svg-icons";

import projects from "../../../public/data/projects.json";

import "./projects.scss";
import "../../scss/partials/_buttons.scss";
import "../../scss/partials/_text.scss";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__wrapper">
        <div className="projects__title">
          <h2 className="text--large">Projects</h2>
        </div>
        <div className="projects__boxes">
          {projects.map((element, index) => (
            <div className="project-box" key={index}>
              <div className="project-box__image">
                <img src={element.image} draggable="false" alt="project image"/>
              </div>
              <div className="project-box__content">
                <h4 className="project-box__title">{element.title}</h4>
                <div className="project-box__info">
                  <div className="language"></div>
                  <div className="language__name text--small">{element.language}</div> 
                </div>
                <p className="project-box__description text--small">{element.description}</p>
                <div className="project-box__buttons">
                  <Link to={element.githubURL} target="_blank" className="btn btn--projects">
                    <FontAwesomeIcon icon={faGithub} />                    <span>Github</span>
                  </Link>
                  <Link to={element.websiteURL} target="_blank" className="btn btn--projects">
                    <FontAwesomeIcon icon={faGlobe} />
                    <span>Website</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="projects__buttons">
            <a className="btn btn--blocked">
              <span>Show All Projects</span>
              <FontAwesomeIcon icon={faShare} />
            </a>
          </div>
      </div>
    </section>
  );
};

export default Projects;

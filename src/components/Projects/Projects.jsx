import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShare } from "@fortawesome/free-solid-svg-icons";

import ProjectBox from "../ProjectsBox/ProjectsBox";
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
          {projects.map((data) => (
            <ProjectBox key={data.id} data={data} />
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

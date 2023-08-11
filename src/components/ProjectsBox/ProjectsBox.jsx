import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe} from "@fortawesome/free-solid-svg-icons";

const ProjectBox = ({ data }) => {
  return (
    <div className="project-box">
      <div className="project-box__image">
        <img src={data.image} draggable="false" alt="project image" />
      </div>
      <div className="project-box__content">
        <h4 className="project-box__title">{data.title}</h4>
        <div className="project-box__info">
          <div className="language"></div>
          <div className="language__name text--small">{data.language}</div>
        </div>
        <p className="project-box__description text--small">
          {data.description}
        </p>
        <div className="project-box__buttons">
          <Link
            to={data.githubURL}
            target="_blank"
            className="btn btn--projects"
          >
            <FontAwesomeIcon icon={faGithub} /> 
            <span>Github</span> 
          </Link>
          <Link
            to={data.websiteURL}
            target="_blank"
            className="btn btn--projects"
          >
            <FontAwesomeIcon icon={faGlobe} />
            <span>Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;

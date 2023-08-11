import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutCards = ({ icon, title, subtitle }) => {
  return (
    <div className="aboutme-card">
      <FontAwesomeIcon icon={icon} />
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </div>
  );
};

export default AboutCards;

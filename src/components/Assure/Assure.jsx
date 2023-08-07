import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import assureData from "../../../public/data/assure.json";

import "./assure.scss";

const Assure = () => {
  return (
    <section className="assure">
      <div className="assure__wrapper">
        <h3 className="text--small assure__subtitle">let's work together</h3>
        <h1 className="text--large assure__title">Assure</h1>
        <div className="assure__boxes">
            {
                assureData.map((element, index) => (
                    <div className="assure-box" key={index}>
                        <div>
                            <img src={element.icon} alt="box-icon" draggable="false" />
                        </div>
                        <h2>{element.title}</h2>
                        <span>{element.description}</span>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Assure;

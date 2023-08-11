import AssureBox from "../AssureBox/AssureBox";
import assureData from "../../../public/data/assure.json";

import "./assure.scss";

const Assure = () => {
  return (
    <section className="assure">
      <div className="assure__wrapper">
        <h3 className="text--small assure__subtitle">let's work together</h3>
        <h1 className="text--large assure__title">Assure</h1>
        <div className="assure__boxes">
          {assureData.map((data) => (
            <AssureBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assure;

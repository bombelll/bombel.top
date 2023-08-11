const SkillsBoxes = ({ data }) => {
  return (
    <div className="skills-box">
      <div className="skills-box__image">
        <img src={data.icon} alt="language icon" draggable="false" />
      </div>
      <h2>{data.language}</h2>
      <div className="skills-box__skill">
        {data.skill === "Good" ? (
          <span style={{ color: "#d0649c" }}>{data.skill}</span>
        ) : data.skill === "Junior" ? (
          <span style={{ color: "#e26537" }}>{data.skill}</span>
        ) : (
          <span style={{ color: "#45dd70" }}>{data.skill}</span>
        )}
      </div>
    </div>
  );
};

export default SkillsBoxes;

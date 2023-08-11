const AssureBox = ({ data }) => {
  return (
    <div className="assure-box">
      <div>
        <img src={data.icon} alt="box-icon" draggable="false" />
      </div>
      <h2>{data.title}</h2>
      <span>{data.description}</span>
    </div>
  );
};

export default AssureBox;

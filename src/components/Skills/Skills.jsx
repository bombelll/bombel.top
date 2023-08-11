import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SkillsBox from "../SkillsBox/SkillsBox";
import skillsData from "../../../public/data/skills.json";

import "./skills.scss";

const Skills = () => {

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    // dots: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="skills">
      <div className="skills__wrapper">
        <h3 className="text--small skills__subtitle">science progress</h3>
        <h1 className="text--large skills__title">My Skills</h1>
        <div className="skills__boxes">
          <Slider {...settings}>
            {skillsData.map((data) => (
              <div className="skills-box"  key={data.id}>
                <SkillsBox data={data} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Skills;

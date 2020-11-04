import React from "react";
import { data } from "../../Static";
import "./skills.scss";

const Skills = () => {
  const { skills } = data;

  return (
    <section
      id="skills"
      className="skills-container"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-offset="400"
      data-aos-duration="800"
      data-aos-once={true}
    >
      <div className="skills inner-wrapper">
        <h1>{skills.title}</h1>
        <ul className="skill-list-container">
          {skills.skillList.map((skill) => (
            <li className="skill-item" key={Math.random() + skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;

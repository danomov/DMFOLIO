import React from "react";
import { data } from "../../Static";
import "./about.scss";
import Image from "../Image/image";

const About = () => {
  const { about } = data;

  return (
    <section
      id="about"
      className="about-container"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-offset="400"
      data-aos-duration="800"
      data-aos-once={true}
    >
      <h1>{about.title}</h1>
      <div className="about inner-wrapper">
        <div className="about-text">
          <p>{about.description}</p>
        </div>
        <Image
            containerClassName="about-portrait"
            src={about.portrait}
            alt="portrait_picture"
        />
      </div>
    </section>
  );
}

export default About;

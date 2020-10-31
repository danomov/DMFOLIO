import React, { useState } from "react";
import { data } from "../../Static";
import "./about.scss";
import Loader from "../Loader";

export default function About() {
  const { about } = data;
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const handleSetImageStatus = () => {
    setIsLoadingImage(prevState => !prevState);
  };

  return (
    <section
      id="about"
      className="about-container"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once={true}
    >
      <h1>{about.title}</h1>
      <div className="about inner-wrapper">
        <div className="about-text">
          <p>{about.description}</p>
        </div>
        <div className="about-portrait">
          {isLoadingImage && <Loader hasWrapper />}
          <img src={about.portrait} alt="portrait_picture" onLoad={handleSetImageStatus} />
        </div>
      </div>
    </section>
  );
}

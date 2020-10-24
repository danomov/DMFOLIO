import React from "react";
import { data } from "../../Static";
import "./preview.scss";

export default function Preview() {
  const { preview } = data;

  return (
    <section
      id="preview"
      className="preview-container"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once={true}
    >
      <div className="preview inner-wrapper">
        <h1>{preview.part1}</h1>
        <h2>{preview.part2}</h2>
        <div className="description-container">
          <p>{preview.part3}</p>
        </div>
      </div>
    </section>
  );
}

import React, {useCallback} from "react";
import { data } from "../../Static";
import "./preview.scss";
import to_the_space from '../../assets/icons/to_the_space.svg';
import launch from '../../assets/icons/launch.svg'
import Image from "../Image";

const Preview = () => {
  const { preview } = data;

  const isNight = useCallback(() => {
    const date = new Date().getHours();
    return date > 19 || date < 7;
  }, [])

  return (
    <section
      id="preview"
      className="preview-container"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="800"
      data-aos-once={true}
      data-testid="test-preview"
    >
      <div className="preview inner-wrapper">
        <div className="preview-text-container">
          <h1>{preview.part1}</h1>
          <h2>{preview.part2}</h2>
          <div className="description-container" data-testid="test-desc-container">
            <p>{preview.part3}</p>
          </div>
        </div>
        <Image
            containerClassName="preview-image-container"
            src={isNight() ? launch : to_the_space}
            alt="rocket_image"
        />
      </div>
    </section>
  );
}

export default Preview;

import React from "react";
import { data } from "../../Static";
import "./about.scss";

export default function About() {
    const { about } = data;

    return (
        <section id='about' className="about-container" data-aos="fade-up" data-aos-duration="800" data-aos-once={true}>
            <h1>{about.title}</h1>
            <div className="about inner-wrapper">
                <div className='about-text'>
                    <p>{about.description}</p>
                </div>
                <div className='about-portrait'>
                    <img src={about.portrait} alt='portrait_picture' />
                </div>
            </div>
        </section>
    );
}

import React from "react";
import "./home.scss";
import Preview from "../Preview";
import About from "../About";
import Skills from "../Skills";
import Experience from "../Experience";
import Projects from "../Projects";
import Contact from "../Contact/contact";

const Home = () => {
    return (
      <div className="home-page-container">
        <Preview />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    );
}

export default Home;

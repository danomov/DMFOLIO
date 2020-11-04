import React, { Suspense, lazy } from "react";
import Loader from "../Loader";
import "./home.scss";
import { withHeader, withAudio } from "../../HOC";

const Preview = lazy(() => import("../Preview"));
const About = lazy(() => import("../About"));
const Skills = lazy(() => import("../Skills"));
const Experience = lazy(() => import("../Experience"));
const Projects = lazy(() => import("../Projects"));
const Contact = lazy(() => import("../Contact"));

const Home = () => {
  return (
    <Suspense fallback={<Loader hasWrapper />}>
      <div className="home-page-container">
        <Preview />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Suspense>
  );
};

export default withHeader(withAudio(Home));

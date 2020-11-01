import React, { useState } from "react";
import { data } from "../../Static";
import "./projects.scss";
import Button from "../Button";

export default function Projects() {
  const [isShowingAll, setIsShowingAll] = useState(false);
  const { projects } = data;

  const handleShowAll = () => {
    setIsShowingAll(prevState => !prevState);
  };

  return (
    <section
      id="projects"
      className="projects-container"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once={true}
    >
      <div className="projects inner-wrapper">
        <h1>{projects.title}</h1>
        <div className="project-list-container">
          {projects.projectList
            .slice(0, isShowingAll ? -1 : projects.initialShowProjects)
            .map(project => (
              <div className="project-item" key={Math.random() + project.name}>
                <div className="project-info">
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                </div>
                <div className="project-links-container">
                  {project.links.map(({ link }) => (
                    <a
                      href={link}
                      key={link}
                      className={link.includes("git") ? "git" : ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {""}
                    </a>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <Button type="button" onClick={handleShowAll}>
          {isShowingAll ? "Show Less" : "Show More"}
        </Button>
      </div>
    </section>
  );
}

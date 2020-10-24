import React from "react";
import { data } from "../../Static";
import "./projects.scss";

export default function Projects() {
    const { projects } = data;

    return (
        <section id='projects' className="projects-container" data-aos="fade-up" data-aos-duration="800" data-aos-once={true}>
            <div className="projects inner-wrapper">
                <h1>{projects.title}</h1>
                <div className='project-list-container'>
                    {projects.projectList.map(project => (
                        <div className='project-item' key={Math.random() + project.name}>
                            <div className='project-info'>
                                <h1>{project.name}</h1>
                                <p>{project.description}</p>
                            </div>
                            <div className='project-links-container'>
                                {project.links.map(({ link }) => (
                                    <a href={link} key={link} className={link.includes('git') ? 'git' : ''} target='_blank' rel='noopener noreferrer'>{''}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

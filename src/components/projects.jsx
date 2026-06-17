import React, { useState } from 'react';
import './projects.css';

function Projects({ projects, github}) {
  return (
    <section className="projects-container"> 
        <h2>My Projects</h2>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} github={github} />
            ))}
        </div>
    </section>
    );
}

function ProjectCard({ project, github }) {
    console.log("ProjectCard received github:", github);
    const [isFlipped, setIsFlipped] = useState(false);
    const toggleFlip = () => setIsFlipped(!isFlipped);

    return !isFlipped ? (
        <ProjectCardFront project={project} onFlip={toggleFlip} />
    ) : (
        <ProjectCardBack project={project} onFlip={toggleFlip} github={github} />
    );
}

function ProjectCardFront({ project, onFlip }) {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            {project.thumbnail && <img src={project.thumbnail} alt={project.title} className="project-image" />}
            <p>{project.description}</p>
            <button onClick={onFlip}>View Details</button>
        </div>
    );
}

function ProjectCardBack({ project, onFlip, github }) {
    console.log("ProjectCardBack received github:", github);
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            {project.repo_name ? ( // Only render the link if repo_name exists
                <a href={`https://github.com/${github}/${project.repo_name}`}
                 target="_blank"
                 rel="noopener noreferrer">View on GitHub</a>
            ) : (
                <p>GitHub repository link not available.</p> // Optional: provide feedback
            )}
            {/* <p>Methodoloy: {project.methodology}</p> */}
            <p>Technologies: {project.technologies}</p>
            <button onClick={onFlip}>Back</button>
        </div>
    );
}
export default Projects;

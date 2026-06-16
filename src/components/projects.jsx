import './projects.css';

function Projects({ projects }) {
  return (
    <section className="projects-container"> 
        <h2>My Projects</h2>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </section>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            {project.thumbnail && <img src={project.thumbnail} alt={project.title} className="project-image" />}
            <p>{project.description}</p>
        </div>
    );
}
export default Projects;

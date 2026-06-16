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
      <img src={project.thumbnail} alt={project.title} />
      <h3>{project.title}</h3>
      <p className="description">{project.description}</p>
      
      <div className="info-section">
        <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
        <p><strong>Methodology:</strong> {project.methodology}</p>
        <p><strong>Infrastructure:</strong> {project.infrastructure}</p>
      </div>

      <div className="card-actions">
        {project.live_link ? (
          <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="btn-primary">View Live</a>
        ) : (
          <a href={`https://github.com/ishanpatel/${project.repo_name}`} target="_blank" rel="noopener noreferrer" className="btn-secondary">View Repo</a>
        )}
      </div>
    </div>
  );
}

export default Projects;
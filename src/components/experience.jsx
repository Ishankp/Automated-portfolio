import './experience.css';

function Experience({ experience }) {
    return (
        <section className="experience-container">
            <h2>Experience</h2>
            <ul>This is where the experience would go in a vertical manner</ul>
            <div className="experience-grid">
                {experience.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
            </div>
        </section>
    );
}

function ExperienceCard({ experience }) {
    return (
        <div className="experience-card">
            <h3>{experience.position} at {experience.company}</h3>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
        </div>
    );
}

export default Experience;

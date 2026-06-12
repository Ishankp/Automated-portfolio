// src/components/profile.jsx
import './profile.css'; // Don't forget your CSS!


// src/components/Profile.jsx

// 1. The Sub-Component (defined in the same file)
function EducationItem({ edu }) {
  return (
    <div className="edu-card">
      <h3>{edu.institution}</h3>
      <p><strong>Degree:</strong> {edu.degree}</p>
      <p><strong>Year:</strong> {edu.graduationYear}</p>
      <p><em>{edu.details}</em></p>
    </div>
  );
}

// 2. The Main Component
function Profile({ bio, education }) {
  return (
    <section className="profile-container">
      <h2>About Me</h2>
      <p>{bio}</p>
      
      <h2>Education</h2>
      {education.map((edu, index) => (
        <EducationItem key={index} edu={edu} />
      ))}
    </section>
  );
}


export default Profile;
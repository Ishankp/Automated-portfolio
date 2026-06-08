// src/components/profile.jsx
import './profile.css'; // Don't forget your CSS!

function Profile({ bio, skills }) {
  return (
    <section className="profile-container">
      <h2>About Me</h2>
      <p>{bio}</p>
      <h3>Skills</h3>
      <p>{skills}</p>
    </section>
  );
}

export default Profile;
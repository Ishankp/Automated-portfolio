// src/Profile.jsx
import header from "./header.css";

function Profile({ name, title }) {
  return (
    <section>
      <h2>Name: {name}</h2>
      <p>{title}</p>
    </section>
  );
}

export default Profile;
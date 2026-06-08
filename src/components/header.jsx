// src/header.jsx
import "./header.css";

function Header({ name, title }) {
  return (
    <div className="header-container">
      <h2>Name: {name}</h2>
      <p>{title}</p>
    </div>
  );
}

export default Header;
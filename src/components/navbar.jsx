// src/components/Navbar.jsx
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
}

export default Navbar;
import info from '../info.json';
import "./App.css";
import Header from './components/header.jsx';
import Profile from './components/profile.jsx';
import Navbar from './components/navbar.jsx';
import Projects from './components/projects.jsx';
import Experience from './components/experience.jsx';

function App() {
  return (
    <div className="main-container">
      {/* Navbar section */}
      <Navbar />
      {/* Header section */}
      <Header name={info.name} title={info.title} />

      {/* Profile section */}
      <Profile bio={info.bio} education={info.education} />

      {/* Projects section */}
      <Projects projects = {info.projects} github = {info.github}/>

      {/* Experience section */}
      <Experience experience={info.experience} />

    </div>
  );
}

export default App;
import info from '../info.json';
import "./App.css";
import Header from './components/header.jsx';
import Profile from './components/profile.jsx';
import Navbar from './components/navbar.jsx';

function App() {
  return (
    <div className="main-container">
      {/* Navbar section */}
      <Navbar />
      {/* Header section */}
      <Header name={info.name} title={info.title} />

      {/* Profile section */}
      <Profile bio={info.bio} skills={info.skills} />
    </div>
  );
}

export default App;
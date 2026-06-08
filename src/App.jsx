import info from '../info.json';
import Header from './components/header.jsx';
import Profile from './components/profile.jsx';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Header section */}
      <Header name={info.name} title={info.title} />

      {/* Profile section */}
      <Profile bio={info.bio} skills={info.skills} />
    </div>
  );
}

export default App;
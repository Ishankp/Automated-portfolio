import info from '../info.json';
import Header from './components/header.jsx';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Header name={info.name} title={info.title} />

    </div>

  );
}

export default App;
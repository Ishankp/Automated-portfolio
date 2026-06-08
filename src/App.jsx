import info from '../info.json';
import header from './components/header.jsx';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <header name={info.name} title={info.title} />
    </div>

  );
}

export default App;
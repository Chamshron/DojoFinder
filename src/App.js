import './App.css';
import EmmaMap from './components/map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <EmmaMap/>
          <p>A map should really be above me</p>
        </div>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import EmmaMap from './components/map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>What Dojo do you want to locate?</p>
          <EmmaMap/>
          <p>A map should really be above me...AND IT IS :)</p>
        </div>
      </header>
    </div>
  );
}

export default App;

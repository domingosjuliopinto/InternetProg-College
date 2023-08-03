import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>
          This will move horizontally
        </h2>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          This will also move horizontally
        </h2>
        <p>
          This will move vertically
        </p>
      </header>
    </div>
  );
}

export default App;

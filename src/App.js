import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch('/.netlify/functions/hello')
      .then((res) => res.text())
      .then(json => console.log(json))

    fetch('/.netlify/functions/hey')
      .then((res) => res.text())
      .then(json => console.log(json))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testing notifications
        </a>
      </header>
    </div>
  );
}

export default App;

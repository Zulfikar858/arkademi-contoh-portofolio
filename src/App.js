import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header";

function App() {
  return (
    <div className="App">
    <Header  title="Header"/>
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
          Learn Me
        </a>
      </header>
    </div>
  );
}

export default App;

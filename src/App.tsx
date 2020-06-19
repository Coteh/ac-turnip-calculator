import React from 'react';
import logo from './logo.svg';
import './App.css';
import TurnipCalculator from './component/TurnipCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TurnipCalculator />
    </div>
  );
}

export default App;

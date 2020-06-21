import React from 'react';
import Leaf from './Leaf.png';
import './App.css';
import TurnipCalculator from './component/TurnipCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Leaf} className="App-logo" alt="logo" />
      </header>
      <TurnipCalculator />
      <footer>&copy; 2020 James Cote</footer>
    </div>
  );
}

export default App;

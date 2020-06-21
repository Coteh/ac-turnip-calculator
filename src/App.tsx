import React, { useState } from 'react';
import Turnip from './icon/turnip.png';
import RottenTurnip from './icon/turnip_rotten.png';
import './App.css';
import TurnipCalculator from './component/TurnipCalculator';

function App() {
  const [turnipImgSrc, setTurnipImgSrc] = useState(Turnip);

  function onPriceCalculated(
    buyPrice: number,
    turnipPrice: number,
    numTurnips: number,
  ) {
    if (turnipPrice < 100) {
      setTurnipImgSrc(RottenTurnip);
    } else {
      setTurnipImgSrc(Turnip);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={turnipImgSrc} className="App-logo" alt="logo" />
      </header>
      <h1>Animal Crossing Turnip Calculator</h1>
      <TurnipCalculator onPriceCalculated={onPriceCalculated} />
      <footer>&copy; 2020 James Cote</footer>
    </div>
  );
}

export default App;

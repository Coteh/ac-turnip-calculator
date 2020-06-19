import React, { useState, useEffect, useCallback } from 'react';
import TipDisplay from './TipDisplay';

export default function TurnipCalculator() {
  const [price, setPrice] = useState(473);
  const [turnips, setTurnips] = useState(4000);
  const [buyPrice, setBuyPrice] = useState(0);
  const [tipPercent, setTipPercent] = useState(0.1);
  const [tip, setTip] = useState(0);

  const tipCallback = useCallback(calculateTip, [buyPrice, tipPercent]);

  useEffect(() => {
    tipCallback();
  }, [buyPrice, tipCallback]);

  function calculateBuyPrice() {
    setBuyPrice(price * turnips);
  }

  function calculateTip() {
    setTip(buyPrice * tipPercent);
  }

  return (
    <div className={'turnip-calc'}>
      <form action="">
        <label>
          Turnip Price:
          <input
            value={price}
            onChange={(e) =>
              setPrice(e.target.value === '' ? 0 : parseInt(e.target.value))
            }
          ></input>
        </label>
        <label>
          Number of Turnips:
          <input
            value={turnips}
            onChange={(e) =>
              setTurnips(e.target.value === '' ? 0 : parseInt(e.target.value))
            }
          ></input>
        </label>
        <label>
          Set Tip percentage:
          <input
            value={tipPercent}
            onChange={(e) =>
              setTipPercent(
                e.target.value === '' ? 0 : parseInt(e.target.value),
              )
            }
          ></input>
        </label>
        <button type={'button'} onClick={calculateBuyPrice}>
          Submit
        </button>
      </form>
      <label>Buy Price will be: {buyPrice}</label>
      <label>You should tip: {tip} bells</label>
      <TipDisplay tip={tip} />
    </div>
  );
}

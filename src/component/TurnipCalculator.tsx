import React, { useState, useEffect, useCallback } from 'react';
import TipDisplay from './TipDisplay';
import InputBox from './form/InputBox';
import Button from './form/Button';

export default function TurnipCalculator(props: any) {
  const [price, setPrice] = useState(347);
  const [turnips, setTurnips] = useState(4000);
  const [buyPrice, setBuyPrice] = useState(0);
  const [tipPercent, setTipPercent] = useState(0.1);
  const [tip, setTip] = useState(0);

  const { onPriceCalculated } = props;

  const tipCallback = useCallback(calculateTip, [buyPrice, tipPercent]);

  useEffect(() => {
    tipCallback();
  }, [buyPrice, tipCallback]);

  function calculateBuyPrice() {
    setBuyPrice(price * turnips);
    onPriceCalculated(buyPrice, price, turnips);
  }

  function calculateTip() {
    setTip(buyPrice * tipPercent);
  }

  return (
    <div className={'turnip-calc'}>
      <form action="">
        <InputBox label={'Input Price:'} value={price} onChange={setPrice} />
        <br />
        <InputBox
          label={'Number of Turnips:'}
          value={turnips}
          onChange={setTurnips}
        />
        <br />
        <InputBox
          label={'Set Tip percentage:'}
          value={tipPercent}
          onChange={setTipPercent}
        />
        <br />
        <Button onSubmit={calculateBuyPrice} />
        <br />
        <br />
      </form>
      {(() => {
        if (buyPrice > 0) {
          return (
            <>
              <label>
                Buy Price will be: <b>{buyPrice}</b> bells
              </label>
              <br />
              <TipDisplay tip={tip} />
            </>
          );
        } else {
          return <></>;
        }
      })()}
    </div>
  );
}

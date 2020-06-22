import React, { useState, useEffect, useCallback } from 'react';
import TipDisplay from './TipDisplay';
import FormInputField from './form/FormInputField';
import { css } from 'emotion';

export default function TurnipCalculator(props: any) {
  const [price, setPrice] = useState(347);
  const [turnips, setTurnips] = useState(4000);
  const [buyPrice, setBuyPrice] = useState(0);
  const [tipPercent, setTipPercent] = useState(10);
  const [tip, setTip] = useState(0);

  const { onPriceCalculated } = props;
  const inputStyle = css`
    padding: 12px;
    margin: 16px;
    border: 1px solid green;
    border-radius: 8px;
    font-size: 20px;
  `;

  const buyCallback = useCallback(calculateBuyPrice, [price, turnips]);
  const tipCallback = useCallback(calculateTip, [buyPrice, tipPercent]);

  useEffect(() => {
    buyCallback();
  }, [buyCallback]);

  useEffect(() => {
    tipCallback();
  }, [tipCallback]);

  function calculateBuyPrice() {
    setBuyPrice(price * turnips);
    onPriceCalculated(buyPrice, price, turnips);
  }

  function calculateTip() {
    setTip(buyPrice * (tipPercent / 100));
  }

  function parseNumericInputValue(value: string): number {
    if (value === '') {
      return 0;
    }
    const parsedValue: number = parseInt(value);
    if (!isNaN(parsedValue)) {
      return parsedValue;
    }
    return 0;
  }

  return (
    <div className={'turnip-calc'}>
      <form action="">
        <FormInputField
          label={'Input Price:'}
          input={
            <input
              className={inputStyle}
              value={price}
              onChange={(e) => setPrice(parseNumericInputValue(e.target.value))}
            />
          }
        />
        <br />
        <FormInputField
          label={'Number of Turnips:'}
          input={
            <input
              className={inputStyle}
              value={turnips}
              onChange={(e) =>
                setTurnips(parseNumericInputValue(e.target.value))
              }
            />
          }
        />
        <br />
        <FormInputField
          label={'Set Tip percentage:'}
          input={
            <input
              className={inputStyle}
              value={tipPercent}
              onChange={(e) => {
                setTipPercent(
                  Math.min(
                    Math.max(0, parseNumericInputValue(e.target.value)),
                    100,
                  ),
                );
              }}
              onFocus={(e: React.ChangeEvent<HTMLInputElement>) => {
                let elem: HTMLInputElement = e.target;
                elem.selectionStart = elem.selectionEnd = elem.value.length - 1;
              }}
            />
          }
        />
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

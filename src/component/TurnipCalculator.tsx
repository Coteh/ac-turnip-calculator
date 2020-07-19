import React, { useState, useEffect } from 'react';
import FormInputField from './form/FormInputField';
import { css } from 'emotion';

export default function TurnipCalculator(props: any) {
  const [price, setPrice] = useState(0);
  const [turnips, setTurnips] = useState(4000);
  const [buyPrice, setBuyPrice] = useState(0);
  const [tipPercent, setTipPercent] = useState(10);
  const [tip, setTip] = useState(0);

  const ROUND_TO_NEAREST: number = 100;

  const { onPriceCalculated, onTipCalculated } = props;
  const inputStyle = css`
    padding: 12px;
    margin: 16px;
    border: 1px solid green;
    border-radius: 8px;
    font-size: 20px;
    @media (pointer: none), (pointer: coarse) {
      border-radius: 16px;
    }
  `;

  useEffect(() => {
    setBuyPrice(price * turnips);
  }, [price, turnips]);

  useEffect(() => {
    setTip(
      Math.round((buyPrice * (tipPercent / 100)) / ROUND_TO_NEAREST) *
        ROUND_TO_NEAREST,
    );
  }, [buyPrice, tipPercent]);

  useEffect(() => {
    onPriceCalculated?.(buyPrice, price, turnips);
  }, [buyPrice, price, turnips, onPriceCalculated]);

  useEffect(() => {
    onTipCalculated?.(tip);
  }, [tip, onTipCalculated]);

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
              aria-label="price"
              className={inputStyle}
              value={price}
              onChange={(e) => setPrice(parseNumericInputValue(e.target.value))}
            />
          }
        />
        <FormInputField
          label={'Number of Turnips:'}
          input={
            <input
              aria-label="turnips"
              className={inputStyle}
              value={turnips}
              onChange={(e) =>
                setTurnips(parseNumericInputValue(e.target.value))
              }
            />
          }
        />
        <FormInputField
          label={'Set Tip percentage:'}
          input={
            <input
              aria-label="tip_percent"
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
            />
          }
        />
        <br />
      </form>
    </div>
  );
}

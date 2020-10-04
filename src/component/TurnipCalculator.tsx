import React, { useState, useEffect, useRef } from 'react';
import FormInputField from './form/FormInputField';
import ErrorAlert from './alert/ErrorAlert';
import { css } from 'emotion';

export default function TurnipCalculator(props: any) {
  const firstUpdate = useRef(true);
  const [price, setPrice] = useState(0);
  const [turnips, setTurnips] = useState(4000);
  const [buyPrice, setBuyPrice] = useState(0);
  const [tipPercent, setTipPercent] = useState(10);
  const [tip, setTip] = useState(0);

  const [alertPrice, setAlertPrice] = useState(false);
  const [alertTurnip, setAlertTurnip] = useState(false);

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
    if (firstUpdate.current) {
      firstUpdate.current = false;
      setBuyPrice(price * turnips);
    } else {
      setAlertPrice(price === 0);
      setAlertTurnip(turnips === 0);

      if (!alertPrice && !alertTurnip) {
        setBuyPrice(price * turnips);
      }
    }
  }, [price, turnips, alertPrice, alertTurnip]);

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

  function checkPriceZeroValue(value: string) {
    setAlertPrice(value === '0');
  }

  function checkTurnipZeroValue(value: string) {
    setAlertTurnip(value === '0');
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
      {alertPrice ? (
        <ErrorAlert message="You can't put 0 as a price"></ErrorAlert>
      ) : (
        ''
      )}

      {alertTurnip ? (
        <ErrorAlert message="You can't put 0 as turnips number"></ErrorAlert>
      ) : (
        ''
      )}
      <form action="">
        <FormInputField
          label={'Input Price:'}
          input={
            <input
              aria-label="price"
              className={inputStyle}
              value={price}
              onChange={(e) => setPrice(parseNumericInputValue(e.target.value))}
              onBlur={(event) => checkPriceZeroValue(event.target.value)}
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
              onBlur={(event) => checkTurnipZeroValue(event.target.value)}
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

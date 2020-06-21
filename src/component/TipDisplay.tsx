import React, { useState, useEffect } from 'react';
import { css } from 'emotion';

export default function TipDisplay(props: any) {
  const { tip } = props;
  const [coins, setCoins] = useState(0);
  const [smallBags, setSmallBags] = useState(0);
  const [mediumBags, setMediumBags] = useState(0);
  const [largeBags, setLargeBags] = useState(0);

  useEffect(() => {
    let workingTip = tip;
    setLargeBags(Math.floor(workingTip / 99000));
    workingTip %= 99000;
    setMediumBags(Math.floor(workingTip / 10000));
    workingTip %= 10000;
    setSmallBags(Math.floor(workingTip / 1000));
    workingTip %= 1000;
    setCoins(Math.floor(workingTip / 100));
  }, [tip]);

  return (
    <div
      className={css`
        padding: 8px;
        width: 25%;
        border: 5px solid #9c9988;
        border-radius: 8px;
        background-color: #7b6c53;
        margin: 20px auto;
      `}
    >
      <label>
        You should tip: <b>{tip}</b> bells
      </label>
      <br />
      <span>Thats...</span>
      <br />
      <span>
        <b>{largeBags}</b> large bell bags,
      </span>
      <br />
      <span>
        <b>{mediumBags}</b> medium bell bags,
      </span>
      <br />
      <span>
        <b>{smallBags}</b> small bell bags,
      </span>
      <br />
      <span>
        and <b>{coins}</b> coins
      </span>
    </div>
  );
}

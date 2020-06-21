import React, { useState, useEffect } from 'react';
import { css } from 'emotion';
import BellDisplay from './BellDisplay';

import largeBellImg from './../icon/large_bag.png';
import mediumBellImg from './../icon/medium_bag.png';
import smallBellImg from './../icon/small_bag.png';
import coinImg from './../icon/coin.png';

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
      <BellDisplay
        amount={largeBags}
        imgSrc={largeBellImg}
        alt={'Large Bell Bag Icon'}
      />
      <BellDisplay
        amount={mediumBags}
        imgSrc={mediumBellImg}
        alt={'Medium Bell Bag Icon'}
      />
      <BellDisplay
        amount={smallBags}
        imgSrc={smallBellImg}
        alt={'Small Bell Bag Icon'}
      />
      <BellDisplay amount={coins} imgSrc={coinImg} alt={'Coin Icon'} />
    </div>
  );
}

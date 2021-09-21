import React, { useState, useEffect } from 'react';
import { css } from 'emotion';
import BellDisplay from './BellDisplay';

import largeBellImg from './../icon/large_bag.png';
import mediumBellImg from './../icon/medium_bag.png';
import smallBellImg from './../icon/small_bag.png';
import coinImg from './../icon/coin.png';
import MobileCheck from '../util/MobileCheck';

export interface TipDisplayProps {
  tip: number;
}

export default function TipDisplay(props: TipDisplayProps) {
  const { tip } = props;
  const [coins, setCoins] = useState(0);
  const [smallBags, setSmallBags] = useState(0);
  const [mediumBags, setMediumBags] = useState(0);
  const [largeBags, setLargeBags] = useState(0);
  const [shownTooltipName, setShownTooltipName] = useState('');

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
        padding: 12px;
        width: 25%;
        border-radius: 16px;
        background-color: #7b6c53;
        color: #f8f8f8;
        margin: 20px auto;
        @media (max-width: 1024px) {
          width: 50%;
        }
        @media (max-width: 480px) {
          width: 75%;
        }
      `}
    >
      <label>
        If you want to provide a tip, then tip: <b>{tip}</b> bells
      </label>
      <br />
      <span>That's...</span>
      <br />
      <BellDisplay
        amount={largeBags}
        imgSrc={largeBellImg}
        alt={'Large Bell Bag Icon'}
        bellUnits={99000}
        tooltipName="largeBags"
        shownTooltipName={shownTooltipName}
        setShownTooltipName={setShownTooltipName}
      />
      <BellDisplay
        amount={mediumBags}
        imgSrc={mediumBellImg}
        alt={'Medium Bell Bag Icon'}
        bellUnits={10000}
        tooltipName="mediumBags"
        shownTooltipName={shownTooltipName}
        setShownTooltipName={setShownTooltipName}
      />
      <BellDisplay
        amount={smallBags}
        imgSrc={smallBellImg}
        alt={'Small Bell Bag Icon'}
        bellUnits={1000}
        tooltipName="smallBags"
        shownTooltipName={shownTooltipName}
        setShownTooltipName={setShownTooltipName}
      />
      <BellDisplay
        amount={coins}
        imgSrc={coinImg}
        alt={'Coin Icon'}
        bellUnits={100}
        tooltipName="coins"
        shownTooltipName={shownTooltipName}
        setShownTooltipName={setShownTooltipName}
      />
      <br />
      <span>
        {MobileCheck.isMobile() ? (
          <>Tap the bell icons to view their quantities</>
        ) : (
          <>Hover the bell icons to view their quantities</>
        )}
      </span>
    </div>
  );
}

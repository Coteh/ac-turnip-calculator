import React from 'react';

import { css } from 'emotion';
import MobileCheck from '../util/MobileCheck';

export interface BellDisplayProps {
  amount: number;
  imgSrc: string;
  alt: string;
  bellUnits: number;
  tooltipName: string;
  shownTooltipName: string;
  setShownTooltipName: React.Dispatch<React.SetStateAction<string>>;
}

export default function BellDisplay(props: BellDisplayProps) {
  const {
    amount,
    imgSrc,
    alt,
    bellUnits,
    tooltipName,
    shownTooltipName,
    setShownTooltipName,
  } = props;
  const showTooltip = tooltipName === shownTooltipName;

  function setShowTooltip(show: boolean) {
    setShownTooltipName(show ? tooltipName : '');
  }

  if (amount === 0) {
    return null;
  }

  return (
    <div
      className={css`
        display: inline-block;
        padding: 4px;
        font-family: 'Zilla Slab', serif;
        font-weight: 700;
        font-size: 36px;
        color: white;
      `}
      onMouseOver={() => {
        if (!MobileCheck.isMobile()) setShowTooltip(true);
      }}
      onMouseOut={() => {
        if (!MobileCheck.isMobile()) setShowTooltip(false);
      }}
      onClick={() => setShowTooltip(!showTooltip)}
    >
      <img
        className={css`
          width: 60px;
        `}
        alt={alt}
        src={imgSrc}
        title={bellUnits + ' bells'}
      />
      {amount}
      {showTooltip && (
        <div
          className={css`
            position: absolute;
            border: 1px solid black;
            border-radius: 16px;
            background-color: goldenrod;
            padding: 8px;
            font-size: 16px;
          `}
        >
          {`${amount} stack${amount !== 1 ? 's' : ''} of `}
          <b>{bellUnits} bells</b>
        </div>
      )}
    </div>
  );
}

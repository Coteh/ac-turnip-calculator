import React from 'react';

import { css } from 'emotion';

export default function BellDisplay(props: any) {
  const { amount, imgSrc, alt } = props;

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
    >
      <img
        className={css`
          width: 60px;
        `}
        alt={alt}
        src={imgSrc}
      />
      {amount}
    </div>
  );
}

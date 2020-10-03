import React from 'react';

import { css } from 'emotion';

export default function FormInputField(props: any) {
  const { label, input, inputmode = 'numeric' } = props;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '75%',
        margin: '0 auto',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <label
        className={css`
          width: 15%;
          @media (max-width: 720px) {
            width: 35%;
          }
          @media (max-width: 480px) {
            width: 75%;
          }
        `}
      >
        {label}
      </label>
      {React.cloneElement(input, { inputmode })}
    </div>
  );
}

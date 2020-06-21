import React from 'react';
import { css } from 'emotion';

export default function InputBox(props: any) {
  const { value, setValue, label } = props;

  return (
    <>
      <label>{label}</label>
      <input
        className={css`
          padding: 12px;
          margin: 16px;
          border: 1px solid green;
          border-radius: 8px;
          font-size: 20px;
        `}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value === '' ? 0 : parseInt(e.target.value))
        }
      />
    </>
  );
}

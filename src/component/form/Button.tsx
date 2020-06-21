import React from 'react';
import { css } from 'emotion';

export default function Button(props: any) {
  const { onSubmit } = props;

  return (
    <>
      <div
        className={css`
          display: inline-block;
          border: 1px solid green;
          border-radius: 8px;
          padding: 16px;
          &:hover {
            background-color: green;
            color: white;
            cursor: pointer;
          }
        `}
        onClick={onSubmit}
      >
        Submit
      </div>
    </>
  );
}

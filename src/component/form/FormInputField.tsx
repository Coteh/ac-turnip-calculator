import React from 'react';

export default function FormInputField(props: any) {
  const { label, input } = props;

  return (
    <>
      <label>{label}</label>
      {input}
    </>
  );
}

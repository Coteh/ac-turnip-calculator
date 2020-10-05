import React from 'react';
import { render } from '@testing-library/react';
import FormInputField from './FormInputField';

describe('FormInputField component', () => {
  test('should render without crash', () => {
    render(<FormInputField input={<input></input>} />);
  });
  test('should render label with supplied label text', () => {
    const labelText = 'Test Label';

    const { container } = render(
      <FormInputField label={labelText} input={<input></input>} />,
    );

    const labelElem = container.querySelector('label');
    expect(labelElem).toHaveTextContent(labelText);
  });
  test('should wrap a supplied input field', () => {
    const inputID: string = 'myInputElem';

    const { container } = render(
      <FormInputField input={<input id={inputID} />} />,
    );

    const foundInputElem = container.querySelector('input');
    expect(foundInputElem?.id).toBe(inputID);
  });
});

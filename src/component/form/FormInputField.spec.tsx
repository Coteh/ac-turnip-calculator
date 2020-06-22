import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormInputField from './FormInputField';

describe('FormInputField component', () => {
  test('should render without crash', () => {
    render(<FormInputField />);
  });
  test('should render label with supplied label text', () => {
    const labelText = 'Test Label';

    const { container } = render(<FormInputField label={labelText} />);

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

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputBox from './InputBox';

describe('InputBox component', () => {
  test('should render without crash', () => {
    render(<InputBox />);
  });
  test('should call onChange handler when value changed', () => {
    const setValueStub = jest.fn();

    const { container } = render(<InputBox onChange={setValueStub} />);

    const inputField = container.querySelector('input');
    expect(inputField).toBeTruthy();

    expect(setValueStub).not.toBeCalled();
    fireEvent.change(inputField!, {
      target: {
        value: '45',
      },
    });
    expect(setValueStub).toHaveBeenCalledTimes(1);
  });
});

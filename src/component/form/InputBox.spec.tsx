import React from 'react';
import { render } from '@testing-library/react';
import InputBox from './InputBox';

describe('InputBox component', () => {
  test('should render without crash', () => {
    render(<InputBox />);
  });
  test('should change displayed value when value changed', () => {
    fail('Not implemented');
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import TurnipCalculator from './TurnipCalculator';

describe('TurnipCalculator component', () => {
  test('should render without crash', () => {
    render(<TurnipCalculator />);
  });
  test('should display turnip price', () => {
    fail('Not implemented');
  });
  test('should display number of turnips', () => {
    fail('Not implemented');
  });
  test('should display tip percentage', () => {
    fail('Not implemented');
  });
  test('should display buy price given turnip price and number of turnips', () => {
    fail('Not implemented');
  });
  test('should display number of bells to tip given buy price and tip percentage', () => {
    fail('Not implemented');
  });
});

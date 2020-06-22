import React from 'react';
import { render } from '@testing-library/react';
import BellDisplay from './BellDisplay';

describe('BellDisplay component', () => {
  test('should render without crash', () => {
    render(<BellDisplay />);
  });
  test('should display amount passed in as prop', () => {
    fail('Not implemented');
  });
  test('should display icon passed in via image src as prop', () => {
    fail('Not implemented');
  });
  test('should display img alt text passed in as prop', () => {
    fail('Not implemented');
  });
  test('should display tooltip with quantity and bell amount on mouse hover (desktop)', () => {
    fail('Not implemented');
  });
  test('should display tooltip with quantity and bell amount on tap (mobile)', () => {
    fail('Not implemented');
  });
});

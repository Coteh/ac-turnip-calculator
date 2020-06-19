import React from 'react';
import { render } from '@testing-library/react';
import TipDisplay from './TipDisplay';

describe('TipDisplay component', () => {
  test('should render without crash', () => {
    render(<TipDisplay/>);
  });
  test("should display number of large bell bags to tip", () => {
    fail("Not implemented");
  });
  test("should display number of medium bell bags to tip", () => {
    fail("Not implemented");
  });
  test("should display number of small bell bags to tip", () => {
    fail("Not implemented");
  });
  test("should display number of coins to tip", () => {
    fail("Not implemented");
  });
});

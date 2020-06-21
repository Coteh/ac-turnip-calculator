import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('should render without crash', () => {
    render(<Button />);
  });
});

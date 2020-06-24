import React from 'react';
import { render } from '@testing-library/react';
import GitHubCorner from './GitHubCorner';

describe('GitHubCorner component', () => {
  test('should render without crash', () => {
    render(<GitHubCorner />);
  });
});

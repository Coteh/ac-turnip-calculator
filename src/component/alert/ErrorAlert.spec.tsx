import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ErrorAlert from './ErrorAlert';

describe('ErrorAlert component', () => {
  test('should render without crash', () => {
    render(<ErrorAlert />);
  });

  test('should render error message', () => {
    const message = 'Test error message';

    const { container } = render(<ErrorAlert message={message} />);

    const messageElement = container.querySelector('div');
    expect(messageElement).toHaveTextContent(message);
  });
});

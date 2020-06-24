import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('should render without crash', () => {
    render(<App />);
  });
  test('should show turnip image if price is 0', () => {
    const { getByRole, getByAltText } = render(<App />);

    const priceField = getByRole('textbox', {
      name: 'price',
    });

    fireEvent.change(priceField, {
      target: {
        value: 0,
      },
    });

    getByAltText('Turnip');
  });
  test('should show turnip image if price is 100 or greater', () => {
    const { getByRole, getByAltText } = render(<App />);

    const priceField = getByRole('textbox', {
      name: 'price',
    });

    fireEvent.change(priceField, {
      target: {
        value: 100,
      },
    });

    getByAltText('Turnip');

    fireEvent.change(priceField, {
      target: {
        value: 101,
      },
    });

    getByAltText('Turnip');

    fireEvent.change(priceField, {
      target: {
        value: 660,
      },
    });

    getByAltText('Turnip');
  });
  test('should show rotten turnip image if price is between 1 and 99', () => {
    const { getByRole, getByAltText } = render(<App />);

    const priceField = getByRole('textbox', {
      name: 'price',
    });

    fireEvent.change(priceField, {
      target: {
        value: 1,
      },
    });

    getByAltText('Rotten Turnip');

    fireEvent.change(priceField, {
      target: {
        value: 2,
      },
    });

    getByAltText('Rotten Turnip');

    fireEvent.change(priceField, {
      target: {
        value: 50,
      },
    });

    getByAltText('Rotten Turnip');

    fireEvent.change(priceField, {
      target: {
        value: 98,
      },
    });

    getByAltText('Rotten Turnip');

    fireEvent.change(priceField, {
      target: {
        value: 99,
      },
    });

    getByAltText('Rotten Turnip');
  });
});

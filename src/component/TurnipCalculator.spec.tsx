import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TurnipCalculator from './TurnipCalculator';

describe('TurnipCalculator component', () => {
  test('should render without crash', () => {
    render(<TurnipCalculator />);
  });
  test('should contain a price field', () => {
    const { getByRole } = render(<TurnipCalculator />);

    getByRole('textbox', {
      name: 'price',
    });
  });
  test('should contain a turnip quantity field', () => {
    const { getByRole } = render(<TurnipCalculator />);

    getByRole('textbox', {
      name: 'turnips',
    });
  });
  test('should contain a tip percentage field', () => {
    const { getByRole } = render(<TurnipCalculator />);

    getByRole('textbox', {
      name: 'tip_percent',
    });
  });
  test('should fire onPriceCalculated handler with calculated price', () => {
    const handler = jest.fn();

    const expectedBuyPrice: number = 800;

    const { getByRole } = render(
      <TurnipCalculator onPriceCalculated={handler} />,
    );

    const priceField = getByRole('textbox', {
      name: 'price',
    });
    const turnipsField = getByRole('textbox', {
      name: 'turnips',
    });
    fireEvent.change(priceField, {
      target: {
        value: 400,
      },
    });
    fireEvent.change(turnipsField, {
      target: {
        value: 2,
      },
    });

    expect(handler).toBeCalledTimes(5);
    expect(handler).toHaveBeenLastCalledWith(
      expectedBuyPrice,
      expect.any(Number),
      expect.any(Number),
    );
  });
  test('should fire onPriceCalculated handler with turnip price and quantity', () => {
    const handler = jest.fn();

    const expectedPrice: number = 400;
    const expectedTurnips: number = 2;

    const { getByRole } = render(
      <TurnipCalculator onPriceCalculated={handler} />,
    );

    const priceField = getByRole('textbox', {
      name: 'price',
    });
    const turnipsField = getByRole('textbox', {
      name: 'turnips',
    });
    fireEvent.change(priceField, {
      target: {
        value: expectedPrice,
      },
    });
    fireEvent.change(turnipsField, {
      target: {
        value: expectedTurnips,
      },
    });

    expect(handler).toHaveBeenLastCalledWith(
      expect.any(Number),
      expectedPrice,
      expectedTurnips,
    );
  });
  test('should fire onTipCalculated handler with calculated tip', () => {
    const handler = jest.fn();

    const expectedTip: number = 200;

    const { getByRole } = render(
      <TurnipCalculator onTipCalculated={handler} />,
    );

    const priceField = getByRole('textbox', {
      name: 'price',
    });
    const turnipsField = getByRole('textbox', {
      name: 'turnips',
    });
    const tipField = getByRole('textbox', {
      name: 'tip_percent',
    });
    fireEvent.change(priceField, {
      target: {
        value: 100,
      },
    });
    fireEvent.change(turnipsField, {
      target: {
        value: 20,
      },
    });
    fireEvent.change(tipField, {
      target: {
        value: 10,
      },
    });

    expect(handler).toHaveBeenLastCalledWith(expectedTip);
  });
  test('should round tips to nearest hundredth', () => {
    const handler = jest.fn();

    const { getByRole } = render(
      <TurnipCalculator onTipCalculated={handler} />,
    );

    const priceField = getByRole('textbox', {
      name: 'price',
    });
    const turnipsField = getByRole('textbox', {
      name: 'turnips',
    });
    const tipField = getByRole('textbox', {
      name: 'tip_percent',
    });

    fireEvent.change(priceField, {
      target: {
        value: 100,
      },
    });
    fireEvent.change(turnipsField, {
      target: {
        value: 104,
      },
    });
    fireEvent.change(tipField, {
      target: {
        value: 10,
      },
    });
    expect(handler).toHaveBeenLastCalledWith(1000);

    fireEvent.change(priceField, {
      target: {
        value: 100,
      },
    });
    fireEvent.change(turnipsField, {
      target: {
        value: 106,
      },
    });
    fireEvent.change(tipField, {
      target: {
        value: 10,
      },
    });
    expect(handler).toHaveBeenLastCalledWith(1100);
  });
});

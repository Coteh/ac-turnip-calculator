import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TurnipCalculator from './TurnipCalculator';

describe('TurnipCalculator component', () => {
  test('should render without crash', () => {
    render(
      <TurnipCalculator
        onPriceCalculated={jest.fn()}
        onTipCalculated={jest.fn()}
      />,
    );
  });
  test('should contain a price field', () => {
    const { getByRole } = render(
      <TurnipCalculator
        onPriceCalculated={jest.fn()}
        onTipCalculated={jest.fn()}
      />,
    );

    getByRole('textbox', {
      name: 'price',
    });
  });
  test('should contain a turnip quantity field', () => {
    const { getByRole } = render(
      <TurnipCalculator
        onPriceCalculated={jest.fn()}
        onTipCalculated={jest.fn()}
      />,
    );

    getByRole('textbox', {
      name: 'turnips',
    });
  });
  test('should contain a tip percentage field', () => {
    const { getByRole } = render(
      <TurnipCalculator
        onPriceCalculated={jest.fn()}
        onTipCalculated={jest.fn()}
      />,
    );

    getByRole('textbox', {
      name: 'tip_percent',
    });
  });
  test('should fire onPriceCalculated handler with calculated price', () => {
    const onPriceCalculated = jest.fn();

    const expectedBuyPrice = 800;

    const { getByRole } = render(
      <TurnipCalculator
        onPriceCalculated={onPriceCalculated}
        onTipCalculated={jest.fn()}
      />,
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

    expect(onPriceCalculated).toBeCalledTimes(5);
    expect(onPriceCalculated).toHaveBeenLastCalledWith(
      expectedBuyPrice,
      expect.any(Number),
      expect.any(Number),
    );
  });
  test('should fire onPriceCalculated handler with turnip price and quantity', () => {
    const onPriceCalculated = jest.fn();

    const expectedPrice = 400;
    const expectedTurnips = 2;

    const { getByRole } = render(
      <TurnipCalculator
        onPriceCalculated={onPriceCalculated}
        onTipCalculated={jest.fn()}
      />,
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

    expect(onPriceCalculated).toHaveBeenLastCalledWith(
      expect.any(Number),
      expectedPrice,
      expectedTurnips,
    );
  });
  test('should fire onTipCalculated handler with calculated tip', () => {
    const onTipCalculated = jest.fn();

    const expectedTip = 200;

    const { getByRole } = render(
      <TurnipCalculator
        onPriceCalculated={jest.fn()}
        onTipCalculated={onTipCalculated}
      />,
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

    expect(onTipCalculated).toHaveBeenLastCalledWith(expectedTip);
  });
  test('should round tips to nearest hundredth', () => {
    const onTipCalculated = jest.fn();

    const { getByRole } = render(
      <TurnipCalculator
        onPriceCalculated={jest.fn()}
        onTipCalculated={onTipCalculated}
      />,
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
    expect(onTipCalculated).toHaveBeenLastCalledWith(1000);

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
    expect(onTipCalculated).toHaveBeenLastCalledWith(1100);
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BellDisplay from './BellDisplay';

import MobileCheck from '../util/MobileCheck';

jest.mock('../util/MobileCheck');

describe('BellDisplay component', () => {
  test('should render without crash', () => {
    render(<BellDisplay />);
  });
  test('should display amount passed in as prop', () => {
    const expectedAmount: number = 12;
    const { getByText } = render(<BellDisplay amount={expectedAmount} />);

    const elem = getByText(expectedAmount.toString());
    expect(elem).toBeTruthy();
  });
  test('should display icon passed in via image src as prop', () => {
    const expectedSrc: string = 'fake_image.jpg';
    const { getByRole } = render(<BellDisplay imgSrc={expectedSrc} />);

    const elem = getByRole('img');
    expect(elem.getAttribute('src')).toBe(expectedSrc);
  });
  test('should display img alt text passed in as prop', () => {
    const expectedAlt: string = 'An image.';
    const { getByRole } = render(<BellDisplay alt={expectedAlt} />);

    const elem = getByRole('img');
    expect(elem.getAttribute('alt')).toBe(expectedAlt);
  });
  test('should display tooltip with bell units and bell amount on mouse hover (desktop)', () => {
    const mockNonMobile = jest.fn();
    mockNonMobile.mockReturnValue(false);

    MobileCheck.isMobile = mockNonMobile;

    const expectedAmount: number = 12;
    const expectedUnits: number = 1000;

    const { getByText } = render(
      <BellDisplay
        amount={expectedAmount}
        bellUnits={expectedUnits}
        setShownTooltipName={jest.fn()}
      />,
    );

    const topElem = getByText(expectedAmount.toString());
    expect(topElem).toBeTruthy();
    fireEvent.mouseOver(topElem);
    const tooltip = getByText(`${expectedAmount} stacks of`);
    expect(tooltip).toBeTruthy();
    expect(tooltip.textContent).toBe(
      `${expectedAmount} stacks of ${expectedUnits} bells`,
    );
  });
  test('should display tooltip with quantity and bell amount on tap (mobile)', () => {
    const mockMobile = jest.fn();
    mockMobile.mockReturnValue(true);

    MobileCheck.isMobile = mockMobile;

    const expectedAmount: number = 12;
    const expectedUnits: number = 1000;

    const { getByText } = render(
      <BellDisplay
        amount={expectedAmount}
        bellUnits={expectedUnits}
        setShownTooltipName={jest.fn()}
      />,
    );

    const topElem = getByText(expectedAmount.toString());
    expect(topElem).toBeTruthy();

    fireEvent.click(topElem);
    const tooltip = getByText(`${expectedAmount} stacks of`);
    expect(tooltip).toBeTruthy();
    expect(tooltip.textContent).toBe(
      `${expectedAmount} stacks of ${expectedUnits} bells`,
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});

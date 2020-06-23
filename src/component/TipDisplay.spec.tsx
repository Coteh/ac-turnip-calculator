import React from 'react';
import { render } from '@testing-library/react';
import TipDisplay from './TipDisplay';

import MobileCheck from '../util/MobileCheck';

jest.mock('../util/MobileCheck');

describe('TipDisplay component', () => {
  test('should render without crash', () => {
    render(<TipDisplay />);
  });
  test('should display number of large bell bags to tip', () => {
    const { getByAltText } = render(<TipDisplay tip={99000 * 2} />);

    const bellDisplay = getByAltText('Large Bell Bag Icon').parentElement;
    expect(bellDisplay!.textContent).toContain(2);
  });
  test('should display number of medium bell bags to tip', () => {
    const { getByAltText } = render(<TipDisplay tip={10000 * 2} />);

    const bellDisplay = getByAltText('Medium Bell Bag Icon').parentElement;
    expect(bellDisplay!.textContent).toContain(2);
  });
  test('should display number of small bell bags to tip', () => {
    const { getByAltText } = render(<TipDisplay tip={1000 * 2} />);

    const bellDisplay = getByAltText('Small Bell Bag Icon').parentElement;
    expect(bellDisplay!.textContent).toContain(2);
  });
  test('should display number of coins to tip', () => {
    const { getByAltText } = render(<TipDisplay tip={100 * 2} />);

    const bellDisplay = getByAltText('Coin Icon').parentElement;
    expect(bellDisplay!.textContent).toContain(2);
  });
  test('should hide a display if its quantity is 0', () => {
    const { queryByAltText } = render(<TipDisplay tip={1000 * 2} />);

    const bellDisplay = queryByAltText('Medium Bell Bag Icon')?.parentElement;
    expect(bellDisplay).toBeFalsy();
  });
  test('should provide message to hover for tooltip on desktop', () => {
    const mockNonMobile = jest.fn();
    mockNonMobile.mockReturnValue(false);

    MobileCheck.isMobile = mockNonMobile;

    const { getByText } = render(<TipDisplay />);

    // Check for keywords instead of whole message
    const hoverMessage = getByText(/hover/i);
    expect(hoverMessage.textContent).toContain('icons');
    expect(hoverMessage.textContent).toContain('quantities');
  });
  test('should provide message to tap for tooltip on mobile', () => {
    const mockMobile = jest.fn();
    mockMobile.mockReturnValue(true);

    MobileCheck.isMobile = mockMobile;

    const { getByText } = render(<TipDisplay />);

    // Check for keywords instead of whole message
    const hoverMessage = getByText(/tap/i);
    expect(hoverMessage.textContent).toContain('icons');
    expect(hoverMessage.textContent).toContain('quantities');
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PriceCardComponent from './PriceCardComponent';

describe('<PriceCardComponent />', () => {
  test('it should mount', () => {
    render(<PriceCardComponent />);
    
    const priceCardComponent = screen.getByTestId('PriceCardComponent');

    expect(priceCardComponent).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BitcoinConverterComponent from './BitcoinConverterComponent';

describe('<BitcoinConverterComponent />', () => {
  test('it should mount', () => {
    render(<BitcoinConverterComponent />);
    
    const bitcoinConverterComponent = screen.getByTestId('BitcoinConverterComponent');

    expect(bitcoinConverterComponent).toBeInTheDocument();
  });
});
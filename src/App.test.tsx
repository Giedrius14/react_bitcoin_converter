import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render BitcoinConverterComponent', () => {
  render(<App />);
  const component = screen.getByTestId('BitcoinConverterComponent');
  expect(component).toBeInTheDocument();
});

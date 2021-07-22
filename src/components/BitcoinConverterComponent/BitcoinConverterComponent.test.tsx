import React from 'react';
import {fireEvent, MatcherOptions, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BitcoinConverterComponent from './BitcoinConverterComponent';

describe('<BitcoinConverterComponent />', () => {
  let originFetch: any;
  let mockedResponse: any;
  let mockedFetch: any;
  const mockData = {
    bpi: {
      USD: {
        code: 'USD',
        symbol: '&#36;',
        rate: '31,884.6033',
        description: 'United States Dollar',
        rate_float: 31884.6033
      },
      GBP: {
        code: 'GBP',
        symbol: '&pound;',
        rate: '23,172.1992',
        description: 'British Pound Sterling',
        rate_float: 23172.1992
      },
      EUR: {
        code: 'EUR',
        symbol: '&euro;',
        rate: '27,040.1842',
        description: 'Euro',
        rate_float: 27040.1842
      }
    }
  };

  beforeEach(() => {
    originFetch = (global as any).fetch;
  });

  afterEach(() => {
    (global as any).fetch = originFetch;
  });

  function fetchData() {
    mockedResponse = {json: jest.fn().mockResolvedValueOnce(mockData)};
    mockedFetch = jest.fn().mockResolvedValueOnce(mockedResponse as any);
    (global as any).fetch = mockedFetch;
  }

  it('component should mount', () => {
    render(<BitcoinConverterComponent/>);

    const bitcoinConverterComponent = screen.getByTestId('BitcoinConverterComponent');

    expect(bitcoinConverterComponent).toBeInTheDocument();
  });

  it('should fetch data', async() => {
    fetchData();

    const {getByTestId} = render(<BitcoinConverterComponent/>);
    const bitcoinConverterComponent = await waitFor(() => getByTestId('BitcoinConverterComponent'));

    expect(mockedFetch).toBeCalledTimes(1);
    expect(mockedResponse.json).toBeCalledTimes(1);
    expect(bitcoinConverterComponent).toBeInTheDocument();
  });

  async function removeCurrency(getAllByTestId: <W>(text: (((content: string, element: (Element | null)) => boolean) | RegExp | number | string), options?: MatcherOptions, waitForElementOptions?: W) => HTMLElement[]) {
    let removeButtons = await waitFor(() => getAllByTestId('remove-currency-btn')) as HTMLButtonElement[];

    expect(removeButtons.length).toBe(3);

    removeButtons[0].click();
    removeButtons = await waitFor(() => getAllByTestId('remove-currency-btn')) as HTMLButtonElement[];

    expect(removeButtons.length).toBe(2);
  }

  it('should remove currency on click', async() => {
    fetchData();

    const {getAllByTestId} = render(<BitcoinConverterComponent/>);
    await removeCurrency(getAllByTestId);
  });

  it('should add currency', async() => {
    fetchData();

    const {getByTestId, getAllByTestId} = render(<BitcoinConverterComponent/>);
    await removeCurrency(getAllByTestId);

    const dropdown = getByTestId('currency-select-dropdown');
    fireEvent.change(dropdown, {target: {value: 'EUR'}});

    let cards = await waitFor(() => getAllByTestId('PriceCardComponent')) as HTMLButtonElement[];
    expect(cards.length).toBe(3);
  });
});

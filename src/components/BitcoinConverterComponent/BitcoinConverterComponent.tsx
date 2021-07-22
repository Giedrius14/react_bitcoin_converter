import React, {useEffect, useState} from 'react';
import styles from './BitcoinConverterComponent.module.scss';
import {FormControl, InputLabel, MenuItem, Select, TextField} from '@material-ui/core';
import {setInterval} from 'timers';
import PriceCardComponent from '../PriceCardComponent/PriceCardComponent';

const BitcoinConverterComponent = () => {
  const [bitcoinAmount, setBitcoinAmount] = useState(1);
  const [priceData, setPriceData] = useState(null as any);
  const [displayedCurrencies, setDisplayedCurrencies] = useState(['USD', 'EUR', 'GBP']);

  const options = [
    {value: 'USD', text: 'USD'},
    {value: 'EUR', text: 'EUR'},
    {value: 'GBP', text: 'GPB'}
  ];

  const bitcoinAmountError = isNaN(bitcoinAmount);
  const showCurrencySelect = displayedCurrencies.length !== 3;

  useEffect(() => {
    let interval: any;

    async function fetchPrices() {
      const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const data = await res.json();

      setPriceData(data.bpi);
    }

    fetchPrices();

    interval = setInterval(() => {
      fetchPrices();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleSelect = (event: any): void => {
    setDisplayedCurrencies([...displayedCurrencies, event.target.value]);
  };

  const handleRemoveCurrency = (currencyToRemove: string): void => {
    setDisplayedCurrencies(displayedCurrencies.filter(currency => currency !== currencyToRemove));
  };

  const handleBitcoinInput = (event: any): void => {
    setBitcoinAmount(event.target.value);
  };


  const convertBTCtoCurrency = (currency: string): number => {
    if(bitcoinAmountError){
      return 0;
    }

    return priceData[currency].rate_float * bitcoinAmount;
  };

  return (
      <div className={styles.BitcoinConverterComponent} data-testid="BitcoinConverterComponent">
        <div className={styles.inputContainer}>
          <FormControl className={styles.bitcoinAmount}>
            <TextField id="bitcoin-input-field"
                       label="Bitcoin amount"
                       value={bitcoinAmount}
                       onChange={handleBitcoinInput}
                       error={bitcoinAmountError}
                       helperText={bitcoinAmountError && 'Please enter numeric values only'}/>
          </FormControl>
          {showCurrencySelect &&
            <FormControl className={styles.currencySelector}>
              <InputLabel id="currency-select-label">Add Currency</InputLabel>
              <Select onChange={handleSelect}
                      inputProps={{ "data-testid": "currency-select-dropdown" }}
                      defaultValue={''}>
                      {
                        options.map((item, idx) =>
                            <MenuItem key={idx}
                                      value={item.value}
                                      disabled={displayedCurrencies.includes(item.value)}>{item.text}</MenuItem>)
                      }
              </Select>
            </FormControl>
          }
        </div>

        <div className={styles.currencyCardContainer}>
          {priceData && displayedCurrencies.map((currency: string, idx: number) =>
              <PriceCardComponent key={idx}
                                  currency={currency}
                                  onClick={() => handleRemoveCurrency(currency)}
                                  value={convertBTCtoCurrency(currency)}/>
          )}
        </div>
      </div>
  );
};

export default BitcoinConverterComponent;

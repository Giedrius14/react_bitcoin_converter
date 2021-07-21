import React from 'react';
import styles from './PriceCardComponent.module.scss';
import {Card, CardContent, CardHeader, IconButton} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import {FormattedNumber, IntlProvider} from 'react-intl';

const PriceCardComponent = ({currency, onClick, value}: {currency: string, onClick: () => void, value: number}) => {
  return (
      <Card className={styles.PriceCardComponent}>
        <CardHeader avatar={
                      <div className={styles.cardAvatar}>
                        <img src={`https://static.coindesk.com/static/svgs/${currency.toLowerCase()}.svg`}
                             className={styles.flag}>
                        </img>
                        <div className={styles.cardTitle}>{currency}</div>
                      </div>
                    }
                    action={
                      <IconButton aria-label="Remove currency" onClick={onClick}>
                        <CancelIcon/>
                      </IconButton>
                    }
        />
        <CardContent>
          <div className={styles.currencyValue}>
            <IntlProvider locale='en'>
              <FormattedNumber
                  value={value}
                  style="currency"
                  currency={currency}/>
            </IntlProvider>
          </div>
        </CardContent>
      </Card>);
};

export default PriceCardComponent;

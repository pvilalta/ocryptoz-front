import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Buy from './Buy';
import Sell from './Sell';
import Transfer from './Transfer';
import Reward from './Reward';

export default function Event({
  dataForm,
  onInputChange,
  chooseEvent,
  eventSubmit,
  platformExchange,
  asset,
}) {
  function handleClick({ currentTarget }) {
    const { value } = currentTarget;

    chooseEvent(value);
  }

  return (
    <Container component="main" maxWidth="xs">
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Button
          value="buy"
          variant="outlined"
          color="primary"
          onClick={handleClick}
        >
          buy
        </Button>
        <Button
          value="sell"
          variant="outlined"
          color="primary"
          onClick={handleClick}
        >
          sell
        </Button>
        <Button
          value="transfer"
          variant="outlined"
          color="primary"
          onClick={handleClick}
        >
          transfer
        </Button>
        <Button
          value="reward"
          variant="outlined"
          color="primary"
          onClick={handleClick}
        >
          reward
        </Button>
      </Grid>

      {dataForm && dataForm.type === 'buy' && (
        <Buy
          dataForm={dataForm}
          onInputChange={onInputChange}
          eventSubmit={eventSubmit}
          platformExchange={platformExchange}
          asset={asset}
        />
      )}

      {dataForm && dataForm.type === 'sell' && (
        <Sell
          dataForm={dataForm}
          onInputChange={onInputChange}
          eventSubmit={eventSubmit}
          platformExchange={platformExchange}
          asset={asset}
        />
      )}

      {dataForm && dataForm.type === 'transfer' && (
        <Transfer
          dataForm={dataForm}
          onInputChange={onInputChange}
          eventSubmit={eventSubmit}
          platformExchange={platformExchange}
          asset={asset}
        />
      )}

      {dataForm && dataForm.type === 'reward' && (
        <Reward
          dataForm={dataForm}
          onInputChange={onInputChange}
          eventSubmit={eventSubmit}
          platformExchange={platformExchange}
          asset={asset}
        />
      )}
    </Container>
  );
}

Event.propTypes = {
  dataForm: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  eventSubmit: PropTypes.func.isRequired,
  platformExchange: PropTypes.array.isRequired,
  asset: PropTypes.array.isRequired,
  chooseEvent: PropTypes.func.isRequired,
};

import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PropTypes from 'prop-types';
import Buy from './Buy';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Event({
  dataForm,
  onInputChange,
  eventSubmit,
  platformExchange,
  asset,
}) {
  const handleChange = (e) => {
    // const { name, value } = e.target;
    // onInputChange({
    //   [name]: value,
    // });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {/* <ArrowBackIosIcon
        fontSize="large"
        style={{ position: 'absolute', right: '10px' }}
      /> */}
        <Button variant="outlined" color="primary">
          Buy
        </Button>
        <Button variant="outlined" color="primary">
          Sell
        </Button>
        <Button variant="outlined" color="primary">
          Transfer
        </Button>
        <Button variant="outlined" color="primary">
          Reward
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
    </Container>
  );
}

Event.propTypes = {
  dataForm: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  eventSubmit: PropTypes.func.isRequired,
  platformExchange: PropTypes.array.isRequired,
};

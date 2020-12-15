import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';
import Error from '../../containers/Error';
import DataField from './fields/DataField';
import DateField from './fields/DateField';
import NumberField from './fields/NumberField';
import PayWayField from './fields/PayWayField';
import NoteField from './fields/NoteField';

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
  formControl: {
    margin: theme.spacing(0),
    width: '100%',
    height: '100%',
    padding: '0',
  },
}));

export default function Buy(props) {
  const classes = useStyles();

  const {
    dataForm,
    onInputChange,
    eventSubmit,
    platformExchange,
    asset,
  } = props;

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    onInputChange({
      [name]: type === 'number' ? parseInt(value, 10) : value,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Typography component="h1" variant="h5">
          Fill out the fields in order to declare your buy
        </Typography> */}
        <Error />
        {/* <form
          className={classes.form}
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            eventSubmit();
          }}
        > */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DateField dataForm={dataForm} onInputChange={onInputChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DataField
              data={platformExchange}
              onInputChange={onInputChange}
              dataForm={dataForm}
              name="platform_sending"
              label="From"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DataField
              data={platformExchange}
              onInputChange={onInputChange}
              dataForm={dataForm}
              name="platform_receiving"
              label="To"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DataField
              data={asset}
              onInputChange={onInputChange}
              dataForm={dataForm}
              name="currency_asset"
              label="Asset"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <NumberField
              dataForm={dataForm}
              handleChange={handleChange}
              name="quantity"
              label="Quantity"
            />
          </Grid>
          <Grid item xs={12}>
            <DataField
              data={asset}
              onInputChange={onInputChange}
              dataForm={dataForm}
              name="currency_counterparty"
              label="Purchase currency"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PayWayField
              dataForm={dataForm}
              handleChange={handleChange}
              classStyle={classes.formControl}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <NumberField
              dataForm={dataForm}
              handleChange={handleChange}
              name="value"
              label="Value"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DataField
              data={asset}
              onInputChange={onInputChange}
              dataForm={dataForm}
              name="currency_fees"
              label="Fees currency"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <NumberField
              dataForm={dataForm}
              handleChange={handleChange}
              name="fees"
              label="Fees amouont"
            />
          </Grid>
          <Grid item xs={12}>
            <NoteField dataForm={dataForm} handleChange={handleChange} />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={(e) => {
            e.preventDefault();
            eventSubmit();
          }}
        >
          Send
        </Button>
        {/* </form> */}
      </div>
    </Container>
  );
}

Buy.propTypes = {
  dataForm: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  eventSubmit: PropTypes.func.isRequired,
  platformExchange: PropTypes.array.isRequired,
  asset: PropTypes.array.isRequired,
};

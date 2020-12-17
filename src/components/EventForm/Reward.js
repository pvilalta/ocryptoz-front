import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Error from '../../containers/Error';
import DataField from './fields/DataField';
import DateField from './fields/DateField';
import NumberField from './fields/NumberField';
import NoteField from './fields/NoteField';

const useStyles = makeStyles((theme) => ({
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
    <>
      {/* <Typography component="h1" variant="h5">
          Fill out the fields in order to declare your buy
        </Typography> */}
      <Error />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DateField dataForm={dataForm} onInputChange={onInputChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataField
            data={platformExchange}
            onInputChange={onInputChange}
            dataForm={dataForm}
            required
            name="platform_receiving"
            label="To"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataField
            data={asset}
            onInputChange={onInputChange}
            dataForm={dataForm}
            required
            name="currency_asset"
            label="Asset"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NumberField
            dataForm={dataForm}
            handleChange={handleChange}
            required
            name="quantity"
            label="Quantity"
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
    </>
  );
}

Buy.propTypes = {
  dataForm: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  eventSubmit: PropTypes.func.isRequired,
  platformExchange: PropTypes.array.isRequired,
  asset: PropTypes.array.isRequired,
};

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import Error from '../../containers/Error';

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

  const { dataForm, onInputChange, eventSubmit } = props;

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    onInputChange({
      [name]: type === 'number' ? parseInt(value, 10) : value,
    });
  };

  const handleTimeChange = (e) => {
    onInputChange({
      date: e,
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
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            eventSubmit();
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date"
                  type="text"
                  name="date"
                  value={dataForm.date || new Date()}
                  onChange={handleTimeChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="rom"
                name="platform_sending"
                variant="outlined"
                fullWidth
                id="From"
                label="From"
                type="text"
                value={dataForm.platform_sending || ''}
                autoFocus
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="To"
                label="To"
                name="platform_receiving"
                required
                type="text"
                autoComplete="To"
                value={dataForm.platform_receiving || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Asset"
                label="Asset"
                name="currency_asset"
                type="text"
                autoComplete="Asset"
                value={dataForm.currency_asset || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="quantity"
                label="Quantity"
                type="number"
                id="quantity"
                value={dataForm.quantity || ''}
                autoComplete="quantity"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="currency_counterparty"
                label="Purchase currency"
                type="text"
                id="purchaseCurrency"
                autoComplete="Purchase currency"
                value={dataForm.currency_counterparty || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="paymentWay">Payment way</InputLabel>
                <Select
                  labelId="paymentWay"
                  id="paymentWay"
                  onChange={handleChange}
                  label="Payment way"
                  name="paymentWay"
                  type="text"
                  value={dataForm.paymentWay || ''}
                  required
                >
                  <MenuItem value="">
                    <em>Choose one</em>
                  </MenuItem>
                  <MenuItem value="total_amount">Total amount</MenuItem>
                  <MenuItem value="unit_price">Unit price</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="value"
                label="Value"
                name="buyPrice"
                autoComplete="Value"
                type="number"
                value={dataForm.buyPrice || ''}
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="currency_fees"
                label="Fees currency"
                type="text"
                id="FeesCurrency"
                autoComplete="Fees currency"
                value={dataForm.currency_fees || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="value"
                label="Fees amount"
                name="fees"
                autoComplete="Value"
                type="number"
                value={dataForm.fees || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="note"
                name="note"
                label="Note"
                placeholder="Note..."
                type="text"
                // helperText="Full width!"
                fullWidth
                // InputLabelProps={{
                //   shrink: true,
                // }}
                value={dataForm.note || ''}
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send
          </Button>
        </form>
      </div>
    </Container>
  );
}

Buy.propTypes = {
  dataForm: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  eventSubmit: PropTypes.func.isRequired,
};

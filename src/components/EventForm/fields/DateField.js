import React from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from 'prop-types';

export default function DateField(props) {
  const { dataForm, onInputChange } = props;

  const handleTimeChange = (e) => {
    onInputChange({
      date: e,
    });
  };

  return (
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
  );
}

DateField.propTypes = {
  dataForm: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

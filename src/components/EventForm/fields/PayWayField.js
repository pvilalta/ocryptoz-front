import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import PropTypes from 'prop-types';

export default function PayWayField(props) {
  const { dataForm, handleChange, classStyle } = props;

  return (
    <FormControl variant="outlined" className={classStyle}>
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
  );
}

PayWayField.propTypes = {
  dataForm: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  classStyle: PropTypes.string.isRequired,
};

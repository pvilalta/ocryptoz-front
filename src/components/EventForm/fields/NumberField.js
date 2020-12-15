import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export default function NumberField(props) {
  const { dataForm, handleChange, name, label } = props;

  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      name={name}
      label={label}
      type="number"
      id={name}
      value={dataForm[name] || ''}
      autoComplete={name}
      onChange={handleChange}
    />
  );
}

NumberField.propTypes = {
  dataForm: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

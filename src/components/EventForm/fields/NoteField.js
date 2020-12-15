import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export default function NoteField(props) {
  const { dataForm, handleChange } = props;

  return (
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
  );
}

NoteField.propTypes = {
  dataForm: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

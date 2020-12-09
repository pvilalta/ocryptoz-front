import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

export default function Error({ isError, errorMessage, closeError }) {
  return (
    <Snackbar
      open={isError}
      onClick={closeError}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity="error">{isError && errorMessage}</Alert>
    </Snackbar>
  );
}

Error.propTypes = {
  isError: PropTypes.bool.isRequired,
  closeError: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

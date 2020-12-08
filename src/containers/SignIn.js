import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import {
  loginInputChange,
  loginSubmit,
  closeErrorMess,
} from '../actions/signInActions';

const mapState = (state) => ({
  email: state.user.signInData.email,
  password: state.user.signInData.password,
  isError: state.user.error.isError,
  errorMessage: state.user.error.errorMessage,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (data) => {
    dispatch(loginInputChange(data));
  },

  onInputSubmit: () => {
    dispatch(loginSubmit());
  },

  closeError: () => {
    dispatch(closeErrorMess());
  },
});

export default connect(mapState, mapDispatch)(SignIn);

import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import { loginInputChange, loginSubmit } from '../actions/signInActions';

const mapState = (state) => ({
  email: state.user.signInData.email,
  password: state.user.signInData.password,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (data) => {
    dispatch(loginInputChange(data));
  },

  onInputSubmit: () => {
    dispatch(loginSubmit());
  },
});

export default connect(mapState, mapDispatch)(SignIn);

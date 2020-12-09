import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import { signUpInputChange, signUpSubmit } from '../actions/signUpActions';

const mapState = (state) => ({
  firstname: state.user.signUpData.firstname,
  lastname: state.user.signUpData.lastname,
  email: state.user.signUpData.email,
  country: state.user.signUpData.country,
  password: state.user.signUpData.password,
  passwordConfirmation: state.user.signUpData.passwordConfirmation,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (data) => {
    dispatch(signUpInputChange(data));
  },

  onInputSubmit: () => {
    dispatch(signUpSubmit());
  },
});

export default connect(mapState, mapDispatch)(SignUp);

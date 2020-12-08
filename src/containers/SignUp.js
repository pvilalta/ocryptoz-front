import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import { signUpInputChange } from '../actions/signUpActions';

const mapState = (state) => ({
  firstName: state.user.signUpData.firstName,
  lastName: state.user.signUpData.lastName,
  email: state.user.signUpData.email,
  password: state.user.signUpData.password,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (data) => {
    dispatch(signUpInputChange(data));
  },
});

export default connect(mapState, mapDispatch)(SignUp);

import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
// import { loginInputChange } from '../actions/signInActions';

const mapState = (state) => ({
  //   email: state.user.logData.email,
  //   password: state.user.logData.password,
});

const mapDispatch = (dispatch) => ({
  //   onInputChange: (data) => {
  //     dispatch(loginInputChange(data));
  //   },
});

export default connect(mapState, mapDispatch)(SignUp);

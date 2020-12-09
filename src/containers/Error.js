import { connect } from 'react-redux';
import Error from '../components/Error';
import { closeErrorMess } from '../actions/errorActions';

const mapState = (state) => ({
  isError: state.error.error.isError,
  errorMessage: state.error.error.errorMessage,
});

const mapDispatch = (dispatch) => ({
  closeError: () => {
    dispatch(closeErrorMess());
  },
});

export default connect(mapState, mapDispatch)(Error);

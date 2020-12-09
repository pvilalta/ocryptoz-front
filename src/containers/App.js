import { connect } from 'react-redux';
import App from '../components/App';

const mapState = (state) => ({
  loggedData: state.user.loggedData,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(App);

import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

const mapState = (state) => ({
  showForm: state.event.showForm,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Dashboard);

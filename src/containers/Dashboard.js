import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { showEventForm, showDashboard } from '../actions/dashboardActions';

const mapState = (state) => ({
  showDash: state.dashboard.display.showDash,
  showForm: state.dashboard.display.showForm,
  showWallet: state.dashboard.display.showWallet,
  showContact: state.dashboard.display.showContact,
  showSettings: state.dashboard.display.showSettings,
});

const mapDispatch = (dispatch) => ({
  onClickShowForm: () => {
    dispatch(showEventForm());
  },

  onClickShowDash: () => {
    dispatch(showDashboard());
  },
});

export default connect(mapState, mapDispatch)(Dashboard);

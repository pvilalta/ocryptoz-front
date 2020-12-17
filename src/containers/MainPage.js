import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import { showDashboard, showEventForm } from '../actions/mainPageActions';

const mapState = (state) => ({
  showDash: state.mainPage.display.showDash,
  showForm: state.mainPage.display.showForm,
  showWallet: state.mainPage.display.showWallet,
  showContact: state.mainPage.display.showContact,
  showSettings: state.mainPage.display.showSettings,
});

const mapDispatch = (dispatch) => ({
  onClickShowDash: () => {
    dispatch(showDashboard());
  },
  onClickShowForm: () => {
    dispatch(showEventForm());
  },
});

export default connect(mapState, mapDispatch)(MainPage);

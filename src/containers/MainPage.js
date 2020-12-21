import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import {
  showDashboard,
  showEventForm,
  logOutSubmit,
} from '../actions/mainPageActions';

const mapState = (state) => ({
  showDash: state.mainPage.display.showDash,
  showForm: state.mainPage.display.showForm,
  showWallet: state.mainPage.display.showWallet,
  showContact: state.mainPage.display.showContact,
  showSettings: state.mainPage.display.showSettings,
  allWallet: state.mainPage.allWallet,
});

const mapDispatch = (dispatch) => ({
  onClickShowDash: () => {
    dispatch(showDashboard());
  },
  onClickShowForm: () => {
    dispatch(showEventForm());
  },

  onClickLogOut: () => {
    dispatch(logOutSubmit());
  },
});

export default connect(mapState, mapDispatch)(MainPage);

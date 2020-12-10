import { connect } from 'react-redux';
import AssetArray from '../components/Dashboard/AssetArray';
import { showEventForm } from '../actions/assetArrayActions';

const mapState = (state) => ({
  mainWallet: state.wallet.mainWallet,
  showForm: state.event.showForm,
});

const mapDispatch = (dispatch) => ({
  onClickShowForm: () => {
    dispatch(showEventForm());
  },
});

export default connect(mapState, mapDispatch)(AssetArray);

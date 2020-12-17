import { connect } from 'react-redux';
import AssetArray from '../components/Dashboard/AssetArray';

const mapState = (state) => ({
  mainWallet: state.wallet.mainWallet,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(AssetArray);

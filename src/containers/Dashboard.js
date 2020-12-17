import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

const mapState = (state) => ({
  mainWallet: state.dashboard.mainWallet,
  assetPie: state.dashboard.assetPie,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Dashboard);

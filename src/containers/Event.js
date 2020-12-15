import { connect } from 'react-redux';
import Event from '../components/EventForm';
import {
  eventInputChange,
  eventSubmit,
  eventFormChoice,
} from '../actions/eventActions';

const mapState = (state) => ({
  dataForm: state.event.dataForm,
  platformExchange: state.event.platformExchange,
  asset: state.event.asset,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (data) => {
    dispatch(eventInputChange(data));
  },

  eventSubmit: () => {
    dispatch(eventSubmit());
  },

  chooseEvent: (data) => {
    dispatch(eventFormChoice(data));
  },
});

export default connect(mapState, mapDispatch)(Event);

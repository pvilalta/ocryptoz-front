import { connect } from 'react-redux';
import Event from '../components/EventForm';
import { eventInputChange, eventSubmit } from '../actions/eventActions';

const mapState = (state) => ({
  dataForm: state.event.dataForm,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (data) => {
    dispatch(eventInputChange(data));
  },

  eventSubmit: () => {
    dispatch(eventSubmit());
  },
});

export default connect(mapState, mapDispatch)(Event);

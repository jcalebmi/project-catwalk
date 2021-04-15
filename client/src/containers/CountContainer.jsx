import { connect } from 'react-redux';
import Count from '../Components/Count.jsx';

const mapToStateProps = (state) => ({
  count: state.count,
});

const mapDispatchToState = (count, handleCountInc) => ({
  handleCountInc: (count) => {
    dispatch(incrementCount(count));
  }
});


const CountContainer = connect(mapToStateProps, mapDispatchToState)(Count);
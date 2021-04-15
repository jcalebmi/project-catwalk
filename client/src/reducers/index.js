import { combineReducers } from 'redux';
import count from '../Count.jsx';

const rootReducer = combineReducers({
  count: count
});

export default rootReducer;

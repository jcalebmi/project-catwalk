// Creates a Redux store that holds the complete state tree of your app
import { createStore } from 'redux';

// importing our reducer function to interact with state
import currentCountReducer from '../reducers/currentCountReducer';

// initializing our state store with our reducer function as well as an initial state for page load
const store = createStore(currentCountReducer, { count: 0 });

export default store;

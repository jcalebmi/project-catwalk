// // Creates a Redux store that holds the complete state tree of your app
// import { createStore } from 'redux';

// // importing our reducer function to interact with state
// import currentCountReducer from '../reducers/currentCountReducer';

// // initializing our state store with our reducer function as well as an initial state for page load
// const store = createStore(currentCountReducer, { count: 0 });

// export default store;
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productFetcher from '../reducers/productFetcher.jsx';
// import overviewReducer from '../client/src/components/overview/overviewSlice';
// import qasReducer from '../client/src/components/qas/qasSlice';
// import ratingsReviewReducer from '../client/src/components/ratingsReview/ratingsReviewSlice';
// import relatedProdsReducer from '../client/src/components/relaedProds/relaedProdsSlice';

const middleware = [thunk];

const store = createStore(
  productFetcher,
  {
    product: [],
    products: [],
    questions: [],
    status: 'loading',
  },
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;

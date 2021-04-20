import React, { useState, useEffect } from 'react';
/* The provider component makes the Redux store available to any nested
    components that need to access the store */
import { Provider } from 'react-redux';
import store from '../store/store.jsx';
import Overview from '../Components/overview/Overview.jsx'

//Review Imports
import Reviews from './reviews/Reviews.jsx';
import sampleData from '../../dist/sampleData.js';
import Ratings from './reviews/Ratings.jsx';

//Initialization of Products
import setProducts from './helpers/setProducts.jsx';

function App() {
  useEffect(() => {
    setProducts();
  });

  return (
    <Provider store={store}>
      <Overview />
      <div id="ratingReviewContainer">
        <Ratings />
        <Reviews />
      </div>
    </Provider>
  );
}

export default App;

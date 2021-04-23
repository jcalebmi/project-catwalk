import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
/* The provider component makes the Redux store available to any nested
    components that need to access the store */
import { Provider } from 'react-redux';
import store from '../store/store.jsx';
import Overview from '../components/overview/Overview.jsx'

//Review Imports
import Reviews from './reviews/Reviews.jsx';
import sampleData from '../../dist/sampleData.js';
import Ratings from './reviews/Ratings.jsx';

//Initialization of Products
import catwalkPromise from './helpers/setProduct.jsx';

//QAs Import
import QAs from './qas/QAs.jsx';

const App = () => {


  return (
    <Provider store={store}>
      <Overview />
      <div id="questions-answers-container">
          <QAs />
        </div>
      <div id="ratingReviewContainer">
        <Ratings />
        <Reviews />
      </div>
    </Provider>
  );
}

export default App;

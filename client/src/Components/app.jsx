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
import setProduct from './helpers/setProduct.jsx';

//QAs Import
import QAs from './qas/QAs.jsx';

function App() {
  const [once, inc] = useState(0);
  if (once === 0) {
    setProduct();
    console.log('increment', once);
    inc(once + 1);
  }

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

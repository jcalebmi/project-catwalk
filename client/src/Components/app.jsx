import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
/* The provider component makes the Redux store available to any nested
    components that need to access the store */
import { Provider } from 'react-redux';
import store from '../store/store.jsx';
import Overview from '../components/overview/Overview.jsx'

//Review Imports
import ReviewsBox from './reviews/ReviewsBox.jsx';

//Initialization of Products
import setProduct from './helpers/setProduct.jsx';

//QAs Import
import QAs from './qas/QAs.jsx';



function App() {
  const [product, setCurrentProduct] = useState([]);
  const [once, inc] = useState(0);
  if (once === 0) {
    setProduct();
    // console.log('increment', once);
    inc(once + 1);
  }

  return (
    <Provider store={store}>
      <Overview />
      <div id="questions-answers-container">
          <QAs />
        </div>
      <ReviewsBox />
    </Provider>
  );
}

export default App;

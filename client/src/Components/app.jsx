import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
/* The provider component makes the Redux store available to any nested
    components that need to access the store */
import Overview from '../Components/overview/Overview.jsx'

//Review Imports
import ReviewsBox from './reviews/ReviewsBox.jsx';

//Initialization of Products
// import {setProduct, setQuestions} from './helpers/setProduct.jsx';
import setProduct from './helpers/setProduct.jsx';
import setQuestions from './helpers/setQuestions.jsx';
//QAs Import
import QAs from './qas/QAs.jsx';

function App() {
  const [isLoaded, setLoaded] = useState(false);
  if (!isLoaded) {
    setProduct()
      .then(() => {
        setLoaded(true);
      });
    return null;
  }

  return (
      <div id='modules'>
        <Overview />
        <div id="questions-answers-container">
          <QAs />
        </div>
        <ReviewsBox />
      </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
/* The provider component makes the Redux store available to any nested
    components that need to access the store */
import NavigationBar from './navBar/NavigationBar.jsx';
import Overview from './overview/Overview.jsx';

//Review Imports
import ReviewsBox from './reviews/ReviewsBox.jsx';
import Cart from './cart/Cart.jsx';

//Initialization of Products
// import {setProduct, setQuestions} from './helpers/setProduct.jsx';
import setProduct from './helpers/setProduct.jsx';
import setQuestions from './helpers/setQuestions.jsx';
//QAs Import
import QAs from './qas/QAs.jsx';

//Import handleColor
import cssMode from './helpers/cssMode.jsx';

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [mode, setMode] = useState('light');
  const [page, setPage] = useState('modules');

  if (!isLoaded) {
    setProduct()
      .then(() => {
        setLoaded(true);
      });
    return null;
  }
  const handleColor = cssMode.bind(null, setMode);

  if (page === 'modules') {
    return (
      <div id='modules'>
        <NavigationBar handleColor={handleColor} setPage={setPage} />
        <Overview />
        <QAs />
        <ReviewsBox mode={mode} />
      </div>
    );
  }
  if (page === 'cart') {
    return (
      <div id='cart'>
        <NavigationBar setPage={setPage} handleColor={handleColor} />
        <Cart />
      </div>
    );
  }
  return (
    // Site Analytics
    null
  );
}

export default App;

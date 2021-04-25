import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
/* The provider component makes the Redux store available to any nested
    components that need to access the store */
import Overview from './overview/Overview.jsx'

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
  const [mode, setMode] = useState('light');
  const [toggle, setToggle] = useState('Dark Mode');
  if (!isLoaded) {
    setProduct()
      .then(() => {
        setLoaded(true);
      });
    return null;
  }

  const handleColor = () => {
    const elementsLight = Array.prototype.slice.call(document.getElementsByClassName('light'));
    const elementsDark = Array.prototype.slice.call(document.getElementsByClassName('dark'));
    if (elementsLight.length > 0) {
      for (let i = 0; i < elementsLight.length; i++) {
        const element = elementsLight[i];
        element.classList.remove('light');
        element.classList.add('dark');
        setMode('dark');
        setToggle('Light Mode');
      }
    } else {
      for (let i = 0; i < elementsDark.length; i++) {
        const element = elementsDark[i];
        element.classList.remove('dark');
        element.classList.add('light');
        setMode('light');
        setToggle('Dark Mode');
      }
    }
  };

  return (
      <div id='modules'>
        <button
          id="toggleMode"
          onClick={handleColor}>{toggle} </button>
        <Overview />
          <QAs />
        </div>
        <ReviewsBox mode={mode} />
      </div>
  );
};

export default App;

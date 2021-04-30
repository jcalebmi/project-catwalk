import React, { useState, useEffect } from 'react';

/* The provider component makes the Redux store available to any nested
    components that need to access the store */
import NavigationBar from './navBar/NavigationBar.jsx';
import Overview from './overview/Overview.jsx';

// Review Imports
import ReviewsBox from './reviews/ReviewsBox.jsx';
import Cart from './cart/Cart.jsx';

// Initialization of Products
// import {setProduct, setQuestions} from './helpers/setProduct.jsx';
import setProduct from './helpers/setProduct.jsx';
import setAllProducts from './helpers/setAllProducts.jsx';

// QAs Import
import QAs from './qas/QAs.jsx';
import Analytics from './Analytics.jsx';

// Import handleColor
import cssMode from './helpers/cssMode.jsx';

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [mode, setMode] = useState('light');
  const [page, setPage] = useState('modules');
  const [stats, setStats] = useState(null);

  let clicks = stats || {
    totalClicks: 0,
    moduleClicks: {
      navigationBar: {
        clicks: 0,
        elements: {
        },
      },
      overview: {
        clicks: 0,
        elements: {
        },
      },
      'q-as-container': {
        clicks: 0,
        elements: {
        },
      },
      ratingReviewContainer: {
        clicks: 0,
        elements: {
        },
      },
    },
  };

  const handleClick = (e) => {
    const path = e.nativeEvent.path.slice();
    const pathElements = e.nativeEvent.path.map((element) => element.id).filter((element) => element === 'overview'
    || element === 'ratingReviewContainer'
    || element === 'q-as-container'
    || element === 'navigationBar');
    const module = pathElements[0];
    const { nodeName } = path[0];
    const { id } = path[0];
    const { className } = path[0];
    const element = nodeName + id + className;
    const date = new Date(e.timeStamp);
    clicks.totalClicks += 1;
    if (module !== undefined) {
      clicks.moduleClicks[module].clicks += 1;
      if (clicks.moduleClicks[module].elements[element] === undefined) {
        clicks.moduleClicks[module].elements[element] = { clicks: 1 };
        clicks.moduleClicks[module].elements[element].time = {
          [date]: date,
        };
      } else {
        clicks.moduleClicks[module].elements[element].clicks += 1;
        clicks.moduleClicks[module].elements[element].time[date] = date;
      }
      // console.log(path);
      // console.log(element);
      // console.log(clicks);
    }
  };

  const handleStats = () => {
    setStats(clicks);
  };
  
  if (!isLoaded) {
    setAllProducts()
      .then(() => {
        setProduct()
          .then(() => {
            setLoaded(true);
          });
      });
    return null;
  }
  const handleColor = cssMode.bind(null, setMode);

  if (page === 'modules') {
    return (
      <div onClick={handleClick} id='modules container'>
        <NavigationBar handleStats={handleStats} handleColor={handleColor} setPage={setPage} />
        <Overview />
        <QAs />
        <ReviewsBox mode={mode} />
      </div>
    );
  }
  if (page === 'cart') {
    return (
      <div id='cartPage container'>
        <NavigationBar handleStats={handleStats} setPage={setPage} handleColor={handleColor} />
        <Cart />
      </div>
    );
  }
  if (page === 'stats') {
    return (
      <div id='stats' >
        <NavigationBar handleStats={handleStats} setPage={setPage} handleColor={handleColor} />
        <Analytics stats={stats} />
      </div>
    );
  }
  return (
    null
  );
}

export default App;

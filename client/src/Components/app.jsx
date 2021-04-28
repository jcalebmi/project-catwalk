import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
/* The provider component makes the Redux store available to any nested
    components that need to access the store */
import NavigationBar from './navBar/NavigationBar.jsx';
import Overview from './overview/Overview.jsx';

//Review Imports
import ReviewsBox from './reviews/ReviewsBox.jsx';

//Initialization of Products
// import {setProduct, setQuestions} from './helpers/setProduct.jsx';
import setProduct from './helpers/setProduct.jsx';
//QAs Import
import QAs from './qas/QAs.jsx';
import Analytics from './Analytics.jsx';

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [mode, setMode] = useState('light');
  const [toggle, setToggle] = useState('Dark Mode');
  const [analytics, setAnalytics] = useState(false);
  const [stats, setStats] = useState({});
  let clicks = {
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
      for (let i = 0; i < elementsLight.length; i += 1) {
        const element = elementsLight[i];
        element.classList.remove('light');
        element.classList.add('dark');
        setMode('dark');
        setToggle('Light Mode');
      }
    } else {
      for (let i = 0; i < elementsDark.length; i += 1) {
        const element = elementsDark[i];
        element.classList.remove('dark');
        element.classList.add('light');
        setMode('light');
        setToggle('Dark Mode');
      }
    }
  };
  const handleClick = (e) => {
    const path = e.nativeEvent.path.slice();
    const pathElements = e.nativeEvent.path.map((element) => element.id).filter((element) => element === 'overview'
    || element === 'ratingReviewContainer'
    || element === 'q-as-container'
    || element === 'navigationBar');
    const module = pathElements[0];
    const nodeName = path[0].nodeName;
    const id = path[0].id;
    const className = path[0].className;
    const element = nodeName + id + className;
    const date = new Date(e.timeStamp);
    clicks.totalClicks += 1;
    if (module !== undefined) {
      clicks.moduleClicks[module].clicks += 1;
      if (clicks.moduleClicks[module].elements[element] === undefined) {
        clicks.moduleClicks[module].elements[element] = {clicks: 1};
        clicks.moduleClicks[module].elements[element].time = {
          [date]: date,
        }
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
    setAnalytics(!analytics);
  };

  return (
    analytics
      ?
        <div id='analytics' onClick={handleStats}>
          <Analytics stats={stats} />
        </div>
      :
      <div id='modules'onClick={handleClick}>
          <NavigationBar handleColor={handleColor} toggle={toggle}/>
          <Overview />
          <QAs />
          <ReviewsBox mode={mode} />
          <button onClick={handleStats}>Stats</button>
      </div>

  );
}

export default App;

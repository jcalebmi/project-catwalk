import React from 'react';

function Analytics(props) {
  const elementsArr = JSON.stringify(props.stats).split(',');
  console.log(props.stats);
  return (
    <div>
      <div>
        <p>
         Total Clicks: {props.stats.totalClicks}
        </p>
        <p>
         NavBar Clicks: {props.stats.moduleClicks.navigationBar.clicks}
        </p>
        <div>
          {props.stats.moduleClicks.navigationBar.elements.map((element) => {
            <p>{JSON.stringify(element)} - Clicks: {JSON.stringify(element).clicks}</p>
          })}
        </div>
        <p>
        Overview Clicks: {props.stats.moduleClicks.overview.clicks}
        </p>
        {props.stats.moduleClicks.overview.elements.map((element, index) => {
        return <p key={index}>{element}</p>;
        })}
        <p>
         QA Clicks: {props.stats.moduleClicks['q-as-container'].clicks}
        </p>
        {props.stats.moduleClicks['q-as-container'].elements.map((element, index) => {
        return <p key={index}>{element}</p>;
        })}
        <p>
         Reviews Clicks: {props.stats.moduleClicks.ratingReviewContainer.clicks}
        </p>
        {props.stats.moduleClicks.ratingReviewContainer.elements.map((element, index) => {
        return <p key={index}>{element}</p>;
        })}
      </div>
    </div>
  );
}

export default Analytics;
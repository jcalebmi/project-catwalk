import React from 'react';

function Analytics(props) {
  const elementsArr = JSON.stringify(props.stats).split(',');
  //console.log(elementsArr);
  return (
    <div>
      <p>Total Clicks: {props.stats.totalClicks}</p>
      <div>
        {elementsArr.map((element, index) => <p key={index}>{element}</p>)}
      </div>
    </div>
  )
}

export default Analytics;
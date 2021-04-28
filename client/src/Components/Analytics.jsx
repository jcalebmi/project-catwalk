import React from 'react';

function Analytics(props) {
  const overviewElements = props.stats.moduleClicks.overview.elements;
  const QAElements = props.stats.moduleClicks['q-as-container'].elements;
  const reviewElements= props.stats.moduleClicks.ratingReviewContainer.elements;
  return (
    <div>
      <div>
        <p class="bold">
         Total Clicks: {props.stats.totalClicks}
        </p>
        <p class="bold">
        Overview Clicks: {props.stats.moduleClicks.overview.clicks}
        </p>
        <ul>
          {Object.keys(overviewElements).map((element, index) => {
            return <li key={index}>
                <span>{element}:</span><br></br>
                <span class="bold">Clicks: {overviewElements[element].clicks}</span><br></br>
                <div><br></br>
                  <span class="bold">Time:</span><br></br>
                  {Object.keys(overviewElements[element].time).map((date, index) => {
                    return <p><span>{date}</span><br></br></p>
                  })}
                </div>
              </li>
          })}
        </ul>
        <p class="bold">
         QA Clicks: {props.stats.moduleClicks['q-as-container'].clicks}
        </p>
        <ul>
          {Object.keys(QAElements).map((element, index) => {
            return <li key={index}>
                <span>{element}:</span><br></br>
                <span class="bold">Clicks: {QAElements[element].clicks}</span><br></br>
                <div> <br></br>
                  <span class="bold">Time:</span><br></br>
                  {Object.keys(QAElements[element].time).map((date, index) => {
                    return <p><span>{date}</span><br></br></p>
                  })}
                </div>
              </li>
          })}
        </ul>
        <p class="bold">
         Reviews Clicks: {props.stats.moduleClicks.ratingReviewContainer.clicks}
        </p>
        <ul>
          {Object.keys(reviewElements).map((element, index) => {
            return <li key={index}>
                <span>{element}:</span><br></br>
                <span class="bold">Clicks: {reviewElements[element].clicks}</span><br></br>
                <div><br></br>
                  <span class="bold">Time:</span><br></br>
                  {Object.keys(reviewElements[element].time).map((date, index) => {
                    return <p><span>{date}</span><br></br></p>
                  })}
                </div>
              </li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default Analytics;
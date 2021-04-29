import React, { useState } from 'react';
import updateHelpfulness from './helpers/updateHelpfulness.js';
import sendReport from './helpers/sendReport';
import ReviewThumbnails from './ReviewThumbnails.jsx';

const moment = require('moment');

function ReviewItem(props) {
  const [ishelpfulClicked, setHelpfulClick] = useState(false);
  const mode = `reviews border-bottom useBgContrast ${props.mode}`;
  const helpfulMode = `helpfulness useBgContrast ${props.mode}`;
  const starsMode = `outerReviewStars ${props.mode}`;
  const preview = props.item.body.slice(0, 250);

  //  Call helpfulness API
  const handleHelpfulness = () => {
    if (!ishelpfulClicked) {
      updateHelpfulness(props.item.review_id);
      setHelpfulClick(true);
      props.reviews();
      setHelpfulness(props.item.helpfulness + 1);
    }
  };
  const report = () => {
    sendReport(props.item.review_id);
  };
  const showBody = () => {
    const body = document.getElementById('reviewBody');
    body.innerHTML(props.item.body);
  };

  //  Calculates Rating for filling stars
  let starWidth = 0;
  if (props.item !== undefined) {
    starWidth = ((props.item.rating / 5) * 66.64);
  };
  if (props.item !== undefined) {
    return (
      <li className={mode}>
        <div className="reviewDate">
          <div className="reviewStars">
            <div className={starsMode}>
            <div className="innerReviewStars" style={{ width: starWidth }}></div>
            </div>
          </div>
          <span
          className="spanRight reviewsNameDate"> {props.item.reviewer_name} {moment(props.item.date).format('MMM Do YYYY')}</span>
        </div>
        <p
        className="bold">{props.item.summary}</p>
        {props.item.body.length >= 250
          ? <p className='reviewBody'>{preview}
              <br></br>
              <span onClick={showBody}>Show More</span>
            </p>
          : <p className='reviewBody'>{props.item.body}</p> }
        {props.item.recommend ?
        <p>&#10003; I recommend this product</p> :
          null}
        <ReviewThumbnails photos={props.item.photos}/>
        {props.item.response !== null && props.item.response.length > 0
          ? <p className="sellerResponse"><strong>Response from seller: </strong>{props.item.response}</p> : null}
        <span>Helpful? <button className={helpfulMode} onClick={handleHelpfulness}>Yes</button> ({props.item.helpfulness}) | <a className="underline" onClick={report}>Report</a></span>
      </li>
    );
  }
  return (
    <li className="reviews">
    </li>
  );
}

export default ReviewItem;

import React, { useState } from 'react';
import updateHelpfulness from './helpers/updateHelpfulness.js';

const moment = require('moment');

function ReviewItem(props) {
  const [ishelpfulClicked, setHelpfulClick] = useState(false);
  //  Call helpfulness API
  const handleHelpfulness = () => {
    if (!ishelpfulClicked) {
      updateHelpfulness(props.item.review_id);
      setHelpfulClick(true);
    }
  };

  //  Calculates Rating for filling stars
  let starWidth = 0;
  if (props.item !== undefined) {
    starWidth = ((props.item.rating/5) * 66.64)
  }
  if (props.item !== undefined) {
  return (
    <li className="reviews">
      <div className="reviewDate">
        <div className="reviewStars">
          <div className="outerReviewStars">
          <div className="innerReviewStars" style={{ width: starWidth }}></div>
          </div>
        </div>
        <span
        className="spanRight reviewsNameDate"> {props.item.reviewer_name} {moment(props.item.date).format('MMM Do YYYY')}</span>
      </div>
      <p
      className="bold">{props.item.summary}</p>
      <p>{props.item.body}</p>
      {props.item.recommend ?
      <p>&#10003; I recommend this product</p> :
        null}
      {props.item.photos.length > 0
        ? props.item.photos.map((photo, index) => {
          <div key={index}>
            <img src={photo.url}></img>
          </div>
        })
        : null}
      {props.item.response !== null && props.item.response.length > 0
        ? <p className="sellerResponse"><strong>Response from seller: </strong>{props.item.response}</p> : null}
      <span>Helpful? <button className="helpfulness useBgColor" onClick={handleHelpfulness}>Yes</button> ({props.item.helpfulness}) | <a href='#'>Report</a></span>
    </li>
  );
} else {
  return (
    <li className="reviews">
    </li>
  );
}
}

export default ReviewItem;

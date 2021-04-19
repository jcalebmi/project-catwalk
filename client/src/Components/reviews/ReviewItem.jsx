import React, { useState, useEffect } from 'react';
import updateHelpfulness from './helpers/updateHelpfulness.js';
const moment = require('moment');

function ReviewItem (props) {

  const [helpfulClicked, setHelpfulClick] = useState(false);
  //Call helpfulness API
  const handleHelpfulness = () => {
   if (!helpfulClicked) {
    updateHelpfulness(props.item.review_id);
    setHelpfulClick(true)
    }
  }

  //Calculates Rating for filling stars
  let starWidth = 0;
  if (props.item !== undefined) {
    starWidth =((props.item.rating/5) * 66.64)
  }

  return (
    <li className="reviews">
      <div className="reviewDate">
        <div className="reviewStars">
          <div className="outerReviewStars">
          <div className="innerReviewStars" style={{width: starWidth}}></div>
          </div>
        </div>
        <span
        className="spanRight reviewsNameDate"> {props.item.reviewer_name} {moment(props.item.date).format('MMM Do YYYY')}</span>
      </div>
      <p
      className="bold">{props.item.summary}</p>
      <p>{props.item.body}</p>
      {props.item.recommend ?
      <p>"checkmark" I recommend this product</p> :
      null}
      {props.item.response !== null && props.item.response.length > 0 ?
      <p className="sellerResponse"><strong>Response from seller: </strong>{props.item.response}</p> : null}
      <span>Helpful? <button className="helpfulness useBgColor" onClick={handleHelpfulness}>Yes</button> ({props.item.helpfulness}) | <a href='#'>Report</a></span>
    </li>
  )
}

export default ReviewItem;
import React from 'react';
import updateHelpfulness from './helpers/updateHelpfulness.js';
const moment = require('moment');

function ReviewItem (props) {

 const handleHelpfulness = () => {
    updateHelpfulness(props.item.review_id);
  }
 console.log(props.item)
  return (
    <li className="reviews">
      <div className="reviewDate">
        <span>*****</span><span className="spanRight"> {props.item.reviewer_name} {moment(props.item.date).format('MMM Do YYYY')}</span>
      </div>
      <p className="bold">{props.item.summary}</p>
      <p>{props.item.body}</p>
      {props.item.recommend ?
      <p>"checkmark" I recommend this product</p> :
      null}
      {props.item.response !== null && props.item.response.length > 0 ?
      <p className="sellerResponse">Response from seller: {props.item.response}</p> : null}
      <span>Helpful? <button className="helpfulness useBgColor" onClick={handleHelpfulness}>Yes</button> ({props.item.helpfulness}) | <a href='#'>Report</a></span>
    </li>
  )
}

export default ReviewItem;
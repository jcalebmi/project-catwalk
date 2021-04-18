import React from 'react';
const moment = require('moment');

function ReviewItem (props) {
  return (
    <li className="reviews">
      <div className="reviewDate">
        <span>*****</span><span> {props.item.reviewer_name} </span><span> {moment(props.item.date).format('MMM Do YYYY')}</span>
      </div>
      <p className="bold">{props.item.summary}</p>
      <p>{props.item.body}</p>
      {props.item.recommend ?
      <p>"checkmark" I recommend this product</p> :
      null}
      <p>{props.item.response}</p>
      <span>Helpful? <a href='#'>Yes</a> ({props.item.helpfulness}) | <a href='#'>Report</a></span>
    </li>
  )
}

export default ReviewItem;
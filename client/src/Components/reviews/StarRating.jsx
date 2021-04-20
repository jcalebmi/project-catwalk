import React from 'react';

function StarRating(props) {
  return (
      <div className="numberOfStars underline">
        <span>5 stars </span>
        <progress
          value={props.meta.ratings === undefined ? 0 : props.meta.ratings['5']}
          max={props.ratingSum}>
        </progress><br></br>
        <span>4 stars </span>
        <progress
          value={props.meta.ratings === undefined ? 0 : props.meta.ratings['4']}
          max={props.ratingSum}>
        </progress><br></br>
        <span>3 stars </span>
        <progress
          value={props.meta.ratings === undefined ? 0 : props.meta.ratings['3'] || 0}
          max={props.ratingSum}>
        </progress><br></br>
        <span>2 stars </span>
        <progress
          value={props.meta.ratings === undefined ? 0 : props.meta.ratings['2'] || 0}
          max={props.ratingSum}>
        </progress><br></br>
        <span>1 stars </span>
        <progress
          value={props.meta.ratings === undefined ? 0 : props.meta.ratings['1'] || 0}
          max={props.ratingSum}>
        </progress><br></br>
      </div>
    );
}
export default StarRating;
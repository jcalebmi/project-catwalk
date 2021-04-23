import React from 'react';

function RatingStars (props) {
  return (
    <div className="ratingStars">
          <div className="outerRatingStars">
            <div className="innerRatingStars"
            style={{ width: props.starWidth }}>
            </div>
          </div>
        </div>
  );
}
export default RatingStars;

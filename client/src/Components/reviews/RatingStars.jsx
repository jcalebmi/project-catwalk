import React from 'react';

function RatingStars ({starWidth}) {
  return (
    <div className="ratingStars">
          <div className="outerRatingStars">
            <div className="innerRatingStars"
            style={{ width: starWidth }}>
            </div>
          </div>
        </div>
  );
}
export default RatingStars;

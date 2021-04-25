import React from 'react';

function RatingStars ({starWidth}) {
  return (
    <div className="ratingStars">
          <div className="outerRatingStars useBgContrast light">
            <div className="innerRatingStars"
            style={{ width: starWidth }}>
            </div>
          </div>
        </div>
  );
}
export default RatingStars;

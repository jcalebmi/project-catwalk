import React, { useState, useEffect } from 'react';
import Characteristics from './Characteristics.jsx';
import StarRating from './StarRating.jsx'
import ratings from './helpers/ratings.js';


function Ratings(props) {
  const ratingResults = ratings(props.meta, props.results);
  const starWidth = (ratingResults.ave / 5) * 100 || 0;
  return (
    <div id="ratings">
      <div className="ratingsHead">
        <div className="ratingAve">{ratingResults.ave}</div>
        <div className="ratingStars">
          <div className="outerRatingStars">
            <div className="innerRatingStars"
            style={{ width: starWidth }}>
            </div>
          </div>
        </div>
      </div><br></br>
      <span>{ratingResults.recommend} of reviews recommend this product</span>
      <StarRating
        meta={props.meta}
        ratingSum={ratingResults.ratingSum}
        handleStarFilter={props.handleStarFilter}/>
      <Characteristics meta={props.meta} />
    </div>
  );
}

export default Ratings;

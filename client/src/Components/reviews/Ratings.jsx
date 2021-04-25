import React, { useState, useEffect } from 'react';
import Characteristics from './Characteristics.jsx';
import StarRating from './StarRating.jsx';
import RatingStars from './RatingStars.jsx';
import { ratings, ave } from './helpers/ratings.js';

function Ratings(props) {
  const ratingResults = ratings(props.meta, props.results);
  const starWidth = (ave / 5) * 100 || 0;
  return (
    <div id="ratings" className="useBgContrast light">
      <div className="ratingsHead">
        <div className="ratingAve">{ave}</div>
        <RatingStars starWidth={starWidth} />
      </div><br></br>
      <span>{ratingResults.recommend} of reviews recommend this product</span>
      <StarRating
        meta={props.meta}
        ratingSum={ratingResults.ratingSum}
        handleStarFilter={props.handleStarFilter}
        mode={props.mode}/>
      <Characteristics meta={props.meta} />
    </div>
  );
}

export default Ratings;

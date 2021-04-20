/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';

function OverallRating(props) {
  const [stars, setStars] = useState([
    { name: '1', color: 'black', index: 1 },
    { name: '2', color: 'black', index: 2 },
    { name: '3', color: 'black', index: 3 },
    { name: '4', color: 'black', index: 4 },
    { name: '5', color: 'black', index: 5 },
  ]);
  const [rating, setRating] = useState(0);

  const handleStarClick = (e) => {
    const currentStar = stars[e.target.className - 1];
    let newColor;
    if (currentStar.color === 'black') {
      newColor = 'gold';
    } else {
      newColor = 'black';
    }
    const newStarsArr = stars.map((star) => {
      if (newColor === 'gold') {
        if (star.index <= currentStar.index) {
          star.color = 'gold';
        } else {
          star.color = 'black';
        }
      }
      if (newColor === 'black') {
        if (star.index > currentStar.index) {
          star.color = 'black';
        } else {
          star.color = 'gold';
        }
      }
      return star;
    });
    setStars(newStarsArr);
    setRating(currentStar.index);
    props.handleStarRating(rating);
  };

  return (
    <div className="overallRating pointer">
      <span>
        Overall Rating:
      </span>
      {stars.map((star) =>
        <span
        style={{color: star.color}}
        key={star.index}
        className={star.name}
        onClick={handleStarClick}>
        ✭
        </span>)}
    </div>
  );
}

export default OverallRating;

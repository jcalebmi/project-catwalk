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

  const [rating, setRating] = useState('');

  const handleStarClick = (e) => {
    const ratings = {
      '1': 'Poor',
      '2': 'Fair',
      '3': 'Average',
      '4': 'Good',
      '5': 'Great',
    };
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
    props.handleStarRating(Number(currentStar.index));
    setStars(newStarsArr);
    setRating(ratings[currentStar.index]);
  };

  return (
    <div className="overallRating pointer">
      <span className="bold">
        Overall Rating:
      </span><br></br>
      {stars.map((star) =>
        <span
        style={{color: star.color}}
        key={star.index}
        className={star.name}
        onClick={handleStarClick}>
        ✭
        </span>)}
        <span> {rating}</span>
    </div>
  );
}

export default OverallRating;

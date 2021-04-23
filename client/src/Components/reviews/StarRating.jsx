import React, { useState, useEffect } from 'react';
import {filteredStars} from './helpers/sortReviews.js';
// import setStarFilter from '../helpers/setStarFilter.jsx';

function StarRating(props) {
  const [stars, setStars] = useState([
    { name: '5 stars', value: false },
    { name: '4 stars', value: false },
    { name: '3 stars', value: false },
    { name: '2 stars', value: false },
    { name: '1 stars', value: false },
  ]);
  const [filtered, setFiltered] = useState('none');
  const handleStars = (e) => {
    let newStars;
    if (e.target.innerHTML === 'Remove All Filters') {
      newStars = stars.map((star) => {
        star.value = false;
        return star;
      });
      setStars(newStars);
      // filteredStars(newStars);
      const filterTrue = newStars.filter((star) => star.value === true);
      const filter = filterTrue.map((star) => `${star.name}, `);
      setFiltered('none');
      props.handleStarFilter(filter);
    } else {
      const clicked = e.target.innerHTML.split(' ').join('');
      newStars = stars.map((star) => {
        if (star.name.split(' ').join('') === clicked) {
          star.value = !star.value;
        }
        return star;
      });
      setStars(newStars);
      // filteredStars(newStars);
      const filterTrue = newStars.filter((star) => star.value === true);
      const filter = filterTrue.map((star) => `${star.name}, `);
      setFiltered(filter);
      props.handleStarFilter(filter);
    }
  };

  return (
      <div className="numberOfStars">
        <h4 className="filters">Rating Breakdown</h4>
        <span
          className="filters">Filters: {filtered}</span><br></br>
          {filtered === 'none'
            ? null
            : <span
              onClick={handleStars}
              className="underline"
              style={ {color: 'blue'} }>Remove All Filters</span>}
        <div className="numberOfStars underline">
          <span
            onClick={handleStars}
            className="reviews progressBar">5 stars </span>
          <progress
            className="reviews progressBar"
            value={props.meta.ratings === undefined ? 0 : props.meta.ratings['5']}
            max={props.ratingSum}>
          </progress><br></br>
          <span
            onClick={handleStars}
            className="reviews progressBar">4 stars </span>
          <progress
            className="reviews progressBar"
            value={props.meta.ratings === undefined ? 0 : props.meta.ratings['4']}
            max={props.ratingSum}>
          </progress><br></br>
          <span
            onClick={handleStars}
            className="reviews progressBar">3 stars </span>
          <progress
            className="reviews progressBar"
            value={props.meta.ratings === undefined ? 0 : props.meta.ratings['3'] || 0}
            max={props.ratingSum}>
          </progress><br></br>
          <span
            onClick={handleStars}
            className="reviews progressBar">2 stars </span>
          <progress
            className="reviews progressBar"
            value={props.meta.ratings === undefined ? 0 : props.meta.ratings['2'] || 0}
            max={props.ratingSum}>
          </progress><br></br>
          <span
            onClick={handleStars}
            className="reviews progressBar">1 stars </span>
          <progress
            className="reviews progressBar"
            value={props.meta.ratings === undefined ? 0 : props.meta.ratings['1'] || 0}
            max={props.ratingSum}>
          </progress>
        </div><br></br>
      </div>
  );
}
export default StarRating;

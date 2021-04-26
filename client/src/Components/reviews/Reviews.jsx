import React, { useState, useEffect } from 'react';
import ReviewItem from './ReviewItem.jsx';
import AddReview from './AddReview.jsx';
import Search from './Search.jsx';

function Reviews(props) {
  const [addReview, setAddReview] = useState(false);
  const handleAddReview = () => {
    setAddReview(!addReview);
  };

  return (
      <div className="reviewsContainer">
        <span className="bold">
          <label htmlFor="sort">{props.results.length} reviews, sorted by </label>
          <select
            onChange={props.handleSort}
            name="options"
            id="options"
            className="reviewSort useBgColor light">
            <option
              value="relevance">relevance</option>
            <option
              value="helpful">helpful</option>
            <option
              value="newest">newest</option>
          </select>
        </span>
        <span className="floatRight">
          <Search sendSearch={props.handleSearch}/>
        </span>
        <div>
          <ul className="reviewList">
            {props.display.map((item, index) => <ReviewItem
              reviews={props.reviews}
              useEffect={props.useEffect}
              item={item}
              key={index}
              mode={props.mode}/>)}
          </ul>
          <span className="reviewsButtons">
            {props.results.length > 2 && props.display.length < props.results.length
              ? <button onClick={props.handleMoreReviews}>More Reviews</button>
              : null } <button onClick={handleAddReview}>Add A Review +</button>
          </span>
          {addReview === true
            ? <AddReview
                reviews={props.reviews}
                className="addReview overlay"
                product={props.currentProduct}
                closeReview={handleAddReview}
                mode={props.mode}
                />
            : null}
        </div>
      </div>
  );
}

export default Reviews;

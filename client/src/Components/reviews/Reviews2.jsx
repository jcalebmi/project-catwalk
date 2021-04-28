import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReviewItem from './ReviewItem.jsx';
import AddReview from './AddReview.jsx';
import Search from './Search.jsx';

function Reviews2(props) {
  const [addReview, setAddReview] = useState(false);
  const loader = useRef(null);
  const [addedMore, setAdded] = useState(false);

  const handleAddReview = () => {
    setAddReview(!addReview);
  };

  const addMore = () => {
    setAdded(true);
  };

  const loadMore = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting && props.display.length !== props.results.length) {
      props.handleMoreReviews();
    }
  }, [props.display]);

  useEffect(() => {
    if (addedMore) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: .25,
      };
      const observer = new IntersectionObserver(loadMore, options);

      if (loader && loader.current) {
        observer.observe(loader.current);
      }
      return () => observer.unobserve(loader.current);
    }
  }, [loader, loadMore, addedMore]);

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
              {addedMore ? <div ref={loader}></div> : null}
          </ul>
          <span className="reviewsButtons">
            {props.results.length > 2 && props.display.length < props.results.length && !addedMore
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

export default Reviews2;

import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReviewItem from './ReviewItem.jsx';
import AddReview from './AddReview.jsx';
import Search from './Search.jsx';

function Reviews(props) {
  const loader = useRef(null);
  const [addReview, setAddReview] = useState(false);
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
              item={item}
              key={index}
              mode={props.mode}/>)}
              <div ref={loader}>
              </div>
          </ul>
          <span className="reviewsButtons">
            {props.results.length > 2 && props.display.length < props.results.length && !addedMore
              ? <button onClick={addMore}>More Reviews</button>
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
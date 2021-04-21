import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReviewItem from './ReviewItem.jsx';
import getReviews from './helpers/getReviews.js';
import AddReview from './AddReview.jsx';
import sortReviews from './helpers/sortReviews.js';
import Search from './Search.jsx';

const selectProductById = (state) => state.product;

function Reviews() {
  //  Current product state
  const product = useSelector(selectProductById) || {};
  //  Review results for current Product
  const [results, setResults] = useState([]);
  const [resultsStorage, setResultsStorage] = useState([]);
  //  currently displayed results
  const [display, setDisplay] = useState(results.slice(0, 3));
  const [currentProduct, setProduct] = useState({});
  const [addReview, setAddReview] = useState(false)
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('relevance');
  const [currentLength, setLength] = useState(2);

  const handleSort = (e) => {
    const sortBy = e.target.value;
    const sorted = sortReviews(sortBy, results, search);
    const sliced = sorted.slice(0, currentLength);
    setResults(resultsStorage);
    setFilter(sortBy);
    setResults(sorted);
    setDisplay(sliced);
  };
  //  Call to Axios GET
  useEffect(() => {
    const reviews = () => {
      if (product.id !== undefined) {
        setProduct(product);
        return getReviews(product.id).then((data) => {
          setResults(data);
          setResultsStorage(data);
          const sorted = sortReviews(filter, data, search);
          const sliced = sorted.slice(0, 2);
          setDisplay(sliced);
        });
      }
    };
    reviews();
  }, [product.id]);
  // shows 2 more reviews
  const handleMoreReviews = () => {
    const length = display.length;
    setDisplay(results.slice(0, length + 2));
    setLength(currentLength + 2);
  };
  // write a review button
  const handleAddReview = () => {
    setAddReview(true);
  };
  // uses search bar helper function
  const handleSearch = (text) => {
    setSearch(text);
    const sorted = sortReviews(filter, results, search);
    const sliced = sorted.slice(0, currentLength);
    setResults(resultsStorage);
    setDisplay(sliced);
  };

  return (
      <div className="reviewsContainer">
        <span className="bold">
          <label htmlFor="sort">{results.length} reviews, sorted by </label>
          <select
            onChange={handleSort}
            name="options"
            id="options"
            className="reviewSort useBgColor">
            <option
              value="relevance">relevance</option>
            <option
              value="helpful">helpful</option>
            <option
              value="newest">newest</option>
          </select>
        </span>
        <span className="floatRight">
          <Search sendSearch={handleSearch}/>
        </span>
        <ul className="reviewList">
          {display.map((item) => <ReviewItem item={item} key={item.review_id}/>)}
        </ul>
        <span className="reviewsButtons">
          {results.length > 2 && display.length < results.length
            ? <button onClick={handleMoreReviews}>More Reviews</button>
            : null } <button onClick={handleAddReview}>Add A Review +</button>
        </span>
        {addReview === true
          ? <AddReview className="addReview overlay" product={currentProduct} />
          : null}
      </div>
  );
}

export default Reviews;

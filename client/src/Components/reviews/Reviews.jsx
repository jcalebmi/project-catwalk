import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReviewItem from './ReviewItem.jsx';
import getReviews from './helpers/getReviews.js';
import AddReview from './AddReview.jsx';
import { sortReviews, stars } from './helpers/sortReviews.js';
import Search from './Search.jsx';

const selectProductById = (state) => state.product;

function Reviews(props) {
  //  Current product state
  const product = useSelector(selectProductById) || {};
  //  Review results for current Product
  const [results, setResults] = useState([]);
  const [resultsStorage, setResultsStorage] = useState([]);
  //  currently displayed results
  const [display, setDisplay] = useState(results.slice(0, 3));
  const [currentProduct, setProduct] = useState({});
  const [addReview, setAddReview] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('relevance');
  const [currentLength, setLength] = useState(2);

  //console.log(product);
  const handleSort = (e) => {
    const sortBy = e.target.value;
    const sorted = sortReviews(sortBy, results, search, stars);
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
        getReviews(product.id).then((data) => {
          setResults(data);
          setResultsStorage(data);
          const sorted = sortReviews(filter, data, search, stars);
          const sliced = sorted.slice(0, 2);
          setDisplay(sliced);
        });
      }
    };
    reviews();
  }, [product, stars]);
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
    const sorted = sortReviews(filter, results, search, stars);
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
        <div>
          <ul className="reviewList">
            {display.map((item, index) => <ReviewItem item={item} key={index}/>)}
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
      </div>
  );
}

export default Reviews;

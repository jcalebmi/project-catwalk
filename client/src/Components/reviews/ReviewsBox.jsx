import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import getReviews from './helpers/getReviews.js';
import sortReviews from './helpers/sortReviews.js';
import getMetaData from './helpers/getMeta.js';

const selectProductById = (state) => state.product.product;

function ReviewsBox (props) {
  const [isLoaded, setLoaded] = useState(false);
  //  Current product state
  const product = useSelector(selectProductById) || {};
  //  Review results for current Product
  const [results, setResults] = useState([]);
  const [resultsStorage, setResultsStorage] = useState([]);
  //  currently displayed results
  const [display, setDisplay] = useState(results.slice(0, 3));
  const [currentProduct, setProduct] = useState({});
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('relevance');
  const [currentLength, setLength] = useState(2);
  const [starFilter, setStars] = useState([]);
  const [meta, setMeta] = useState({});
  const [sorting, setSorting] = useState(false);
  const [searching, setSearching] = useState(false);
  const [filtering, setFiltering] = useState(false);


  // calls sort helper and sorts filter
  const handleSort = (e) => {
    const sortBy = e.target.value;
    const sorted = sortReviews(sortBy, results, search, starFilter);
    const sliced = sorted.slice(0, currentLength);
    setDisplay(sliced);
    setResults(resultsStorage);
    setFilter(sortBy);
    setSorting(true);
  };

  //  Call to Axios GET
  const metaData = () => {
    if (product.id !== undefined) {
      getMetaData(product.id).then((data) => {
        setMeta(data);
      });
    }
  };

  // gets initial reviews and sets meta data
  const reviews = () => {
    if (product.id !== undefined) {
      // setProduct(product);
      getReviews(product.id).then((data) => {
        const sorted = sortReviews(filter, data, search, starFilter);
        const sliced = sorted.slice(0, currentLength);
        setDisplay(sliced);
        setResults(data);
        metaData();
        setResultsStorage(data);
      });
    }
  };

  useEffect(() => {
    // gets meta data for reviews
    reviews();
  }, [product]);
  if (!isLoaded) {
    if (results.length > 0) {
      setLoaded(true);
    }
    return null;
  }
  // adds 2 to review list
  const handleMoreReviews = () => {
    if (!sorting && !searching && !filtering) {
      setDisplay(results.slice(0, currentLength + 2));
      setLength(currentLength + 2);
    }
  };

  const highlight = (text) => {
    const reviews = document.getElementsByClassName('reviewBody');
    const reviewsArr = Array.prototype.slice.call(reviews);
    if (text.length > 2) {
      reviewsArr.map((review) => {
        const inner = review.innerHTML;
        const index = inner.toLowerCase().indexOf(text.toLowerCase());
        if (index !== -1) {
          review.innerHTML = `${inner.substring(0, index)}<span id="highlight">${inner.substring(index, index + text.length)}</span>${inner.substring(index + text.length)}`;
          return review;
        }
      });
    }
  };

  // Handles searchbar filter
  const handleSearch = (text) => {
    if (text.length > 2) {
      setSearching(true);
    }
    if (text.length < 3) {
      setSearching(false);
    }
    setSearch(text);
    const sorted = sortReviews(filter, results, text, starFilter);
    const sliced = sorted.slice(0, currentLength);
    setResults(resultsStorage);
    setDisplay(sliced);
    highlight(text);
  };

  // Handles star rating search filter
  const handleStarFilter = (arr) => {
    if (arr.length > 0) {
      setFiltering(true);
    }
    if (arr.length < 1) {
      setFiltering(false);
    }
    setStars(arr);
    const sorted = sortReviews(filter, results, search, arr);
    const sliced = sorted.slice(0, currentLength);
    setResults(resultsStorage);
    setDisplay(sliced);
  };

  return (
    <div id="ratingReviewContainer">
      <Ratings
        meta={meta}
        results={resultsStorage}
        handleStarFilter={handleStarFilter}
        mode={props.mode}/>
      <Reviews
        reviews={reviews}
        handleSearch={handleSearch}
        results={resultsStorage}
        display={display}
        handleSort={handleSort}
        currentProduct={product}
        handleMoreReviews={handleMoreReviews}
        mode={props.mode} />
    </div>
  );
}
export default ReviewsBox;
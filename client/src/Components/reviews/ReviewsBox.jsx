import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import getReviews from './helpers/getReviews.js';
import sortReviews from './helpers/sortReviews.js';
import getMetaData from './helpers/getMeta.js';

const selectProductById = (state) => state.product;

function ReviewsBox (props) {
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

  // calls sort helper and sorts filter
  const handleSort = (e) => {
    const sortBy = e.target.value;
    const sorted = sortReviews(sortBy, results, search, starFilter);
    const sliced = sorted.slice(0, currentLength);
    setResults(resultsStorage);
    setFilter(sortBy);
    setDisplay(sliced);
  };

  //  Call to Axios GET
  useEffect(() => {
    // gets meta data for reviews
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
        setProduct(product);
        getReviews(product.id).then((data) => {
          setResults(data);
          metaData();
          setResultsStorage(data);
          const sorted = sortReviews(filter, data, search, starFilter);
          const sliced = sorted.slice(0, currentLength);
          setDisplay(sliced);
        });
      }
    };
    reviews();
  }, [product]);

  // adds 2 to review list
  const handleMoreReviews = () => {
    setDisplay(results.slice(0, currentLength + 2));
    setLength(currentLength + 2);
  };

  // Handles searchbar filter
  const handleSearch = (text) => {
    setSearch(text);
    const sorted = sortReviews(filter, results, search, starFilter);
    const sliced = sorted.slice(0, currentLength);
    setResults(resultsStorage);
    setDisplay(sliced);
  };

  // Handles star rating search filter
  const handleStarFilter = (arr) => {
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
        handleStarFilter={handleStarFilter}/>
      <Reviews
        handleSearch={handleSearch}
        results={results}
        display={display}
        handleSort={handleSort}
        currentProduct={currentProduct}
        handleMoreReviews={handleMoreReviews} />
    </div>
  );
}
export default ReviewsBox;


import React, { useState, useEffect } from 'react';
import ReviewItem from './ReviewItem.jsx';
import getReviews from './helpers/getReviews.js';
import AddReview from './AddReview.jsx';
import { useSelector, useDispatch } from 'react-redux';


const selectProductById = (state) => state.product;
const selectAllProducts = (state) => state.products;



function Reviews (props) {
  //Current product state
  const product = useSelector(selectProductById) || {};
  const products = useSelector(selectAllProducts) || [];
  //Review results for current Product
  const [results, setResults] = useState([]);
  //currently displayed results
  const [display, setDisplay] = useState(results.slice(0, 3));
  const [currentProduct, setProduct] = useState({});

    //Call to Axios GET
  useEffect( () => {
    const reviews = () => {
      if (product.id !== undefined) {
        setProduct(product);
        return getReviews(product.id).then(data => {
          setResults(data);
          setDisplay([data[0], data[1]])
        });
      }
    }
    reviews();
  });


  const handleMoreReviews = () => {
    const length = display.length;
    setDisplay(results.slice(0, length + 3));
  };

  const [addReview, setAddReview] = useState(false);
  const handleAddReview = () => {
    setAddReview(true);
  }
  return (
      <div className="reviewsContainer">
        <span className="bold">
          <label htmlFor="sort">{results.length} reviews, sorted by </label>
          <select name="options" id="options" className="reviewSort useBgColor">
            <option value="relevance">relevance</option>
            <option value="helpful">helpful</option>
            <option value="newest">newest</option>
          </select>
        </span>
        <ul className="reviewList">
          {display.map((item, index) => <ReviewItem item={item} key={item.review_id}/>)}
        </ul>
        <span className="reviewsButtons">
          {results.length > 2 && display.length < results.length ?
          <button onClick={handleMoreReviews}>More Reviews</button>
          : null } <button onClick={handleAddReview}>Add A Review +</button>
        </span>
        {addReview === true ?
        <AddReview className="addReview overlay" product={currentProduct} /> :
        null}
      </div>
    )

}

export default Reviews;

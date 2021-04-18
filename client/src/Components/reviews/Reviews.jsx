
import React, { useState, useEffect } from 'react';
import ReviewItem from './ReviewItem.jsx';
import getReviews from './getReviews.js';
import { useSelector, useDispatch } from 'react-redux';


const selectProductById = (state) => state.product;
const selectAllProducts = (state) => state.products;



function Reviews (props) {
  //Current product state
  const product = useSelector(selectProductById) || 19089;
  const products = useSelector(selectAllProducts) || [];
  //Review results for current Product
  const [results, setResults] = useState([]);

  useEffect( () => {
    //Call to Axios GET
    const reviews = () => {
      if (product.id !== undefined) {
         return getReviews(product.id).then(data => {
           setResults(data);
         });
      }
    }
    reviews();
});
  return (
      <div className="reviewsContainer">
        <h5 className="bold">
        {results.length} reviews, sorted by..</h5>
        <ul>
          {results.map((item, index) => <ReviewItem item={item} key={item.review_id}/>)}
        </ul>
        <span><button>More Reviews</button> <button>Add A Review +</button></span>
      </div>
    )
}

export default Reviews;

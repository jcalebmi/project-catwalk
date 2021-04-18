import React, { useState, useEffect } from 'react';
import getReviews from './helpers/getReviews.js';
import { useSelector, useDispatch } from 'react-redux';


const selectProductById = (state) => state.product;
const selectAllProducts = (state) => state.products;



function Ratings (props) {

  //Finding curreint product
  const product = useSelector(selectProductById) || 19089;
  const products = useSelector(selectAllProducts) || [];
  const [results, setResults] = useState([]);

  //Average ratings & Recommnedation %
  const [ave, setAve] = useState(0);
  const [recommend, setRec] = useState(0 + '%');

  useEffect(() => {
    const reviews = () => {
      if (product.id !== undefined) {
        return getReviews(product.id).then(data => {
          setResults(data);
        });
      }
    }
    reviews();

    //Func for finding average rating
    const getAve = function () {
      let sum = 0;
      results.forEach(item => sum += item.rating)
      if (!isNaN(sum/results.length)) {
        setAve(sum/results.length);
      }
    };
    getAve();
    //Func for finding recommendation %
    const getRecommend = function () {
      let sum = 0;
      results.forEach(item => {
        if (item.recommend) {
          sum += 1;
        }
      })
      if (!isNaN(sum/results.length)) {
        setRec((sum/results.length) * 100 + '%');
        }
    }
    getRecommend();
});

  return (
    <div id="ratings">
      <span className="ratingAve">{ave}</span> <span>*****</span><br></br>
      <span>{recommend} of reviews recommend this product</span>
      <div className="numberOfStars">
        <span>5 stars</span> <span>loading bar</span><br></br>
        <span>4 stars</span> <span>loading bar</span><br></br>
        <span>3 stars</span> <span>loading bar</span><br></br>
        <span>2 stars</span> <span>loading bar</span><br></br>
        <span>1 stars</span> <span>loading bar</span><br></br>
      </div>
      <div className="characteristicsRating">
        <h6>Size</h6>
        <span>rating bar</span>
        <h6>Comfort</h6>
        <span>rating bar</span>
      </div>
    </div>
  )
};

export default Ratings;
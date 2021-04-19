import React, { useState, useEffect } from 'react';
import getReviews from './helpers/getReviews.js';
import getMetaData from './helpers/getMeta.js';
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
  const [meta, setMeta] = useState({});

  useEffect(() => {
    //Get reviews for product
    const reviews = () => {
      if (product.id !== undefined) {
        return getReviews(product.id).then(data => {
          setResults(data);
          metaData();
        });
      }
    }
    reviews();

    //Get Reviews MetaData
    const metaData = () => {
      if (product.id !== undefined) {
        return getMetaData(product.id).then(data => {
          setMeta(data);
        })
      }
    }
    // metaData();

    //Func for finding average rating
    const getAve = function () {
      let sum = 0;
      results.forEach(item => sum += item.rating)
      if (!isNaN(sum/results.length)) {
        setAve((sum/results.length).toFixed(1));
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

  let ratingSum = 0;
  const ratingsTotal = () => {
    let sum = 0;
    for (var key in meta.ratings) {
      sum += Number(meta.ratings[key]);
    }
    ratingSum = sum;

  }
  ratingsTotal();

  return (
    <div id="ratings">
      <div className="ratingsHead">
        <div className="ratingAve">{ave}</div>
        <div className="ratingStars">
          <div className="outerRatingStars">
            <div className="innerRatingStars" style={{width: (ave/5) * 100  + '%'}}>
            </div>
          </div>
        </div>
      </div><br></br>
      <span>{recommend} of reviews recommend this product</span>
      <div className="numberOfStars underline">
        <span>5 stars </span>
        <progress
          value={meta.ratings === undefined ? 0 : meta.ratings['5']}
          max={ratingSum}>
        </progress><br></br>
        <span>4 stars </span>
        <progress
          value={meta.ratings === undefined ? 0 : meta.ratings['4']}
          max={ratingSum}>
        </progress><br></br>
        <span>3 stars </span>
        <progress
          value={meta.ratings === undefined ? 0 : meta.ratings['3'] || 0}
          max={ratingSum}>
        </progress><br></br>
        <span>2 stars </span>
        <progress
          value={meta.ratings === undefined ? 0 : meta.ratings['2'] || 0}
          max={ratingSum}>
        </progress><br></br>
        <span>1 stars </span>
        <progress
          value={meta.ratings === undefined ? 0 : meta.ratings['1'] || 0}
          max={ratingSum}>
        </progress><br></br>
      </div>
      <div className="characteristicsRating">
        <h6>Comfort</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={meta.characteristics === undefined ? '1' : meta.characteristics.Comfort.value}>
          </input>
        </div>
        <h6>Fit</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={meta.characteristics === undefined ? '1' : meta.characteristics.Fit.value}>
          </input>
        </div>
        <h6>Length</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={meta.characteristics === undefined ? '1' : meta.characteristics.Length.value}>
          </input>
        </div>
        <h6>Quality</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={meta.characteristics === undefined ? '1' : meta.characteristics.Quality.value}>
          </input>
        </div>
      </div>
    </div>
  )
};

export default Ratings;
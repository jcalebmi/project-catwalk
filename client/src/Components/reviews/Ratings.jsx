import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getReviews from './helpers/getReviews.js';
import getMetaData from './helpers/getMeta.js';
import Characteristics from './Characteristics.jsx';
import StarRating from './StarRating.jsx'
import ratings from './helpers/ratings.js';

const selectProductById = (state) => state.product;

function Ratings(props) {
  //  Finding curreint product
  const product = useSelector(selectProductById) || {};
  const [results, setResults] = useState([]);
  //  Average ratings & Recommnedation %
  const [meta, setMeta] = useState({});

  useEffect(() => {
    //  Get Reviews MetaData
    const metaData = () => {
      if (product.id !== undefined) {
        getMetaData(product.id).then((data) => {
          setMeta(data);
        });
      }
    };

    //  Get reviews for product
    const reviews = () => {
      if (product.id !== undefined) {
        return getReviews(product.id).then((data) => {
          setResults(data);
          metaData();
        });
      }
    };
    reviews();
  }, [product]);

  const ratingResults = ratings(meta, results);
  const starWidth = (ratingResults.ave / 5) * 100 || 0;
  return (
    <div id="ratings">
      <div className="ratingsHead">
        <div className="ratingAve">{ratingResults.ave}</div>
        <div className="ratingStars">
          <div className="outerRatingStars">
            <div className="innerRatingStars"
            style={{ width: starWidth }}>
            </div>
          </div>
        </div>
      </div><br></br>
      <span>{ratingResults.recommend} of reviews recommend this product</span>
      <StarRating meta={meta} ratingSum={ratingResults.ratingSum} />
      <Characteristics meta={meta} />
    </div>
  );
}

export default Ratings;

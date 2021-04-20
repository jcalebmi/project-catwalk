import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getReviews from './helpers/getReviews.js';
import getMetaData from './helpers/getMeta.js';
import Characteristics from './Characteristics.jsx';
import StarRating from './StarRating.jsx'

const selectProductById = (state) => state.product;

function Ratings() {
  //  Finding curreint product
  const product = useSelector(selectProductById) || {};
  const [results, setResults] = useState([]);

  //  Average ratings & Recommnedation %
  const [ave, setAve] = useState(0);
  const [recommend, setRec] = useState(`${0}%`);
  const [meta, setMeta] = useState({});

  useEffect(() => {
    //  Get Reviews MetaData
    const metaData = () => {
      if (product.id !== undefined) {
        return getMetaData(product.id).then((data) => {
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

    //  Func for finding average rating
    const getAve = () => {
      let sum = 0;
      results.forEach((item) => {
        sum += item.rating;
      });
      if (!Number.isNaN(sum / results.length)) {
        setAve((sum / results.length).toFixed(1));
      }
    };
    getAve();
    //  Func for finding recommendation %
    const getRecommend = () => {
      let sum = 0;
      results.forEach((item) => {
        if (item.recommend) {
          sum += 1;
        }
      });
      if (!Number.isNaN(sum / results.length)) {
        setRec(`${(sum / results.length) * 100}%`);
      }
    };
    getRecommend();
  });

  let ratingSum = 0;
  const ratingsTotal = () => {
    let sum = 0;
    for (var key in meta.ratings) {
      sum += Number(meta.ratings[key]);
    }
    ratingSum = sum;
  };
  ratingsTotal();
  const starWidth = (ave / 5) * 99.97 || 0;
  return (
    <div id="ratings">
      <div className="ratingsHead">
        <div className="ratingAve">{ave}</div>
        <div className="ratingStars">
          <div className="outerRatingStars">
            <div className="innerRatingStars"
            style={{ width: starWidth }}>
            </div>
          </div>
        </div>
      </div><br></br>
      <span>{recommend} of reviews recommend this product</span>
      <StarRating meta={meta} ratingSum={ratingSum} />
      <Characteristics meta={meta} />
    </div>
  );
}

export default Ratings;

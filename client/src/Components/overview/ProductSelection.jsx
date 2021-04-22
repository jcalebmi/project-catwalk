import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';



const ProductSelection = ({ product, styles, style }) => {
  const price = style.original_price;
  return (
    <div className='ProductSelection' >
      {/* <StarRating > */}
      <h5>{product.category}</h5>
      <h2>{product.title}</h2>
      <h5>{price}</h5>
      <div classname='style'>
        <b>Style `&gt;` </b>
        <span className='styleName'>{style.name}</span>
      </div>
      <div className='styleThumbnails'>
      {styles.map((curStyle) => (
        <img src={curStyle.photos[0].thumbnail_url}
          className='styleThumbnail'
          key={curStyle.style_id} />
      ))}
      </div>
    </div>
  );
};

ProductSelection.propTypes = {
  product: PropTypes.object,
  styles: PropTypes.array,
  style: PropTypes.object,
};

export default ProductSelection;

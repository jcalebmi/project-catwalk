import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// const selectProductById = (state) => state.product;
// const selectAllProducts = (state) => state.products;

const ProductOverview = () => {
  const [product, setProduct] = useState(useSelector((state) => state.product) || {});
  return (
    <div className='productOverview'>
      <div className='information'>
        <div className='sloganAndDesc'>
          <div className='slogan'>
            {product.slogan}
          </div>
          <div className='description useBgContrast light'>
            {product.description}
          </div>
        </div>
        <ul className='tags useBgContrast light'>
          {product.features.map((feature, idx) => (
            <li key={idx}>
              {feature.feature}: {feature.value}
            </li>
          ))}
        </ul>
      </div>
      <div className='shareButtons'>
        Share buttons go here
      </div>
    </div>
  );
};

export default ProductOverview;

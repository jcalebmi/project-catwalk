import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// const selectProductById = (state) => state.product;
// const selectAllProducts = (state) => state.products;

const ProductOverview = () => (
  <div className='productOverview'>
    <div className='information'>
      <div className='description'>
        Description goes here
      </div>
      <div className='tags'>
        Tags go here
      </div>
    </div>
    <div className='shareButtons'>
      Share buttons go here
    </div>
  </div>
);

export default ProductOverview;

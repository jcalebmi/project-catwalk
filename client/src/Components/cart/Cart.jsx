import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {getTotal, getCartProducts} from '../../reducers/index.jsx';
import { checkout } from '../../actions/index.jsx';

const Cart = () => {
  const cart = useSelector(getCartProducts);
  if ( cart.length === 0 ) {
    return null;
  }
  return (
    <div className='cart'>
      <div className='products'>
        <div className='titles'>
          <span>Product</span>
          <span>Style</span>
          <span>Size</span>
          <span>Unit Price</span>
          <span>Quantity</span>
          <span>Total Price</span>
        </div>
        {cart.map((item) => (
          <div key={item.sizeSku} className='items'>
            <span>{item.product_name}</span>
            <span>{item.style_name}</span>
            <span>{item.size}</span>
            <span>{item.price}</span>
            <span>{item.quantity}</span>
            <span>{item.price * item.quantity}</span>
          </div>
        ))}
      </div>
      <button className='checkout' onClick={checkout}>Checkout</button>
    </div>
  );
};

Cart.propTypes = {
  styleIdx: PropTypes.number,
  styles: PropTypes.array,
  size: PropTypes.string,
  quant: PropTypes.number,
  setQuant: PropTypes.func,
};

export default Cart;

import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {getTotal, getCartProducts } from '../../reducers/index.jsx';
import { checkout } from '../../actions/index.jsx';

const Cart = () => {
  const cart = useSelector(getCartProducts);
  const total = useSelector(getTotal);
  const handleCheckout = (e) => {
    e.preventDefault();
    checkout();
  };
  return (
    <div id='cart'>
      <div className='products'>
        <div className='gridItem titles'>
          <span>Product</span>
          <span>Style</span>
          <span>Size</span>
          <span>Unit Price</span>
          <span>Quantity</span>
          <span>Total Price</span>
        </div>
        {cart.map((sku) => {
          const { item } = sku;
          return (
            <div key={item.sizeSku} className='gridItem product'>
              <span>{item.product_name}</span>
              <span>{item.style_name}</span>
              <span>{item.size}</span>
              <span>{item.price}</span>
              <span>{sku.quantity}</span>
              <span>{item.price * sku.quantity}</span>
            </div>
          );
        })}
        <div className='gridItem totalPrice'>
          <span>Total Price</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>{total}</span>
        </div>
      <button className='checkout' onClick={handleCheckout}>Checkout</button>
      </div>
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

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AddToCart = ({
  cart,
  setCart,
  sizeSku,
  quant,
  style,
  product
}) => {
  const handleClick = (e) => {
    if (quant > 0 && sizeSku) {
      const newItem = {
        product_id: product.id,
        style_id: style.style_id,
        sizeSku,
        quantity: quant,
      };
      const newCart = cart.concat(newItem);
      setCart(newCart);
      console.log(newCart);
    }
  };
  return (
    <div className='add'>
      Add To Cart
      <span onClick={ handleClick } className="material-icons">
        add
      </span>
    </div>
  );
};

AddToCart.propTypes = {
  styleIdx: PropTypes.number,
  styles: PropTypes.array,
  size: PropTypes.string,
  quant: PropTypes.number,
  setQuant: PropTypes.func,
};

export default AddToCart;

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
    // console.log(product);
    // console.log(style);
    if (quant > 0 && sizeSku) {
      const price = style.sale_price || style.original_price;
      const newItem = {
        product_id: product.id,
        product_name: product.name,
        style_id: style.style_id,
        style_name: style.name,
        sizeSku,
        size: style.skus[sizeSku].size,
        price,
        quantity: quant,
      };
      const newCart = cart.slice();
      if (cart.some((item) => (newItem.sizeSku === item.sizeSku))) {
        newCart.map((item) => {
          if (newItem.sizeSku === item.sizeSku) {
            item.quantity += newItem.quantity;
          }
          return item;
        }, []);
      } else {
        newCart.push(newItem);
      }
      setCart(newCart);
      console.log(newCart);
    }
  };
  return (
    <div onClick={ handleClick } className='add'>
      Add To Cart
      <span className="material-icons">
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

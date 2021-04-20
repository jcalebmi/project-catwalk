import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const selectProductById = (state) => state.product;
const selectAllProducts = (state) => state.products;

const DefaultView = ({ setExpanded }) => {
  const spaceHolder = '1';
  return (
    <div className='defaultView' onClick={ setExpanded }>
      Default View {spaceHolder}
    </div>
  );
};

DefaultView.propTypes = {
  setExpanded: PropTypes.func,
};

export default DefaultView;

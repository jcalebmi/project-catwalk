import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const selectProductById = (state) => state.product;
const selectAllProducts = (state) => state.products;

const Announcements = () => (
  <div className='announcement'>
    SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE/DISCOUNT
    <b> OFFER </b>
    <a className='underline'>NEW PRODUCT HIGHLIGHT</a>
  </div>
);
export default Announcements;

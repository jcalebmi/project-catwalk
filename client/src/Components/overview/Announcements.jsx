import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import setProduct from '../helpers/setProduct.jsx';

const Announcements = () => (
  <div className='announcement'>
    SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE/DISCOUNT
    <b> OFFER </b>
    <span onClick={() => {
      setProduct(19098);
    }} className='underline productHighlight'>NEW PRODUCT HIGHLIGHT</span>
  </div>
);
export default Announcements;

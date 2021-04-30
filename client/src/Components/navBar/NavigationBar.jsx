import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCartProducts } from '../../reducers/index.jsx';
import setProduct from '../helpers/setProduct.jsx';

import Select from './Select.jsx';

const NavigationBar = ({ handleColor, setPage, handleStats }) => {
  const [searchVal, setSearchVal] = useState('');
  const numberOfProducts = useSelector(getCartProducts)
    .reduce((acc, prod) => (
      acc + prod.quantity
    ),
    0);
  const products = useSelector((state) => state.allProducts.allProducts);
  // console.log(products);
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === 'logo') {
      setPage('modules');
    } else if (e.target.id === 'checkout') {
      setPage('cart');
    } else if (e.target.id === 'stats') {
      handleStats();
      setPage('stats');
    } else if (e.target.id === 'navigationBar') {
      handleColor();
    }
  };
  const loadOptions = searchVal.length < 1
    ? []
    : products.filter((product) => (product.name.toLowerCase()
      .includes(searchVal.toLowerCase())))
      .slice(0, 5);
  const handleSelect = (e) => {
    const [prodId, prodName] = e.target.value.split('|');
    setProduct(prodId);
    setSearchVal('');
    setPage('modules');
  };

  return (
    <div onClick={handleClick} className='useBgContrast light' id='navigationBar'>
      <img onClick={handleClick} id='logo'
        src='/assets/Taiga.png'
        alt='Taiga Logo'>
      </img>
      <button id='stats' onClick={handleClick}>Stats</button>

      <form
        name='prodSearch'
        onSubmit={(e) => {
          e.preventDefault();
          console.log(searchVal);
        }}
        id='prodSearchForm'>
        <label >Search Products </label>
        <input id='prodSearchInput' value={searchVal}
          onChange={(e) => { setSearchVal(e.target.value); }}/>
        <Select handleSelect={handleSelect} loadOptions={loadOptions}/>
      </form>

      <div
        onClick={handleClick}
        id='checkout'
        className='checkout'>
          Checkout
          <i className='material-icons'>
            shopping_cart
          </i>
          {numberOfProducts}
      </div>
    </div>
  );
};
export default NavigationBar;

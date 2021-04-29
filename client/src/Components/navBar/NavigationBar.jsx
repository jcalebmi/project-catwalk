import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCartProducts } from '../../reducers/index.jsx';

const NavigationBar = ({ handleColor, setPage, handleStats }) => {
  const [searchVal, setSearchVal] = useState('');
  const numberOfProducts = useSelector(getCartProducts)
    .reduce((acc, prod) => (
      acc + prod.quantity
    ),
    0);
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === 'logo') {
      setPage('modules');
    } else if (e.target.id === 'checkout') {
      setPage('cart');
    } else if (e.target.id === 'stats') {
      handleStats();
      setPage('stats');
    } else {
      handleColor();
    }
  };

  return (
    <div onClick={handleClick} className='useBgContrast light' id='navigationBar'>
      <img onClick={handleClick} id='logo'
        src='/assets/Taiga.png'>
      </img>
      <button id='stats' onClick={handleClick}>Stats</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(searchVal);
        }}
        className='searchBar'>
      <label>Search Products </label>
      <input
        value={searchVal}
        onChange={(e) => { setSearchVal(e.target.value); }}/>
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

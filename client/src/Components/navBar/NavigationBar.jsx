import React, { useState } from 'react';

const NavigationBar = ({ handleColor, setPage, handleStats }) => {
  const [searchVal, setSearchVal] = useState('');

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
      <span onClick={handleClick} id='checkout' className='checkout'> Checkout <i className='material-icons'>shopping_cart</i> </span>
    </div>
  );
};
export default NavigationBar;

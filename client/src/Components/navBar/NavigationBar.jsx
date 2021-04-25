import React, { useState } from 'react';

const NavigationBar = ({handleColor, toggle}) => {
  const [searchVal, setSearchVal] = useState('');
  return (
    <div onClick={handleColor} className='useBgContrast light' id='navigationBar'>
    <img id='logo'
      src='/assets/Taiga.png'>
    </img>
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
  </div>
  );
};
export default NavigationBar;

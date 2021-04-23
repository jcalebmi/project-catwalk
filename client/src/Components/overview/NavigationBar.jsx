import React, { useState } from 'react';

const NavigationBar = () => {
  const [searchVal, setSearchVal] = useState('');
  return (
    <div className='navigationBar'>
    <img id='logo'
      src='https://bear.org/wp-content/uploads/2008/01/Polar-Bears-standing-playing.jpg'>
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

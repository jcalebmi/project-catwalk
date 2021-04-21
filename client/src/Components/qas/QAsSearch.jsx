import React, { useState } from 'react';

const QAsSearch = ({ handleSearch }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.length >= 3) {
      handleSearch(input);
    }
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
  };

  return (
      <div>
        <form>
        <input name="search" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={handleInputChange}></input>
        <button type="submit" onClick={handleSearchClick}>Go</button>
        </form>
      </div>
  );
};

export default QAsSearch;

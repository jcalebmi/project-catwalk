import React from 'react';

const Search = (props) => {
  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    props.sendSearch(text.toLowerCase());
  };
  return (
    <input
      type='text'
      placeholder="search"
      onChange={handleSearch}>
      </input>
  );
};

export default Search;

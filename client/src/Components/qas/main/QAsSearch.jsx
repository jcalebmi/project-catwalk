import React from 'react';
import PropTypes from 'prop-types';

const QAsSearch = ({ handleSearch }) => {
  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
      <div>
        <form>
        <input name="search" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={handleInputChange}></input>
        <button>Go</button>
        </form>
      </div>
  );
};

QAsSearch.propTypes = {
  handleSearch: PropTypes.func,
};

export default QAsSearch;

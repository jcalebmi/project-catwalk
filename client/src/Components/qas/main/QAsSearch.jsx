import React from 'react';
import PropTypes from 'prop-types';

const QAsSearch = ({ handleSearch }) => (
        <div>
          <form>
          <input name="search" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={(e) => handleSearch(e.target.value) }></input>
          </form>
        </div>
);

QAsSearch.propTypes = {
  handleSearch: PropTypes.func,
  questions: PropTypes.array,
};

export default QAsSearch;

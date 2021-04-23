import React from 'react';
import PropTypes from 'prop-types';

const QAsSearch = ({ searchHandler }) => (
        <div>
          <form id="search-field">
          <input name="search" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={searchHandler}></input>
          </form>
        </div>
);

QAsSearch.propTypes = {
  searchHandler: PropTypes.func,
};

export default QAsSearch;

import React from 'react';
import PropTypes from 'prop-types';

const QAsSearch = ({ searchHandler }) => (
        <div className="qas-search">
          <form id="searchForm">
          <input className="search-field" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={(e) => searchHandler(e)}></input>
          </form>
        </div>
);

QAsSearch.propTypes = {
  searchHandler: PropTypes.func,
};

export default QAsSearch;

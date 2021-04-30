import React from 'react';
import PropTypes from 'prop-types';
import filter from '../helpers/filter';

const QAsSearch = ({ questions, callback }) => {
  const handleChange = (e) => {
    if (e.target.value.length >= 3) {
      filter(e.target.value, questions, (matchedResults) => {
        callback(true, matchedResults, e.target.value);
      });
    }
    if (e.target.value.length < 3) {
      callback(false, questions.slice(0, 4), '');
    }
  };


  return (
        <div className="qas-search">
          <form id="searchForm">
          <input className="search-field" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={handleChange}></input>
          </form>
        </div>
  );
};

QAsSearch.propTypes = {
  searchHandler: PropTypes.func,
  questions: PropTypes.array,
  callback: PropTypes.func,
};

export default QAsSearch;

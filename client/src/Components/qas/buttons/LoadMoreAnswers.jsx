import React from 'react';
import PropTypes from 'prop-types';

// should be working- have not yet had the chance to try it since the API data changed.
const LoadMoreAnswers = ({ handler }) => (
  <div>
    <button className='useBgContrast light' id="more-answers-btn" onClick={(e) => handler(e)}>LOAD MORE ANSWERS</button>
  </div>
);

LoadMoreAnswers.propTypes = {
  handler: PropTypes.func,
};

export default LoadMoreAnswers;

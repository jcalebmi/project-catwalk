import React from 'react';
import PropTypes from 'prop-types';

const LoadMoreQuestions = ({ handler }) => (
  <div>
    <button className="view-add-more-qs" id="load-more-questions-btn" onClick={handler}>LOAD MORE QUESTIONS</button>
  </div>
);

LoadMoreQuestions.propTypes = {
  handler: PropTypes.func,
};

export default LoadMoreQuestions;

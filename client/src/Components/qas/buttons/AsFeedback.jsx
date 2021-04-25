import React from 'react';
import PropTypes from 'prop-types';
import { helpfulness, reported } from '../helpers/markQAs';

const AsFeedback = ({ answerId, answerHelpfulness }) => (
  <span className="a-feedback" id={answerId}> Helpful?
    <button className="feedback-btn" id="answers-help-btn"
     onClick={(e) => helpfulness(e)}>
       Yes({answerHelpfulness})</button> |
    <button className="feedback-btn" id="answers-report-btn"
    onClick={(e) => reported(e)}>Report</button></span>
);

AsFeedback.propTypes = {
  answerId: PropTypes.number,
  answerHelpfulness: PropTypes.number,
};

export default AsFeedback;

import React from 'react';
import PropTypes from 'prop-types';
import { helpfulness, reported } from '../helpers/markQAs';
import AddAnswer from './AddAnswerBtn.jsx';

const QsFeedback = ({ questionId, questionHelpfulness }) => (
  <span className="q-feedback" id={questionId}><button className="useBgContrast light feedback-btn " id="questions-helpful" onClick={(e) => helpfulness(e)}>Yes({questionHelpfulness}) </button><div id="vertical"></div> <button className="useBgContrast light feedback-btn"id="questions-report" key={`${questionId}/report`} onClick={(e) => reported(e)}>Report</button>
  <div id="vertical"></div>
  <AddAnswer questionId={questionId} /></span>

);

QsFeedback.propTypes = {
  questionId: PropTypes.number,
  questionHelpfulness: PropTypes.number,
};

export default QsFeedback;

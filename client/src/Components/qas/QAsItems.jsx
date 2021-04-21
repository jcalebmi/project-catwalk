/* eslint-disable no-continue */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers.jsx';
import LoadMoreQuestions from './LoadMoreQuestions.jsx';
import QAsSearch from './QAsSearch.jsx';
import helpfulness from './helpers/helpfulness';

const QAsItems = ({ questions }) => {
  const [displayAll, setDisplayAll] = useState(false);
  const [displaySearch, setDisplaySearch] = useState([]);
  let questionsDisplay;

  const handleMoreQuestions = () => {
    if (!displayAll) setDisplayAll(true);
    if (displayAll) setDisplayAll(false);
  };

  if (displaySearch.length === 0) {
    questionsDisplay = !displayAll ? questions.slice(0, 4) : questions.slice();
  }
  if (displaySearch.length > 0) {
    questionsDisplay = displaySearch;
  }

  const handleSearch = (searchVal) => {
    const newArr = questions.slice();
    const searchResults = newArr.filter((val) => {
      if (val.question_body.toLowerCase().includes(searchVal.toLowerCase())) return true;
    });
    setDisplaySearch(searchResults);
    if (searchResults.length === 0) setDisplayAll(false);
  };

  return (
    <div>
      <QAsSearch questions={questions}
       handleSearch={handleSearch}
       />
    <div>
      {questionsDisplay.map((question) => (
        <div key={question.asker_name}>
        <p className="bold" key={question.question_id}>Q: {question.question_body} <span> Helpful? <button onClick={helpfulness}>Yes({question.helpfulness || 0})</button> | Report </span></p>
        <Answers
          questionId={question.question_id}
        />
        </div>
      ))}
      <LoadMoreQuestions onClickHandler={handleMoreQuestions} />
    </div>
    </div>
  );
};

QAsItems.propTypes = {
  questions: PropTypes.array,
};

export default QAsItems;

/* eslint-disable no-use-before-define */
/* eslint-disable no-continue */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers.jsx';
import LoadMoreQuestions from '../buttons/LoadMoreQuestions.jsx';
import AddQuestion from '../buttons/AddQuestion.jsx';
import QAsSearch from './QAsSearch.jsx';
import helpfulness from '../helpers/helpfulness';
import filter from '../helpers/filter';
import reported from '../helpers/reported';

const QAsItems = ({ questions }) => {
  /* if the data is undefined, do not render component */
  if (questions === undefined) {
    return (
      <div>Loading...</div>
    );
  }
  /* copy of questions array to avoid input mutations */
  let display = questions.slice();

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const pointer = useRef(2);

  /** handling searching state */
  const handleSearch = (searchVal) => {
    if (searchVal.length >= 3) {
      filter(searchVal, questions, (matchedResults) => {
        setSearchResults(matchedResults);
        setIsSearching(true);
      });
    }
    if (searchVal.length < 3) {
      setIsSearching(false);
    }
  };
  /** handling loading state */
  const loadMore = (e) => {
    if (e === undefined) {
      return;
    }
    if (e.target.innerHTML === 'COLLAPSE QUESTIONS') {
      e.target.innerHTML = 'LOAD MORE QUESTIONS';
      pointer.current = 0;
      setLoading(false);
    }
    if (pointer.current + 2 >= display.length) {
      e.target.innerHTML = 'COLLAPSE QUESTIONS';
      display = questions.slice();
    }
    pointer.current += 2;
  };
    /* else statement is meant to assert data that still needs to be loaded */
  display = (!isLoading && !isSearching)
    ? questions.slice(0, 4) : questions.slice(0, pointer.current + 2);

  /** if questions are being searched */
  if (isSearching) {
    if (searchResults < 1) {
      display = searchResults;
      setIsSearching(false);
    }
    display = searchResults;
  }

  return (
    <div>
      <QAsSearch searchHandler={(e) => handleSearch(e.target.value)}/>
    <div className="useBgContrast light">
      {display.map((question, index) => (
        <div id="questions" key={index}>
        <p className="bold" key={question.question_id} >Q: {question.question_body} <span> Helpful? <button id={question.question_id} onClick={helpfulness}>Yes({question.question_helpfulness || 0})</button> | <button onClick={reported}>Report</button> </span></p>
        <Answers
          questionId={question.question_id} questionBody={question.question_body}
        />
        </div>
      ))}
      <LoadMoreQuestions onClick={(e) => loadMore(e)}/>
    </div>
    <AddQuestion />
    </div>
  );
};

QAsItems.propTypes = {
  questions: PropTypes.array,
};

export default QAsItems;

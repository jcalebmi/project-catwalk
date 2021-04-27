/* eslint-disable no-use-before-define */
/* eslint-disable no-continue */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers.jsx';
import LoadMoreQuestions from '../buttons/LoadMoreQuestions.jsx';
import AddQuestion from '../buttons/AddQuestion.jsx';
import QAsSearch from './QAsSearch.jsx';
import QsFeedback from '../buttons/QsFeedback.jsx';
import filter from '../helpers/filter';
import qasView from '../helpers/qasView';

const QAsItems = ({ questions }) => {
  if (questions.length === 0) {
    return (
      <div>
        <AddQuestion />
        </div>
    );
  }
  const [isSearching, setIsSearching] = useState(false);
  const [display, updateDisplay] = useState(questions.slice(0, 4));
  const pointer = useRef(3);

  /** handling searching state */
  const handleSearch = (searchVal) => {
    if (searchVal.length >= 3) {
      filter(searchVal, questions, (matchedResults) => {
        setIsSearching(true);
        updateDisplay(matchedResults);
      });
    }
    if (searchVal.length < 3) {
      setIsSearching(false);
      updateDisplay(questions.slice(0, 4));
    }
  };

  const loadMore = (e) => {
    if (isSearching) {
      return;
    }
    if (e.target.innerHTML === 'COLLAPSE QUESTIONS') {
      pointer.current = 3;
      updateDisplay(questions.slice(0, 4));
      e.target.innerHTML = 'SEE MORE QUESTIONS';
      return;
    }
    if (pointer.current >= questions.length - 2) {
      updateDisplay(questions.slice());
      e.target.innerHTML = 'COLLAPSE QUESTIONS';
    }
    pointer.current += 2;
    updateDisplay(questions.slice(0, pointer.current));
  };

  return (
    <div id="qas-items-container" className ="useBgContrast light">
        <QAsSearch searchHandler={(e) => handleSearch(e.target.value)}/>
      {display.map((question) => (
         <div key={question.question_id} id="q-a-item">
         <div id="question">
            <p className="bold">Q: {question.question_body}</p>
            <span id="helpTxt">Helpful?</span>
            <QsFeedback questionId={question.question_id}
            questionHelpfulness= {question.question_helpfulness || 0} />
            <Answers questionId={question.question_id} questionBody={question.question_body}/>
          </div><hr></hr>
          </div>
      ))}
      <div id="qs-btns-container">
        {questions.length > 4 ? <LoadMoreQuestions handler={loadMore}/>
          : <></>}
        <AddQuestion />
      </div>
    </div>
  );
};

QAsItems.propTypes = {
  questions: PropTypes.array,
};

export default QAsItems;

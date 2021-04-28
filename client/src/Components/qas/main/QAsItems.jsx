/* eslint-disable no-use-before-define */
/* eslint-disable no-continue */
import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers.jsx';
import AddQuestion from '../buttons/AddQuestion.jsx';
import QAsSearch from './QAsSearch.jsx';
import QsFeedback from '../buttons/QsFeedback.jsx';

const QAsItems = ({ questions }) => {
  if (questions.length === 0) {
    return (
      <div>
        No questions yet... would you like to add a new one?
        <AddQuestion />
        </div>
    );
  }

  const observer = useRef();
  const count = useRef(4);
  const [isSearching, setIsSearching] = useState(false);
  const [display, updateDisplay] = useState(questions.slice(0, count.current));

  const lastElementRef = useCallback((node) => {
    if (isSearching) {
      return;
    }

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        count.current += 2;
        updateDisplay(questions.slice(0, count.current));

        if (count.current >= questions.length - 2) {
          updateDisplay(questions.slice());
        }
      }
    });

    if (node) {
      observer.current.observe(node);
    }
  });

  const handleSearch = (bool, results) => {
    setIsSearching(bool);

    updateDisplay(results);
  };

  return (
    <div id="qAndAs">
    <span className="questionSearchField">
      <QAsSearch questions={questions} callback={handleSearch} />
    </span>
        {display.map((question, index) => {
          if (display.length === index + 1) {
            return (
               <div ref={lastElementRef} key={question.question_id} id="q-a-item">
                <div id="question">
                <span className="bold">Q: {question.question_body}</span>
                <span id="helpTxt">Helpful?</span>
                  <QsFeedback questionId={question.question_id}
                  questionHelpfulness= {question.question_helpfulness || 0} />
                </div> <h3>A:</h3>
                  <Answers questionId={question.question_id} questionBody={question.question_body}/>
                </div>
            );
          } return (
             <div key={question.question_id} id="q-a-item">
             <div id="question">
             <span className="bold">Q: {question.question_body}</span>
             <span id="helpTxt">Helpful?</span>
               <QsFeedback questionId={question.question_id}
                 questionHelpfulness= {question.question_helpfulness || 0} />
               </div> <h3>A:</h3>
                 <Answers questionId={question.question_id} questionBody={question.question_body}/>
               </div>
          );
        })}
     </div>
  );
};

QAsItems.propTypes = {
  questions: PropTypes.array,
};

export default QAsItems;

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import LoadMoreAnswers from '../buttons/LoadMoreAnswers.jsx';
import AsFeedback from '../buttons/AsFeedback.jsx';
import { fetchAnswers } from '../helpers/server-requests';
import AddAnswer from '../buttons/AddAnswerBtn.jsx';

const moment = require('moment');

const Answers = ({ questionId, questionBody }) => {
  const [answers, setAnswers] = useState([]);
  const [display, updateDisplay] = useState([]);
  const pointer = useRef(2);

  useEffect(() => {
    fetchAnswers(questionId, (results) => {
      setAnswers(results);
      updateDisplay(results.slice(0, pointer.current));
    });
  }, []);

  const loadMore = (e) => {
    if (e.target.innerHTML === 'COLLAPSE ANSWERS') {
      e.target.innerHTML = 'SEE MORE ANSWERS';
      pointer.current = 2;
      return updateDisplay(answers.slice(0, 2));
    }
    if (pointer.current >= answers.length - 2) {
      e.target.innerHTML = 'COLLAPSE ANSWERS';
      return updateDisplay(answers.slice());
    }
    pointer.current += 2;
    updateDisplay(answers.slice(0, pointer.current));
  };

  return (
    <div id="answersContainer">
  {display.map((answer) => (
          <span className="answerElement" key={answer.answerer_name}>
          <span key={`${answer.answer_id}/span`} className="answerBody">{answer.body}</span>
            <br></br><span className="answerer">by{' '}{answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')}</span>
          {' '}<span id="helpTxtA">Helpful?{' '}</span>
            <span id={answer.answer_id}>
            <AsFeedback answerId={answer.answer_id} answerHelpfulness={answer.helpfulness || 0}/>
            </span>
        </span>
  ))}
        <div id="answer-btn-container">
        {answers.length > 2 ? <LoadMoreAnswers handler={loadMore} />
          : <AddAnswer questionId={questionId} questionBody={questionBody} /> }
          </div>
          <br></br>
      </div>
  );
};

Answers.propTypes = {
  questionId: PropTypes.number,
  questionBody: PropTypes.string,
};

export default Answers;

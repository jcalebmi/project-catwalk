import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import LoadMoreAnswers from '../buttons/LoadMoreAnswers.jsx';
import qasView from '../helpers/qasView';
import AsFeedback from '../buttons/AsFeedback.jsx';
import { fetchAnswers } from '../helpers/server-requests';
import sortData from '../helpers/sortData';
import AddAnswer from '../buttons/AddAnswerBtn.jsx';

const moment = require('moment');

const Answers = ({ questionId, questionBody }) => {
  const [answers, setAnswers] = useState([]);
  const [display, updateDisplay] = useState([]);
  const pointer = useRef(2);

  useEffect(() => {
    fetchAnswers(questionId, (results) => {
      sortData(results, 'helpfulness', (sorted) => {
        setAnswers([...sorted]);
        updateDisplay(sorted.slice(0, 2));
      });
    });
  }, [questionId]);

  const loadMore = (e) => {
    console.log(e);
    if (e.target.innerHTML === 'COLLAPSE ANSWERS') {
      e.target.innerHTML = 'LOAD MORE ANSWERS';
      pointer.current = 1;
    }

    qasView(answers, pointer, (next2, newPointer) => {
      pointer.current = newPointer;

      if (next2.length === 1) {
        e.target.innerHTML = 'COLLAPSE ANSWERS';
      }

      updateDisplay([...display, ...next2]);
    });
  };

  return (
      <div id="answers-container">
        <span className="answers">
        <h3>A:</h3>{display.map((answer) => (
          <span id="answer-body" key={answer.answerer_name}>

          <li key={`${answer.answer_id}/li`}>{answer.body}</li>
            <br></br><span className="answerer">by{' '}{answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')}</span>
          {' '}<span id="helpTxtA">Helpful?{' '}</span>
            <span id={answer.answer_id}>
            <AsFeedback answerId={answer.answer_id} answerHelpfulness={answer.helpfulness || 0}/>
            </span>
        </span>
        ))}
        </span>
        <div id="answer-btn-container">
        {answers.length > 2 ? <LoadMoreAnswers handler={loadMore} />
          : <></>}
        {answers.length === 0
          ? <AddAnswer questionId={questionId} questionBody={questionBody} /> : <></>}
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

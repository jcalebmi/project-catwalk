import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import LoadMoreAnswers from '../buttons/LoadMoreAnswers.jsx';
import qasView from '../helpers/qasView';
import AsFeedback from '../buttons/AsFeedback.jsx';
import { fetchAnswers } from '../helpers/server-requests';
import sortData from '../helpers/sortData';
import AddAnswer from '../buttons/AddAnswerBtn.jsx';

const moment = require('moment');

const Answers = ({ questionId, questionBody }) => {
  const [readyToRender, setReadyToRender] = useState([]);
  const [display, updateDisplay] = useState([]);
  const pointer = useRef(2);

  useEffect(() => {
    fetchAnswers(questionId, (results) => {
      sortData(results, 'helpfulness', (sorted) => {
        setReadyToRender([sorted]);
        updateDisplay(sorted.slice(0, 2));
      });
    });
  }, [questionId]);

  const loadMore = (e) => {
    if (e.target.innerHTML === 'COLLAPSE ANSWERS') {
      e.target.innerHTML = 'LOAD MORE ANSWERS';
      pointer.current = 1;
    }

    qasView(readyToRender, pointer, (next2, newPointer) => {
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
            <br></br> {answer.name === 'Seller'}
          by{' '}<span className="answerer">{answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')}</span>
          {' '}<span id="helpTxtA">Helpful?{' '}</span>
            <span id={answer.answer_id}>
            <AsFeedback answerId={answer.answer_id} answerHelpfulness={answer.helpfulness || 0}/>
            </span>
        </span>
        ))}
        </span>
        <div id="answer-btn-container">
          {readyToRender.length > 2
            ? <LoadMoreAnswers onClick={loadMore} />
            : <></>}
        {readyToRender.length === 0
          ? <AddAnswer questionId={questionId} questionBody={questionBody} /> : <></>}
          </div>
      </div>
  );
};

Answers.propTypes = {
  questionId: PropTypes.number,
  questionBody: PropTypes.string,
};

export default Answers;

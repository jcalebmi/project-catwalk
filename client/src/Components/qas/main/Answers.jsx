import React, { useState, useEffect } from 'react';
import LoadMoreAnswers from '../buttons/LoadMoreAnswers.jsx';
import AddAnswer from '../buttons/AddAnswerBtn.jsx';
import helpfulness from '../helpers/helpfulness';
import { fetchAnswers } from '../helpers/server-requests';
import sortData from '../helpers/sortData';
import toggle from '../helpers/toggle';

const moment = require('moment');

const Answers = (questionIds) => {
  const [answers, setAnswers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayAll, setDisplayAll] = useState(false);

  useEffect(() => {
    // api GET helper
    fetchAnswers(questionIds.questionId, (results) => {
      // sort data helper
      sortData(results, 'helpfulness', (sorted) => {
        setAnswers(sorted);
        setIsLoaded(true);
      });
    });
  }, []);

  if (!isLoaded || answers.length === 0) {
    return (
      <div>
       <AddAnswer />
      </div>
    );
  }

  const answersDisplay = !displayAll ? answers.slice(0, 2) : answers.slice();
  return (
      <div>
        <ul>
        {answersDisplay.map((answer) => (
          <div key={answer.answer_id}>
          <li key={answer.body}>A: {answer.body}</li>
          <p key={answer.answerer_name}>{answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')}
          <span key={answer.date}>
            Helpful?
            <button
            id={answer.answer_id} onClick={helpfulness} >Yes({answer.helpfulness || 0})
            </button> | Report
            </span></p>
          </div>
        ))}
        </ul>
        <div>
        {answers.length > 2 ? <LoadMoreAnswers
         handler={() => setDisplayAll(toggle(displayAll))} /> : <></>}
        <AddAnswer />
        </div>
      </div>
  );
};

export default Answers;

import React, { useState, useEffect } from 'react';
import LoadMoreAnswers from '../buttons/LoadMoreAnswers.jsx';
import AddAnswer from '../buttons/AddAnswerBtn.jsx';
import helpfulness from '../helpers/helpfulness';

const axios = require('axios');
const moment = require('moment');

const Answers = (questionIds) => {
  let answersDisplay;
  const [answers, setAnswers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayAll, setDisplayAll] = useState(false);

  useEffect(() => {
    axios.get(`/qa/questions/${questionIds.questionId}/answers`)
      .then((res) => {
        if (res.data.length > 0) {
          setAnswers(res.data);
          setIsLoaded(true);
        }
      })
      .then(() => {
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded || answers.length === 0) {
    return (
      <div>
       <AddAnswer />
      </div>
    );
  }

  const sortedAnswers = answers.slice();

  for (let i = 0; i < sortedAnswers.length; i += 1) {
    for (let j = 0; j < sortedAnswers.length; j += 1) {
      if (sortedAnswers[j].helpfulness < sortedAnswers[i].helpfulness) {
        const temp = sortedAnswers[i];
        sortedAnswers[i] = sortedAnswers[j];
        sortedAnswers[j] = temp;
      }
    }
  }

  const handleMoreAnswersClick = () => {
    if (!displayAll) setDisplayAll(true);
    if (displayAll) setDisplayAll(false);
  };

  if (!displayAll) answersDisplay = sortedAnswers.slice(0, 2);
  if (displayAll) answersDisplay = sortedAnswers.slice();

  if (isLoaded && answers.length > 0) {
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
        {answers.length > 2 ? <LoadMoreAnswers handler={handleMoreAnswersClick} /> : <></>}
        <AddAnswer />
        </div>
      </div>
    );
  }
  return 'es lint hates me';
};

export default Answers;

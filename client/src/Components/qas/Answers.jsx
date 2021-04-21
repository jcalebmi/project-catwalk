import React, { useState, useEffect } from 'react';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import AddAnswer from './AddAnswer.jsx';

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
          console.log(questionIds.questionId)
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

  const handleMoreAnswersClick = () => {
    if (!displayAll) setDisplayAll(true);
    if (displayAll) setDisplayAll(false);
  };

  if (!displayAll) answersDisplay = answers.slice(0, 2);
  if (displayAll) answersDisplay = answers.slice();

  if (isLoaded && answers.length > 0) {
    return (
      <div>
        <ul>
        {answersDisplay.map((answer) => (
          <div key={answer.answer_id}>
          <li key={answer.body}>A: {answer.body}</li>
          <p key={answer.answerer_name}>{answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')}
          <span key={answer.date}>Helpful? Yes({answer.helpfulness}) | Report</span></p>
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
};

export default Answers;

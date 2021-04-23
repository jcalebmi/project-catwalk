import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import QAsItems from './main/QAsItems.jsx';
import sortData from './helpers/sortData';
import axios from 'axios';

const getQuestions = (id = 19093) => (
  axios.get(`qa/questions/${id}`)
    .then((res) => (res.data))
    .catch((err) => {
      console.log('ERROR: ', err);
    })
);

const QAs = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [questions, setQuestions] = useState();
  if (!isLoaded) {
    getQuestions()
      .then((data) => {
        setQuestions(data);
        setLoaded(true);
      });
    return null;
  }

  // useEffect(() => {
  //   if (questions !== undefined) {
  //     sortData(questions, 'question_helpfulness', (sorted) => {
  //       questions = sorted;
  //     });
  //   }
  //   if (questions === undefined) {
  //     return (
  //       <div>Loading...</div>
  //     );
  //   }
  // });


  return (
    <div className="questions-and-answers">
      <QAsItems questions={questions} />
    </div>
  );
};

export default QAs;

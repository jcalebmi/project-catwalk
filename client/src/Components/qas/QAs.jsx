import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import QAsItems from './main/QAsItems.jsx';

const axios = require('axios');

const selectSingleProduct = (state) => state.product;

const QAs = () => {
  const [questions, setQuestions] = useState([]);
  const [questionsLoaded, setQuestionsLoaded] = useState(false);
  const product = useSelector(selectSingleProduct) || [];

  useEffect(() => {
    if (product.id !== undefined) {
      axios.get(`/qa/questions/${product.id}`)
        .then((res) => {
          setQuestions(res.data);
          setQuestionsLoaded(true);
        })
        .catch((err) => {
          throw err;
        });
    }
  });

  if (!questionsLoaded) {
    return (
      <div>Loading...</div>
    );
  }

  const sortedQuestions = questions.slice();

  for (let i = 0; i < sortedQuestions.length; i += 1) {
    for (let j = 0; j < sortedQuestions.length; j += 1) {
      if (sortedQuestions[j].question_helpfulness < sortedQuestions[i].question_helpfulness) {
        const temp = sortedQuestions[i];
        sortedQuestions[i] = sortedQuestions[j];
        sortedQuestions[j] = temp;
      }
    }
  }

  return (
    <div className="questions-and-answers">
      <QAsItems questions={sortedQuestions} />
    </div>
  );
};

export default QAs;

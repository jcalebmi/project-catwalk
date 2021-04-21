import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import QAsItems from './QAsItems.jsx';

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

  return (
    <div className="questions-and-answers">
      <QAsItems questions={questions} />
    </div>
  );
};

export default QAs;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import QAsItems from './main/QAsItems.jsx';
import { fetchQuestions } from './helpers/server-requests';
import sortData from './helpers/sortData';

const selectSingleProduct = (state) => state.product;

const QAs = () => {
  const [questions, setQuestions] = useState([]);
  const [questionsLoaded, setQuestionsLoaded] = useState(false);

  const product = useSelector(selectSingleProduct) || [];

  useEffect(() => {
    if (product.id !== undefined) {
      // fetch questions helper
      fetchQuestions(product.id, (results) => {
        // data sort helper
        sortData(results.data, 'question_helpfulness', (sorted) => {
          setQuestions(sorted);
          setQuestionsLoaded(true);
        });
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

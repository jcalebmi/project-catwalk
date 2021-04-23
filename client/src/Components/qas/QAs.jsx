import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import QAsItems from './main/QAsItems.jsx';
import sortData from './helpers/sortData';

const selectQuestions = (state) => state.questions;

const QAs = () => {
  let questions = useSelector(selectQuestions);

  useEffect(() => {
    if (questions !== undefined) {
      sortData(questions, 'question_helpfulness', (sorted) => {
        questions = sorted;
      });
    }
    if (questions === undefined) {
      return (
        <div>Loading...</div>
      );
    }
  });


  return (
    <div className="questions-and-answers">
      <QAsItems questions={questions} />
    </div>
  );
};

export default QAs;

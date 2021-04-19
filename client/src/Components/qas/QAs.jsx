import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import QAsSearch from './qasSearch';

const getQuestions = require('./helpers/getQuestions.js');
const getAnswers = require('./helpers/getAnswers.js');

const selectSingleProduct = (state) => state.product;

const QAs = () => {
  let productId;
  let [questionArray, setProductQuestions] = useState([]);
  let [answersArray, setProductAnswers] = useState([]);

  let product = useSelector(selectSingleProduct) || [];

  // callbacks for helper funcs
  const productQuestions = (questions) => {
    setProductQuestions(questions);
  }

  const productAnswers = (answers) => {
    return answers;
  }

  useEffect(() => {
    if (product !== null && product.id !== undefined) {
      productId = product.id;
      getQuestions(productId, productQuestions);
    }
  });

  let questionsDisplay = questionArray.slice(0, 4);


  return (
    <div>
      <div>
        <QAsSearch />
      </div>
      {questionsDisplay.map((question) => (
        <p key={question.question_id}>Q: {question.question_body} Helpful? <a href="">Yes({question.question_helpfulness})</a> | <a href="">Add Answer</a> <br />    </p>
      ))}
    </div>
  );
}

export default QAs;
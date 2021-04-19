import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import QAsSearch from './qasSearch';

const getQuestions = require('./helpers/getQuestions.js');
const getAnswers = require('./helpers/getAnswers.js');

const selectSingleProduct = (state) => state.product;

const QAs = () => {
  // product Id variable for later
  let productId;
  // state for questions & select current product
  let [questionArray, setProductQuestions] = useState([]);
  const product = useSelector(selectSingleProduct) || [];

  // callback for helper func
  const productQuestions = (questions) => {
    // fill state array
    setProductQuestions(questions);
  }
  // once component is rendered
  useEffect(() => {
    // only get products if request is finished
    if (product !== null && product.id !== undefined) {
      // set product Id
      productId = product.id;
      // invoke helper func with product id for get request
      getQuestions(productId, productQuestions);
    }
  });
  // only display the first 4 questions
  let questionsDisplay = questionArray.slice(0, 4);

  return (
    <div>
      <div>
        <QAsSearch />
      </div>
      {questionsDisplay.map((question) => (
        <p key={question.question_id}>Q: {question.question_body}</p>
      ))}
    </div>
  );
}

export default QAs;
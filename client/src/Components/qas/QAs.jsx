import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import QAsSearch from './QAsSearch.jsx';
import QAsItem from './QAsItem.jsx';

const getQuestions = require('./helpers/getQuestions.js');

const selectSingleProduct = (state) => state.product;

const QAs = () => {
  let productId;
  const [questionsArray, setProductQuestions] = useState([]);

  const product = useSelector(selectSingleProduct) || [];

  useEffect(() => {
    if (product !== null && product.id !== undefined) {
      productId = product.id;
      getQuestions(productId, (questions) => {
        setProductQuestions(questions);
      });
    }
  });

  return (
    <div>
      <div>
        <QAsSearch />
        <QAsItem props={questionsArray} />
      </div>
    </div>
  );
};

export default QAs;

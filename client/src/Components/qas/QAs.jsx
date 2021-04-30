import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import QAsItems from './main/QAsItems.jsx';
import AddQuestion from './buttons/AddQuestion.jsx';
import { fetchQuestions } from './helpers/server-requests';

const selectSingleProduct = (state) => state.product.product;

const QAs = () => {
  const [questions, setQuestions] = useState([]);
  const product = useSelector(selectSingleProduct) || [];

  useEffect(() => {
    fetchQuestions(product.id, (qs) => {
      setQuestions(qs.data);
    });
  }, []);

  return (
    <div id="q-as-container">
      <QAsItems questions={questions} />
      <AddQuestion />
    </div>
  );
};

export default QAs;

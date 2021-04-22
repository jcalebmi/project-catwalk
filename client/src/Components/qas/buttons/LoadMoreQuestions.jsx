import React from 'react';

const LoadMoreQuestions = (handler) => (
  <div>
    <button onClick={handler.onClickHandler}>LOAD MORE QUESTIONS</button>
  </div>
);

export default LoadMoreQuestions;

import React from 'react';

const LoadMoreQuestions = (handler) => (
  <div>
    <button onClick={handler.handleMore}>LOAD MORE QUESTIONS</button>
  </div>
);

export default LoadMoreQuestions;

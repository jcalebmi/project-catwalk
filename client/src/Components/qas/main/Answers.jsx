import React, { useState, useEffect, useRef } from 'react';
import LoadMoreAnswers from '../buttons/LoadMoreAnswers.jsx';
import AddAnswer from '../buttons/AddAnswerBtn.jsx';
import helpfulness from '../helpers/helpfulness';
import { fetchAnswers } from '../helpers/server-requests';
import sortData from '../helpers/sortData';
import reported from '../helpers/reported';

const moment = require('moment');

const Answers = ({ questionId, questionBody }) => {
  const [readyToRender, setReadyToRender] = useState([false, []]);
  const [display, updateDisplay] = useState([]);
  const pointer = useRef(2);

  useEffect(() => {
    fetchAnswers(questionId, (results) => {
      /** call to helper func that sorts data on component render */
      sortData(results, 'helpfulness', (sorted) => {
        setReadyToRender([true, sorted]);
        updateDisplay(sorted.slice(0, 2));
      });
    });
    /** component need only re-render if
      questions list has changed */
  }, [questionId]);

  const grabNext2 = (current) => {
    if (current === undefined) {
      return;
    }
    updateDisplay(readyToRender[1].slice(0, current + 2));
  };

  const loadMore = (e) => {
    if (e === undefined) {
      return;
    }
    if (e.target.innerHTML === 'COLLAPSE ANSWERS') {
      e.target.innerHTML = 'LOAD MORE ANSWERS';
      pointer.current = 0;
      grabNext2(pointer.current);
    }
    /** to be honest, I don't know why this works but
       * it was intended to be similar to array sort algos
       * using pointers */
    if (pointer.current + 2 >= readyToRender[1].length) {
      e.target.innerHTML = 'COLLAPSE ANSWERS';
    }
    grabNext2(pointer.current);
    pointer.current += 2;
  };

  return (
      <div className="answers">
        <ul>
        {display.map((answer) => (
          <div id="answers" key={answer.answer_id}>
          <li key={answer.body}>A: {answer.body}</li>
          <p key={answer.answerer_name}>{answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')}
          <span key={answer.date}>
            Helpful?
            <button
            id={answer.answer_id} onClick={helpfulness} >Yes({answer.helpfulness || 0})
            </button> | <button
             name={answer.answer_id} onClick={(e) => reported(e)()}>Report</button>
            </span></p>
          </div>
        ))}
        </ul>
        <div>
          {readyToRender[1].length > 2
            ? <LoadMoreAnswers onClick={loadMore} />
            : <></>}
        </div>
        <AddAnswer body={questionBody}/>
      </div>
  );
};

export default Answers;

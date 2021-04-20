import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const QAsItem = (props) => {
  const questions = [];
  const answers = [];
  const qasPair = [];

  props.props.map((question) => {
    qasPair.push({
      questionObj: question,
      answerObj: [...Object.values(question.answers).slice(0, 2)],
    });
    questions.push(question);
    answers.push(question.answers);
    return 'something for eslint';
  });

  const questionsDisplay = qasPair.slice(0, 4);

  return (
    <div>
      {questionsDisplay.map(
        (question) => (
          <div key={question.questionObj.asker_name}>
          <p className="bold" key={question.questionObj.question_id}>Q: {question.questionObj.question_body} <span> Helpful? Yes({question.questionObj.helpfulness || 0}) | Report </span></p>
        <ul>
          {question.answerObj.map((answer) => (
            <li key={answer.id}>A: {answer.body} <br />
            <p>{answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')} | Helpful? Yes({answer.helpfulness}) | Report </p></li>
          ))}
        </ul>
        </div>
        ),
      )}
    </div>
  );
};

QAsItem.propTypes = {
  props: PropTypes.array,
};

export default QAsItem;

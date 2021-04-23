import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import AddAnswerBtn from '../buttons/AddAnswerBtn.jsx';
import AddQuestion from '../buttons/AddQuestion.jsx';
import LoadMoreAnswers from '../buttons/LoadMoreAnswers.jsx';
import LoadMoreQuestions from '../buttons/LoadMoreQuestions.jsx';

describe('AddAnswerBtn', () => {
  it('should render a button', () => {

  });
  it('should toggle', () => {

  });

});

describe('AddQuestion', () => {
  // should call fetchanswers/sort data
  // answersdisplay should be an array
  // displayall should be a bool
});

describe('LoadMoreAnswers', () => {
  it('should render a button', () => {

  });
  it('should invoke a function when clicked', () => {

  });
  it('should toggle when clicked', () => {

  });
  it('should be hidden if there are no more answers', () => {

  });
});

describe('LoadMoreQuestions', () => {
  it('should render a button', () => {

  });
  it('should invoke a functino when clicked', () => {

  });
  it('should toggle when clicked', () => {

  });
  it('should be hidden if there are no more quesitons', () => {

  });
});

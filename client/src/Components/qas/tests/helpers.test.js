import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import Answers from '../main/Answers.jsx';

describe('helpfulness', () => {
  it('should be invoked on click', () => {

  });

  it('should find button by id', () => {

  });
  it('should disable button on click', () => {

  });
  it('should iterate the text el and find the number', () => {

  });
  it('should change the inner HTML of the button', () => {

  });
});

describe('toggle', () => {
  it('should be invoked', () => {

  });
  it('should return negated boolean value', () => {

  });
});


describe('server-requests', () => {

  describe('fetchQuestions', () => {
    it('should be invoked', () => {

    });
    it('should invoke a callback', () => {

    });
    it('should return a promise', () => {

    });
    it('should make a GET request', () => {

    });
    it('should catch errors', () => {

    });
  });

  describe('fetchAnswers', () => {
    it('should be invoked', () => {

    });
    it('should invoke a callback', () => {

    });
    it('should return a promise', () => {

    });
    it('should make a GET request', () => {

    });
    it('should catch errors', () => {

    });
  });

  describe('sortData', () => {
    it('should be invoked', () => {

    });
    it('should sort data from greatest to least', () => {

    });
    it('should accept an array, a sring and a callback', () => {

    })
    it('should invoke a callback on sorted data', () => {

    });

    });
});
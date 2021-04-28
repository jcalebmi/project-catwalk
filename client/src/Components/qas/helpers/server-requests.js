// get requests to server

const axios = require('axios');

// questions GET request
const fetchQuestions = (productId, callback) => {
  axios.get(`/qa/questions/${productId}`)
  .then((data) => {
      callback(data);
    })
    .catch((err) => {
      throw err;
    });
};

// answers GET request
const fetchAnswers = (questionId, callback) => {
  axios.get(`/qa/questions/${questionId}/answers`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      throw err;
    });
};

/** PUT REQUESTS */

// METHOD: PUT - Mark Question As Helpful
const updateQsHelpful = (id) => {
  axios.put(`/qa/questions/${id}/helpful`)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      throw err;
    });
};
// METHOD: PUT - Report Question
const reportQs = (id) => {
  axios.put(`/qa/questions/${id}/report`)
    .then(() => {
      'return';
    })
    .catch((err) => {
      throw err;
    });
};
// METHOD: PUT - Mark Answer As Helpful
const updateAsHelpful = (id) => {
  axios.put(`/qa/answers/${id}/helpful`)
    .then(() => {
      'return';
    })
    .catch((err) => {
      throw err;
    });
};
// METHOD: PUT - Report Answer
const reportAs = (id) => {
  axios.put(`/qa/answers/${id}/report`)
    .then(() => {
      'scold the answerer for being inapropriate';
    })
    .catch((err) => {
      throw err;
    });
};

/** POST REQUESTS */

// METHOD: POST - Add Question
const postQs = (data) => {
  axios.post('/qa/questions', data, { 'Content-type': 'application/json' })
    .then(() => {
      'return';
    })
    .catch((err) => {
      throw err;
    });
};
// METHOD: POST - Add Answer
const postAs = (id, data) => {
  axios.post(`/qa/questions/${id}/answers`, data, { 'Content-type': 'application/json' })
    .then(() => {
      'what do i need to put here';
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  fetchQuestions,
  fetchAnswers,
  updateQsHelpful,
  reportQs,
  updateAsHelpful,
  reportAs,
  postQs,
  postAs,
};

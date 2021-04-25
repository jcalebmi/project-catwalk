// get requests to server

const axios = require('axios');

// questions GET request
const fetchQuestions = (id, callbackQs) => {
  axios.get(`/qa/questions/${id}`)
    .then((data) => {
      callbackQs(data);
    })
    .catch((err) => {
      throw err;
    });
};

// answers GET request
const fetchAnswers = (id, callbackAs) => {
  axios.get(`/qa/questions/${id}/answers`)
    .then((res) => {
      if (res.data.length > 0) {
        callbackAs(res.data);
      }
    })
    .catch((err) => {
      throw err;
    });
};

/** PUT REQUESTS */

// METHOD: PUT - Mark Question As Helpful
const updateQsHelpful = (id) => {
  axios.put(`/qa/questions/${id}/helpful`)
    .then(() => {
      console.log('hai')
    })
    .catch((err) => {
      throw err;
    });
};
// METHOD: PUT - Report Question
const reportQs = (id) => {
  axios.put(`/qa/questions/${id}/report`)
    .then(() => {
      console.log('pls2');
    })
    .catch((err) => {
      throw err;
    });
};
// METHOD: PUT - Mark Answer As Helpful
const updateAsHelpful = (id) => {
  axios.put(`/qa/answers/${id}/helpful`)
    .then((res) => {
      console.log(res);
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
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
// METHOD: POST - Add Answer
const postAs = (id, data) => {
  axios.post(`/qa/questions/${id}/answers`, data, { 'Content-type': 'application/json' })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
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

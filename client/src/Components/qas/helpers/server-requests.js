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

module.exports = { fetchQuestions, fetchAnswers };

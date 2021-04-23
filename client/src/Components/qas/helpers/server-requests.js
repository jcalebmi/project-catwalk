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

// helpful Qs
const updateQsHelpful = (id) => {
  axios.put(`/qa/questions/${id}/helpful`)
    .then(() => {
      'do not break the code';
    })
    .catch((err) => {
      throw err;
    });
};
// reported Qs
const reportQs = (id) => {
  axios.put(`/qa/questions/:${id}/report`)
    .then(() => {
      'simply exist';
    })
    .catch((err) => {
      throw err;
    });
};
// helpful As
const updateAsHelpful = (id) => {
  axios.put(`/qa/answers/:${id}/helpful`)
    .then(() => {
      'wave your hands in the air';
    })
    .catch((err) => {
      throw err;
    });
};
// reported As
const reportAs = (id) => {
  axios.put(`/qa/answers/:${id}/report`)
    .then(() => {
      'scold the answerer for being inapropriate';
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
};

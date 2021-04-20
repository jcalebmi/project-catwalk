const axios = require('axios');

const getQuestions = (id, callbackQs) => {
  axios.get(`/qa/questions/${id}`)
    .then((res) => {
      callbackQs(res.data);
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = getQuestions;

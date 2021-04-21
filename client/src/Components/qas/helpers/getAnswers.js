const axios = require('axios');

const getAnswers = (id, callback) => {
  axios.get(`/qa/questions/${id}/answers`)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = getAnswers;

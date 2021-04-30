const axios = require('axios');
const apiToken = require('../myconfig.js');

const fetchAnswers = (id, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${id}/answers?count=100`, { headers: { authorization: apiToken } })
    .then((res) => {
      callback(res.data.results);
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = fetchAnswers;

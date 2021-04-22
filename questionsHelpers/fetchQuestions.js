const axios = require('axios');
const apiToken = require('../myconfig.js');

const fetchQuestions = (id, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${id}`, { headers: { authorization: apiToken } })
    .then((res) => {
      callback(null, res.data.results);
    })
    .catch((error) => {
      callback(error, error);
    });
};

module.exports = fetchQuestions;

const axios = require('axios');
const apiToken = require('../myconfig.js');

const fetchQuestions = (id, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${id}&count=100`, { headers: { authorization: apiToken } })
    .then((res) => {
      callback(res.data.results);
    })
    .catch((error) => {
      callback(error);
    });
};

module.exports = fetchQuestions;

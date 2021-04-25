const axios = require('axios');
const apiToken = require('../myconfig.js');

const postNewAnswers = (id, data) => {
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${id}/answers`, data, { headers: { authorization: apiToken, 'Content-Type': 'application/json' } })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = postNewAnswers;

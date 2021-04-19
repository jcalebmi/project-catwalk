const axios = require('axios');
const apiToken = require('../../../../../myconfig.js');

const getAnswers = (id) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${id}/answers`, {headers: {authorization: apiToken}})
    .then((res) => {
      return {
        id: res.data.results
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = getAnswers;
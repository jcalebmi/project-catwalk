const axios = require('axios');
const apiToken = require('../myconfig.js');

const putQuestionsHelpful = (id) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${id}/helpful`, { helpfulness: 'update' }, { headers: { authorization: apiToken } })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      throw err;
    });
};

const putQuestionsReported = (id) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${id}/report`, { report: 'update' }, { headers: { authorization: apiToken } })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = { putQuestionsHelpful, putQuestionsReported };

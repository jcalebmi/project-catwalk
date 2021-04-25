const axios = require('axios');
const apiToken = require('../myconfig.js');

const putAnswersHelpful = (id) => {
  console.log(id);
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${id}/helpful`, { helpfulness: 'update' }, { headers: { authorization: apiToken } })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      throw err;
    });
};

const putAnswersReported = (id) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${id}/report`, { report: 'update' }, { headers: { authorization: apiToken } })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = { putAnswersHelpful, putAnswersReported };

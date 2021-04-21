const axios = require('axios');
const apiToken = require('../myconfig.js');

//  GET reviews from API
const sendReport = function (id) {
  return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${id}/report`, { helpfulness: 'update' }, { headers: { authorization: apiToken } })
    .then((res) => {
      console.log('success');
      return res;
      })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

module.exports = sendReport;

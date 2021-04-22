const axios = require('axios');
const apiToken = require('../myconfig.js');

//  GET reviews from API
const sendReview = function (data) {
  return axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/`, data, { headers: {
    authorization: apiToken,
    'Content-type': 'multipart/form-data',
  } })
    .then((res) => {
      return res;
      })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

module.exports = sendReview;

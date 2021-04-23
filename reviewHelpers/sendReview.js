const axios = require('axios');
const apiToken = require('../myconfig.js');

//  GET reviews from API
const sendReview = function (data) {
  const info = JSON.stringify(data);
  console.log(info);

  return axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/`, info, { headers: {
    authorization: apiToken,
    'Content-Type': 'application/json',
  } })
    .then((res) => {
      console.log('success')
      return res;
      })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

module.exports = sendReview;

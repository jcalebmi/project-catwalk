const axios = require('axios');
const apiToken = require('../myconfig.js');

//GET reviews from API
const getReviews = function (id) {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${id}`, {headers: {authorization: apiToken}})
    .then((res) => {
      return res.data;
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
}


module.exports = getReviews;
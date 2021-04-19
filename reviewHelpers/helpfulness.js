const axios = require('axios');
const apiToken = require('../myconfig.js');

//GET reviews from API
const updateHelpful = function (id) {
  return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${id}/helpful`, {helpfulness: 'update'}, {headers: {authorization: apiToken}})
    .then((res) => {
      return res;
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
}


module.exports = updateHelpful;
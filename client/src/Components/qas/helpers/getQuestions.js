const axios = require('axios');
const apiToken = require('../../../../../myconfig.js');

const getQuestions = (id, cb) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${id}`, {headers: {authorization: apiToken}})
    .then((res) => {
      // return results
      cb(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = getQuestions;
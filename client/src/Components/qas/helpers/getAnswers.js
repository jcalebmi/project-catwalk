const axios = require('axios');
const apiToken = require('../../../../../myconfig.js');

const getAnswers = () => {
  axios.get()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = getAnswers;
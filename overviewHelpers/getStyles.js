const axios = require('axios');
const apiToken = require('../myconfig.js');

const getStyles = (id) => (
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`,
    { headers: { authorization: apiToken } })
    .then((res) => (res))
    .catch((err) => {
      console.log('ERROR: ', err);
    })
);

module.exports = getStyles;

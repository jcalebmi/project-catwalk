const axios = require('axios');
const apiToken = require('../myconfig.js');

// GET reviews from API
const getProduct = (id) => (
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`,
    { headers: { authorization: apiToken } })
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    })
);

module.exports = getProduct;

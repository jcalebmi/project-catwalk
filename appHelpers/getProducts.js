const axios = require('axios');
const apiToken = require('../myconfig.js');

//GET reviews from API
const getProducts = () => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products`,
   {headers: {authorization: apiToken}})
    .then((res) => {
      return res.data;
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
}


module.exports = getProducts;
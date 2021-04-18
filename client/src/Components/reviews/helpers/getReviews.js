const axios = require('axios');
import apiToken from '../../../../../myconfig.js';
import store from '../../../store/store.jsx';

//Get request to Catwalk Server
const getReviews = function (id, results) {
  return axios.get(`/reviews/${id}`)
    .then((res) => {
      results = res.data.results;
      return results;
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
}
export default getReviews;
const axios = require('axios');
import apiToken from '../../../../../myconfig.js';
import store from '../../../store/store.jsx';

//Get request to Catwalk Server
const getMeta = function (id, results) {
  return axios.get(`/reviews/meta/${id}`)
    .then((res) => {
      results = res.data;
      return results;
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
}
export default getMeta;
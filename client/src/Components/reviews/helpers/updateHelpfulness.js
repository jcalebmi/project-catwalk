const axios = require('axios');
import apiToken from '../../../../../myconfig.js';
import store from '../../../store/store.jsx';

//Get request to Catwalk Server
const updateHelpfulness = function (id) {
  return axios.put(`/reviews/${id}/helpful`)
    .then((res) => {
      return res;
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
}
export default updateHelpfulness;
const axios = require('axios');

//  Get request to Catwalk Server
const getMeta = function (id) {
  return axios.get(`/reviews/meta/${id}`)
    .then((res) => {
      const results = res.data;
      return results;
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};
export default getMeta;

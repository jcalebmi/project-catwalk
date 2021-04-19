const axios = require('axios');


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
const axios = require('axios');

//  Get request to Catwalk Server
const sendReport = function (id) {
  return axios.put(`/reviews/${id}/report`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};
export default sendReport;

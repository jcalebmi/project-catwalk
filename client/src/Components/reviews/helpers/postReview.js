const axios = require('axios');


//  Get request to Catwalk Server
const postReview = function (data) {
  return axios.post(`/reviews/`, data, { header: {'Content-type': 'multipart/form-data'} })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};
export default postReview;

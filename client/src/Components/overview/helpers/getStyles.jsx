import axios from 'axios';

// Get request to Catwalk Server
const getStyles = (id) => (
  axios.get(`/products/${id}/styles`)
    .then((res) => (
      res.data.results
    ))
    .catch((err) => {
      console.log('ERROR: ', err);
    })
);

export default getStyles;

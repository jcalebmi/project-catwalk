import axios from 'axios';

// Get request to Catwalk Server
const getStyles = (id) => (
  axios.get(`/styles/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    })
);

export default getStyles;

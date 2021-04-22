import axios from 'axios';
import store from '../../store/store.jsx';

// Get request to Catwalk Server
const getProduct = (id = 19093) => (
  axios.get(`/products/${id}`)
    .then((res) => (res.data))
    .catch((err) => {
      console.log('ERROR: ', err);
    })
);

const setProduct = (id) => {
  // console.log('in set product');
  return getProduct(id).then((data) => {
    store.dispatch({
      type: 'UPDATE_CURRENT_PRODUCT',
      payload: data,
    });
  });
};

export default setProduct;

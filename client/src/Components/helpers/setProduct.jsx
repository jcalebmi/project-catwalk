import axios from 'axios';
import store from '../../store/store.jsx';

// Get product from Catwalk Server
const getProduct = (id = 19093) => (
  axios.get(`/product/${id}`)
    .then((res) => (res.data))
    .catch((err) => {
      console.log('ERROR: ', err);
    })
);

const setProduct = (id) => (
  getProduct(id).then((data) => {
    store.dispatch({
      type: 'UPDATE_CURRENT_PRODUCT',
      product: data,
    });
  })
);

export default setProduct;

import axios from 'axios';
import store from '../../store/store.jsx';

//Get request to Catwalk Server
const getProducts = function (id) {
  return axios.get(`/products`)
    .then((res) => {
      return res.data;
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
};

const setProducts = () => {
  return getProducts().then(data => {
    store.dispatch({
      type: 'UPDATE_CURRENT_PRODUCT',
      payload: data[0]
    })
    store.dispatch({
      type: 'UPDATE_ALL_PRODUCTS',
      payload: data
    })
  })
};

export default setProducts;
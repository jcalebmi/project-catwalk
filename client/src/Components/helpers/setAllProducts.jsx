import axios from 'axios';
import store from '../../store/store.jsx';

// Get product from Catwalk Server
const getAllProducts = () => (
  axios.get('/products')
    .then((res) => (res.data))
    .catch((err) => {
      console.log('ERROR: ', err);
    })
);

const setAllProducts = (id) => (
  getAllProducts(id).then((data) => {
    store.dispatch({
      type: 'UPDATE_ALL_PRODUCTS',
      allProducts: data,
    });
  })
);

export default setAllProducts;

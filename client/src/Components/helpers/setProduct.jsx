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
      payload: data,
    });
  })
);

// const catwalkPromise = Promise.resolve(200);
// axios.all([
//   axios.get('products/19093'),
//   axios.get('qa/questions/19093'),
// ])
//   .then((responses) => {
//     const products = responses[0].data;
//     const questions = responses[1].data;
//     store.dispatch({
//       type: 'UPDATE_CURRENT_PRODUCT',
//       payload: products,
//     });
//     store.dispatch({
//       type: 'UPDATE_QUESTIONS',
//       payload: questions,
//     });
//     store.dispatch({
//       type: 'APP_LOADED',
//     });
//   });
// export { setProduct, setQuestions };

export default setProduct;

import axios from 'axios';
import store from '../../store/store.jsx';

const catwalkPromise = Promise.resolve(200);
axios.all([
  axios.get('products/19093'),
  axios.get('qa/questions/19093'),
])
  .then((responses) => {
    const products = responses[0].data;
    const questions = responses[1].data;
    store.dispatch({
      type: 'UPDATE_CURRENT_PRODUCT',
      payload: products,
    });
    store.dispatch({
      type: 'UPDATE_QUESTIONS',
      payload: questions,
    });
    store.dispatch({
      type: 'APP_LOADED',
    });
  });

// // Get request to Catwalk Server
// const getProduct = (id = 19093) => (
//   axios.get(`/products/${id}`)
//     .then((res) => (res.data))
//     .catch((err) => {
//       console.log('ERROR: ', err);
//     })
// );

// const setProduct = (id) => {
//   console.log('in set product');
//   // return getProduct(id).then((data) => {
//   //   store.dispatch({
//   //     type: 'UPDATE_CURRENT_PRODUCT',
//   //     payload: data,
//   //   });
//   // });
// };

// const setQuestions = (id = 19093) => {
//   // axios.get(`qa/questions/${id}`)
//   //   .then((res) => {
//   //     store.dispatch({
//   //       type: 'UPDATE_PRODUCT_QUESTIONS',
//   //       payload: res.data,
//   //     });
//   //   })
//   //   .catch((err) => {
//   //     console.log('ERROR_SET_QUESTIONS: ', err);
//   //   });
// };

export default { catwalkPromise };

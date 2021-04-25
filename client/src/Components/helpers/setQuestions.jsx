import axios from 'axios';
import store from '../../store/store.jsx';

// Get questions from Catwalk Server
const getQuestions = (id = 19098) => (
  axios.get(`qa/questions/${id}`)
    .then((res) => (res.data))
    .catch((err) => {
      console.log('ERROR: ', err);
    })
);

const setQuestions = (id) => (
  getQuestions(id).then((data) => {
    store.dispatch({
      type: 'UPDATE_QUESTIONS',
      payload: data,
    });
  })
);

export default getQuestions;

import React, { Component } from 'react';
/* The provider component makes the Redux store available to any nested
    components that need to access the store */
import { Provider } from 'react-redux';
import Count from './Count.jsx';
import store from '../store/store.jsx';
import Overview from '../components/overview/Overview.jsx'

const axios = require('axios');

class App extends Component {

  componentDidMount() {

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {headers: {authorization: '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'}})
    .then((res) => {
      console.log(res.data)
      store.dispatch({
          type: 'UPDATE_CURRENT_PRODUCT',
          payload: res.data[0]
        })
        store.dispatch({
          type: 'UPDATE_ALL_PRODUCTS',
          payload: res.data
        })
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  }

  render() {
    return (
      <Provider store={store}>
        <div>Catwalk</div>
        <Overview />
      </Provider>
    );
  }
}
// const App = () => (
//   <Provider store={store}>
//     <div>
//       <h1>Hello World </h1>
//       <Count />
//     </div>
//   </Provider>
// );

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <h1 onClick={() => { setCount(count + 1); }}>
//       Hello World #
//       {count}
//     </h1>
//   );
// }

export default App;

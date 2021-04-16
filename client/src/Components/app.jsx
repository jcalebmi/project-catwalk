import React from 'react';
/* The provider component makes the Redux store available to any nested
    components that need to access the store */
import { Provider } from 'react-redux';
import Count from './Count.jsx';
import store from '../store/store.jsx';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Hello World </h1>
      <Count />
    </div>
  </Provider>
);

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

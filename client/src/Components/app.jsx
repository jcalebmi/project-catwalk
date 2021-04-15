import React from 'react';
import ReactDOM from 'react-dom';
import Count from './Count.jsx';
import CountContainer from '../containers/CountContainer';

const App = () => (
  <div>
    <h1>Hello World </h1>
    <Count />
  </div>
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

ReactDOM.render(<App />, document.getElementById('app'));

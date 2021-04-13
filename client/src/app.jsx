import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [count, setCount] = useState(0);
  return (
    <h1 onClick={() => { setCount(count + 1); }}>
      Hello World #
      {count}
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

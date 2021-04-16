import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [count, setCount] = useState(1);
  let i = 0;
  let worlds = [];
  for(i = 0; i < count; i++) {
    worlds.push(
    <h1 key={i} onClick={() => { setCount(count + 1); }}>
    Hello World # {i}
    </h1>);
  }
  return (
    <div>
      {worlds}
    </div>
  )
}

export default App;

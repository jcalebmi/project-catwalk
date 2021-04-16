import React, { useState } from 'react';

function Test() {
  const [count, setCount] = useState(1);
  let i = 0;
  const worlds = [];
  for (i = 0; i < count; i += 1) {
    worlds.push(
    <h1 key={i} onClick={() => { setCount(count + 1); }}>
    Hello World # {i}
    </h1>,
    );
  }
  return (
    <div>
      {worlds}
    </div>
  );
}

export default Test;

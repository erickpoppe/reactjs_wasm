// src/App.js

import React, { useState } from 'react';
import { add } from '../../pkg/reactjs_wasm.js';

function App() {
  const [result, setResult] = useState(0);

  const handleClick = () => {
    const a = 2;
    const b = 3;
    const res = add(a, b);
    setResult(res);
  };

  return (
    <div>
      <h1>React + WebAssembly Example</h1>
      <button onClick={handleClick}>Add 2 + 3</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './counter.css'
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
//style={{ textAlign: 'center', marginTop: '50px' }

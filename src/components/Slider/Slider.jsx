import React, { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(50);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Slider Value: {value}</h1>
      <input type="range" min="0" max="100" value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
};

export default Slider;

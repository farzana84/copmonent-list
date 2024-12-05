import React, { useState } from 'react';

const ColorChanger = () => {
  const [color, setColor] = useState('#fff');

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: color, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default ColorChanger;

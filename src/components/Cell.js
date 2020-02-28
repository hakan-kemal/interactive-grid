import React from 'react';

function Cell(props) {
  const { onClick, count, lightsUp } = props;

  return (
    <div className='Cell' style={lightsUp}>
      <button onClick={onClick}>Click</button>
      <p>{count}</p>
    </div>
  );
}

export default Cell;

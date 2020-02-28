// import React, { useState } from 'react';
import React from 'react';

function Cell(props) {
  const { onClick, count, highlight } = props;

  //   const [color, setColor] = useState(false);
  //           setColor(true);

  return (
    <div className={highlight ? 'CellOne' : 'CellTwo'}>
      <button onClick={onClick}>Click</button>
      <p>{count}</p>
    </div>
  );
}

export default Cell;

/* <div className={`Cell ${color ? 'Yellow' : ''}`}></div> */

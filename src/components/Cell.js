// import React, { useState } from 'react';
import React from 'react';

function Cell(props) {
  const { onClick, count, flashCell } = props;

  //   const [color, setColor] = useState(false);
  //           setColor(true);

  return (
    <div onClick={onClick} className={flashCell ? 'CellOne' : 'CellTwo'}>
      <p>{count}</p>
    </div>
  );
}

export default Cell;

/* <div className={`Cell ${color ? 'Yellow' : ''}`}></div> */

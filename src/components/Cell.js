import React from 'react';

function Cell(props) {
  const { onClick, count, flashCell } = props;

  return (
    <div onClick={onClick} className={flashCell ? 'CellOne' : 'CellTwo'}>
      <p>{count}</p>
    </div>
  );
}

export default Cell;

// import React from 'react';

// export default function Cell(props) {
//   const { onClick, cells, flashCells } = props;

//   return (
//     <div>
//       {cells.map((cell, index) => (
//         <div onClick={onClick} className={flashCells[index] ? 'CellOne' : 'CellTwo'} key={index}>
//           <p>{cell}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

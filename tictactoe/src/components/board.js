import Square from "./square";

export default function Board({ xIsNext, squares, onPlay, moveCount }) {
  const sqRows = Array(9).fill(null);
  let winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = winner + " is Winner!!";
  } else if (moveCount === 9 && winner === null) {
    status = "Draw";
  } else {
    status = "Current Move: " + (xIsNext ? "X" : "O");
  }

  function handleUserInput(index, i, j) {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    //Slice() Returns the original array
    let newBoard = squares.slice();
    newBoard[index] = xIsNext ? "X" : "O";
    onPlay(newBoard, i, j);
  }

  for (let i = 0; i < 3; i++) {
    const sqCols = [];
    for (let j = 0; j < 3; j++) {
      const currentIndex = i * 3 + j;
      sqCols.push(
        <Square
          key={currentIndex}
          value={squares[currentIndex]}
          handleClick={() => handleUserInput(currentIndex, i, j)}
        />
      );
    }
    sqRows.push(
      <div key={i} className="row">
        {sqCols}
      </div>
    );
  }

  return (
    <>
      <div className="move">{status}</div>
      {sqRows}
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    //Using && in the begining to check whether its null or not
    //If null, then no need to check the remaining values
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

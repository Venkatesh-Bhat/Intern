import { useState } from "react";
import Board from "./board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [rowCols, setRowCols] = useState([]);

  function handlePlay(newBoard, row, col) {
    const nextHistory = [...history.slice(0, currentMove + 1), newBoard];
    setHistory(nextHistory);
    console.log(nextHistory);
    const newRowCols = [
      ...rowCols.slice(0, currentMove),
      `(${row + 1} , ${col + 1})`,
    ];
    console.log(newRowCols);
    setRowCols(newRowCols);
    // setRowCols((prevRowCols) => [
    //   ...prevRowCols.slice(0, currentMove + 1),
    //   `(${row + 1}, ${col + 1})`,
    // ]);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    // let description =
    //   move > 0 ? `Go to move #${move} ${rowCols[move]}` : "Go to start game";
    let description = `Go to move #${move + 1} ${rowCols[move]}`;
    return (
      <li key={move}>
        {move === currentMove ? (
          `You are at move #${move + 1}`
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setRowCols([]);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          moveCount={currentMove}
        />
        <button onClick={resetGame}>Reset</button>
      </div>
      <div className="game-info">
        <header>History</header>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

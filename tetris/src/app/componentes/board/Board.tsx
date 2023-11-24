import Cell from "../cell/Cell";

export enum Block {
  R = "R",
  C = "C",
  P = "P",
  V = "V",
}

export type cellOptions = Block;

interface Props {
  currentBoard: cellOptions[][];
}

function Board({ currentBoard }: Props) {
  return (
    <div className="d-flex flex-column board">
      {currentBoard.map((row, rowIndex) => (
        <div className="d-flex flex-row" key={`row${rowIndex}`}>
          {row.map((cell, colIndex) => (
            <Cell type={cell} key={`cell${rowIndex}-${colIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;

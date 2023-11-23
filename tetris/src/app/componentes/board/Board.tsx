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
    <div>
      {currentBoard.map((row, rowIndex) => (
        <div className="row" key={`${rowIndex}`}>
          {row.map((cell, colIndex) => (
            <Cell type={cell} key={`${rowIndex}-${colIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;

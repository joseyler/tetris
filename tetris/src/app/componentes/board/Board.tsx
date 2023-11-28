import { Block } from "@/app/model/Block";
import Cell from "../cell/Cell";

interface Props {
  currentBoard: Block[][];
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

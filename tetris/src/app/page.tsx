import Board, { Block } from "./componentes/board/Board";

const board = Array(20)
  .fill(null)
  .map(() => Array(12).fill(Block.R));

export default function Home() {
  return (
    <main>
      <h1>Tetris</h1>
      <Board currentBoard={board} />
    </main>
  );
}

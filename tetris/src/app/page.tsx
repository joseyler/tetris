"use client"
import { useEffect, useState } from 'react';
import Board, { Block } from "./componentes/board/Board";

export default function Home() {

  const [board, setBoard] = useState(Array(20).fill(null).map(() => Array(12).fill(Block.V)));
  const [intervaloTablero, setIntervaloTablero] = useState<any>(null);

  const dibujarTablero = () => {
    if (board[5][1] == Block.C) {
      board[5][1] = Block.V;
    } else {
      board[5][1] = Block.C;
    }
    setBoard([...board]);
  }

  useEffect(() => {
    const intervaloTablero = setInterval(() => {
      dibujarTablero();
    }, 1000);
    setIntervaloTablero(intervaloTablero);
  }, []);

  return (
    <main>
      <h1>Tetris</h1>
      <div className="d-flex flex-row justify-content-center">
        <Board currentBoard={board} />
      </div>
    </main>
  );
}

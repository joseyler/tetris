"use client"
import { useEffect, useState } from 'react';
import Board from "./componentes/board/Board";
import { Juego } from './model/Juego';
import { Block } from './model/Block';


export default function Home() {

  const [board, setBoard] = useState(Array(20).fill(null).map(() => Array(12).fill(Block.V)));
  const [intervaloTablero, setIntervaloTablero] = useState<any>(null);
  const juego: Juego = new Juego(0, board)

  const iniciarJuego = () => {
    const newBoard = juego.iniciar();
    setBoard([...newBoard]);
  }

  const timeoutSegundo = () => {
    const newBoard = juego.timeoutSegundo();
    setBoard([...newBoard]);
  }

  useEffect(() => {
    const intervaloTablero = setInterval(() => {
      timeoutSegundo();
    }, 1000);
    setIntervaloTablero(intervaloTablero);
    iniciarJuego();
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

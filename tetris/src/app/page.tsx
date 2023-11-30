"use client";
import { useEffect, useState } from "react";
import Board from "./componentes/board/Board";
import { Block } from "./model/Block";
import { Juego } from "./model/Juego";

export default function Home() {
  const [board, setBoard] = useState(
    Array(20)
      .fill(null)
      .map(() => Array(12).fill(Block.V))
  );
  const [intervaloTablero, setIntervaloTablero] = useState<any>(null);
  const juego: Juego = new Juego(0, board);
  /*   const [juegoTerminado, setJuegoTerminado] = useState<Boolean>(false); */

  const iniciarJuego = () => {
    const newBoard = juego.iniciar();
    setBoard([...newBoard]);
  };

  const teclaPresionada = (e: Event) => {
    console.log(e.key);
    switch (e.key) {
      case "ArrowUp":
        const newBoard = juego.rotarFicha();
        setBoard([...newBoard]);
        break;

      case "ArrowDown":
        const newBoardDown = juego.bajarFicha();
        setBoard([...newBoardDown]);
        break;
      case "ArrowLeft":
        const newBoardDownLeft = juego.moverFicha("izq");
        setBoard([...newBoardDownLeft]);
        break;
      case "ArrowRight":
        const newBoardDownRight = juego.moverFicha("der");
        setBoard([...newBoardDownRight]);
        break;
      default:
        break;
    }
  };

  const timeoutSegundo = () => {
    const newBoard = juego.timeoutSegundo(/* setJuegoTerminado */);
    setBoard([...newBoard]);
  };

  useEffect(() => {
    window.addEventListener("keyup", teclaPresionada);
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

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
  const [juegoIniciado, setJuegoIniciado] = useState<boolean>(false);
  const [juegoFinalizado, setJuegoFinalizado] = useState<boolean>(false);
  const [puntuacion, setPuntuacion] = useState<number>(0);

  const actualizarTablero = (tablero: Block[][], puntos:number) => {
    setBoard([...tablero]);
    setPuntuacion(puntos);
  }

  const finJuego = (puntos:number) => {
    setJuegoFinalizado(true);
    setPuntuacion(puntos);
  }

  const juego: Juego = new Juego(0, board, actualizarTablero, finJuego);

  const iniciarJuego = () => {

    juego.iniciar();
    setJuegoIniciado(true);
  };

  const teclaPresionada = (e: Event) => {
    console.log(e.key);
    switch (e.key) {
      case "ArrowUp":
        juego.rotarFicha();
        break;
      case "ArrowDown":
        juego.bajarFicha();
        break;
      case "ArrowLeft":
        juego.moverFicha("izq");
        break;
      case "ArrowRight":
        juego.moverFicha("der");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // se ejecuta despues del primer render
    window.addEventListener("keyup", teclaPresionada);

    // la funcion retornada se ejecuta cuando se deja de usar el componente
    return () => {
      // libero al DOM de un listener que no va a estar mas presente
      window.removeEventListener("keyup", teclaPresionada);
    }
  }, []);

  return (
    <main>
      <div className="d-flex flex-row justify-content-center">
        <h1>Tetris</h1>
        </div>
      <div className="d-flex flex-row justify-content-center">
        <Board currentBoard={board} />
      </div>
      {juegoFinalizado && (
        <div className="d-flex flex-row justify-content-center mt-3">
        <h1>Perdiste!!</h1>
      </div>
      )}
      {!juegoIniciado && (
        <div className="d-flex flex-row justify-content-center mt-3">
          <button type="button" className="btn btn-info" onClick={() => iniciarJuego()}>
            Iniciar Juego!
          </button>
        </div>
      )}
      {juegoIniciado && (
        <div className="d-flex flex-row justify-content-center mt-3">
          <label>Puntuacion actual:</label><span>{puntuacion}</span>
        </div>
      )}
    </main>
  );
}

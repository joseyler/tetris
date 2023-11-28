import { Block } from "../Block";
import { Ficha } from "./Ficha";
import { Posicion } from "./Posicion";

export class FichaCuadrado extends Ficha {
  
  constructor(posicion: Posicion) {
    const estructuraCuadrado = [[true,true],[true,true]];
    super(posicion, estructuraCuadrado, Block.C);
  }

  public puedeDibujarFicha(unaPosicion: Posicion, tablero: Block[][]): boolean {
    throw new Error("Method not implemented.");
  }
  public dibujarColorFicha(tablero: Block[][], bloque: Block): Block[][] {
    throw new Error("Method not implemented.");
  }
}
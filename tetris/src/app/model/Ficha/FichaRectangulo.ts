import { Block } from "../Block";
import { Ficha } from "./Ficha";
import { Posicion } from "./Posicion";

export class FichaRectangulo extends Ficha {
  
  private orientacion = 'horizontal';

  constructor(posicion: Posicion) {
    const estructuraCuadrado = [[true,true,true],[true,true,true]];
    super(posicion, estructuraCuadrado, Block.R);
  }

  public puedeDibujarFicha(unaPosicion: Posicion, tablero: Block[][]): boolean {
    throw new Error("Method not implemented.");
  }
  public dibujarColorFicha(tablero: Block[][], bloque: Block): Block[][] {
    throw new Error("Method not implemented.");
  }
}
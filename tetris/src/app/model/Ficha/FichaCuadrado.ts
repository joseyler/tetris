import { Block } from "../Block";
import { Ficha } from "./Ficha";
import { Posicion } from "./Posicion";

export class FichaCuadrado extends Ficha {
  
  constructor(posicion: Posicion) {
    const estructuraCuadrado = [[true,true],[true,true]];
    super(posicion, estructuraCuadrado, Block.C);
  }

  public puedeDibujarFicha(unaPosicion: Posicion, tablero: Block[][]): boolean {
    return unaPosicion.getX() >= 0 
        && unaPosicion.getX() + 1 < tablero[0].length
        && unaPosicion.getY() >= 0 
        && unaPosicion.getY() + 1 < tablero.length
        && tablero[unaPosicion.getY()][unaPosicion.getX()] == Block.V
        && tablero[unaPosicion.getY()][unaPosicion.getX() + 1] == Block.V
        && tablero[unaPosicion.getY() + 1][unaPosicion.getX()] == Block.V
        && tablero[unaPosicion.getY() + 1][unaPosicion.getX() + 1] == Block.V
  }
  
  public dibujarColorFicha(tablero: Block[][], bloque: Block): Block[][] {
    tablero[this.posicion.getY()][this.posicion.getX()] = bloque;
    tablero[this.posicion.getY()][this.posicion.getX() + 1] = bloque;
    tablero[this.posicion.getY() + 1][this.posicion.getX()] = bloque;
    tablero[this.posicion.getY() + 1][this.posicion.getX() + 1] = bloque;
    return tablero;
  }
}
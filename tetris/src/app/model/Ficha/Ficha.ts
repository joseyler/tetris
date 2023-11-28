import { Block } from "../Block";
import { Posicion } from "./Posicion";

export abstract class Ficha {
  
  
  posicion: Posicion;
  estructura: boolean[][];
  private bloque: Block;

  constructor(posicion: Posicion, estructura: boolean[][], bloque: Block) {
    this.posicion = posicion;
    this.estructura = estructura;
    this.bloque = bloque;
  }

  getPosicion(): Posicion {
    return this.posicion;
  }

  public abstract puedeDibujarFicha(unaPosicion: Posicion, tablero:Block[][]):boolean;

  public abstract dibujarColorFicha(tablero:Block[][], bloque: Block):Block[][];

  public dibujarFicha(tablero:Block[][]):Block[][] {
    return this.dibujarColorFicha(tablero, this.bloque);
  }

  public borrarFicha(tablero: Block[][]):Block[][] {
    return this.dibujarColorFicha(tablero, Block.V);
  }

}
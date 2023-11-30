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

/*   public MoverFichaIzq(tablero:Block[][], bloque: Block):Block[][] {
    //la muevo
    pregunto si la puedo dibujar 
    si puedo dibujo 
    sino no
    devuelvo tablero

  } */

  public abstract rotarFicha():void;


  public dibujarFicha(tablero:Block[][]):Block[][] {
    return this.dibujarColorFicha(tablero, this.bloque);
  }

  public borrarFicha(tablero: Block[][]):Block[][] {
    return this.dibujarColorFicha(tablero, Block.V);
  }

}
import { Block } from "./Block";
import { Ficha } from "./Ficha/Ficha";
import { Posicion } from "./Ficha/Posicion";
import { ProveedorFicha } from "./Ficha/ProveedorFicha";

export class Juego {
  
  
  private estado: number;
  private dificultad:number;
  private proveedorFicha: ProveedorFicha;
  private tablero: Block[][];
  private fichaActiva: Ficha;

  constructor(dificultad: number, tablero: Block[][]) {
    this.dificultad = dificultad;
    this.proveedorFicha = new ProveedorFicha(this.dificultad);
    this.estado = -1;
    this.tablero = tablero;
    this.fichaActiva = this.proveedorFicha.getFicha();
  }

  iniciar():Block[][] {
    this.estado = 0;
    if (this.fichaActiva.puedeDibujarFicha(this.fichaActiva.getPosicion(), this.tablero)) {
      return this.fichaActiva.dibujarFicha(this.tablero);
    }
    return this.tablero;
  }

  timeoutSegundo():Block[][] {
    const newPosicion = new Posicion(this.fichaActiva.getPosicion().getX(), this.fichaActiva.getPosicion().getY() + 1);
    if (this.fichaActiva.puedeDibujarFicha(newPosicion, this.tablero)) {
      this.fichaActiva.borrarFicha(this.tablero);
      this.fichaActiva.getPosicion().setY(this.fichaActiva.getPosicion().getY() + 1);
      this.fichaActiva.dibujarFicha(this.tablero);
    } else {
      this.fichaActiva = this.proveedorFicha.getFicha();
      this.fichaActiva.dibujarFicha(this.tablero);
    }
    return this.tablero;
  }


}
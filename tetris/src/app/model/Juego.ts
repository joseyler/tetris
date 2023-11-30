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
  private puntosActuales:number = 0;
  private actualizarTablero:Function;
  private finalizarJuego:Function;
  private interval:any;

  constructor(dificultad: number, tablero: Block[][], actualizarTablero: Function,finalizarJuego: Function ) {
    this.dificultad = dificultad;
    this.proveedorFicha = new ProveedorFicha(this.dificultad);
    this.estado = -1;
    this.tablero = tablero;
    this.fichaActiva = this.proveedorFicha.getFicha();
    this.actualizarTablero = actualizarTablero;
    this.finalizarJuego = finalizarJuego;
  }

  iniciarTimeout = ():void => {
    const intervaloTablero = setInterval(() => {
      this.timeoutSegundo();
    }, 1000);
    this.interval = intervaloTablero;
  }

  iniciar():void {
    this.puntosActuales = 0;
    if (this.fichaActiva.puedeDibujarFicha(this.fichaActiva.getPosicion(), this.tablero)) {
      this.fichaActiva.dibujarFicha(this.tablero);
    }
    this.iniciarTimeout();
    this.actualizarTablero(this.tablero, this.puntosActuales);
  }

  timeoutSegundo(/* setJuegoTerminado :any */):void {
    this.fichaActiva.borrarFicha(this.tablero);
    const newPosicion = new Posicion(this.fichaActiva.getPosicion().getX(), this.fichaActiva.getPosicion().getY() + 1);
    if (this.fichaActiva.puedeDibujarFicha(newPosicion, this.tablero)) {
      this.fichaActiva.getPosicion().setY(this.fichaActiva.getPosicion().getY() + 1);
      this.fichaActiva.dibujarFicha(this.tablero);
      this.actualizarTablero(this.tablero, this.puntosActuales);
    } else {
      if (this.fichaActiva.getPosicion().getY() == 0) {
        clearTimeout(this.interval);
        this.finalizarJuego(this.puntosActuales);
      } else {
        this.fichaActiva.dibujarFicha(this.tablero);
        setTimeout(() => {
          this.evaluarEstadoTablero();
        }, 200);
        this.fichaActiva = this.proveedorFicha.getFicha();
        this.fichaActiva.dibujarFicha(this.tablero);
        this.actualizarTablero(this.tablero, this.puntosActuales);
      }
    }
  }

  rotarFicha():void{
    this.fichaActiva.borrarFicha(this.tablero);
    this.fichaActiva.rotarFicha();
    if(this.fichaActiva.puedeDibujarFicha(this.fichaActiva.getPosicion(), this.tablero)){
      this.fichaActiva.dibujarFicha(this.tablero);
      this.actualizarTablero(this.tablero, this.puntosActuales);
    }
    else{
      this.fichaActiva.rotarFicha();
      this.fichaActiva.dibujarFicha(this.tablero);
      this.actualizarTablero(this.tablero, this.puntosActuales);
    }
  }

  bajarFicha():void {
    this.fichaActiva.borrarFicha(this.tablero);
    let newPosicion = new Posicion(this.fichaActiva.getPosicion().getX(), this.fichaActiva.getPosicion().getY() + 1);
    while (this.fichaActiva.puedeDibujarFicha(newPosicion, this.tablero)) {
      this.fichaActiva.getPosicion().setY(this.fichaActiva.getPosicion().getY() + 1);
      newPosicion = new Posicion(this.fichaActiva.getPosicion().getX(), this.fichaActiva.getPosicion().getY() + 1);
    }
    this.fichaActiva.dibujarFicha(this.tablero);
    this.actualizarTablero(this.tablero, this.puntosActuales);
    clearInterval(this.interval);
    setTimeout(() => {
      this.evaluarEstadoTablero();
      this.actualizarTablero(this.tablero, this.puntosActuales);
      this.iniciarTimeout();
    }, 200);
  }

  moverFicha(lado:string):void {
    this.fichaActiva.borrarFicha(this.tablero);
    const currentX = this.fichaActiva.getPosicion().getX();
    this.fichaActiva.getPosicion().setX(currentX+(lado == 'izq' ? -1 : 1));
    if(this.fichaActiva.puedeDibujarFicha(this.fichaActiva.getPosicion(), this.tablero)){
      this.fichaActiva.dibujarFicha(this.tablero);
    }else {
      this.fichaActiva.getPosicion().setX(currentX);
      this.fichaActiva.dibujarFicha(this.tablero);
    }
    this.actualizarTablero(this.tablero, this.puntosActuales);
  }

  evaluarEstadoTablero(): void {
    const newTablero = this.tablero.filter((fila) => fila.findIndex((celda) => celda == Block.V) >= 0);
    const cantidadEliminadas = this.tablero.length - newTablero.length;
    if (cantidadEliminadas == 0) {
      return;
    } else {
      this.puntosActuales += 12 * cantidadEliminadas;
      const arregloCompletar = [];
      for (let index = 0; index < cantidadEliminadas; index++) {
        arregloCompletar.push(Array(12).fill(Block.V))
      }
      this.tablero = [...arregloCompletar, ...newTablero];
      this.fichaActiva = this.proveedorFicha.getFicha();
      this.actualizarTablero(this.tablero, this.puntosActuales);
    }
  }

}
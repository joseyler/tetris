import { FactoryFicha } from "./FactoryFicha";
import { Ficha } from "./Ficha";
import { FichaBarra } from "./FichaBarra";
import { FichaCuadrado } from "./FichaCuadrado";
import { FichaRectangulo } from "./FichaRectangulo";
import { Posicion } from "./Posicion";

export  class FactoryAleatorioFicha implements FactoryFicha {
  
  crearFicha(): Ficha {
    const fichaIndex = Math.floor(Math.random() * 3);
    switch (fichaIndex) {
      //  case 0: return new FichaCuadrado(new Posicion(0, 0));
      // case 1: return new FichaRectangulo(new Posicion(0, 0));
      default: return new FichaBarra(new Posicion(0, 0));
    }
  }
  
}
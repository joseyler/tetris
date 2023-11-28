import { FactoryAleatorioFicha } from "./FactoryAleatorioFicha";
import { FactoryFicha } from "./FactoryFicha";
import { Ficha } from "./Ficha";

export class ProveedorFicha {
  factory: FactoryFicha = new FactoryAleatorioFicha();

  constructor(dificultad:number) {
    if (dificultad == 0) {
      this.factory = new FactoryAleatorioFicha();
    } else {
      //tomar otra implementacion dada la dificultad
      this.factory = new FactoryAleatorioFicha();
    }
  }

  getFicha():Ficha {
    return this.factory.crearFicha();
  }
}
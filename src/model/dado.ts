import { NUMERO_FACCE_PREDEFINITO } from "./vars";

export class Dado {
  private readonly facce: number;

  private generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  constructor(numeroFacce: number = NUMERO_FACCE_PREDEFINITO) {
    this.facce = numeroFacce;
  }

  lancia() {
    return this.generaNumeroCasuale(1, this.facce);
  }
}

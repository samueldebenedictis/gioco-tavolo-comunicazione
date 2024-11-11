export class Casella {
  testo: string;
  numero: number;
  constructor(numeroCasella: number, testoCasella: string) {
    this.testo = testoCasella;
    this.numero = numeroCasella;
  }
}

export class CasellaSpeciale extends Casella {
  isSpeciale: boolean;
  constructor(numeroCasella: number, testoCasella: string) {
    super(numeroCasella, testoCasella);
    this.isSpeciale = true;
  }
}

export class CasellaQuiz extends CasellaSpeciale {
  quiz: string;
  constructor(numeroCasella: number, testoCasella: string) {
    super(numeroCasella, testoCasella);
    this.quiz = "Domanda";
  }
}

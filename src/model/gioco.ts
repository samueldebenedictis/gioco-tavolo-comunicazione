import { Casella, CasellaSpeciale } from "./casella";
import { Dado } from "./dado";
import { Errori } from "./errori";
import {
  NUMERO_CASELLE_PREDEFINITO,
  NUMERO_GIOCATORI_MASSIMO,
  NUMERO_GIOCATORI_MINIMO,
  NuovaLinea,
  separatore,
} from "./vars";

export class Giocatore {
  readonly nome: string;
  readonly id: number;
  constructor(nomeGiocatore: string, idGiocatore: number) {
    this.nome = nomeGiocatore;
    this.id = idGiocatore;
  }
}

export class Gioco {
  // dichiarazioni errori numeri giocatori

  giocatori: Giocatore[];
  tabellone: Casella[]; // le caselle saranno casuali
  numeroGiocatori: number;
  dado: Dado = new Dado();
  posizioneGiocatori: {
    giocatore: Giocatore;
    posizione: number;
  }[];

  giocatoreHaVinto(id: number): boolean {
    // un giocatore ha vinto se arriva sulla casella finale o la supera
    const posizione = this.posizioneGiocatori.find(
      (p) => p.giocatore.id === id,
    );
    if (posizione!.posizione >= this.tabellone.length) {
      return true;
    }

    return false;
  }

  giocoFinito(): boolean {
    const idGiocatori = this.giocatori.map((g) => g.id);
    let risultato = true;
    for (const idSingolo of idGiocatori) {
      if (!this.giocatoreHaVinto(idSingolo)) {
        risultato = false;
      }
    }
    return risultato;
  }

  constructor(
    nomiGiocatori: string[],
    numeroCaselle: number = NUMERO_CASELLE_PREDEFINITO,
  ) {
    // Inizializza l'array dei giocatori con i nomi forniti

    this.giocatori = nomiGiocatori.map(
      (nome, index) => new Giocatore(nome, index),
    );
    this.numeroGiocatori = this.giocatori.length;

    if (this.numeroGiocatori > NUMERO_GIOCATORI_MASSIMO) {
      throw Errori.erroreGiocatoriMassimo;
    }
    if (this.numeroGiocatori < NUMERO_GIOCATORI_MINIMO) {
      throw Errori.erroreGiocatoriMinimo;
    }

    const temp: Casella[] = [];

    // Creazione numero caselle da 1 fino al numero richiesto
    for (let index = 1; index <= numeroCaselle; index++) {
      let casellaTemp: Casella;

      if (Math.random() > 0.9) {
        casellaTemp = new CasellaSpeciale(
          index,
          `Questa è la casella speciale numero ${index}`,
        );
      } else {
        casellaTemp = new Casella(index, `Questa è la casella numero ${index}`);
      }
      // if (random) {
      // creo casella quiz
      // }
      temp.push(casellaTemp);
    }

    this.tabellone = temp;

    this.posizioneGiocatori = this.giocatori.map((g) => {
      return { giocatore: g, posizione: 1 };
    });
  }

  printInformazioniGioco() {
    console.log("--- INFORMAZIONI GIOCO ---");
    console.log(`Numero giocatori: ${this.numeroGiocatori}`);

    console.log(NuovaLinea);
    console.log(separatore);

    this.giocatori.forEach((giocatore, index) => {
      console.log(`Nome Giocatore ${index + 1}: ${giocatore.nome}`);
    });

    console.log(separatore);
    console.log(NuovaLinea);

    console.log(`Numero caselle: ${this.tabellone.length}`);

    console.log("--- INFORMAZIONI CASELLE ---");
    for (const casella of this.tabellone) {
      console.log(
        `Casella numero ${casella.numero} ha il testo "${casella.testo}"`,
      );
      const giocatoriSuCasella = this.posizioneGiocatori.filter(
        (elemento) => elemento.posizione === casella.numero,
      );
      if (giocatoriSuCasella.length !== 0) {
        for (const g of giocatoriSuCasella) {
          console.log(`    Qui è presente il giocatore ${g.giocatore.nome}`);
        }
      }
    }

    console.table(this.posizioneGiocatori);
  }

  muoviGiocatore(idGiocatore: number, caselleDiAvanzamento: number) {
    this.posizioneGiocatori.find(
      (elemento) => elemento.giocatore.id === idGiocatore,
    )!.posizione += caselleDiAvanzamento;
  }

  giocaUnTurno() {
    for (let i = 0; i < this.numeroGiocatori; i++) {
      if (!this.giocatoreHaVinto(i)) {
        const lancioDiDado = this.dado.lancia();
        this.muoviGiocatore(i, lancioDiDado);
        console.log(`Il giocatore con id ${i} si muove di ${lancioDiDado}`);
      }
    }
    return this
  }

  // da migliorare
}

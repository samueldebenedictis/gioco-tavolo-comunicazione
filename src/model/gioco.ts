import { Casella, CasellaSpeciale } from "./casella";
import { Errori } from "./errori";
import {
	NUMERO_CASELLE_PREDEFINITO,
	NUMERO_GIOCATORI_MASSIMO,
	NUMERO_GIOCATORI_MINIMO,
	NuovaLinea,
	separatore,
} from "./vars";

class Giocatore {
	readonly giocatore: string;
	constructor(nomeGiocatore: string) {
		this.giocatore = nomeGiocatore;
	}
}

export class Gioco {
	// dichiarazioni errori numeri giocatori

	giocatori: Giocatore[];
	tabellone: Casella[]; // le caselle saranno casuali
	numeroGiocatori: number;

	constructor(
		nomiGiocatori: string[],
		numeroCaselle: number = NUMERO_CASELLE_PREDEFINITO,
	) {
		// Inizializza l'array dei giocatori con i nomi forniti

		this.giocatori = nomiGiocatori.map((nome) => new Giocatore(nome));
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
			temp.push(casellaTemp);
		}

		this.tabellone = temp;
	}

	printInformazioniGioco() {
		console.log("--- INFORMAZIONI GIOCO ---");
		console.log(`Numero giocatori: ${this.numeroGiocatori}`);

		console.log(NuovaLinea);
		console.log(separatore);

		this.giocatori.forEach((giocatore, index) => {
			console.log(`Nome Giocatore ${index + 1}: ${giocatore.giocatore}`);
		});

		console.log(separatore);
		console.log(NuovaLinea);

		console.log(`Numero caselle: ${this.tabellone.length}`);

		console.log("--- INFORMAZIONI CASELLE ---");
		for (const casella of this.tabellone) {
			console.log(
				`Casella numero ${casella.numero} ha il testo "${casella.testo}"`,
			);
		}
	}
}

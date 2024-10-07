class Casella {
	testo: string;
	numero: number;
	constructor(numeroCasella: number, testoCasella: string) {
		this.testo = testoCasella;
		this.numero = numeroCasella;
	}
}

class CasellaSpeciale extends Casella {
	isSpeciale: boolean;
	constructor(numeroCasella: number, testoCasella: string) {
		super(numeroCasella, `CASELLA SPECIALE! ${testoCasella}`);
		this.isSpeciale = true;
	}
}

export class Gioco {
	giocatori: number;
	tabellone: Casella[]; // le caselle sarano casuali
	constructor(numeroGiocatori: number, numeroCaselle: number) {
		this.giocatori = numeroGiocatori;

		const temp: Casella[] = [];

		// creazione numero caselle da 1 fino al numero richiesto
		for (let index = 1; index <= numeroCaselle; index++) {
			let casellaTemp: Casella | CasellaSpeciale;

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
		console.log(`Numero giocatori: ${this.giocatori}`);
		console.log(`Numero caselle: ${this.tabellone.length}`);
		console.log("--- INFORMAZIONI CASELLE ---");
		for (const casella of this.tabellone) {
			console.log(
				`Casella numero ${casella.numero} ha il testo "${casella.testo}"`,
			);
		}
	}
}

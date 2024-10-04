class Casella {
	testo: string;
	numero: number;
	constructor(numeroCasella: number, testoCasella: string) {
		this.testo = testoCasella;
		this.numero = numeroCasella;
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
			const casellaTemp: Casella = new Casella(
				index,
				`Questa è la casella numero ${index}`,
			);
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

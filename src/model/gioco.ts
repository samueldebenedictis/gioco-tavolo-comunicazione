import { clear } from "console";
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
	readonly nome: string;
	readonly id: number;
	constructor(nomeGiocatore: string, idGiocatore: number) {
		this.nome = nomeGiocatore;
		this.id = idGiocatore;
	}
}

export class Gioco {
	// dichiarazioni errori numeri giocatori

	static giocatori: Giocatore[];
	tabellone: Casella[]; // le caselle saranno casuali
	numeroGiocatori: number;

	static posizioneGiocatori: {
		giocatore: Giocatore;
		posizione: number;
	}[];
	static numeroGiocatori: number;

	constructor(
		nomiGiocatori: string[],
		numeroCaselle: number = NUMERO_CASELLE_PREDEFINITO,
	) {
		// Inizializza l'array dei giocatori con i nomi forniti

		Gioco.giocatori = nomiGiocatori.map(
			(nome, index) => new Giocatore(nome, index),
		);
		this.numeroGiocatori = Gioco.giocatori.length;

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

		Gioco.posizioneGiocatori = Gioco.giocatori.map((g) => {
			return { giocatore: g, posizione: 1 };
		});
	}

	IniziaGioco()
	{
		const prompt = require('prompt-sync')()
		
		console.log("Selezionare l'azione da eseguire: ")
		console.log("Digitare il numero sulla tastiera per ogni opzione")
		console.log("\r")
	
		console.log("---> Avanza di una casella un giocatore ( 1 )")
	
		var question1 = prompt("Digita un numero per proseguire: ")
	
		if (question1 === String(1))
		{
				var PromptIDGiocatore = prompt("Digita l'ID del giocatore da spostare: ")
				var PromptCaselleAvanzamento = prompt("Inserisci il numero di caselle da avanzare: ")
	
				Gioco.muoviGiocatore(PromptIDGiocatore, PromptCaselleAvanzamento)
				//this.giocaUnTurno();
		}
	
	}

	printInformazioniGioco() {

		this.IniziaGioco()

		console.log("--- INFORMAZIONI GIOCO ---");
		console.log(`Numero giocatori: ${this.numeroGiocatori}`);

		console.log(NuovaLinea);
		console.log(separatore);

		Gioco.giocatori.forEach((giocatore, index) => {
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
			const giocatoriSuCasella = Gioco.posizioneGiocatori.filter(
				(elemento) => elemento.posizione === casella.numero,
			);
			if (giocatoriSuCasella.length !== 0) {
				for (const g of giocatoriSuCasella) {
					console.log(`    Qui è presente il giocatore ${g.giocatore.nome}`);
				}
			}
		}

		console.table(Gioco.posizioneGiocatori);

	}

	static muoviGiocatore(idGiocatore: number, caselleDiAvanzamento: number) {
		let giocatorePosizione = Gioco.posizioneGiocatori.find(
		  (elemento) => elemento.giocatore.id === idGiocatore
		);
	  }
	  

	// TODO: da migliorare e rivedere

	static giocaUnTurno() {
		for (let i = 0; i < Gioco.numeroGiocatori; i++) {
			const lancioDiDado = Math.floor(Math.random() * 6);
			Gioco.muoviGiocatore(i, lancioDiDado);
			console.log(`Il giocatore con id ${i} si muove di ${lancioDiDado}`);
		}
	}

	// da migliorare
}

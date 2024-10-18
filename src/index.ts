// inclusione dipendenze
import { Gioco } from "./model/gioco";
import { consoleInt } from "./utils/read";
import { consoleString } from "./utils/read";

// questa è la funzione principale
async function main() {
	const numeroGiocatori = await consoleInt("Inserire numero giocatori: ");

	console.log(`Il numero di giocatori inserito è ${numeroGiocatori}`);

	const nomiGiocatori: string[] = []; // questo è l'array di stringhe che contiene il nome dei vari giocatori, il numero di stringhe è indeterminato

	for (let i = 1; i <= numeroGiocatori; i++) {
		const nomeGiocatore = await consoleString(
			`Inserire il nome del giocatore ${i}: `,
		);
		nomiGiocatori.push(nomeGiocatore);
	}

	console.log(nomiGiocatori);
	// // Variabili per l'avvio del gioco controllate dalla GUI
	const caselle: number = 40;
	const gioco: Gioco = new Gioco(nomiGiocatori, caselle);

	// // il numero di stringhe nell'array nomiGiocatori deve corrispondere alla variabile numeroGiocatori nella classe Gioco

	// // Avvio del gioco con le informazioni fornite

	console.log("!!! INIZIALIZZAZIONE");
	gioco.printInformazioniGioco();
	console.log("!!! TURNO 1");
	// // gioco.muoviGiocatore(0, 2)
	gioco.giocaUnTurno();
	gioco.printInformazioniGioco();
}

main();

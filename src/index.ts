// inclusione dipendenze
import { Gioco } from "./model/gioco";

// questa è la funzione principale
function main() {
	// Variabili per l'avvio del gioco controllate dalla GUI

	const nomiGiocatori = ["p1", "p2", "p3", "p4"]; // questo è l'array di stringhe che contiene il nome dei vari giocatori, il numero di stringhe è indeterminato
	const caselle: number = 40;

	// il numero di stringhe nell'array nomiGiocatori deve corrispondere alla variabile numeroGiocatori nella classe Gioco

	// Avvio del gioco con le informazioni fornite

	const gioco: Gioco = new Gioco(nomiGiocatori, caselle);
	
	gioco.IniziaGioco()
	gioco.printInformazioniGioco()

	console.log("!!! INIZIALIZZAZIONE");
	
}

main();

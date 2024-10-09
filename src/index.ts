// inclusione dipendenze
import { Gioco } from "./gioco";

// questa è la funzione principale
function main() 
{
	// Variabili per l'avvio del gioco controllate dalla GUI

	const nomiGiocatori = ["", "", "", ""];  // questo è l'array di stringhe che contiene il nome dei vari giocatori, il numero di stringhe è indeterminato
	const giocatori: number = 4; // questa è una variabile che contiene il numero dei giocatori
	const caselle: number = 40;

	// il numero di stringhe nell'array nomiGiocatori deve corrispondere alla variabile numeroGiocatori nella classe Gioco

	// Avvio del gioco con le informazioni fornite
	const gioco: Gioco = new Gioco(giocatori, nomiGiocatori, caselle);
	gioco.printInformazioniGioco();
}

main();

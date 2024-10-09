"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gioco = void 0;
class Casella {
    constructor(numeroCasella, testoCasella) {
        this.testo = testoCasella;
        this.numero = numeroCasella;
    }
}
class CasellaSpeciale extends Casella {
    constructor(numeroCasella, testoCasella) {
        super(numeroCasella, `CASELLA SPECIALE! ${testoCasella}`);
        this.isSpeciale = true;
    }
}
class Giocatore {
    constructor(nomeGiocatore) {
        this.giocatore = nomeGiocatore;
    }
}
class Gioco {
    constructor(numeroGiocatori, nomiGiocatori, numeroCaselle) {
        this.numeroGiocatori = numeroGiocatori;
        if (nomiGiocatori.length !== numeroGiocatori) {
            // il numero dei nomi dei giocatori non corrisponde al numero dei giocatori quindi verrà lanciata un'eccezione
            throw new Error("Il numero di nomi dei giocatori deve corrispondere al numero di giocatori.");
            return;
        }
        // Inizializza l'array dei giocatori con i nomi forniti
        this.giocatori = nomiGiocatori.map(nome => new Giocatore(nome));
        const temp = [];
        // Creazione numero caselle da 1 fino al numero richiesto
        for (let index = 1; index <= numeroCaselle; index++) {
            let casellaTemp;
            if (Math.random() > 0.9) {
                casellaTemp = new CasellaSpeciale(index, `Questa è la casella speciale numero ${index}`);
            }
            else {
                casellaTemp = new Casella(index, `Questa è la casella numero ${index}`);
            }
            temp.push(casellaTemp);
        }
        this.tabellone = temp;
    }
    printInformazioniGioco() {
        console.log("--- INFORMAZIONI GIOCO ---");
        console.log(`Numero giocatori: ${this.numeroGiocatori}`);
        console.log(``);
        console.log(`---------------------------------------`);
        this.giocatori.forEach((giocatore, index) => {
            console.log(`Nome Giocatore ${index + 1}: ${giocatore.giocatore}`);
        });
        console.log(`---------------------------------------`);
        console.log(``);
        console.log(`Numero caselle: ${this.tabellone.length}`);
        console.log("--- INFORMAZIONI CASELLE ---");
        for (const casella of this.tabellone) {
            console.log(`Casella numero ${casella.numero} ha il testo "${casella.testo}"`);
        }
    }
}
exports.Gioco = Gioco;
//# sourceMappingURL=gioco.js.map

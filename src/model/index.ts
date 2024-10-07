// inclusione dipendenze
import { Gioco } from "./gioco";

// questa è la funzione principale
function main() {
  const gioco: Gioco = new Gioco(2, 40);
  gioco.printInformazioniGioco();
}

main();

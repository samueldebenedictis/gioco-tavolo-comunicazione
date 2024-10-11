import { NUMERO_GIOCATORI_MASSIMO, NUMERO_GIOCATORI_MINIMO } from "./vars";

export class Errori extends Error {
	static erroreGiocatoriMinimo = new Error(
		`Il numero minimo di giocatori è il seguente: ${NUMERO_GIOCATORI_MINIMO}`,
	);
	static erroreGiocatoriMassimo = new Error(
		`Il numero massimo di giocatori è il seguente: ${NUMERO_GIOCATORI_MASSIMO}`,
	);
}

// export const errori = {
//   erroreGiocatoriMinimo: new Error(
//     `Il numero minimo di giocatori è il seguente: ${NUMERO_GIOCATORI_MINIMO}`
//   ),
//   erroreGiocatoriMassimo: new Error(
//     `Il numero massimo di giocatori è il seguente: ${NUMERO_GIOCATORI_MASSIMO}`
//   ),
// };

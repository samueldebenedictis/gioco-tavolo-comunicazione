import { describe, expect, test } from "@jest/globals";
import { Gioco } from "../src/model/gioco";
import { Errori } from "../src/model/errori";

describe("Gioco", () => {
  test("La creazione di un gioco avviene con 2 giocatori e 40 caselle", () => {
    const nomiGiocatori = ["Riccardo", "Elena"];
    const gioco: Gioco = new Gioco(nomiGiocatori, 40);
    expect(gioco.numeroGiocatori).toBe(2);
    expect(gioco.tabellone).toHaveLength(40);
  });

  test("La creazione di un gioco avviene con 3 giocatori e 60 caselle", () => {
    const gioco: Gioco = new Gioco(["Prova1", "Prova2", "Prova3"], 60);
    expect(gioco.numeroGiocatori).toBe(3);
    expect(gioco.tabellone).toHaveLength(60);
  });

  test("La creazione di un gioco senza specificare il numero caselle la crea con 40 di default", () => {
    const gioco: Gioco = new Gioco(["Prova1", "Prova2", "Prova3"]);
    expect(gioco.numeroGiocatori).toBe(3);
    expect(gioco.tabellone).toHaveLength(40);
  });

  test("La creazione con 10 giocatori va a buon fine", () => {
    function creaGioco() {
      return new Gioco(
        [
          "Prova1",
          "Prova2",
          "Prova3",
          "Prova4",
          "Prova5",
          "Prova6",
          "Prova7",
          "Prova8",
          "Prova9",
          "Prova10",
        ],
        10
      );
    }

    expect(() => creaGioco()).not.toThrowError();
  });

  test("La creazione con più di 10 giocatori fallisce", () => {
    function creaGioco() {
      return new Gioco(
        [
          "Prova1",
          "Prova2",
          "Prova3",
          "Prova4",
          "Prova5",
          "Prova6",
          "Prova7",
          "Prova8",
          "Prova9",
          "Prova10",
          "Prova11",
        ],
        10
      );
    }

    expect(() => creaGioco()).toThrowError(Errori.erroreGiocatoriMassimo);
  });

  test("La creazione con meno di 2 giocatori fallisce", () => {
    function creaGioco() {
      return new Gioco(
        [
          "Prova1",
        ],
        10
      );
    }

    expect(() => creaGioco()).toThrowError(Errori.erroreGiocatoriMinimo);
  });

  test("La creazione con 2 giocatori va a buon fine", () => {
    function creaGioco() {
      return new Gioco(
        [
          "Prova1",
          "Prova2",
        ],
        10
      );
    }

    expect(() => creaGioco()).not.toThrowError();
  });
});

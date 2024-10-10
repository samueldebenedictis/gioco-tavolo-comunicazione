import { describe, expect, test } from "@jest/globals";
import { Gioco } from "../src/model/gioco";

describe("Gioco", () => {
  test("La creazione di un gioco avviene con 2 giocatori e 40 caselle", () => {
    const nomiGiocatori = ["Riccardo", "Elena"];
    const gioco: Gioco = new Gioco(nomiGiocatori, 40);
    expect(gioco.numeroGiocatori).toBe(2);
    expect(gioco.tabellone).toHaveLength(40);
  });

  test("La creazione di un gioco avviene con 3 giocatori e 60 caselle", () => {
    const gioco: Gioco = new Gioco(["Prova1","Prova2","Prova3"], 60);
    expect(gioco.numeroGiocatori).toBe(3);
    expect(gioco.tabellone).toHaveLength(60);
  });
});

import { describe, expect, test } from '@jest/globals';
import { Gioco } from '../src/gioco';

describe('Gioco', () => {
    test('La creazione di un gioco avviene con 2 giocatori e 40 caselle', () => {
        const gioco: Gioco = new Gioco(2, 40);
        expect(gioco.giocatori).toBe(2)
        expect(gioco.tabellone).toHaveLength(40)
    });

    test('La creazione di un gioco avviene con 3 giocatori e 60 caselle', () => {
        const gioco: Gioco = new Gioco(3, 60);
        expect(gioco.giocatori).toBe(3)
        expect(gioco.tabellone).toHaveLength(60)
    });
});


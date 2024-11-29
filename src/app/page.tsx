"use client";

import {
  NUMERO_GIOCATORI_MASSIMO,
  NUMERO_GIOCATORI_MINIMO,
} from "@/model/vars";
import Link from "next/link";
import { useState } from "react";
import { emoji } from "./emoji";

export default function Home() {
  const option = [...Array(NUMERO_GIOCATORI_MASSIMO + 1)]
    .slice(NUMERO_GIOCATORI_MINIMO)
    .map((_, i) => i + NUMERO_GIOCATORI_MINIMO)
    .map((i) => ({ value: `${i}`, label: i }));

  // Eventi
  const [numeroGiocatoriSelezionato, setNumeroGiocatori] = useState(
    option[0].value
  );

  const [arrayNomi, setNomi] = useState<string[]>([]);
  const [arrayIcone, setIcone] = useState<string[]>([]);
  const [messaggioErroreVisibile, setMessaggioErrore] = useState(false);

  const iconeDisponibili = emoji;

  function onSubmitButtonClick(e: MouseEvent) {
    localStorage.setItem("numeroGiocatori", `${numeroGiocatoriSelezionato}`);
    localStorage.setItem("nomiGiocatori", JSON.stringify(arrayNomi));
    localStorage.setItem("iconeGiocatori", JSON.stringify(arrayIcone));

    console.log(arrayNomi);
    console.log(arrayIcone);

    for (let i = 0; i < Number.parseInt(numeroGiocatoriSelezionato); i++) {
      if (!arrayIcone[i]) {
        arrayIcone[i] = iconeDisponibili[0];
      }
    }

    if (
      arrayIcone.length != parseInt(numeroGiocatoriSelezionato) ||
      arrayNomi.length != parseInt(numeroGiocatoriSelezionato)
    ) {
      setMessaggioErrore(true);
      e.preventDefault();
    }
  }

  function onTextFieldInputChange(index: number, e: string) {
    console.log(index, e);
    const newArr = arrayNomi;
    newArr[index] = e;
    setNomi(newArr);
  }

  function onPlayerIconChange(index: number, e: string) {
    console.log(index, "icon", e);
    const newArr = arrayIcone;
    newArr[index] = e;
    setIcone(newArr);
  }

  return (
    <div className="grid items-center justify-items-center items-center p-8">
      <main className="flex flex-col gap-2">
        <div>
          <h1 className="font-bold text-xl">Benvenuti!</h1>
          <p className="text-sm">Per iniziare inserisci i dati!</p>
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="numeroGiocatori">
            Inserisci il numero dei giocatori
          </label>
          <select
            className="rounded h-6 bg-white"
            value={numeroGiocatoriSelezionato}
            onChange={(e) => setNumeroGiocatori(e.target.value)}
            name="numeroGiocatori"
          >
            {option.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">
            Inserisci i nomi e le icone dei {numeroGiocatoriSelezionato}{" "}
            giocatori
          </div>
          {[...Array(Number.parseInt(numeroGiocatoriSelezionato))]
            .map((_, i) => i)
            .map((g) => (
              <div key={`giocatore${g}`} className="grid grid-cols-2">
                <div className="grid grid-cols-2 px-4 py-1">
                  <label htmlFor={`giocatore${g}`}>
                    Nome giocatore {g + 1}
                  </label>
                  <input
                    className="rounded"
                    id={`giocatore${g}`}
                    name={`giocatore${g}`}
                    onChange={(e) => onTextFieldInputChange(g, e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 px-4 py-1">
                  <label htmlFor={`giocatoreIcon${g}`}>
                    Icona giocatore {g + 1}
                  </label>
                  <select
                    className="rounded bg-white"
                    onChange={(e) => onPlayerIconChange(g, e.target.value)}
                  >
                    {iconeDisponibili.map((e) => (
                      <option value={e} key={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
        </div>

        <Link
          className="flex h-12 w-full rounded-full bg-black justify-center items-center font-bold text-xl text-yellow-100"
          onClick={(e) => onSubmitButtonClick(e as unknown as MouseEvent)}
          href="/gioco"
        >
          <p>Avvia la partita</p>
        </Link>
        {messaggioErroreVisibile ? (
          <div className="w-full flex flex-col justify-center items-center ">
            <p className="text-red-500 text-xl font-bold">Errore:</p>
            <p className="text-red-500 font-bold">
              è necessario inserire i nomi dei giocatori e le rispettive icone!
            </p>
          </div>
        ) : undefined}
      </main>
    </div>
  );
}

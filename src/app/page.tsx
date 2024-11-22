"use client";

import {
  NUMERO_GIOCATORI_MASSIMO,
  NUMERO_GIOCATORI_MINIMO,
} from "@/model/vars";
import Link from "next/link";
import { useState } from "react";

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

  function onSubmitButtonClick() {
    localStorage.setItem("numeroGiocatori", `${numeroGiocatoriSelezionato}`);
    for (let i = 0; i < parseInt(numeroGiocatoriSelezionato); i++) {
      localStorage.setItem(`giocatore_${i}`, arrayNomi[i]);
    }
    localStorage.setItem('nomiGiocatori', JSON.stringify(arrayNomi))
    
  }

  function onTextFieldInputChange(index: number, e: string) {
    console.log(index, e);
    const newArr = arrayNomi;
    newArr[index] = e;
    setNomi(newArr);
  }

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          Questo è l&apos;index
          <label htmlFor="numeroGiocatori">
            Inserisci il numero dei giocatori
          </label>
          <select
            value={numeroGiocatoriSelezionato}
            onChange={(e) => setNumeroGiocatori(e.target.value)}
          >
            {option.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
          <div> Hai selezionato {numeroGiocatoriSelezionato} giocatori</div>
          {[...Array(parseInt(numeroGiocatoriSelezionato))]
            .map((_, i) => i)
            .map((g) => (
              <>
                <label htmlFor={`giocatore${g}`}>Nome giocatore {g + 1}</label>
                <input
                  id={`giocatore${g}`}
                  name={`giocatore${g}`}
                  onChange={(e) => onTextFieldInputChange(g, e.target.value)}
                />
              </>
            ))}
          <Link
            className="h-12 w-full rounded-full bg-gray-800 text-white"
            onClick={() => onSubmitButtonClick()}
            href="/gioco"
          >
            Gioca
          </Link>
        </main>
      </div>
    </>
  );
}

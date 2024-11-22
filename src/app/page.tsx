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
  const [selected, setSelected] = useState(option[0].value);

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          Questo è l&apos;index
          <label htmlFor="numeroGiocatori">
            Inserisci il numero dei giocatori
          </label>
          <select
            value={selected} // ...force the select's value to match the state variable...
            onChange={(e) => setSelected(e.target.value)} // ... and update the state variable on any change!
          >
            {option.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
          <div> Hai selezionato {selected} giocatori</div>
          <button>
            <Link href="/gioco"> premi qui per andare al gioco</Link>
          </button>
        </main>
      </div>
    </>
  );
}

"use client";

import { Gioco } from "@/model/gioco";
import { useState } from "react";
import Tabellone from "../tabellone";
import { NUMERO_CASELLE_PREDEFINITO } from "@/model/vars";

const caselle = NUMERO_CASELLE_PREDEFINITO
// const gioco: Gioco = new Gioco(nomiGiocatori, caselle);
// gioco.giocaUnTurno();

export default function Home() {
  const nomiGiocatoriString = localStorage.getItem('nomiGiocatori'); 
  const nomiGiocatori = JSON.parse(nomiGiocatoriString as string)

  const [gioco, setGioco] = useState(new Gioco(nomiGiocatori, caselle));
  const [counter, setCount] = useState(0);

  // Eventi

  function onButtonGiocaTurnoClick() {
    //scrivere qui le operazioni da svolgere al click del bottone Gioca Turno

    const newGioco = gioco.giocaUnTurno();
    setCount(counter + 1);
    setGioco(newGioco);
    console.log(newGioco);
    localStorage.setItem("COUNTER", `${counter}`);
  }

  return (
    <>
      <div className="border w-64">
        <div className="pl-4 pb-4 pt-8">In questa partita stanno giocando:</div>
        {gioco.giocatori.map((n) => (
          <div className="pl-4 text-xl" key={n.nome}>
            {n.nome}
          </div>
        ))}
      </div>
      <button
        onClick={() => onButtonGiocaTurnoClick()}
        className="border rounded-full p-4"
      >
        Gioca un turno
      </button>
      <p>
        {gioco.posizioneGiocatori[0].giocatore.nome} è in posizione{" "}
        {gioco.posizioneGiocatori[0].posizione}
      </p>
      <p>
        {gioco.posizioneGiocatori[1].giocatore.nome} è in posizione{" "}
        {gioco.posizioneGiocatori[1].posizione}
      </p>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Tabellone
            caselle={gioco.tabellone}
            posizioneGiocatori={gioco.posizioneGiocatori}
          />
        </main>
      </div>
    </>
  );
}

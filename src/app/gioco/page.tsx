"use client";
import { Gioco } from "@/model/gioco";
import { NUMERO_CASELLE_PREDEFINITO } from "@/model/vars";
import { useEffect, useState } from "react";
import Tabellone from "../tabellone";

export default function Home() {
  const [nomiGiocatori, setNomiGiocatori] = useState(["", ""]);
  const [iconeGiocatori, setIconeGiocatori] = useState(["", ""]);
  const [gioco, setGioco] = useState(
    new Gioco(["", ""], NUMERO_CASELLE_PREDEFINITO)
  );
  const [counter, setCount] = useState(0);
  const [caricamentoEffettuato, setCaricamentoEffettuato] = useState(false);


  useEffect(() => {
    setNomiGiocatori(
      JSON.parse(localStorage.getItem("nomiGiocatori") as string)
    );
  }, []);
  useEffect(() => {
    setIconeGiocatori(
      JSON.parse(localStorage.getItem("iconeGiocatori") as string)
    );
  }, []);
  useEffect(() => {
    setGioco(JSON.parse(localStorage.getItem("istanzaGioco") as string) as Gioco);
  }, []);

  useEffect(() => {
    setCaricamentoEffettuato(true);
  }, []);

  // Eventi

  function onButtonGiocaTurnoClick() {
    //scrivere qui le operazioni da svolgere al click del bottone Gioca Turno

    const newGioco = gioco.giocaUnTurno();
    setCount(counter + 1);
    setGioco(newGioco);
    console.log(newGioco);
    localStorage.setItem("COUNTER", `${counter}`);
  }

  if (!caricamentoEffettuato) {
    return (
      <>
        <div>In caricamento...</div>
      </>
    );
  }

  return (
    <div className="grid items-center justify-items-center items-center p-8">
      <main className="flex flex-col gap-2">
        <div className="">
          <div className="pl-4 pb-4 pt-8">
            In questa partita stanno giocando:
          </div>
          {nomiGiocatori.map((n, i) => (
            <div className="pl-4 text-xl" key={n}>
              Giocatore {i + 1}: {n} {iconeGiocatori[i]}
            </div>
          ))}
        </div>
        <button
          onClick={() => onButtonGiocaTurnoClick()}
          className="flex h-12 w-full rounded-full bg-black justify-center items-center font-bold text-xl text-yellow-100"
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
        <div className="items-center justify-items-center w-full">
          <Tabellone
            caselle={gioco.tabellone}
            posizioneGiocatori={gioco.posizioneGiocatori}
          />
        </div>
      </main>
    </div>
  );
}

"use client";
import { Gioco } from "@/model/gioco";
import { NUMERO_CASELLE_PREDEFINITO } from "@/model/vars";
import { useEffect, useState } from "react";
import Tabellone from "../tabellone";
import Link from "next/link";

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
    const istanzaGiocoObject = JSON.parse(
      localStorage.getItem("istanzaGioco") as string
    );
    setGioco(
      new Gioco(nomiGiocatori, NUMERO_CASELLE_PREDEFINITO, istanzaGiocoObject)
    );
  }, [nomiGiocatori]);

  useEffect(() => {
    setCaricamentoEffettuato(true);
  }, []);

  // Eventi

  function onResetButtonClick() {
    localStorage.clear();
  }

  function onButtonGiocaTurnoClick() {
    //scrivere qui le operazioni da svolgere al click del bottone Gioca Turno

    if (localStorage.getItem("istanzaGioco") == undefined) {
      throw new Error(
        "Impossibile giocare un turno poichè l'istanza corrente non esiste!"
      );
    }

    const giocoAggiornato = gioco.giocaUnTurno();
    setCount(counter + 1);
    setGioco(giocoAggiornato);
    console.log(giocoAggiornato);
    localStorage.setItem("COUNTER", `${counter}`);
    localStorage.setItem("istanzaGioco", JSON.stringify(giocoAggiornato));
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
        <div className="pl-4 pb-4 pt-8 grid grid-cols-2">
          <div className="col-span-1">
            <div className="pl-4 pb-4 pt-8">
              In questa partita stanno giocando:
            </div>
            {nomiGiocatori.map((n, i) => (
              <div className="pl-4 text-xl" key={n}>
                Giocatore {i + 1}: {n} {iconeGiocatori[i]}
              </div>
            ))}
          </div>
          <div className="col-span-1 self-end w-full">
            <Link
              onClick={() => onResetButtonClick()}
              href="/"
              className="flex h-12 w-full rounded-full bg-black justify-center items-center font-bold text-xl text-yellow-100"
            >
              Resetta partita
            </Link>
          </div>
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

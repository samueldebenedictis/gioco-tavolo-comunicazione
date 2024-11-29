"use client";
import { Gioco } from "@/model/gioco";
import { NUMERO_CASELLE_PREDEFINITO } from "@/model/vars";
import { useEffect, useState } from "react";
import Tabellone from "../tabellone";

const caselle = NUMERO_CASELLE_PREDEFINITO;

export default function Home() {
  const [nomiGiocatori, setNomiGiocatori] = useState(["", ""]);
  const [iconeGiocatori, setIconeGiocatori] = useState(["", ""]);
  const [gioco, setGioco] = useState(new Gioco(nomiGiocatori, caselle));
  const [counter, setCount] = useState(0);

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
    setGioco(new Gioco(nomiGiocatori, caselle));
  }, [nomiGiocatori]);

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
        {gioco.giocatori.map((n, i) => (
          <div className="pl-4 text-xl" key={n.nome}>
            {n.nome} {iconeGiocatori[i]}
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
      <div className="items-center justify-items-center w-full">
        <Tabellone
          caselle={gioco.tabellone}
          posizioneGiocatori={gioco.posizioneGiocatori}
        />
      </div>
    </>
  );
}

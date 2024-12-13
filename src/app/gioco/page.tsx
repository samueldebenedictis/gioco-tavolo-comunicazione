"use client";
import { Gioco } from "@/model/gioco";
import { NUMERO_CASELLE_PREDEFINITO } from "@/model/vars";
import { useEffect, useState } from "react";
import Tabellone from "../tabellone";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dado } from "../dado";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
  const router = useRouter();
  const show = searchParams?.show;

  // Variabili di gioco
  const [nomiGiocatori, setNomiGiocatori] = useState(["", ""]);
  const [iconeGiocatori, setIconeGiocatori] = useState(["", ""]);
  const [gioco, setGioco] = useState(
    new Gioco(["", ""], NUMERO_CASELLE_PREDEFINITO)
  );
  const [caricamentoEffettuato, setCaricamentoEffettuato] = useState(false);
  const [counter, setCount] = useState(0);

  // Metodi refresh stato pagina
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
    if (localStorage.getItem("istanzaGioco") == undefined) {
      throw new Error(
        "Impossibile giocare un turno poichè l'istanza corrente non esiste!"
      );
    }
    const { gioco: giocoAggiornato, lancioDiDado } =
      gioco.giocaTurnoGiocatoreCorrente();
    setScore(lancioDiDado);
    setCount(counter + 1);
    setGioco(giocoAggiornato);
    console.log(giocoAggiornato);
    localStorage.setItem("COUNTER", `${counter}`);
    localStorage.setItem("istanzaGioco", JSON.stringify(giocoAggiornato));
  }

  const [played, setPlayed] = useState(0);
  const [score, setScore] = useState(0);
  // Modale
  function Modal() {
    const indiceVecchioGiocatore =
      gioco.giocatoreCorrente - 1 < 0
        ? gioco.numeroGiocatori - 1
        : gioco.giocatoreCorrente - 1;
    const nome = !played
      ? gioco.giocatori[gioco.giocatoreCorrente].nome
      : gioco.giocatori[indiceVecchioGiocatore].nome;
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="p-8 border w-96 shadow-lg rounded-md bg-gray-200 justify-center flex flex-col gap-4 text-center">
          <h3 className="text-xl">Turno di</h3>
          <p className="text-xl font-bold">{nome}</p>
          {played ? (
            <div className="flex flex-col w-full  items-center justify-center gap-4">
              <p>
                {nome} ha fatto {score}
              </p>
              <Dado n={score} />
            </div>
          ) : (
            <button
              onClick={() => {
                setPlayed(played + 1);
                onButtonGiocaTurnoClick();
              }}
              className="flex h-12 w-full rounded-full bg-black justify-center items-center font-bold text-xl text-yellow-100"
            >
              Gioca un turno
            </button>
          )}
          <button
            onClick={() => router.back()}
            className="flex h-12 w-full rounded-full bg-black justify-center items-center font-bold text-xl text-red-100"
          >
            Chiudi
          </button>
        </div>
      </div>
    );
  }

  // Fallback durante il caricamenti delle variabili
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
        {show && <Modal />}
        <div className="pl-4 pb-4 pt-8 grid grid-cols-2">
          <div className="col-span-1">
            <div className="pl-4 pb-4 pt-8">
              In questa partita stanno giocando:
            </div>
            {nomiGiocatori.map((n, i) => (
              <div className="pl-4 text-xl" key={n}>
                Giocatore {i + 1}: {iconeGiocatori[i]} <b>{n}</b> in posizione{" "}
                <b>{gioco.posizioneGiocatori[i].posizione}</b>
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
          onClick={() => {
            setPlayed(0);
            router.push("?show=true");
          }}
          className="flex h-12 w-full rounded-full bg-black justify-center items-center font-bold text-xl text-yellow-100"
        >
          Gioca un turno
        </button>
        <div className="items-center justify-items-center w-full pt-8">
          <Tabellone
            caselle={gioco.tabellone}
            posizioneGiocatori={gioco.posizioneGiocatori}
          />
        </div>
      </main>
    </div>
  );
}

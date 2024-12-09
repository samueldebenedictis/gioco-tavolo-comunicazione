"use client";
import { type Casella as C, CasellaSpeciale } from "@/model/casella";
import type { Giocatore } from "@/model/gioco";

type TabelloneProps = {
  caselle: C[];
  posizioneGiocatori: {
    giocatore: Giocatore;
    posizione: number;
  }[];
};

type CasellaProps = {
  numeroCasella: string;
  testoCasella: string;
  isSpeciale: boolean;
  giocatoriSullaCasella: string[];
};

function Casella(props: CasellaProps) {
  const giocatoriPresenti = props.giocatoriSullaCasella.length;
  const giocatoriSullaCasella = props.giocatoriSullaCasella;

  return (
    <div className={`md border h-32 w-32 rounded border-2 border-black ${props.isSpeciale ? 'bg-yellow-100': 'bg-green-100'}`}>
      <div className="p-2">
        <p className="font-bold text-xl">
          {props.numeroCasella} {props.isSpeciale ? "⭐" : ""}
        </p>

        <div className="text-xs">{props.testoCasella}</div>
        {giocatoriPresenti ? (
          <div>
            {giocatoriSullaCasella.map((el) => (
              <div key={el}>{el}</div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

// questo è un altro componente react
export default function Tabellone(props: TabelloneProps) {
  return (
    <div className={`grid grid-cols-6 gap-4 flex border-2 border-black rounded p-8 bg-white`}>
      {props.caselle.map((casella) => (
        <Casella
          key={casella.numero}
          testoCasella={casella.testo}
          numeroCasella={`${casella.numero}`}
          isSpeciale={(casella as CasellaSpeciale).isSpeciale}
          giocatoriSullaCasella={props.posizioneGiocatori
            .filter((pos) => pos.posizione === casella.numero)
            .map((pos) => pos.giocatore.nome)}
        />
      ))}
    </div>
  );
}

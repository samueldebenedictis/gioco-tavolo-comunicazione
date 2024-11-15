import { Casella as C, CasellaSpeciale } from "@/model/casella";
import { Giocatore } from "@/model/gioco";

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

/*

import React, { useEffect, useState } from "react";

function Casella(props: CasellaProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const giocatoriPresenti = props.giocatoriSullaCasella.length;
  const giocatoriSullaCasella = props.giocatoriSullaCasella;

  return (
    <div className="md border h-32 w-32 rounded">
      <div className="p-2">
        <div>
          Casella {props.numeroCasella} {props.isSpeciale ? "⭐" : ""}
        </div>
        <div className="text-xs">
          {props.testoCasella}
        </div>
        {isClient && giocatoriPresenti ? (
          giocatoriSullaCasella.map((el) => <div key={el}>{el}</div>)
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
  
  export default Casella;
  

*/

function Casella(props: CasellaProps) {
 
  const giocatoriPresenti = props.giocatoriSullaCasella.length;
  const giocatoriSullaCasella = props.giocatoriSullaCasella;

  return (
    <div className="md border h-32 w-32 rounded">
      <div className="p-2">
        <div>
          <p>
            Casella {props.numeroCasella} {props.isSpeciale ? "⭐" : ""}
          </p>
        </div>
        <div className="text-xs">{props.testoCasella}</div>
        { giocatoriPresenti ? (
          <div >
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

// questo è un componente react

// questo è un altro componente react
export default function Tabellone(props: TabelloneProps) {
  return (
    <div className="grid grid-cols-6 gap-4">
      {props.caselle.map((casella) => (
        <Casella
          key={casella.numero}
          testoCasella={casella.testo}
          numeroCasella={`${casella.numero}`}
          isSpeciale={casella instanceof CasellaSpeciale}
          giocatoriSullaCasella={props.posizioneGiocatori
            .filter((pos) => pos.posizione == casella.numero)
            .map((pos) => pos.giocatore.nome)}
        />
      ))}
    </div>
  );
}

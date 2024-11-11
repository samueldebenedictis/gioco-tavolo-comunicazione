import { createInterface } from "node:readline";

async function consoleQuestion(domanda: string) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const risposta = await new Promise((resolve) => {
    rl.question(domanda, resolve);
  });

  rl.close();
  return risposta as string;
}

export async function consoleInt(testo: string) {
  const risposta = await consoleQuestion(testo);
  const intero = Number.parseInt(risposta);
  return intero;
}

export async function consoleString(domanda: string) {
  const risposta = await consoleQuestion(domanda);
  return risposta;
}

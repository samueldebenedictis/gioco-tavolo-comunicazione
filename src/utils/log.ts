const RED = "\x1B[0;31m";
const NC = "\x1B[0m";

export const redAlert = (s: string) => `${RED}⚠ ${s}${NC}`;

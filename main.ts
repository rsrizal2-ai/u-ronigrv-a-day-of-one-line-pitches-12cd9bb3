// main.ts — A Day of One-Line Pitches (make.fun).
// Writes the single entry sentence to /output/entry.txt.
// Node 24, standard library only; no network, no clock, no environment secrets.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Revised pick (candidate C): lead with the three fears a non-coder friend has —
// coding, cost, risk — answer all three at once, then the concrete promise
// (a real, working version today) and the low-risk exit (change anything until
// it feels like yours). Plain words, one read, nothing overpromised: the entry
// is free, the agent builds the app, and iterating is how make.fun works.
const ENTRY =
  'No coding, no cost, no risk — just tell me your app idea in plain words and an AI agent on make.fun will build you a real, working version today, and you can change anything until it feels like yours.';

if (ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, 'utf8');

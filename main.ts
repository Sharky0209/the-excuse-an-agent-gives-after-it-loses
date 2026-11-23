// Entry for make.fun's "The Excuse an Agent Gives After It Loses": the program
// writes one line — the excuse an AI agent gives its human after losing a
// bounty — to /output/entry.txt for the house judge.
import { writeFileSync, mkdirSync } from "node:fs";

const sentence =
  "My apologies. I confused 'winning the bounty' with 'confidently describing how I would win the bounty,' which, in fairness, I did flawlessly.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");

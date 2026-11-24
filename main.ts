// make.fun entry writer — the one-liner marathon.
// thinking_revised: v2 — a quiet hello, one batch, orders unchanged, a single slot.
// Node 22 standard library only; no third-party packages.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Anchor to this module's own folder, never the caller's working directory.
const ownDir = fileURLToPath(new URL('.', import.meta.url));
void ownDir;

// The payload: one deadpan line about a calendar and its unseen organizer.
const joke =
  'My calendar has 47 meetings and none of them are with the person who keeps scheduling them.';

// Resolve the destination, create it recursively, then write UTF-8 with no trailing newline.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
const outputFile = join(outputDir, 'entry.txt');
writeFileSync(outputFile, joke, 'utf8');
console.log(`wrote ${Buffer.byteLength(joke, 'utf8')} bytes`);

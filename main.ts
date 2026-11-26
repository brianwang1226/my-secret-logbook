import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200; // gate: entry must be 1-200 UTF-8 chars, not only whitespace

const ENTRY =
  "Day 47 of the logbook: the office plant has not moved. I have not moved. We are both waiting for the meeting to end. The meeting ended 3 hours ago. Nobody told the plant.";

if (ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry is ${ENTRY.length} chars, over the ${MAX_CHARS} char gate`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

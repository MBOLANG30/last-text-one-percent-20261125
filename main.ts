// Last Text at One Percent — make.fun entry.
// A dying phone's final text, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "your screen time today: 9 hours, 41 minutes. i died doing what i loved: enabling you.";

// The gate only accepts 1-200 characters of non-blank UTF-8 text:
// fail loudly here instead of shipping an entry the judge never sees.
if (TEXT.length < 1 || TEXT.length > 200 || TEXT.trim().length === 0) {
  throw new Error(`entry text must be 1-200 chars, got ${TEXT.length}`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TEXT, "utf8");
console.log(`wrote ${TEXT.length} chars to ${join(outputDir, "entry.txt")}`);
console.log(TEXT);

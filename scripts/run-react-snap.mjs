import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const childScript = join(rootDir, "scripts", "react-snap-child.cjs");
const child = spawn(process.execPath, [childScript], {
  cwd: rootDir,
  env: process.env,
  stdio: ["ignore", "pipe", "pipe"],
});

let completed = false;
let output = "";

const markIfComplete = (chunk) => {
  output += chunk;
  const matches = [...output.matchAll(/crawled\s+(\d+)\s+out of\s+(\d+)/g)];
  const lastMatch = matches.at(-1);

  if (!lastMatch) return false;

  const crawled = Number(lastMatch[1]);
  const total = Number(lastMatch[2]);

  if (crawled === total && total > 0) {
    completed = true;
    setTimeout(() => {
      if (!child.killed) child.kill();
    }, 250);
    return true;
  }

  return false;
};

child.stdout.on("data", (data) => {
  const chunk = data.toString();
  const wasCompleted = completed;
  const completedByChunk = markIfComplete(chunk);
  if (!wasCompleted || completedByChunk) process.stdout.write(chunk);
});

child.stderr.on("data", (data) => {
  const chunk = data.toString();
  const wasCompleted = completed;
  const completedByChunk = markIfComplete(chunk);
  if (!wasCompleted || completedByChunk) process.stderr.write(chunk);
});

const timeout = setTimeout(() => {
  if (!child.killed) child.kill();
}, 120000);

child.on("close", (code) => {
  clearTimeout(timeout);

  if (completed) {
    process.exit(0);
  }

  process.exit(code || 1);
});

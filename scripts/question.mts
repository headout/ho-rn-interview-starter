/**
 * Loads the interview question from a link the interviewer shares in the
 * meeting chat, and commits the result.
 *
 * Usage: npm run question "<link>"
 *
 * The link serves a .tar.gz containing project files (e.g. `src/`,
 * `package.json`). Top-level directories in the archive fully REPLACE the
 * local ones; top-level files overwrite. If package.json changes,
 * `npm install` runs automatically before committing.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import {
  cp,
  mkdir,
  mkdtemp,
  readdir,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const url = process.argv[2];
const root = process.cwd();

function fail(msg: string): never {
  console.error(`\n❌ ${msg}`);
  process.exit(1);
}

function run(cmd: string, args: string[]) {
  execFileSync(cmd, args, {
    stdio: "inherit",
    cwd: root,
    shell: process.platform === "win32",
  });
}

if (!url) fail('Missing link. Run: npm run question "<link>"');
if (!existsSync(join(root, "package.json")))
  fail("Run this from the project root (the folder with package.json).");

const tmp = await mkdtemp(join(tmpdir(), "ho-question-"));
const tarball = join(tmp, "question.tar.gz");
const staging = join(tmp, "staging");

console.log("⬇️  Downloading question…");
const res = await fetch(url).catch(() => null);
if (!res || !res.ok)
  fail(
    `Could not download (${res ? `HTTP ${res.status}` : "network error"}). ` +
      "The link may have expired — ask your interviewer for a fresh one.",
  );
await mkdir(staging);
await writeFile(tarball, Buffer.from(await res.arrayBuffer()));

console.log("📦 Extracting…");
execFileSync("tar", ["-xzf", tarball, "-C", staging], { stdio: "inherit" });

// Support archives that wrap everything in a single top-level folder.
let contentDir = staging;
let entries = (await readdir(contentDir, { withFileTypes: true })).filter(
  (e) => e.name !== ".git",
);
if (entries.length === 1 && entries[0].isDirectory()) {
  contentDir = join(contentDir, entries[0].name);
  entries = (await readdir(contentDir, { withFileTypes: true })).filter(
    (e) => e.name !== ".git",
  );
}
if (entries.length === 0) fail("Archive was empty. Ask your interviewer.");

console.log(
  `🔁 Applying: ${entries.map((e) => e.name + (e.isDirectory() ? "/" : "")).join(", ")}`,
);
let packageJsonChanged = false;
for (const entry of entries) {
  const from = join(contentDir, entry.name);
  const to = join(root, entry.name);
  if (entry.name === "package.json") packageJsonChanged = true;
  await rm(to, { recursive: true, force: true });
  try {
    await rename(from, to);
  } catch {
    // temp dir can be on a different volume than the project (EXDEV)
    await cp(from, to, { recursive: true });
  }
}
await rm(tmp, { recursive: true, force: true });

if (packageJsonChanged) {
  console.log("📚 package.json changed — running npm install…");
  run("npm", ["install"]);
}

console.log("💾 Committing…");
try {
  run("git", ["add", "-A"]);
  run("git", ["commit", "-m", "chore: load interview question"]);
} catch {
  console.warn(
    "⚠️  Could not commit (not a git repo, or nothing to commit). Continuing.",
  );
}

console.log(
  "\n✅ Question loaded. Now restart the app:\n" +
    "   1. Stop Metro if it is running (Ctrl + C)\n" +
    "   2. npm start   (press i for iOS, a for Android)",
);

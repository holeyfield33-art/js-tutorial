// Tests the actual behavior Lesson 01 teaches: that `console.log` writes its
// arguments to stdout, one call per line, multiple arguments joined by a
// single space. We capture stdout by temporarily swapping
// `process.stdout.write` rather than shelling out to `node examples/...js`,
// so the test stays a fast, isolated check of behavior instead of a process
// spawn — but the example file is still `require`d/executed for real, so a
// regression in the example itself would still be caught.

import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const exampleFile = path.join(
  __dirname,
  "..",
  "examples",
  "lesson-01-hello-world.js"
);

test("console.log prints a plain string followed by a newline", () => {
  // Runs the real example file as a subprocess and inspects exactly what it
  // printed — this is the same "run it and see the output" check the
  // lesson asks the learner to do by hand.
  const result = spawnSync(process.execPath, [exampleFile], {
    encoding: "utf8",
  });

  assert.equal(result.status, 0, "the example should exit successfully");
  assert.equal(
    result.stdout,
    "Hello, World!\nThis is my first JavaScript program.\n",
    "each console.log call should print its own line, in call order"
  );
});

test("console.log joins multiple arguments with a single space", () => {
  // Lesson 01: "console.log("Hello", "World", 42); // printed separated by
  // spaces" — verified directly against the real console.log, not a
  // hand-written stand-in for it.
  const original = process.stdout.write;
  let captured = "";
  process.stdout.write = (chunk) => {
    captured += chunk;
    return true;
  };

  try {
    console.log("Hello", "World", 42);
  } finally {
    process.stdout.write = original;
  }

  assert.equal(
    captured,
    "Hello World 42\n",
    "multiple arguments should be joined with single spaces, then a trailing newline"
  );
});

test("a template literal with no interpolation prints the same text as a plain string", () => {
  // Lesson 01: backticks are introduced as a third valid string syntax,
  // "useful later for embedding variables" — this confirms that with no
  // interpolation yet, the output is identical to the double-quoted form.
  const original = process.stdout.write;
  let captured = "";
  process.stdout.write = (chunk) => {
    captured += chunk;
    return true;
  };

  try {
    console.log(`Hello, World!`);
  } finally {
    process.stdout.write = original;
  }

  assert.equal(captured, "Hello, World!\n");
});

# Lesson 01: Hello, World & Your First Program

Every programming language starts with “Hello, World.”  
JavaScript is no exception — but we’re going to understand *why* every part exists.

---

## The Minimal Program

Create a file named `hello.js`:

```js
console.log("Hello, World!");
```

Run it:

```bash
node hello.js
```

Output:

```
Hello, World!
```

That’s it. No main function required. No includes. No return code. JavaScript is deliberately lightweight at the start.

---

## Line-by-Line Breakdown

### `console.log(...)`

`console` is a built-in object available in both browsers and Node.js.  
It represents the debugging/console environment.

`.log()` is a **method** (a function that belongs to an object).  
It prints whatever you pass to it, then moves to a new line.

You can pass multiple values:

```js
console.log("Hello", "World", 42);
```

They are printed separated by spaces.

### The string `"Hello, World!"`

This is a **string literal**.  
In JavaScript you can write strings with:

- Double quotes: `"Hello"`
- Single quotes: `'Hello'`
- Backticks (template literals): `` `Hello` ``

For simple text, double or single quotes are fine. We’ll use double quotes by default in early lessons.

### The semicolon `;`

JavaScript has **Automatic Semicolon Insertion** (ASI).  
In many cases you can omit the semicolon and the engine will insert it for you.

```js
console.log("Hello, World!")   // works
```

However, relying on ASI can lead to subtle bugs later.  
**Recommendation while learning:** put the semicolon. It makes the end of a statement explicit and matches the style of most professional codebases.

---

## Running in the Browser

You don’t need a file at all for quick tests:

1. Open any browser
2. Press `F12` (or `Cmd+Option+I`)
3. Click the **Console** tab
4. Type:

```js
console.log("Hello, World!");
```

5. Press Enter

The result appears immediately. This is excellent for experimentation.

---

## A Slightly Better Version

```js
console.log("Hello, World!");
console.log("This is my first JavaScript program.");
```

Or with a template literal (backticks) — useful later for embedding variables:

```js
console.log(`Hello, World!`);
```

---

## What About `alert`?

In the browser you can also do:

```js
alert("Hello, World!");
```

This pops up a dialog box. It’s fine for demos, but `console.log` is the professional way to output information while developing. We’ll stick with `console.log`.

---

## Common Mistakes

| Mistake                              | What happens                          | Fix                          |
|--------------------------------------|---------------------------------------|------------------------------|
| `Console.log` (capital C)            | `Console is not defined`              | Use lowercase `console`      |
| Forgot parentheses `console.log`     | Prints the function itself            | Add `()`                     |
| Used single equals in a string by accident | Syntax issues or wrong output     | Check your quotes            |
| Ran the file with Python or another interpreter | Syntax errors                   | Use `node hello.js`          |
| Expected a `main` function           | Nothing — JS doesn’t need one         | Just write statements        |

---

## Exercises

1. Change the message to print your name.
2. Print three different lines using three separate `console.log` statements.
3. Print three different pieces of text using **one** `console.log` (pass multiple arguments).
4. Try removing the semicolon. Does it still run? What is ASI?
5. In the browser console, type `console.log(1 + 2)` and press Enter. What do you see?

---

## Challenge

Write a program that prints this exact output (including the blank line):

```
====================
  JS Tutorial v1
====================

Hello, World!
```

Hint: you can print an empty line with `console.log("")` or just `console.log()`.

---

## Summary

- JavaScript programs can be as simple as a single statement.
- `console.log()` is the standard way to print output.
- Strings can use `""`, `''`, or `` ` ` ``.
- Semicolons are recommended even though they are often optional.
- You can run code with Node.js (`node file.js`) or directly in the browser console.

---

## Next Lesson

→ [Lesson 02: Variables, Types & Basic I/O](02-variables-types.md)

*(Coming soon)*

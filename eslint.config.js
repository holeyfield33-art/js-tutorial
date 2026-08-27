// Flat config: ESLint's modern config format (the default since v9). Kept
// deliberately small — this course teaches JavaScript, not the ESLint
// plugin ecosystem, so the ruleset only catches mistakes a beginner
// working through Lessons 00-01 is actually likely to make. No extra
// packages beyond `eslint` itself are required to run it.
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      // ES2020+ syntax (optional chaining, nullish coalescing, etc.) matches
      // the "ES6+ / ES2020+ focus" the README promises the learner.
      ecmaVersion: 2020,
      // package.json sets "type": "module" for the whole repo, so every
      // .js file is parsed as an ES module, not a CommonJS script.
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
      },
    },
    rules: {
      // Catches a common beginner typo class: a declared-but-never-used
      // variable, usually a sign of a mistake rather than intent. `warn`
      // (not `error`) so it flags the issue without blocking `npm run lint`
      // on a work-in-progress exercise file.
      "no-unused-vars": "warn",
      // `var` predates block scoping; teaching modern JS means never
      // reaching for it, so this is an error rather than a style nit.
      "no-var": "error",
      // Prefer `const` unless a variable is actually reassigned — same
      // "modern practice by default" reasoning as no-var.
      "prefer-const": "warn",
      // `==` performs implicit type coercion, a classic source of subtle
      // bugs; `===` is the modern-practice default this course teaches
      // from Lesson 01 onward.
      eqeqeq: "error",
    },
  },
];

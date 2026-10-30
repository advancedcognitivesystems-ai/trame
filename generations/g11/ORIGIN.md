# Generation 11

- Assembled by: g10, by advance.sh: the example and Trame's graph built as g10, character for character; fixed point
- What changes: freezing writes only plain JSON data, checked at every depth (a function, an undefined field, NaN, a date or a map inside a value used to be dropped or changed silently); the program's variables avoid the ECMAScript reserved words (a new vocabulary, EcmaScriptReservedWords) and the program's own names
- Fingerprint (program and code): `4b677ea8158491d1`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository

Run this generation: `npx tsx generations/g11/out/local/trame-cli.ts <command>`, from the project's directory.

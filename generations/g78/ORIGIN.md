# Generation 78

- Assembled by: g77, by trame advance
- What changes: The reading of a program by TypeScript is kept apart from its check: a body changed checks the program again but reads its modules again only when one of them changed; what a body says is kept for its text in its project, beyond the process
- Fingerprint (program and code): `d2b150f6bb34c5fb`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Library: `std/`, its graph and code copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository; the language is archived as `9966fe46b969be85`
- Packages: `package.json` and its lockfile, as installed when it was frozen

Run this generation: `npx tsx generations/g78/out/local/trame-cli.ts <command>`, from the project's directory.

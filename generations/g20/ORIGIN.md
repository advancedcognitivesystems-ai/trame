# Generation 20

- Assembled by: g19, by advance.sh, differences accepted (differences.diff)
- What changes: the compiler reads every body through the syntax reader (languages.Drivers): checks and literals come from the reading, a literal that a type expects is a literal; the TypeScript writer and the HCL driver move to languages; the old reading code leaves the engine
- Fingerprint (program and code): `a96e5b4249e9af9b`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository

Run this generation: `npx tsx generations/g20/out/local/trame-cli.ts <command>`, from the project's directory.

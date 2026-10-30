# Generation 17

- Assembled by: g16, by advance.sh, differences accepted (differences.diff)
- What changes: the lock: trame.json refuses 0, 1, -1 and "" in bodies unless something declares them (an error, the body still runs, the assembly is refused); the Literals view says what is refused
- Fingerprint (program and code): `0548196056128b46`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository

Run this generation: `npx tsx generations/g17/out/local/trame-cli.ts <command>`, from the project's directory.

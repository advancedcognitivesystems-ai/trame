# Generation 88

- Assembled by: g87, by trame advance
- What changes: E1b: the compiler is led to the language's files by its names (#trame/* in TypeScript's paths, to the files where they are, never through a link); trame init starts a project: its configuration (the generation that runs, the libraries the language's home uses), its first module with its goal, the guide for agents and the skill, then its manifest
- Fingerprint (program and code): `abbc9d8c61c5829e`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Library: `std/`, its graph and code copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository; the language is archived as `c850998afbba6ca9`
- Packages: `package.json` and its lockfile, as installed when it was frozen

Run this generation: `npx tsx generations/g88/out/local/trame-cli.ts <command>`, from the project's directory.

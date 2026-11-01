# Generation 94

- Assembled by: g93, by trame advance
- What changes: E1h: trame init writes a project's references as package nodes of its graph; trame registry publishes the frozen generations (each with its language) and the releases of the home's libraries to the registry of this machine, which a clone elsewhere fills again with it
- Fingerprint (program and code): `619450edc36af16c`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Library: `std/releases/0.13.0/`, its graph and code copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository; the language is archived as `10418831c37c9ead`
- Packages: `package.json` and its lockfile, as installed when it was frozen

Run this generation: `npx tsx generations/g94/out/local/trame-cli.ts <command>`, from the project's directory.

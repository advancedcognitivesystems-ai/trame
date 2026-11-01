# Generation 93

- Assembled by: g92, by trame advance
- What changes: E1g: the names of a project's libraries are led to their real paths (through a link, a module would be read twice); a version published to the registry holds its manifest (ES modules); the launcher sees a published engine's missing packages as ES modules resolve them
- Fingerprint (program and code): `524fe0849917ff93`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Library: `std/releases/0.13.0/`, its graph and code copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository; the language is archived as `10418831c37c9ead`
- Packages: `package.json` and its lockfile, as installed when it was frozen

Run this generation: `npx tsx generations/g93/out/local/trame-cli.ts <command>`, from the project's directory.

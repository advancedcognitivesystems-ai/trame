# Generation 56

- Assembled by: g55, by trame advance
- What changes: Libraries by name and at a version: code names a library #std/…, trame manifest writes the import map (through a link when the library is outside the package), the compiler is told where each name leads; trame release freezes a library's version with its documents; a project imports a library at a version
- Fingerprint (program and code): `50d7db4258ef07d0`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Library: `std/`, its graph and code copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository; the language is archived as `c159d87e5a49cb9c`
- Packages: `package.json` and its lockfile, as installed when it was frozen

Run this generation: `npx tsx generations/g56/out/local/trame-cli.ts <command>`, from the project's directory.

# Generation 100

- Assembled by: g99, by trame advance
- What changes: C1: trame upgrade moves each package of Trame a project references to the newest version its origin holds, and a reference behind is warned; the manifest keeps the lockfile with what it names (port PackageInstalls, npm first)
- Fingerprint (program and code): `0230ee2457e71187`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Library: `std/releases/0.15.0/`, its graph and code copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository; the language is archived as `edf977f48addb616`
- Packages: `package.json` and its lockfile, as installed when it was frozen

Run this generation: `npx tsx generations/g100/out/local/trame-cli.ts <command>`, from the project's directory.

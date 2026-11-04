# Generation 101

- Assembled by: g100, by trame advance
- What changes: A library ships its versions through its own graph: trame release ships the version first and freezes nothing while it does not hold (C1)
- Fingerprint (program and code): `61ccef44eb3a4fe9`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Library: `std/releases/0.15.0/`, its graph and code copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository; the language is archived as `9e3693eedd0bd609`
- Packages: `package.json` and its lockfile, as installed when it was frozen

Run this generation: `npx tsx generations/g101/out/local/trame-cli.ts <command>`, from the project's directory.

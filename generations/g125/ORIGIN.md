# Generation 125

- Assembled by: g124, by trame advance
- What changes: the engine's API names a project by its package and a path in it, refuses a directory that is no project, and keeps nothing beside a project it compiles for a scenario
- Fingerprint (program and code): `302c35a5994d05a6`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Library: `ci/releases/0.8.0/`, its graph and code copied as assembled
- Library: `libs/machine/releases/0.1.0/`, its graph and code copied as assembled
- Library: `std/releases/0.28.0/`, its graph and code copied as assembled
- Library: `libs/team/releases/0.1.0/`, its graph and code copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository; the language is archived as `83cab083efe384d2`
- Packages: `package.json` and its lockfile, as installed when it was frozen

Run this generation: `npx tsx generations/g125/out/local/trame-cli.ts <command>`, from the project's directory.

# Generation 114

- Assembled by: g113, by trame advance
- What changes: A project's own name leads to its own sources (in the engine and the manifest): a library it imports may name it, as team names the ci that writes its workflow, so ci imports team instead of declaring the same actors again
- Fingerprint (program and code): `f9147dfc45d61df4`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Library: `ci/releases/0.7.0/`, its graph and code copied as assembled
- Library: `std/releases/0.21.0/`, its graph and code copied as assembled
- Library: `libs/team/releases/0.1.0/`, its graph and code copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository; the language is archived as `b0ead947077d2a4b`
- Packages: `package.json` and its lockfile, as installed when it was frozen

Run this generation: `npx tsx generations/g114/out/local/trame-cli.ts <command>`, from the project's directory.

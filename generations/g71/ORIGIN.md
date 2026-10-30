# Generation 71

- Assembled by: g70, by trame advance
- What changes: Faster builds: the graph indexes its edges by node, so a query steps through a node's own edges (the view why, which looked for paths through every edge, took a third of a build); the reading of a program by the compiler of TypeScript and the parsing of a file by tree-sitter are kept while the process runs, given again while what they read is as it was. A build of Trame goes from about 460 to about 150 seconds
- Fingerprint (program and code): `f6194e7caed45964`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Library: `std/`, its graph and code copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository; the language is archived as `f87346639e366b6d`
- Packages: `package.json` and its lockfile, as installed when it was frozen

Run this generation: `npx tsx generations/g71/out/local/trame-cli.ts <command>`, from the project's directory.

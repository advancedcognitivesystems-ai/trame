# Generation 91

- Assembled by: g90, by trame advance
- What changes: E1e: the engine leads the language's names to its own language (a peer dependency); a package node says how it joins the graph, where it comes from (by its path, from the registry of this machine) and its path; trame manifest places the packages of Trame the graph references and derives trame.json from them; npm installs the packages of every library imported
- Fingerprint (program and code): `f501ff1b89e2784c`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Library: `std/`, its graph and code copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository; the language is archived as `3b7e0d08b54deb04`
- Packages: `package.json` and its lockfile, as installed when it was frozen

Run this generation: `npx tsx generations/g91/out/local/trame-cli.ts <command>`, from the project's directory.

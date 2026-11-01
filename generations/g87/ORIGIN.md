# Generation 87

- Assembled by: g86, by trame advance
- What changes: E1a: the language by name: a project imports #trame/kernel and #trame/kinds/* through its import map, which leads to the generation it pins (a link under .trame/ that an advance moves with the pin); its kinds and views are the language's, from the engine that reads it; where a package comes from is std's port PackageSources, realized by local paths
- Fingerprint (program and code): `1f14126f68927aac`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Library: `std/`, its graph and code copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository; the language is archived as `c850998afbba6ca9`
- Packages: `package.json` and its lockfile, as installed when it was frozen

Run this generation: `npx tsx generations/g87/out/local/trame-cli.ts <command>`, from the project's directory.

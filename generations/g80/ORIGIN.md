# Generation 80

- Assembled by: g79, by trame advance
- What changes: Units are quantities of the graph: the engine reads in the types what each declared value measures (Quantity<typeof Time>), refuses code that adds, subtracts or compares two quantities, or multiplies them when neither is a ratio, and writes every value of a quantity in its units with the words of its catalog. trame publish --migrate publishes again the declarations the language changed the form of, with why
- Fingerprint (program and code): `3ba22adcd7f03bfb`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Library: `std/`, its graph and code copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository; the language is archived as `0d666b812cb782bb`
- Packages: `package.json` and its lockfile, as installed when it was frozen

Run this generation: `npx tsx generations/g80/out/local/trame-cli.ts <command>`, from the project's directory.

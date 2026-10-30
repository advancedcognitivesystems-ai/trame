# Generation 22

- Assembled by: g21, by advance.sh
- What changes: Terraform is a language node (tree-sitter's HCL grammar, Terraform variant): its queries replace the two regular expressions, its variables are checked against the provisioning dependencies; the module terraform specifies what Trame writes (5 syntax elements, read back as Terraform) and the Terraform writer; the old driver nodes are gone
- Fingerprint (program and code): `cd3e2ae38cfb2714`
- Program: `out/local/trame-cli.ts`
- Graph and code of the engine: `src/`, copied as assembled
- Shared language: `trame/` and `kinds/` are links to those of the repository

Run this generation: `npx tsx generations/g22/out/local/trame-cli.ts <command>`, from the project's directory.

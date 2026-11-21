# Team

A Trame library that declares who works on Trame's repository (C4): the actors every project of the repository
imports, so that an owner, a role's people and a piece of evidence name someone the graph declares.

- `src/people.ts` — the actors (the language's kind `actor`): ghalaax, a person (`ghalaax` on GitHub); Claude, an agent
  who writes Trame with him and gives the evidence of what it runs in its own name; the runner of GitHub Actions, a
  machine that ships what a workflow runs for whoever started it; and `trame`, the team of ghalaax and Claude, which
  owns the nodes of the engine, the language and the libraries.
- `src/product.ts` — its goal: who acts is declared once.
- `src/sdlc.ts` — how a version ships (`NextVersion`), and the workflow that checks each pull request on GitHub (its
  job, `team`, a check the repository requires).
- `src/packages.ts` — the language at the generation it pins, and the library `ci` that writes its workflow.

A project imports it (`"team": { "path": "../libs/team", "version": "0.1.0" }`, its package node in `src/packages.ts`)
and loads its people where it declares what they own: `import "#team/people"`. A project may declare actors of its own
besides (the example's karim and lea); the same actor declared twice must say the same thing. Each actor's `handle`
is the text an owner gives; one nobody declares is an error of the project (g113).

The library writes its workflow with `ci`, and `ci` imports it: each at a frozen version of the other. Inside `ci`, the
name `#ci` that this library's workflow imports leads to ci's own sources (g114: a project's own name leads to itself).

Build it with `../../trame.sh build`; release a version with `../../trame.sh release <version> "what" --by <name>`.
